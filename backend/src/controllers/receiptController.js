import { PrismaClient } from "../../../backend/generated/prisma/index.js";

const prisma = new PrismaClient();

// Fiş kaydetme fonksiyonu
export const saveReceipt = async (req, res) => {
  try {
    const {
      storeName,
      purchaseDate,
      products,
      subtotal,
      tax,
      total,
      list_id,
    } = req.body;

    // Validasyon
    if (!products || products.length === 0) {
      return res.status(400).json({
        success: false,
        error: "En az bir ürün eklemelisiniz",
      });
    }

    if (!storeName || !purchaseDate) {
      return res.status(400).json({
        success: false,
        error: "Mağaza adı ve satın alma tarihi zorunludur",
      });
    }

    // user_id'yi JWT'den al (auth middleware'den gelecek)
    const userId = req.user?.user_id || req.body.user_id;
    
    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    // Fiş kaydını oluştur
    const receipt = await prisma.receipt.create({
      data: {
        user_id: userId,
        list_id: list_id || null,
        store_name: storeName,
        receipt_date: new Date(purchaseDate),
        subtotal: parseFloat(subtotal) || null,
        tax_amount: parseFloat(tax) || null,
        total_amount: parseFloat(total),
        currency: "TRY",
        processed: true,
        items: {
          create: products.map((product) => ({
            productName: product.name,
            quantity: parseFloat(product.quantity),
            price: parseFloat(product.price),
            unit: product.unit || "adet",
            pricePerUnit: product.pricePerUnit 
              ? parseFloat(product.pricePerUnit) 
              : parseFloat(product.price) / parseFloat(product.quantity),
            taxRate: product.taxRate ? parseFloat(product.taxRate) : null,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    res.status(201).json({
      success: true,
      message: "Fiş başarıyla kaydedildi",
      data: {
        receipt_id: receipt.receipt_id,
        store_name: receipt.store_name,
        total_amount: receipt.total_amount,
        items_count: receipt.items.length,
      },
    });
  } catch (error) {
    console.error("Fiş kaydetme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Fiş kaydedilirken bir hata oluştu",
      message: error.message,
    });
  }
};

// Kullanıcının tüm fişlerini getir
export const getUserReceipts = async (req, res) => {
  try {
    const userId = req.user?.user_id || req.query.user_id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Kullanıcı kimliği bulunamadı",
      });
    }

    const receipts = await prisma.receipt.findMany({
      where: {
        user_id: parseInt(userId),
      },
      include: {
        items: true,
      },
      orderBy: {
        receipt_date: "desc",
      },
    });

    res.status(200).json({
      success: true,
      data: receipts,
    });
  } catch (error) {
    console.error("Fişleri getirme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Fişler getirilirken bir hata oluştu",
      message: error.message,
    });
  }
};

// Belirli bir fişi getir
export const getReceiptById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.user_id || req.query.user_id;

    const receipt = await prisma.receipt.findFirst({
      where: {
        receipt_id: parseInt(id),
        user_id: parseInt(userId),
      },
      include: {
        items: true,
      },
    });

    if (!receipt) {
      return res.status(404).json({
        success: false,
        error: "Fiş bulunamadı",
      });
    }

    res.status(200).json({
      success: true,
      data: receipt,
    });
  } catch (error) {
    console.error("Fiş getirme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Fiş getirilirken bir hata oluştu",
      message: error.message,
    });
  }
};

// Fiş güncelleme
export const updateReceipt = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      storeName,
      purchaseDate,
      products,
      subtotal,
      tax,
      total,
    } = req.body;

    const userId = req.user?.user_id || req.body.user_id;

    // Fişin var olduğunu ve kullanıcıya ait olduğunu kontrol et
    const existingReceipt = await prisma.receipt.findFirst({
      where: {
        receipt_id: parseInt(id),
        user_id: parseInt(userId),
      },
    });

    if (!existingReceipt) {
      return res.status(404).json({
        success: false,
        error: "Fiş bulunamadı veya güncelleme yetkiniz yok",
      });
    }

    // Önce mevcut ürünleri sil
    await prisma.receiptItem.deleteMany({
      where: {
        receiptId: parseInt(id),
      },
    });

    // Fişi ve yeni ürünleri güncelle
    const updatedReceipt = await prisma.receipt.update({
      where: {
        receipt_id: parseInt(id),
      },
      data: {
        store_name: storeName,
        receipt_date: new Date(purchaseDate),
        subtotal: parseFloat(subtotal) || null,
        tax_amount: parseFloat(tax) || null,
        total_amount: parseFloat(total),
        items: {
          create: products.map((product) => ({
            productName: product.name,
            quantity: parseFloat(product.quantity),
            price: parseFloat(product.price),
            unit: product.unit || "adet",
            pricePerUnit: product.pricePerUnit 
              ? parseFloat(product.pricePerUnit) 
              : parseFloat(product.price) / parseFloat(product.quantity),
            taxRate: product.taxRate ? parseFloat(product.taxRate) : null,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    res.status(200).json({
      success: true,
      message: "Fiş başarıyla güncellendi",
      data: updatedReceipt,
    });
  } catch (error) {
    console.error("Fiş güncelleme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Fiş güncellenirken bir hata oluştu",
      message: error.message,
    });
  }
};

// Fiş silme
export const deleteReceipt = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.user_id || req.query.user_id;

    // Fişin var olduğunu ve kullanıcıya ait olduğunu kontrol et
    const existingReceipt = await prisma.receipt.findFirst({
      where: {
        receipt_id: parseInt(id),
        user_id: parseInt(userId),
      },
    });

    if (!existingReceipt) {
      return res.status(404).json({
        success: false,
        error: "Fiş bulunamadı veya silme yetkiniz yok",
      });
    }

    // Fişi sil (ReceiptItem'lar otomatik silinecek - Cascade)
    await prisma.receipt.delete({
      where: {
        receipt_id: parseInt(id),
      },
    });

    res.status(200).json({
      success: true,
      message: "Fiş başarıyla silindi",
    });
  } catch (error) {
    console.error("Fiş silme hatası:", error);
    res.status(500).json({
      success: false,
      error: "Fiş silinirken bir hata oluştu",
      message: error.message,
    });
  }
};






