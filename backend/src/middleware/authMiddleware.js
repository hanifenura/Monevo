import jwt from "jsonwebtoken";

// JWT Token doğrulama middleware'i
export const authenticateToken = (req, res, next) => {
  try {
    // Token'ı header'dan al
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // "Bearer TOKEN" formatı

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Erişim reddedildi. Token bulunamadı"
      });
    }

    // Token'ı doğrula
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: "Geçersiz veya süresi dolmuş token"
        });
      }

      // Kullanıcı bilgisini request objesine ekle
      req.user = user;
      next();
    });

  } catch (error) {
    console.error("Token doğrulama hatası:", error);
    res.status(500).json({
      success: false,
      message: "Token doğrulanırken bir hata oluştu",
      error: error.message
    });
  }
};

// Opsiyonel: Belirli rolleri kontrol eden middleware
export const authorizeRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Yetkilendirme gerekli"
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Bu işlem için yetkiniz yok"
      });
    }

    next();
  };
};

