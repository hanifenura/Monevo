import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

// Kullanıcının listeye erişimi var mı kontrol et (helper function)
const checkListAccess = async (listId, userId, requiredRole = null) => {
  const list = await prisma.shoppingList.findFirst({
    where: {
      list_id: parseInt(listId),
      OR: [
        { owner_id: parseInt(userId) },
        {
          accesses: {
            some: {
              user_id: parseInt(userId),
              ...(requiredRole && requiredRole !== 'viewer' ? { role: { in: ['owner', 'editor'] } } : {}),
            },
          },
        },
      ],
    },
    include: {
      accesses: {
        where: {
          user_id: parseInt(userId),
        },
        select: {
          role: true,
        },
      },
    },
  });

  if (!list) return null;

  const isOriginalOwner = list.owner_id === parseInt(userId);
  const userRole = isOriginalOwner ? 'owner' : (list.accesses[0]?.role || null);

  // Role kontrolü
  if (requiredRole) {
    // Owner yetkisi gerekiyorsa: ilk sahip veya owner rolündeki kullanıcı
    if (requiredRole === 'owner' && !isOriginalOwner && userRole !== 'owner') {
      return null;
    }
    // Editor yetkisi gerekiyorsa: owner veya editor rolündeki kullanıcı
    if (requiredRole === 'editor' && !isOriginalOwner && userRole !== 'editor' && userRole !== 'owner') {
      return null;
    }
  }

  return { list, isOwner: isOriginalOwner, userRole };
};

// Kullanıcının tüm listelerini getir (sahip olduğu + katıldığı)
export const getUserLists = async (req, res) => {
  try {
    const userId = req.user?.user_id || req.query.user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Kullanıcının sahip olduğu listeleri getir
    const ownedLists = await prisma.shoppingList.findMany({
      where: {
        owner_id: parseInt(userId),
      },
      include: {
        items: true,
        owner: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            items: true,
          },
        },
      },
    });

    // Kullanıcının katıldığı listeleri getir
    const sharedLists = await prisma.userListAccess.findMany({
      where: {
        user_id: parseInt(userId),
      },
      include: {
        list: {
          include: {
            items: true,
            owner: {
              select: {
                name: true,
              },
            },
            _count: {
              select: {
                items: true,
              },
            },
          },
        },
      },
    });

    // İki listeyi birleştir
    const allLists = [
      ...ownedLists.map(list => ({
        ...list,
        is_owner: true,
        user_role: 'owner',
      })),
      ...sharedLists.map(access => ({
        ...access.list,
        is_owner: false,
        user_role: access.role,
      })),
    ];

    // Tarihe göre sırala
    allLists.sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    res.status(200).json({
      success: true,
      data: allLists,
      count: allLists.length,
    });
  } catch (error) {
    console.error("Listeleri getirme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Listeler getirilirken bir hata oluştu",
      message: error.message,
    });
  }
};

// Belirli bir listeyi getir
export const getListById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.user_id || req.query.user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Liste var mı ve kullanıcı erişebiliyor mu kontrol et (sahip veya üye)
    const list = await prisma.shoppingList.findFirst({
      where: {
        list_id: parseInt(id),
        OR: [
          { owner_id: parseInt(userId) },
          {
            accesses: {
              some: {
                user_id: parseInt(userId),
              },
            },
          },
        ],
      },
      include: {
        items: {
          include: {
            category: true,
            checkedBy: {
              select: {
                user_id: true,
                name: true,
              },
            },
          },
        },
        owner: {
          select: {
            user_id: true,
            name: true,
          },
        },
        accesses: {
          where: {
            user_id: parseInt(userId),
          },
          select: {
            role: true,
          },
        },
      },
    });

    if (!list) {
      return res.status(404).json({
        success: false,
        error: "Liste bulunamadı veya erişim yetkiniz yok",
      });
    }

    // Kullanıcının rolünü belirle
    const isOwner = list.owner_id === parseInt(userId);
    const userRole = isOwner ? 'owner' : (list.accesses[0]?.role || 'viewer');

    res.status(200).json({
      success: true,
      data: {
        ...list,
        is_owner: isOwner,
        user_role: userRole,
      },
    });
  } catch (error) {
    console.error("Liste getirme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Liste getirilirken bir hata oluştu",
      message: error.message,
    });
  }
};

// Yeni liste oluştur
export const createList = async (req, res) => {
  try {
    const { name, user_id } = req.body;
    const userId = req.user?.user_id || user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    const newList = await prisma.shoppingList.create({
      data: {
        owner_id: parseInt(userId),
        name: name || "Yeni Liste",
      },
    });

    res.status(201).json({
      success: true,
      message: "Liste başarıyla oluşturuldu",
      data: newList,
    });
  } catch (error) {
    console.error("Liste oluşturma hatası:", error);
    res.status(500).json({
      success: false,
      error: "Liste oluşturulurken bir hata oluştu",
      message: error.message,
    });
  }
};

// Liste güncelle
export const updateList = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const userId = req.user?.user_id || req.query.user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Önce kullanıcının owner yetkisi olduğunu kontrol et
    const checkResult = await checkListAccess(id, userId, 'owner');
    
    if (!checkResult) {
      return res.status(404).json({
        success: false,
        error: "Liste bulunamadı veya yetkiniz yok",
      });
    }

    const updatedList = await prisma.shoppingList.update({
      where: {
        list_id: parseInt(id),
      },
      data: {
        name,
        updated_at: new Date(),
      },
    });

    res.status(200).json({
      success: true,
      message: "Liste başarıyla güncellendi",
      data: updatedList,
    });
  } catch (error) {
    console.error("Liste güncelleme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Liste güncellenirken bir hata oluştu",
      message: error.message,
    });
  }
};

// Liste sil
export const deleteList = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.user_id || req.query.user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Önce kullanıcının owner yetkisi olduğunu kontrol et
    const checkResult = await checkListAccess(id, userId, 'owner');
    
    if (!checkResult) {
      return res.status(404).json({
        success: false,
        error: "Liste bulunamadı veya yetkiniz yok",
      });
    }

    await prisma.shoppingList.delete({
      where: {
        list_id: parseInt(id),
      },
    });

    res.status(200).json({
      success: true,
      message: "Liste başarıyla silindi",
    });
  } catch (error) {
    console.error("Liste silme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Liste silinirken bir hata oluştu",
      message: error.message,
    });
  }
};

// Liste öğelerini getir
export const getListItems = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.user_id || req.query.user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Kullanıcının listeye erişimi var mı kontrol et
    const list = await prisma.shoppingList.findFirst({
      where: {
        list_id: parseInt(id),
        OR: [
          { owner_id: parseInt(userId) },
          {
            accesses: {
              some: {
                user_id: parseInt(userId),
              },
            },
          },
        ],
      },
    });

    if (!list) {
      return res.status(404).json({
        success: false,
        error: "Liste bulunamadı veya yetkiniz yok",
      });
    }

    const items = await prisma.listItem.findMany({
      where: {
        list_id: parseInt(id),
      },
      include: {
        category: true,
        checkedBy: {
          select: {
            user_id: true,
            name: true,
          },
        },
      },
      orderBy: [
        { is_checked: "asc" },
        { created_at: "desc" },
      ],
    });

    res.status(200).json({
      success: true,
      data: items,
      count: items.length,
    });
  } catch (error) {
    console.error("Liste öğeleri getirme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Liste öğeleri getirilirken bir hata oluştu",
      message: error.message,
    });
  }
};

// Liste öğesi ekle
export const addListItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity, price, category_id, user_id } = req.body;
    const userId = req.user?.user_id || user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Kullanıcının listeye erişimi var mı kontrol et (editor veya owner olmalı)
    const access = await checkListAccess(id, userId, 'editor');

    if (!access) {
      return res.status(404).json({
        success: false,
        error: "Liste bulunamadı veya öğe ekleme yetkiniz yok",
      });
    }

    const newItem = await prisma.listItem.create({
      data: {
        list_id: parseInt(id),
        name,
        quantity: quantity || 1,
        price: price ? parseFloat(price) : null,
        category_id: category_id ? parseInt(category_id) : null,
      },
      include: {
        category: true,
      },
    });

    res.status(201).json({
      success: true,
      message: "Öğe başarıyla eklendi",
      data: newItem,
    });
  } catch (error) {
    console.error("Öğe ekleme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Öğe eklenirken bir hata oluştu",
      message: error.message,
    });
  }
};

// Liste öğesi güncelle
export const updateListItem = async (req, res) => {
  try {
    const { id, itemId } = req.params;
    const { name, quantity, price, is_checked, user_id } = req.body;
    const userId = req.user?.user_id || user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Kullanıcının listeye erişimi var mı kontrol et (editor veya owner olmalı)
    const access = await checkListAccess(id, userId, 'editor');

    if (!access) {
      return res.status(404).json({
        success: false,
        error: "Liste bulunamadı veya güncelleme yetkiniz yok",
      });
    }

    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (quantity !== undefined) updateData.quantity = parseInt(quantity);
    if (price !== undefined) updateData.price = price ? parseFloat(price) : null;
    if (is_checked !== undefined) {
      updateData.is_checked = is_checked;
      if (is_checked) {
        updateData.checkedById = parseInt(userId);
        updateData.checkedAt = new Date();
      } else {
        updateData.checkedById = null;
        updateData.checkedAt = null;
      }
    }

    const updatedItem = await prisma.listItem.update({
      where: {
        item_id: parseInt(itemId),
      },
      data: updateData,
      include: {
        category: true,
        checkedBy: {
          select: {
            user_id: true,
            name: true,
          },
        },
      },
    });

    res.status(200).json({
      success: true,
      message: "Öğe başarıyla güncellendi",
      data: updatedItem,
    });
  } catch (error) {
    console.error("Öğe güncelleme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Öğe güncellenirken bir hata oluştu",
      message: error.message,
    });
  }
};

// Liste öğesi sil
export const deleteListItem = async (req, res) => {
  try {
    const { id, itemId } = req.params;
    const userId = req.user?.user_id || req.query.user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Kullanıcının listeye erişimi var mı kontrol et (editor veya owner olmalı)
    const access = await checkListAccess(id, userId, 'editor');

    if (!access) {
      return res.status(404).json({
        success: false,
        error: "Liste bulunamadı veya silme yetkiniz yok",
      });
    }

    await prisma.listItem.delete({
      where: {
        item_id: parseInt(itemId),
      },
    });

    res.status(200).json({
      success: true,
      message: "Öğe başarıyla silindi",
    });
  } catch (error) {
    console.error("Öğe silme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Öğe silinirken bir hata oluştu",
      message: error.message,
    });
  }
};

// Liste öğesini işaretle/işareti kaldır
export const toggleItemCheck = async (req, res) => {
  try {
    const { id, itemId } = req.params;
    const { user_id } = req.body;
    const userId = req.user?.user_id || user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Kullanıcının listeye erişimi var mı kontrol et (editor veya owner olmalı)
    const access = await checkListAccess(id, userId, 'editor');

    if (!access) {
      return res.status(404).json({
        success: false,
        error: "Liste bulunamadı veya işaretleme yetkiniz yok",
      });
    }

    // Öğenin mevcut durumunu al
    const item = await prisma.listItem.findUnique({
      where: {
        item_id: parseInt(itemId),
      },
    });

    if (!item) {
      return res.status(404).json({
        success: false,
        error: "Öğe bulunamadı",
      });
    }

    // İşareti tersine çevir
    const updatedItem = await prisma.listItem.update({
      where: {
        item_id: parseInt(itemId),
      },
      data: {
        is_checked: !item.is_checked,
        checkedById: !item.is_checked ? parseInt(userId) : null,
        checkedAt: !item.is_checked ? new Date() : null,
      },
      include: {
        category: true,
        checkedBy: {
          select: {
            user_id: true,
            name: true,
          },
        },
      },
    });

    res.status(200).json({
      success: true,
      message: updatedItem.is_checked ? "Öğe işaretlendi" : "İşaret kaldırıldı",
      data: updatedItem,
    });
  } catch (error) {
    console.error("Öğe işaretleme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Öğe işaretlenirken bir hata oluştu",
      message: error.message,
    });
  }
};

