import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// OCR Receipt endpoint
app.post("/api/receipts", (req, res) => {
  try {
    const {
      user_id,
      list_id,
      store_name,
      receipt_date,
      total_amount,
      tax_rate,
      tax_amount,
      payment_method,
      items
    } = req.body;

    // Basit validasyon
    if (!items || items.length === 0) {
      return res.status(400).json({
        error: "Missing required field: items"
      });
    }
    
    // user_id ve list_id opsiyonel (auth henüz aktif değil)
    const finalUserId = user_id || 1; // Varsayılan test kullanıcısı
    const finalListId = list_id || 1; // Varsayılan test listesi

    // Burada veritabanına kaydetme işlemi yapılabilir
    // Şimdilik başarılı yanıt dönüyoruz
    console.log("Receipt received:", {
      user_id: finalUserId,
      list_id: finalListId,
      store_name,
      total_amount,
      items_count: items.length
    });

    res.status(201).json({
      success: true,
      message: "Receipt saved successfully",
      data: {
        user_id: finalUserId,
        list_id: finalListId,
        store_name,
        total_amount,
        items_count: items.length
      }
    });
  } catch (error) {
    console.error("Error processing receipt:", error);
    res.status(500).json({
      error: "Internal server error",
      message: error.message
    });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
