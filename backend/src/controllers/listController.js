import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

// Kullanıcının tüm listelerini getir
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
    const lists = await prisma.shoppingList.findMany({
      where: {
        owner_id: parseInt(userId),
      },
      include: {
        items: true,
        _count: {
          select: {
            items: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });

    res.status(200).json({
      success: true,
      data: lists,
      count: lists.length,
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

    const list = await prisma.shoppingList.findFirst({
      where: {
        list_id: parseInt(id),
        owner_id: parseInt(userId),
      },
      include: {
        items: {
          include: {
            category: true,
          },
        },
      },
    });

    if (!list) {
      return res.status(404).json({
        success: false,
        error: "Liste bulunamadı",
      });
    }

    res.status(200).json({
      success: true,
      data: list,
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

    // Önce listenin kullanıcıya ait olduğunu kontrol et
    const list = await prisma.shoppingList.findFirst({
      where: {
        list_id: parseInt(id),
        owner_id: parseInt(userId),
      },
    });

    if (!list) {
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

    // Önce listenin kullanıcıya ait olduğunu kontrol et
    const list = await prisma.shoppingList.findFirst({
      where: {
        list_id: parseInt(id),
        owner_id: parseInt(userId),
      },
    });

    if (!list) {
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

