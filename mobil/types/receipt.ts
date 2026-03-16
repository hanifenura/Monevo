// Receipt related types

// Parser'dan gelen ürün tipi (OCR sonrası)
export interface ParsedReceiptItem {
  productName: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number;
}

// UI'da kullanılan ürün tipi (düzenleme ekranı için)
export interface ReceiptProduct {
  id: string;
  name: string;
  quantity: number;
  price: number;
  unit: 'adet' | 'kg';
  pricePerUnit?: number;
  taxRate?: number; // KDV oranı (%)
  isEditing?: boolean;
}

// Parser'dan gelen tam fiş tipi
export interface ParsedReceiptData {
  storeName: string | null;
  totalAmount: number | null;
  receiptDate: string | null;
  paymentMethod: 'cash' | 'card' | 'other' | null;
  currency: string;
  items: ParsedReceiptItem[];
  subTotal: number | null;
  taxAmount: number | null;
  taxRate: number | null;
  rawText: string;
  confidence: {
    storeName: number;
    totalAmount: number;
    items: number;
    tax: number;
    date: number;
    overall: number;
  };
  isValid: boolean;
  extractionMethod: string;
  warnings: string[];
}

// UI'da kullanılan fiş tipi (düzenleme ekranı için)
export interface ReceiptData {
  id?: string;
  storeName: string;
  purchaseDate: Date;
  products: ReceiptProduct[];
  subtotal: number;
  tax: number;
  total: number;
}

export interface NewProduct {
  name: string;
  quantityType: 'adet' | 'kg';
  quantity: number;
  price: number;
  taxRate: number; // KDV oranı (%)
}

// Parser'dan UI formatına dönüştürme yardımcı fonksiyonu
export const convertParsedToUIFormat = (parsed: ParsedReceiptData): Partial<ReceiptData> => {
  return {
    storeName: parsed.storeName || 'Bilinmeyen Mağaza',
    purchaseDate: parsed.receiptDate ? new Date(parsed.receiptDate) : new Date(),
    products: parsed.items.map((item, index) => ({
      id: String(index + 1),
      name: item.productName,
      quantity: item.quantity,
      price: item.lineTotal,
      unit: 'adet' as const,
      pricePerUnit: item.unitPrice,
      taxRate: parsed.taxRate || undefined,
    })),
    subtotal: parsed.subTotal || 0,
    tax: parsed.taxAmount || 0,
    total: parsed.totalAmount || 0,
  };
};


