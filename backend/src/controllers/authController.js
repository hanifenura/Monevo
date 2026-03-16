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

