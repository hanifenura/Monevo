import express from "express";
import {
  getUserLists,
  getListById,
  createList,
  updateList,
  deleteList,
} from "../controllers/listController.js";

const router = express.Router();

// Kullanıcının tüm listelerini getir - GET /api/lists
router.get("/", getUserLists);

// Belirli bir listeyi getir - GET /api/lists/:id
router.get("/:id", getListById);

// Yeni liste oluştur - POST /api/lists
router.post("/", createList);

// Liste güncelle - PUT /api/lists/:id
router.put("/:id", updateList);

// Liste sil - DELETE /api/lists/:id
router.delete("/:id", deleteList);

export default router;

