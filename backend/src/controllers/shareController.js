import { PrismaClient } from "../../generated/prisma/index.js";
import crypto from 'crypto';

const prisma = new PrismaClient();

// Rastgele 6 haneli davet kodu oluştur
const generateInviteCode = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Karıştırılabilecek karakterler hariç
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

// Davet linki/kodu oluştur
export const createInvitation = async (req, res) => {
  try {
    const { list_id, role, expires_in_days, max_uses } = req.body;
    const userId = req.user?.user_id || req.body.user_id;

    if (!userId || !list_id) {
      return res.status(400).json({
        success: false,
        error: "Kullanıcı ve liste bilgisi gerekli",
      });
    }

    // Listenin kullanıcıya ait olup olmadığını kontrol et
    const list = await prisma.shoppingList.findFirst({
      where: {
        list_id: parseInt(list_id),
        owner_id: parseInt(userId),
      },
    });

    if (!list) {
      return res.status(404).json({
        success: false,
        error: "Liste bulunamadı veya yetkiniz yok",
      });
    }

    // Benzersiz davet kodu oluştur
    let inviteCode;
    let isUnique = false;
    
    while (!isUnique) {
      inviteCode = generateInviteCode();
      const existing = await prisma.listInvitation.findUnique({
        where: { invite_code: inviteCode },
      });
      if (!existing) isUnique = true;
    }

    // Davet oluştur
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + (expires_in_days || 7)); // Varsayılan 7 gün

    const invitation = await prisma.listInvitation.create({
      data: {
        list_id: parseInt(list_id),
        invited_by: parseInt(userId),
        invite_code: inviteCode,
        role: role || 'viewer',
        expires_at: expiresAt,
        max_uses: max_uses || 1,
      },
      include: {
        list: {
          select: {
            name: true,
          },
        },
        inviter: {
          select: {
            name: true,
          },
        },
      },
    });

    res.status(201).json({
      success: true,
      message: "Davet oluşturuldu",
      data: {
        invitation_id: invitation.invitation_id,
        invite_code: invitation.invite_code,
        share_link: `monevo://list/join/${invitation.invite_code}`,
        qr_data: `monevo://list/join/${invitation.invite_code}`,
        expires_at: invitation.expires_at,
        role: invitation.role,
        max_uses: invitation.max_uses,
        list_name: invitation.list.name,
      },
    });
  } catch (error) {
    console.error("Davet oluşturma hatası:", error);
    res.status(500).json({
      success: false,
      error: "Davet oluşturulurken bir hata oluştu",
      message: error.message,
    });
  }
};

// Davet kodunu kullanarak listeye katıl
export const joinListWithCode = async (req, res) => {
  try {
    const { invite_code } = req.body;
    const userId = req.user?.user_id || req.body.user_id;

    if (!userId || !invite_code) {
      return res.status(400).json({
        success: false,
        error: "Kullanıcı ve davet kodu gerekli",
      });
    }

    // Daveti bul
    const invitation = await prisma.listInvitation.findUnique({
      where: { invite_code: invite_code.toUpperCase() },
      include: {
        list: {
          include: {
            owner: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    if (!invitation) {
      return res.status(404).json({
        success: false,
        error: "Geçersiz davet kodu",
      });
    }

    // Davet süresi dolmuş mu?
    if (new Date() > invitation.expires_at) {
      return res.status(400).json({
        success: false,
        error: "Davet süresi dolmuş",
      });
    }

    // Maksimum kullanım sayısına ulaşıldı mı?
    if (invitation.uses_count >= invitation.max_uses) {
      return res.status(400).json({
        success: false,
        error: "Davet kullanım limitine ulaşıldı",
      });
    }

    // Kullanıcı zaten listede mi?
    const existingAccess = await prisma.userListAccess.findUnique({
      where: {
        user_id_list_id: {
          user_id: parseInt(userId),
          list_id: invitation.list_id,
        },
      },
    });

    if (existingAccess) {
      return res.status(400).json({
        success: false,
        error: "Zaten bu listeye erişiminiz var",
      });
    }

    // Liste sahibi kendine davet kullanamaz
    if (invitation.list.owner_id === parseInt(userId)) {
      return res.status(400).json({
        success: false,
        error: "Kendi listenize davet kullanamassınız",
      });
    }

    // Kullanıcıyı listeye ekle
    const access = await prisma.userListAccess.create({
      data: {
        user_id: parseInt(userId),
        list_id: invitation.list_id,
        role: invitation.role,
        invited_by: invitation.invited_by,
      },
    });

    // Daveti güncelle
    await prisma.listInvitation.update({
      where: { invitation_id: invitation.invitation_id },
      data: {
        uses_count: invitation.uses_count + 1,
        is_used: true,
        used_by: parseInt(userId),
        used_at: new Date(),
      },
    });

    // Liste is_shared durumunu güncelle
    await prisma.shoppingList.update({
      where: { list_id: invitation.list_id },
      data: { is_shared: true },
    });

    res.status(200).json({
      success: true,
      message: "Listeye başarıyla katıldınız",
      data: {
        list_id: invitation.list_id,
        list_name: invitation.list.name,
        owner_name: invitation.list.owner.name,
        role: access.role,
      },
    });
  } catch (error) {
    console.error("Listeye katılma hatası:", error);
    res.status(500).json({
      success: false,
      error: "Listeye katılırken bir hata oluştu",
      message: error.message,
    });
  }
};

// Listenin aktif davetlerini getir
export const getListInvitations = async (req, res) => {
  try {
    const { list_id } = req.params;
    const userId = req.user?.user_id || req.query.user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Liste sahibi mi kontrol et
    const list = await prisma.shoppingList.findFirst({
      where: {
        list_id: parseInt(list_id),
        owner_id: parseInt(userId),
      },
    });

    if (!list) {
      return res.status(404).json({
        success: false,
        error: "Liste bulunamadı veya yetkiniz yok",
      });
    }

    // Aktif davetleri getir
    const invitations = await prisma.listInvitation.findMany({
      where: {
        list_id: parseInt(list_id),
        expires_at: {
          gt: new Date(),
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    res.status(200).json({
      success: true,
      data: invitations,
      count: invitations.length,
    });
  } catch (error) {
    console.error("Davetleri getirme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Davetler getirilirken bir hata oluştu",
      message: error.message,
    });
  }
};

// Daveti iptal et
export const deleteInvitation = async (req, res) => {
  try {
    const { invitation_id } = req.params;
    const userId = req.user?.user_id || req.query.user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Davet sahibi mi kontrol et
    const invitation = await prisma.listInvitation.findFirst({
      where: {
        invitation_id: parseInt(invitation_id),
        invited_by: parseInt(userId),
      },
    });

    if (!invitation) {
      return res.status(404).json({
        success: false,
        error: "Davet bulunamadı veya yetkiniz yok",
      });
    }

    await prisma.listInvitation.delete({
      where: {
        invitation_id: parseInt(invitation_id),
      },
    });

    res.status(200).json({
      success: true,
      message: "Davet başarıyla iptal edildi",
    });
  } catch (error) {
    console.error("Davet silme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Davet silinirken bir hata oluştu",
      message: error.message,
    });
  }
};

// Listeye erişimi olan kullanıcıları getir
export const getListMembers = async (req, res) => {
  try {
    const { list_id } = req.params;
    const userId = req.user?.user_id || req.query.user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Kullanıcının listeye erişimi var mı?
    const list = await prisma.shoppingList.findFirst({
      where: {
        list_id: parseInt(list_id),
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
        owner: {
          select: {
            user_id: true,
            name: true,
            email: true,
          },
        },
        accesses: {
          include: {
            user: {
              select: {
                user_id: true,
                name: true,
                email: true,
              },
            },
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

    const members = [
      {
        ...list.owner,
        role: 'owner',
        is_owner: true,
      },
      ...list.accesses.map(access => ({
        ...access.user,
        role: access.role,
        is_owner: false,
        joined_at: access.joined_at,
      })),
    ];

    res.status(200).json({
      success: true,
      data: members,
      count: members.length,
    });
  } catch (error) {
    console.error("Liste üyelerini getirme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Liste üyeleri getirilirken bir hata oluştu",
      message: error.message,
    });
  }
};

// Kullanıcının listeye erişimini kaldır
export const removeMemberAccess = async (req, res) => {
  try {
    const { list_id, user_id } = req.params;
    const requestUserId = req.user?.user_id || req.query.user_id;

    if (!requestUserId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // İsteği yapan kullanıcının owner rolü var mı kontrol et
    const requestUserAccess = await prisma.userListAccess.findUnique({
      where: {
        user_id_list_id: {
          user_id: parseInt(requestUserId),
          list_id: parseInt(list_id),
        },
      },
    });

    // İlk sahip (is_owner) veya owner rolündeki kullanıcı işlem yapabilir
    const list = await prisma.shoppingList.findFirst({
      where: {
        list_id: parseInt(list_id),
      },
    });

    if (!list) {
      return res.status(404).json({
        success: false,
        error: "Liste bulunamadı",
      });
    }

    const isOriginalOwner = list.owner_id === parseInt(requestUserId);
    const isOwnerRole = requestUserAccess?.role === 'owner';

    if (!isOriginalOwner && !isOwnerRole) {
      return res.status(403).json({
        success: false,
        error: "Bu işlem için sahip yetkisi gerekli",
      });
    }

    // Erişimi kaldır
    await prisma.userListAccess.delete({
      where: {
        user_id_list_id: {
          user_id: parseInt(user_id),
          list_id: parseInt(list_id),
        },
      },
    });

    res.status(200).json({
      success: true,
      message: "Kullanıcının erişimi kaldırıldı",
    });
  } catch (error) {
    console.error("Erişim kaldırma hatası:", error);
    res.status(500).json({
      success: false,
      error: "Erişim kaldırılırken bir hata oluştu",
      message: error.message,
    });
  }
};

// Kullanıcı kendi kendini listeden çıkarır
export const leaveList = async (req, res) => {
  try {
    const { list_id } = req.params;
    const userId = req.user?.user_id || req.body.user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Liste sahibi kendini çıkaramaz
    const list = await prisma.shoppingList.findUnique({
      where: {
        list_id: parseInt(list_id),
      },
    });

    if (!list) {
      return res.status(404).json({
        success: false,
        error: "Liste bulunamadı",
      });
    }

    if (list.owner_id === parseInt(userId)) {
      return res.status(400).json({
        success: false,
        error: "Liste sahibi listeden ayrılamaz. Listeyi silmelisiniz.",
      });
    }

    // Kullanıcının erişimini kaldır
    const access = await prisma.userListAccess.findUnique({
      where: {
        user_id_list_id: {
          user_id: parseInt(userId),
          list_id: parseInt(list_id),
        },
      },
    });

    if (!access) {
      return res.status(404).json({
        success: false,
        error: "Bu listeye erişiminiz yok",
      });
    }

    await prisma.userListAccess.delete({
      where: {
        user_id_list_id: {
          user_id: parseInt(userId),
          list_id: parseInt(list_id),
        },
      },
    });

    res.status(200).json({
      success: true,
      message: "Listeden başarıyla ayrıldınız",
    });
  } catch (error) {
    console.error("Listeden ayrılma hatası:", error);
    res.status(500).json({
      success: false,
      error: "Listeden ayrılırken bir hata oluştu",
      message: error.message,
    });
  }
};

// Üye rolünü güncelle
export const updateMemberRole = async (req, res) => {
  try {
    const { list_id, user_id } = req.params;
    const { role } = req.body;
    const requestUserId = req.user?.user_id || req.body.owner_id;

    if (!requestUserId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Role geçerli mi?
    if (!['viewer', 'editor', 'owner'].includes(role)) {
      return res.status(400).json({
        success: false,
        error: "Geçersiz rol. 'viewer', 'editor' veya 'owner' olabilir.",
      });
    }

    // İsteği yapan kullanıcının owner rolü var mı kontrol et
    const requestUserAccess = await prisma.userListAccess.findUnique({
      where: {
        user_id_list_id: {
          user_id: parseInt(requestUserId),
          list_id: parseInt(list_id),
        },
      },
    });

    // İlk sahip (is_owner) veya owner rolündeki kullanıcı işlem yapabilir
    const list = await prisma.shoppingList.findFirst({
      where: {
        list_id: parseInt(list_id),
      },
    });

    if (!list) {
      return res.status(404).json({
        success: false,
        error: "Liste bulunamadı",
      });
    }

    const isOriginalOwner = list.owner_id === parseInt(requestUserId);
    const isOwnerRole = requestUserAccess?.role === 'owner';

    if (!isOriginalOwner && !isOwnerRole) {
      return res.status(403).json({
        success: false,
        error: "Bu işlem için sahip yetkisi gerekli",
      });
    }

    // Eğer owner yapılıyorsa
    if (role === 'owner') {
      // Kullanıcıyı owner rolüyle güncelle (veya oluştur)
      await prisma.userListAccess.upsert({
        where: {
          user_id_list_id: {
            user_id: parseInt(user_id),
            list_id: parseInt(list_id),
          },
        },
        update: {
          role: 'owner',
        },
        create: {
          user_id: parseInt(user_id),
          list_id: parseInt(list_id),
          role: 'owner',
        },
      });

      return res.status(200).json({
        success: true,
        message: "Kullanıcı sahip yapıldı",
        data: {
          user_id: parseInt(user_id),
          role: 'owner',
        },
      });
    }

    // Normal rol güncellemesi (viewer veya editor)
    const updatedAccess = await prisma.userListAccess.update({
      where: {
        user_id_list_id: {
          user_id: parseInt(user_id),
          list_id: parseInt(list_id),
        },
      },
      data: {
        role: role,
      },
      include: {
        user: {
          select: {
            user_id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    res.status(200).json({
      success: true,
      message: "Üye rolü güncellendi",
      data: {
        ...updatedAccess.user,
        role: updatedAccess.role,
        joined_at: updatedAccess.joined_at,
      },
    });
  } catch (error) {
    console.error("Role güncelleme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Role güncellenirken bir hata oluştu",
      message: error.message,
    });
  }
};
