import express from "express";
import { register, login, getProfile, updateProfile, getUserStats, changePassword } from "../controllers/authController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected routes (Token gerekli)
router.get("/profile", authenticateToken, getProfile);

// Profil güncelleme - PUT /api/auth/profile
router.put("/profile", updateProfile);

// Kullanıcı istatistikleri - GET /api/auth/stats
router.get("/stats", getUserStats);

// Şifre değiştirme - PUT /api/auth/change-password
router.put("/change-password", changePassword);

export default router;

