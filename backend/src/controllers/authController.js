import { PrismaClient } from "../../generated/prisma/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// Kullanıcı Kayıt
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validasyon
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Lütfen tüm alanları doldurun"
      });
    }

    // Email formatı kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Geçerli bir email adresi girin"
      });
    }

    // Şifre uzunluğu kontrolü
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Şifre en az 6 karakter olmalıdır"
      });
    }

    // Kullanıcının zaten kayıtlı olup olmadığını kontrol et
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Bu email adresi zaten kayıtlı"
      });
    }

    // Şifreyi hash'le
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    // Kullanıcıyı veritabanına kaydet
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password_hash
      }
    });

    // JWT token oluştur
    const token = jwt.sign(
      { 
        user_id: user.user_id, 
        email: user.email 
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.status(201).json({
      success: true,
      message: "Kayıt başarılı",
      data: {
        user: {
          user_id: user.user_id,
          name: user.name,
          email: user.email,
          created_at: user.created_at
        },
        token
      }
    });

  } catch (error) {
    console.error("Kayıt hatası:", error);
    res.status(500).json({
      success: false,
      message: "Kayıt sırasında bir hata oluştu",
      error: error.message
    });
  }
};

// Kullanıcı Giriş
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validasyon
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email ve şifre gereklidir"
      });
    }

    // Kullanıcıyı bul
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Email veya şifre hatalı"
      });
    }

    // Şifreyi kontrol et
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Email veya şifre hatalı"
      });
    }

    // JWT token oluştur
    const token = jwt.sign(
      { 
        user_id: user.user_id, 
        email: user.email 
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.status(200).json({
      success: true,
      message: "Giriş başarılı",
      data: {
        user: {
          user_id: user.user_id,
          name: user.name,
          email: user.email,
          created_at: user.created_at
        },
        token
      }
    });

  } catch (error) {
    console.error("Giriş hatası:", error);
    res.status(500).json({
      success: false,
      message: "Giriş sırasında bir hata oluştu",
      error: error.message
    });
  }
};

// Kullanıcı Profil Bilgisi (Token ile)
export const getProfile = async (req, res) => {
  try {
    // req.user middleware tarafından eklenir
    const user = await prisma.user.findUnique({
      where: { user_id: req.user.user_id },
      select: {
        user_id: true,
        name: true,
        email: true,
        created_at: true,
        updated_at: true
      }
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }

    res.status(200).json({
      success: true,
      data: { user }
    });

  } catch (error) {
    console.error("Profil getirme hatası:", error);
    res.status(500).json({
      success: false,
      message: "Profil bilgileri alınırken bir hata oluştu",
      error: error.message
    });
  }
};

// Kullanıcı Profil Güncelleme
export const updateProfile = async (req, res) => {
  try {
    const { name } = req.body;
    const userId = req.user?.user_id || req.body.user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Validasyon
    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "İsim boş olamaz"
      });
    }

    // Kullanıcıyı güncelle
    const updatedUser = await prisma.user.update({
      where: { user_id: parseInt(userId) },
      data: {
        name: name.trim(),
        updated_at: new Date()
      },
      select: {
        user_id: true,
        name: true,
        email: true,
        created_at: true,
        updated_at: true
      }
    });

    res.status(200).json({
      success: true,
      message: "Profil başarıyla güncellendi",
      data: { user: updatedUser }
    });

  } catch (error) {
    console.error("Profil güncelleme hatası:", error);
    res.status(500).json({
      success: false,
      message: "Profil güncellenirken bir hata oluştu",
      error: error.message
    });
  }
};

// Kullanıcı İstatistikleri
export const getUserStats = async (req, res) => {
  try {
    const userId = req.user?.user_id || req.query.user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Sahip olunan liste sayısı
    const ownedListsCount = await prisma.shoppingList.count({
      where: { owner_id: parseInt(userId) }
    });

    // Erişim verilen liste sayısı
    const sharedListsCount = await prisma.userListAccess.count({
      where: { user_id: parseInt(userId) }
    });

    // Toplam liste sayısı
    const totalLists = ownedListsCount + sharedListsCount;

    // Fiş sayısı
    const receiptsCount = await prisma.receipt.count({
      where: { user_id: parseInt(userId) }
    });

    // Toplam öğe sayısı (sahip olunan listelerdeki öğeler)
    const totalItems = await prisma.listItem.count({
      where: {
        list: {
          owner_id: parseInt(userId)
        }
      }
    });

    res.status(200).json({
      success: true,
      data: {
        total_lists: totalLists,
        owned_lists: ownedListsCount,
        shared_lists: sharedListsCount,
        total_receipts: receiptsCount,
        total_items: totalItems
      }
    });

  } catch (error) {
    console.error("İstatistik getirme hatası:", error);
    res.status(500).json({
      success: false,
      message: "İstatistikler alınırken bir hata oluştu",
      error: error.message
    });
  }
};

// Şifre Değiştirme
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user?.user_id || req.body.user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Validasyon
    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Mevcut şifre ve yeni şifre gereklidir"
      });
    }

    // Yeni şifre uzunluğu kontrolü
    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Yeni şifre en az 6 karakter olmalıdır"
      });
    }

    // Kullanıcıyı bul
    const user = await prisma.user.findUnique({
      where: { user_id: parseInt(userId) }
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Kullanıcı bulunamadı"
      });
    }

    // Mevcut şifreyi kontrol et
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password_hash);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Mevcut şifre yanlış"
      });
    }

    // Yeni şifreyi hash'le
    const salt = await bcrypt.genSalt(10);
    const newPasswordHash = await bcrypt.hash(newPassword, salt);

    // Şifreyi güncelle
    await prisma.user.update({
      where: { user_id: parseInt(userId) },
      data: {
        password_hash: newPasswordHash,
        updated_at: new Date()
      }
    });

    res.status(200).json({
      success: true,
      message: "Şifre başarıyla değiştirildi"
    });

  } catch (error) {
    console.error("Şifre değiştirme hatası:", error);
    res.status(500).json({
      success: false,
      message: "Şifre değiştirilirken bir hata oluştu",
      error: error.message
    });
  }
};

