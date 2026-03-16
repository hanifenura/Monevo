import express from "express";
import {
  saveReceipt,
  getUserReceipts,
  getReceiptById,
  updateReceipt,
  deleteReceipt,
} from "../controllers/receiptController.js";
// import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Not: Authentication şimdilik opsiyonel
// Zorunlu hale getirmek için her route'a authenticateToken middleware'i ekleyin
// Örnek: router.post("/", authenticateToken, saveReceipt);

// Fiş kaydetme - POST /api/receipts
router.post("/", saveReceipt);

// Kullanıcının tüm fişlerini getir - GET /api/receipts
router.get("/", getUserReceipts);

// Belirli bir fişi getir - GET /api/receipts/:id
router.get("/:id", getReceiptById);

// Fiş güncelleme - PUT /api/receipts/:id
router.put("/:id", updateReceipt);

// Fiş silme - DELETE /api/receipts/:id
router.delete("/:id", deleteReceipt);

export default router;

