import express from "express";
import {
  getUserLists,
  getListById,
  createList,
  updateList,
  deleteList,
  getListItems,
  addListItem,
  updateListItem,
  deleteListItem,
  toggleItemCheck,
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

// Liste öğelerini getir - GET /api/lists/:id/items
router.get("/:id/items", getListItems);

// Liste öğesi ekle - POST /api/lists/:id/items
router.post("/:id/items", addListItem);

// Liste öğesi güncelle - PUT /api/lists/:id/items/:itemId
router.put("/:id/items/:itemId", updateListItem);

// Liste öğesi sil - DELETE /api/lists/:id/items/:itemId
router.delete("/:id/items/:itemId", deleteListItem);

// Liste öğesini işaretle/işareti kaldır - PATCH /api/lists/:id/items/:itemId/toggle
router.patch("/:id/items/:itemId/toggle", toggleItemCheck);

export default router;

