// =======================
// TYPES
// =======================

export interface ReceiptItem {
  productName: string;
  unitPrice: number;
  quantity: number;
  lineTotal: number;
  taxRate?: number; // Ürüne özgü KDV oranı
}

export interface ConfidenceScores {
  storeName: number;
  totalAmount: number;
  items: number;
  tax: number;
  date: number;
  overall: number;
}

export interface ParsedReceipt {
  // Core Information
  storeName: string | null;
  totalAmount: number | null;
  receiptDate: string | null;
  paymentMethod: 'cash' | 'card' | 'other' | null;
  currency: string;
  
  // Items
  items: ReceiptItem[];
  subTotal: number | null;
  
  // Tax Information
  taxAmount: number | null;
  taxRate: number | null;
  
  // Metadata
  rawText: string;
  confidence: ConfidenceScores;
  isValid: boolean;
  extractionMethod: string;
  warnings: string[];
}

// =======================
// CONSTANTS - TÜRKİYE ÖZEL
// =======================

const TURKISH_STORES = [
  'A101', 'BİM', 'BIM', 'ŞOK', 'SOK', 'MİGROS', 'MIGROS', 'CARREFOUR', 'CARREFOURSA',
  'MACRO CENTER', 'TANSAŞ', 'TANSAS', 'MOPAŞ', 'MOPAS', 'İSTANBUL', 'ISTANBUL',
  'YUNUS', 'ANKA', 'GETİR', 'GETIR', 'YEMEK SEPETİ', 'YEMEK SEPETI',
  'TRENDYOL', 'HEPSİBURADA', 'HEPSIBURADA', 'GİTTİGİDİYOR', 'GITTIGIDIYOR',
  'N11', 'ÇAĞDAŞ', 'CAGDAS', 'ONUR', 'HALK', 'TEKEL', 'BEYPAZARI',
  'DİYAR', 'DIYAR', 'MİGROS JET', 'MIGROS JET', 'AMAZON TR', 'PTT',
  'ARAS', 'YURTİÇİ', 'YURTICI', 'BIRLESIK MAGAZALAR', 'BİRLEŞİK MAĞAZALAR'
];

// TÜRKİYE'DE GEÇERLİ KDV ORANLARI (2024)
const TURKISH_VAT_RATES = {
  STANDARD: 20,     // Çoğu mal ve hizmet
  REDUCED: [
    { rate: 10, category: 'temel gıda', keywords: ['EKMEK', 'SÜT', 'YOĞURT', 'PEYNİR', 'YUMURTA', 'SEBZE', 'MEYVE'] },
    { rate: 8, category: 'temel ihtiyaç', keywords: ['KİTAP', 'DERGİ', 'GAZETE', 'İLAÇ', 'PROTEZ'] },
    { rate: 1, category: 'tarım ürünleri', keywords: ['BUĞDAY', 'ARPA', 'MISIR', 'PAMUK', 'CANLI HAYVAN'] }
  ],
  ZERO: 0  // İhracat, uluslararası taşımacılık vb.
};

const PAYMENT_KEYWORDS = {
  cash: ['NAKİT', 'NAKİT ÖDEME', 'CASH', 'PARA', 'NAKIT', 'PARA ÜSTÜ'],
  card: ['KREDİ KARTI', 'BANKA KARTI', 'DEBIT', 'CREDIT', 'KART', 
         'VISA', 'MASTERCARD', 'AMEX', 'BONUS', 'MAXIMUM', 'WORLD', 'PARAM', 'CARD'],
  other: ['HAVALE', 'EFT', 'ÇEK', 'SENET', 'KREDİ', 'TAKSİT', 'DİĞER']
};

const SKIP_KEYWORDS = [
  'TCKN', 'VKN', 'TARİH', 'SAAT', 'FİŞ', 'FATURA', 'FIS', 'FAT',
  'SIRA', 'NO', 'ADRES', 'VERGİ', 'DAİRESİ', 'MÜHÜR', 'İMZA',
  'BARKOD', 'PLU', 'STOK', 'REFERANS', 'TERMINAL', 'POS', 'MASTERPOS',
  'VADE', 'İSKONTO', 'İNDİRİM', 'KAMPANYA', 'HEDİYE', 'PROMOSYON'
];

const TOTAL_KEYWORDS = [
  'ÖDENECEK', 'ODENECEK', 'GENEL TOPLAM', 'TOPLAM TUTAR',
  'NET TUTAR', 'BORÇ', 'ÖDENECEK TUTAR', 'TOPLAM'
];

// Türkiye'de yaygın ürün kategorileri ve KDV oranları
const PRODUCT_VAT_CATEGORIES = [
  {
    rate: 1,
    keywords: ['CANLI HAYVAN', 'BUĞDAY', 'ARPA', 'MISIR', 'PAMUK', 'TOHUM',
               'YEM', 'GÜBRE', 'İLAÇLAMA', 'TARLA', 'ÇİFTLİK']
  },
  {
    rate: 8,
    keywords: ['KİTAP', 'DERGİ', 'GAZETE', 'İLAÇ', 'PROTEZ', 'TIBBİ MALZEME',
               'ENGELLİ ARACI', 'DİYALİZ', 'KEMOTERAPİ', 'AMBULANS']
  },
  {
    rate: 10,
    keywords: ['EKMEK', 'SÜT', 'YOĞURT', 'PEYNİR', 'YUMURTA', 'SEBZE', 'MEYVE',
               'UN', 'ŞEKER', 'YAĞ', 'BAKLIYAT', 'MAKARNA', 'PİRİNÇ', 'MERCİMEK',
               'NOHUT', 'FASULYE', 'ZEYTİN', 'ZEYTİNYAĞI', 'AYÇİÇEK YAĞI',
               'ÇAY', 'KAHVE', 'TUZ', 'BAHARAT', 'SU', 'MEŞRUBAT', 'GAZOZ',
               'UNLU MAMÜL', 'BÖREK', 'POĞAÇA', 'SİMİT']
  },
  {
    rate: 20,
    keywords: ['TEKNOLOJİ', 'TELEFON', 'BİLGİSAYAR', 'TELEVİZYON', 'BUZDOLABI',
               'ÇAMAŞIR MAKİNESİ', 'BULAŞIK MAKİNESİ', 'KLİMA', 'MOBİLYA',
               'ELBİSE', 'AYAKKABI', 'ÇANTA', 'TAKİ', 'KOZMETİK', 'PARFÜM',
               'ALKOLLÜ İÇECEK', 'SİGARA', 'TÜTÜN', 'AKARYAKIT', 'BENZİN',
               'MAZOT', 'OTO', 'ARABA', 'MOTOSİKLET', 'ELEKTRONİK', 'OYUN',
               'CD', 'DVD', 'KİTAPÇI', 'KIRTASİYE', 'OFİS MALZEMESİ']
  }
];

// =======================
// MAIN PARSER
// =======================

export const parseReceiptText = (ocrText: string): ParsedReceipt => {
  const rawText = ocrText;
  const warnings: string[] = [];
  
  try {
    // Preprocess text
    const processedText = preprocessOCRText(ocrText, warnings);
    const lines = processedText.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);
    
    if (lines.length === 0) {
      return createEmptyReceipt(rawText, 'empty_text');
    }
    
    // Extract information
    const storeName = extractStoreName(lines);
    const receiptDate = extractDate(lines);
    const paymentMethod = extractPaymentMethod(lines);
    
    const items = extractItems(lines, warnings);
    const subTotal = calculateSubTotal(items);
    
    // Türkiye KDV hesaplaması - ürünlere göre oran belirle
    const itemVatInfo = calculateVatByItems(items, warnings);
    const taxInfo = extractTaxInfo(lines, subTotal, itemVatInfo, warnings, items);
    
    const totalAmount = extractTotalAmount(lines, subTotal, items, taxInfo.taxAmount, warnings);
    
    // Calculate confidence
    const confidence = calculateConfidence({
      storeName,
      items,
      totalAmount,
      taxAmount: taxInfo.taxAmount,
      receiptDate,
      subTotal
    });
    
    // Validate receipt
    const isValid = validateTurkishReceipt(items, totalAmount, subTotal, taxInfo);
    
    // Determine extraction method
    const extractionMethod = determineExtractionMethod(lines, items.length);
    
    // Build result
    const result: ParsedReceipt = {
      storeName,
      totalAmount,
      receiptDate,
      paymentMethod,
      currency: 'TRY',
      items,
      subTotal,
      taxAmount: taxInfo.taxAmount,
      taxRate: taxInfo.taxRate,
      rawText,
      confidence,
      isValid,
      extractionMethod,
      warnings
    };
    
    // Post-process and fix inconsistencies
    return postProcessReceipt(result, warnings);
    
  } catch (error) {
    console.error('Error parsing receipt:', error);
    warnings.push(`Parse error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return createEmptyReceipt(rawText, 'error', warnings);
  }
};

// =======================
// TÜRKİYE KDV HESAPLAMA
// =======================

const calculateVatByItems = (items: ReceiptItem[], warnings: string[]): {
  estimatedVatRate: number;
  vatByCategory: Record<number, number>;
} => {
  const vatByCategory: Record<number, number> = {};
  let totalVatAmount = 0;
  
  // Her ürün için KDV oranını belirle
  for (const item of items) {
    const vatRate = determineVatRateForProduct(item.productName);
    
    // Bu oran için KDV tutarını hesapla
    const vatAmount = (item.lineTotal * vatRate) / (100 + vatRate);
    
    if (!vatByCategory[vatRate]) {
      vatByCategory[vatRate] = 0;
    }
    vatByCategory[vatRate] += vatAmount;
    totalVatAmount += vatAmount;
  }
  
  // Toplam KDV oranını hesapla
  const subTotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  let estimatedVatRate = TURKISH_VAT_RATES.STANDARD;
  
  if (subTotal > 0) {
    estimatedVatRate = (totalVatAmount / (subTotal - totalVatAmount)) * 100;
    estimatedVatRate = Math.round(estimatedVatRate);
    
    // Türkiye'deki geçerli KDV oranlarına yuvarla
    const validRates = [1, 8, 10, 20];
    let closestRate = validRates[0];
    let minDiff = Math.abs(estimatedVatRate - validRates[0]);
    
    for (const rate of validRates) {
      const diff = Math.abs(estimatedVatRate - rate);
      if (diff < minDiff) {
        minDiff = diff;
        closestRate = rate;
      }
    }
    
    estimatedVatRate = closestRate;
  }
  
  // Çoklu KDV oranı uyarısı
  const uniqueRates = Object.keys(vatByCategory).map(Number);
  if (uniqueRates.length > 1) {
    warnings.push(`Fişte ${uniqueRates.length} farklı KDV oranı tespit edildi: ${uniqueRates.join(', ')}%`);
  }
  
  return {
    estimatedVatRate,
    vatByCategory
  };
};

const determineVatRateForProduct = (productName: string): number => {
  const upperName = productName.toUpperCase();
  
  // Ürün adına göre KDV oranını belirle
  for (const category of PRODUCT_VAT_CATEGORIES) {
    for (const keyword of category.keywords) {
      if (upperName.includes(keyword)) {
        return category.rate;
      }
    }
  }
  
  // Market fişlerinde genellikle %10 veya %20
  if (upperName.includes('MARKET') || upperName.includes('MARKETİ')) {
    // Gıda ürünleri genelde %10, diğerleri %20
    const foodKeywords = ['EKMEK', 'SÜT', 'YOĞURT', 'PEYNİR', 'SEBZE', 'MEYVE', 'SU', 'İÇECEK'];
    for (const keyword of foodKeywords) {
      if (upperName.includes(keyword)) {
        return 10;
      }
    }
    return 20;
  }
  
  // Varsayılan olarak standart KDV
  return TURKISH_VAT_RATES.STANDARD;
};

// =======================
// TEXT PREPROCESSING (Türkçe optimizasyonlu)
// =======================

const preprocessOCRText = (text: string, warnings: string[]): string => {
  if (!text || text.trim().length === 0) {
    warnings.push('Boş veya geçersiz OCR metni');
    return '';
  }
  
  let processed = text;
  
  // Özel karakterleri satır başından temizle
  const cleanedLines = processed.split('\n').map(line => {
    // Satır başındaki özel karakterleri temizle: $28.75 → 28.75, *150.00 → 150.00
    return line.replace(/^[\*\·\$=]+\s*/, '');
  }).join('\n');
  processed = cleanedLines;
  
  // Türkçe karakterleri koru ama OCR hatalarını düzelt
  const turkishOCRCorrections = [
    // Sayı düzeltmeleri - DİKKATLİ: Sadece sayı bağlamında düzelt
    { pattern: /\b[O]\b/g, replacement: '0' },  // Tek başına O -> 0
    { pattern: /([^A-Z])[O](\d)/g, replacement: '$10$2' },  // xO5 -> x05
    { pattern: /S0/g, replacement: '50' },     // Sıfır yanlış okunması
    { pattern: /[B]6/g, replacement: '86' },
    { pattern: /[G]6/g, replacement: '96' },
    
    // Türkçe karakter düzeltmeleri
    { pattern: /[ÂÃÀÁÄ]/g, replacement: 'A' },
    { pattern: /[âãàáä]/g, replacement: 'A' },
    { pattern: /[ÊËÈÉ]/g, replacement: 'E' },
    { pattern: /[êëèé]/g, replacement: 'E' },
    { pattern: /[ÎÏÌÍ]/g, replacement: 'İ' },
    { pattern: /[îïìí]/g, replacement: 'İ' },
    { pattern: /[ÔÕÒÓÖ]/g, replacement: 'O' },
    { pattern: /[ôõòóö]/g, replacement: 'O' },
    { pattern: /[ÛÙÚÜ]/g, replacement: 'Ü' },
    { pattern: /[ûùúü]/g, replacement: 'Ü' },
    { pattern: /[Ç]/g, replacement: 'Ç' },
    { pattern: /[ç]/g, replacement: 'Ç' },
    { pattern: /[Ğ]/g, replacement: 'Ğ' },
    { pattern: /[ğ]/g, replacement: 'Ğ' },
    { pattern: /[Ş]/g, replacement: 'Ş' },
    { pattern: /[ş]/g, replacement: 'Ş' }
  ];
  
  turkishOCRCorrections.forEach(({ pattern, replacement }) => {
    processed = processed.replace(pattern, replacement);
  });
  
  // Türk para formatını düzelt
  processed = processed
    // "1.250,50" -> "1250.50" (Türk binlik formatı - önce bu!)
    .replace(/(\d{1,3})\.(\d{3}),(\d{2})/g, '$1$2.$3')
    // "12,50" -> "12.50" (Türk ondalık formatı)
    .replace(/(\d+),(\d{2})\b/g, '$1.$2')
    // "1.250" -> "1250" (binlik ayırıcı)
    .replace(/(\d)\.(\d{3})\b/g, '$1$2')
    // "12.5" -> "12.50" (eksik kuruş)
    .replace(/(\d+)\.(\d)\b/g, '$1.$20');
  
  // Türk para birimi
  processed = processed
    .replace(/₺/g, ' TL')
    .replace(/\$|€|£/g, ' TL')
    .replace(/\bTRY\b/gi, 'TL');
  
  // Türkçe özel durumlar
  processed = processed
    .replace(/KDV DAHİL/gi, 'KDV DAHİL')
    .replace(/KDV DAHIL/gi, 'KDV DAHİL')
    .replace(/KDV HARİÇ/gi, 'KDV HARİÇ')
    .replace(/KDV HARIC/gi, 'KDV HARİÇ');
  
  // Boşlukları düzenle
  processed = processed
    .replace(/\s{2,}/g, ' ')
    .replace(/\t/g, ' ')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n');
  
  // Operatörler etrafına boşluk ekle
  processed = processed
    .replace(/(\d)[xX×](\d)/g, '$1 x $2')
    .replace(/[=]/g, ' = ')
    .replace(/%/g, '% ');
  
  return processed.toUpperCase().trim();
};

// =======================
// INFORMATION EXTRACTION (Türkiye optimizasyonlu)
// =======================

const extractStoreName = (lines: string[]): string | null => {
  // Türk mağaza zincirleri - TÜM satırlarda ara (sadece ilk 5'te değil)
  for (let i = 0; i < Math.min(10, lines.length); i++) {
    const line = lines[i];
    
    // "FATURA", "E-FATURA" gibi satırları atla
    if (line.includes('FATURA') || line.includes('E-ARALV')) {
      continue;
    }
    
    // Türk mağaza zincirleri (öncelikli)
    for (const store of TURKISH_STORES) {
      if (line.includes(store)) {
        return line; // Tüm satırı döndür (sadece mağaza adını değil)
      }
    }
    
    // "MAGAZALAR", "MARKET" gibi kelimeler içeren satırları ara
    const turkishStoreIndicators = ['MAGAZALAR', 'MARKET', 'BAKKAL', 'MANAV', 'KASAP', 'PAZAR'];
    for (const indicator of turkishStoreIndicators) {
      if (line.includes(indicator) && line.length >= 5 && line.length <= 50) {
        return line;
      }
    }
  }
  
  // Genel mağaza adı pattern'i (fallback)
  for (let i = 1; i < Math.min(8, lines.length); i++) {
    const line = lines[i];
    
    if (line.length >= 5 && line.length <= 50) {
      const hasTurkishLetters = /[A-ZĞÜŞİÖÇ]{3,}/.test(line);
      const hasNoDigits = !/\d/.test(line);
      const notFatura = !line.includes('FATURA');
      const notAddress = !line.includes('MAH') && !line.includes('SOK') && !line.includes('CAD');
      
      if (hasTurkishLetters && hasNoDigits && notFatura && notAddress) {
        return line;
      }
    }
  }
  
  return null;
};

const extractItems = (lines: string[], warnings: string[]): ReceiptItem[] => {
  // ÖNCE BİM tipi akıllı eşleştirmeyi dene (en güvenilir yöntem)
  const smartItems = extractItemsWithSmartMatching(lines, warnings);
  if (smartItems.length >= 2) {
    // 2 veya daha fazla ürün bulduysa başarılı
    return smartItems;
  }
  
  // Akıllı eşleştirme başarısız, pattern matching dene
  const items: ReceiptItem[] = [];
  const itemPatterns = getTurkishItemPatterns();
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Türk fişlerinde yaygın olmayan satırları atla
    if (shouldSkipTurkishLine(line)) {
      continue;
    }
    
    // Türkçe ürün pattern'lerini dene
    const item = parseTurkishItemLine(line, itemPatterns, warnings, i > 0 ? lines[i - 1] : null);
    if (item) {
      items.push(item);
    }
  }
  
  if (items.length > 0) {
    return items;
  }
  
  // Hala bulunamadıysa fallback
  return extractTurkishItemsFallback(lines, warnings);
};

const getTurkishItemPatterns = () => [
  // Pattern 1: "15 ad X 10.00" (sadece miktar ve fiyat, ürün adı bir önceki satırda)
  {
    regex: /^(\d+(?:\.\d+)?)\s*(?:ad|adet|kg|gr|g|ml|lt|l)\s*[xX×]\s*(\d+(?:\.\d+)?)$/i,
    parse: (match: RegExpMatchArray) => ({
      productName: null, // Önceki satırdan alınacak
      quantity: parseFloat(match[1]),
      unitPrice: parseFloat(match[2]),
      lineTotal: parseFloat(match[1]) * parseFloat(match[2])
    })
  },
  // Pattern 2: "Ürün Adı 2 x 12.50 = 25.00"
  {
    regex: /^([A-ZĞÜŞİÖÇ\s\.]{3,}?)\s+(\d+(?:\.\d+)?)\s*[xX×]\s*(\d+(?:\.\d+)?)(?:\s*=\s*(\d+(?:\.\d+)?))?$/,
    parse: (match: RegExpMatchArray) => ({
      productName: match[1].trim(),
      quantity: parseFloat(match[2]),
      unitPrice: parseFloat(match[3]),
      lineTotal: match[4] ? parseFloat(match[4]) : parseFloat(match[2]) * parseFloat(match[3])
    })
  },
  // Pattern 3: "2 x Ürün Adı 12.50"
  {
    regex: /^(\d+(?:\.\d+)?)\s*[xX×]\s*([A-ZĞÜŞİÖÇ\s\.]{3,}?)\s+(\d+(?:\.\d+)?)$/,
    parse: (match: RegExpMatchArray) => ({
      productName: match[2].trim(),
      quantity: parseFloat(match[1]),
      unitPrice: parseFloat(match[3]),
      lineTotal: parseFloat(match[1]) * parseFloat(match[3])
    })
  },
  // Pattern 4: "Ürün Adı 12.50 TL"
  {
    regex: /^([A-ZĞÜŞİÖÇ\s\.]{3,}?)\s+(\d+(?:\.\d+)?)\s*(?:TL|₺)?$/,
    parse: (match: RegExpMatchArray) => ({
      productName: match[1].trim(),
      quantity: 1,
      unitPrice: parseFloat(match[2]),
      lineTotal: parseFloat(match[2])
    })
  },
  // Pattern 5: Türk fişlerinde yaygın: "Ürün Adı 1 Adet 12.50"
  {
    regex: /^([A-ZĞÜŞİÖÇ\s\.]{3,}?)\s+(\d+(?:\.\d+)?)\s*(?:ADET|AD|KG|GR|G|ML|LT)\s+(\d+(?:\.\d+)?)$/i,
    parse: (match: RegExpMatchArray) => ({
      productName: match[1].trim(),
      quantity: parseFloat(match[2]),
      unitPrice: parseFloat(match[3]),
      lineTotal: parseFloat(match[2]) * parseFloat(match[3])
    })
  }
];

const shouldSkipTurkishLine = (line: string): boolean => {
  // Çok kısa satırlar
  if (line.length < 3) return true;
  
  // Sadece "X1", "X20" gibi KDV kodları
  if (/^X\d+\.?$/i.test(line)) return true;
  
  const upperLine = line.toUpperCase();
  
  // Türk fişlerinde yaygın geçersiz kelimeler
  const turkishSkipWords = [
    'TCKN', 'VKN', 'TARİH', 'SAAT', 'FİŞ', 'FATURA', 'FATURA NO',
    'VERGİ', 'VDM', 'DAİRESİ', 'MÜHÜR', 'İMZA', 'BARKOD', 'ETTN',
    'İSKONTO', 'İNDİRİM', 'KAMPANYA', 'HEDİYE', 'PROMOSYON',
    'VADE', 'TAKSİT', 'NAKİT', 'KART', 'ÖDEME', 'ÖDENECEK',
    'KDV', 'VERGİ', 'MATRAH', 'TUTAR', 'TOPLAM', 'ARA TOPLAM',
    'BANKA', 'KREDI KARTI', 'VISA', 'MASTERCARD', 'YAPI KREDI',
    'ONAY NO', 'REF', 'REFERANS', 'TERMINAL', 'POS',
    'SIRA NO', 'FIILI', 'TÜKETICI', 'NIHAI', 'MÜKELLEFER',
    'MAH', 'SOK', 'CAD', 'BULVAR', 'CD', 'SK', 'NO:',
    'E-ARALV', 'BUYUK', 'BÜYÜK'
  ];
  
  for (const word of turkishSkipWords) {
    if (upperLine.includes(word)) {
      return true;
    }
  }
  
  // Uzun sayı dizileri (barkod, referans no vb.)
  if (/\d{10,}/.test(line)) return true;
  
  // Tarih formatı
  if (/\d{2}[./-]\d{2}[./-]\d{4}/.test(line)) return true;
  
  return false;
};

const parseTurkishItemLine = (
  line: string, 
  patterns: any[], 
  warnings: string[],
  previousLine: string | null = null
): ReceiptItem | null => {
  for (const pattern of patterns) {
    const match = line.match(pattern.regex);
    if (!match) continue;
    
    try {
      let { productName, quantity, unitPrice, lineTotal } = pattern.parse(match);
      
      // Eğer ürün adı yok ve bir önceki satır varsa, onu kullan
      if (!productName && previousLine) {
        const cleanedPrevLine = cleanTurkishProductName(previousLine);
        if (cleanedPrevLine.length >= 3 && !shouldSkipTurkishLine(previousLine)) {
          productName = cleanedPrevLine;
        }
      }
      
      // Ürün adı hala yoksa atla
      if (!productName || productName.length < 2) {
        continue;
      }
      
      // Türk ürün validasyonu
      if (!isValidTurkishProduct(productName, unitPrice, quantity, lineTotal)) {
        warnings.push(`Geçersiz ürün atlandı: ${line}`);
        continue;
      }
      
      // Hesaplanan toplamı kontrol et
      const calculatedTotal = parseFloat((quantity * unitPrice).toFixed(2));
      const extractedTotal = parseFloat(lineTotal.toFixed(2));
      
      if (Math.abs(calculatedTotal - extractedTotal) > 0.01) {
        warnings.push(`Satır toplamı uyuşmuyor: ${line}. Hesaplanan kullanılıyor.`);
      }
      
      return {
        productName: cleanTurkishProductName(productName),
        unitPrice: parseFloat(unitPrice.toFixed(2)),
        quantity,
        lineTotal: calculatedTotal
      };
      
    } catch (error) {
      warnings.push(`Satır parse hatası: ${line}`);
      continue;
    }
  }
  
  return null;
};

const isValidTurkishProduct = (
  name: string, 
  unitPrice: number, 
  quantity: number, 
  lineTotal: number
): boolean => {
  if (!name || name.trim().length < 2) return false;
  if (unitPrice <= 0 || unitPrice > 10000) return false;
  if (quantity <= 0 || quantity > 1000) return false;
  if (lineTotal <= 0 || lineTotal > 100000) return false;
  
  // Türkçe harf kontrolü
  const turkishLetters = (name.match(/[A-ZĞÜŞİÖÇ]/gi) || []).length;
  if (turkishLetters < 2) return false;
  
  // Sadece sayı değil
  if (/^\d+$/.test(name)) return false;
  
  // Türk fişlerinde geçersiz kelimeler
  const turkishInvalidWords = ['TCKN', 'VKN', 'TARİH', 'SAAT', 'FİŞ', 'FATURA'];
  const upperName = name.toUpperCase();
  if (turkishInvalidWords.some(word => upperName.includes(word))) return false;
  
  return true;
};

const cleanTurkishProductName = (name: string): string => {
  return name
    .replace(/\s+/g, ' ')
    .replace(/^\s+|\s+$/g, '')
    .replace(/[^a-zA-ZĞÜŞİÖÇğüşıöç0-9\s]/g, '')
    .trim();
};

// =======================
// BİM TİPİ AKILLI EŞLEŞTİRME
// =======================
// BİM fişlerinde: Önce ürün isimleri, sonra fiyatlar ayrı bloklarda
const extractItemsWithSmartMatching = (lines: string[], warnings: string[]): ReceiptItem[] => {
  warnings.push('BİM tipi akıllı eşleştirme kullanılıyor');
  
  // 1. AŞAMA: Ürün isimlerini topla
  const productNames: Array<{ name: string; index: number }> = [];
  const pricesWithQty: Array<{ price: number; quantity: number; index: number; hasInlineQty: boolean }> = [];
  
  // Ürün bölgesini bul (TCKN/TUKETICI/FİŞ NO'dan sonra, TOPLAM'dan önce)
  let productStartIndex = 0;
  let productEndIndex = lines.length;
  
  for (let i = 0; i < lines.length; i++) {
    const upperLine = lines[i].toUpperCase();
    // Başlangıç belirteçleri
    if (upperLine.includes('TCKN') || upperLine.includes('TUKETICI') || 
        upperLine.includes('FIS NO') || upperLine.includes('FİŞ NO') ||
        upperLine.match(/^\d{10,}/)) { // Uzun sayı dizisi (barkod)
      productStartIndex = i + 1;
    }
    // Bitiş belirteçleri
    if (upperLine.includes('TOPLAM KDV') || upperLine.includes('TOPKDV') ||
        upperLine.includes('ODENECEK') || upperLine.includes('TOPLAM')) {
      productEndIndex = i;
      break;
    }
  }
  
  console.log(`📍 Ürün bölgesi: satır ${productStartIndex} - ${productEndIndex}`);
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // ÖNCE FIYAT KONTROLÜ YAP (shouldSkip öncesinde!)
    // Miktar + fiyat formatı mı? 
    // Format: "15 ad X 10.00" VEYA "1,09 KG * 19,99" (virgüllü Türk formatı!)
    const qtyPriceMatch = line.match(/^(\d+(?:[.,]\d+)?)\s*(?:ad|adet|kg|gr|g|ml|lt|l)\s*[\*xX×]\s*(\d+(?:[.,]\d+)?)$/i);
    if (qtyPriceMatch) {
      const qty = parseFloat(qtyPriceMatch[1]);
      const unitPrice = parseFloat(qtyPriceMatch[2]);
      pricesWithQty.push({
        price: qty * unitPrice,
        quantity: qty,
        index: i,
        hasInlineQty: true
      });
      console.log(`💰 Inline fiyat bulundu: ${qty}x${unitPrice} = ${qty * unitPrice} TL (satır ${i})`);
      continue;
    }
    
    // Sadece fiyat mı? (örn: "28.75", "150.00")
    const priceOnlyMatch = line.match(/^(\d+\.\d{2})$/);
    if (priceOnlyMatch) {
      const price = parseFloat(priceOnlyMatch[1]);
      if (price > 0 && price < 10000) {
        pricesWithQty.push({
          price: price,
          quantity: 1,
          index: i,
          hasInlineQty: false
        });
        console.log(`💰 Ayrı fiyat bulundu: ${price} TL (satır ${i})`);
      }
      continue;
    }
    
    // Fiyat formatlama 2: Tam sayı olarak (örn: "150", "206")
    // SADECE ürün bölgesi DIŞINDA! İçeride tam sayılar genelde KDV kodu olur
    const priceWholeMatch = line.match(/^(\d{2,4})$/);
    if (priceWholeMatch && (i < productStartIndex || i >= productEndIndex)) {
      const price = parseFloat(priceWholeMatch[1]);
      // 20-10000 arası
      if (price >= 20 && price < 10000) {
        pricesWithQty.push({
          price: price,
          quantity: 1,
          index: i,
          hasInlineQty: false
        });
        console.log(`💰 Ayrı fiyat bulundu (tam sayı, ürün bölgesi dışı): ${price} TL (satır ${i})`);
      }
      continue;
    }
    
    // Atlanacak satırları geç (FIYAT KONTROLÜNDEN SONRA!)
    if (shouldSkipTurkishLine(line)) continue;
    
    // Ürün adı mı? (sadece ürün bölgesinde)
    if (i >= productStartIndex && i < productEndIndex) {
      const cleanName = cleanTurkishProductName(line);
      if (cleanName.length >= 3 && cleanName.length <= 50) {
        // En az 3 harf içermeli (rakam da olabilir ama çoğunlukla harf)
        const letterCount = (cleanName.match(/[A-ZĞÜŞİÖÇa-zğüşıöç]/g) || []).length;
        const digitCount = (cleanName.match(/\d/g) || []).length;
        
        // Harf sayısı rakam sayısından fazla olmalı ve adres/mağaza olmamalı
        const notAddress = !cleanName.includes('MAH') && !cleanName.includes('SOK') && 
                          !cleanName.includes('CAD') && !cleanName.includes('KONYR') &&
                          !cleanName.includes('KONYA') && !cleanName.includes('ANKARA') &&
                          !cleanName.includes(' CO') && !cleanName.includes(' NO');
        const notStoreName = !cleanName.includes('MAGAZALAR') && !cleanName.includes('BIRLESIK') &&
                            !cleanName.includes('ALISVERIS') && !cleanName.includes('MARKET') &&
                            !cleanName.includes('GIDA') && !cleanName.includes('SAN') &&
                            !cleanName.includes('TIC') && !cleanName.includes('LTD') &&
                            !cleanName.includes('MERK') && !cleanName.includes('TAR');
        const notCustomer = !cleanName.includes('TUKETICI') && !cleanName.includes('TCKN') &&
                           !cleanName.includes('PERSONEL') && !cleanName.includes('REF');
        
        if (letterCount >= 3 && letterCount > digitCount && notAddress && notStoreName && notCustomer) {
          productNames.push({ name: cleanName, index: i });
        }
      }
    }
  }
  
  console.log(`📦 Bulunan ürün isimleri (${productNames.length}):`, productNames.map(p => p.name));
  console.log(`💰 Bulunan fiyatlar (${pricesWithQty.length}):`, pricesWithQty.map(p => `${p.price} TL (${p.quantity}x)`));
  
  // 2. AŞAMA: Eşleştirme
  const items: ReceiptItem[] = [];
  const inlinePrices = pricesWithQty.filter(p => p.hasInlineQty);
  const separatePrices = pricesWithQty.filter(p => !p.hasInlineQty);
  let separatePriceIndex = 0;
  
  console.log(`🔄 Eşleştirme başlıyor: ${productNames.length} ürün, ${separatePrices.length} ayrı fiyat, ${inlinePrices.length} inline fiyat`);
  
  for (let i = 0; i < productNames.length; i++) {
    const product = productNames[i];
    
    // Bu ürün için KDV oranını ara (ürünün hemen altında veya yanında)
    let productTaxRate: number | undefined = undefined;
    
    // Ürün satırında KDV var mı? (örn: "TORKU KANGAL DANA SUCUK %01")
    const taxInName = product.name.match(/[%*]0*(\d+)$/);
    if (taxInName) {
      productTaxRate = parseInt(taxInName[1]);
      console.log(`📊 ${product.name} → KDV: %${productTaxRate} (ürün adında)`);
    }
    
    // Bir sonraki satırda KDV var mı? (örn: "*01", "%01", "*20")
    if (!productTaxRate && product.index + 1 < lines.length) {
      const nextLine = lines[product.index + 1];
      const taxMatch = nextLine.match(/^[%*]0*(\d+)$/);
      if (taxMatch) {
        productTaxRate = parseInt(taxMatch[1]);
        console.log(`📊 ${product.name} → KDV: %${productTaxRate} (sonraki satırda)`);
      }
    }
    
    // Bu ürün için ÖNCEDEN inline fiyat var mı? (BİM'de inline fiyat ürün adından ÖNCE gelir!)
    let prevInlinePrice = null;
    if (i > 0) {
      // Önceki ürünle bu ürün arasında inline fiyat var mı?
      prevInlinePrice = inlinePrices.find(p => 
        p.index > productNames[i - 1].index && 
        p.index < product.index
      );
    } else {
      // İlk ürün ise, baştan bu ürüne kadar inline fiyat var mı?
      prevInlinePrice = inlinePrices.find(p => p.index < product.index);
    }
    
    if (prevInlinePrice) {
      // Öncesinde inline fiyat var, BU ÜRÜN İÇİN!
      items.push({
        productName: product.name,
        quantity: prevInlinePrice.quantity,
        unitPrice: parseFloat((prevInlinePrice.price / prevInlinePrice.quantity).toFixed(2)),
        lineTotal: prevInlinePrice.price,
        taxRate: productTaxRate
      });
      console.log(`✅ ${product.name} → ${prevInlinePrice.quantity}x${(prevInlinePrice.price / prevInlinePrice.quantity).toFixed(2)} = ${prevInlinePrice.price} TL (KDV: ${productTaxRate || '?'}%)`);
    } else {
      // Hemen sonrasında inline fiyat var mı?
      const nextInlinePrice = inlinePrices.find(p => p.index === product.index + 1);
      
      if (nextInlinePrice) {
        // Hemen sonra inline fiyat var
        items.push({
          productName: product.name,
          quantity: nextInlinePrice.quantity,
          unitPrice: parseFloat((nextInlinePrice.price / nextInlinePrice.quantity).toFixed(2)),
          lineTotal: nextInlinePrice.price,
          taxRate: productTaxRate
        });
        console.log(`✅ ${product.name} → ${nextInlinePrice.quantity}x${(nextInlinePrice.price / nextInlinePrice.quantity).toFixed(2)} = ${nextInlinePrice.price} TL (KDV: ${productTaxRate || '?'}%)`);
      } else {
        // Ayrı fiyat kullan
        if (separatePriceIndex < separatePrices.length) {
          const priceData = separatePrices[separatePriceIndex];
          items.push({
            productName: product.name,
            quantity: 1,
            unitPrice: priceData.price,
            lineTotal: priceData.price,
            taxRate: productTaxRate
          });
          separatePriceIndex++;
          console.log(`✅ ${product.name} → ${priceData.price} TL (KDV: ${productTaxRate || '?'}%)`);
        }
      }
    }
  }
  
  console.log(`✅ Eşleştirilen ürünler (${items.length}):`, items);
  
  return items;
};

const extractTurkishItemsFallback = (lines: string[], warnings: string[]): ReceiptItem[] => {
  const items: ReceiptItem[] = [];
  warnings.push('Türk fiş formatı için fallback extraction kullanılıyor');
  
  // BİM gibi fişlerde ürün adı ve fiyat ayrı satırlarda olabiliyor
  // Çok satırlı analiz yapalım
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Bu satırda fiyat var mı kontrol et
    const priceMatches = line.match(/(\d+(?:\.\d{2}))/g);
    if (!priceMatches || priceMatches.length === 0) {
      // Fiyat yok, belki ürün adı bu satırdadır
      // Bir sonraki satıra bakalım
      if (i + 1 < lines.length) {
        const nextLine = lines[i + 1];
        const nextPrices = nextLine.match(/(\d+(?:\.\d{2}))/g);
        
        if (nextPrices && nextPrices.length > 0) {
          // Sonraki satırda fiyat var, bu satır ürün adı olabilir
          const productName = cleanTurkishProductName(line);
          
          if (productName.length >= 3 && !shouldSkipTurkishLine(line)) {
            const lastPrice = parseFloat(nextPrices[nextPrices.length - 1]);
            
            // Miktar bilgisi ara (bu veya sonraki satırda)
            let quantity = 1;
            const qtyMatch = (line + ' ' + nextLine).match(/(\d+(?:\.\d+)?)\s*(?:adet|ad|kg|gr|g|ml|l|lt|x)/i);
            if (qtyMatch) {
              quantity = parseFloat(qtyMatch[1]);
            }
            
            const unitPrice = parseFloat((lastPrice / quantity).toFixed(2));
            
            if (unitPrice > 0 && unitPrice < 10000 && lastPrice > 0 && lastPrice < 100000) {
              items.push({
                productName,
                unitPrice,
                quantity,
                lineTotal: lastPrice
              });
            }
          }
        }
      }
      continue;
    }
    
    // Bu satırda fiyat var
    const lastPrice = parseFloat(priceMatches[priceMatches.length - 1]);
    if (lastPrice <= 0 || lastPrice > 10000) continue;
    
    // Türkçe ürün adını çıkar
    let productName = line
      .replace(/(\d+(?:\.\d{2}))/g, '')
      .replace(/[xX×=]/g, '')
      .replace(/TL|₺/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    
    // Ürün adı çok kısa ise, bir önceki satıra bak
    if (productName.length < 3 && i > 0) {
      const prevLine = lines[i - 1];
      if (prevLine.length > 3 && !prevLine.match(/\d+(?:\.\d{2})/)) {
        productName = cleanTurkishProductName(prevLine);
      }
    }
    
    if (productName.length < 2) continue;
    
    // Türk fişlerinde yaygın miktar formatları
    let quantity = 1;
    const turkishQtyMatch = line.match(/(\d+(?:\.\d+)?)\s*(?:adet|ad|kg|gr|g|ml|l|lt|ad\.)/i);
    if (turkishQtyMatch) {
      quantity = parseFloat(turkishQtyMatch[1]);
    } else {
      // "2x" veya "x2" formatını kontrol et
      const xMatch = line.match(/(\d+(?:\.\d+)?)\s*[xX×]/);
      if (xMatch) {
        quantity = parseFloat(xMatch[1]);
      }
    }
    
    const unitPrice = parseFloat((lastPrice / quantity).toFixed(2));
    
    if (isValidTurkishProduct(productName, unitPrice, quantity, lastPrice)) {
      items.push({
        productName,
        unitPrice,
        quantity,
        lineTotal: lastPrice
      });
    }
  }
  
  return items;
};

const calculateSubTotal = (items: ReceiptItem[]): number | null => {
  if (items.length === 0) return null;
  
  const total = items.reduce((sum, item) => sum + item.lineTotal, 0);
  return parseFloat(total.toFixed(2));
};

const extractTaxInfo = (
  lines: string[], 
  subTotal: number | null, 
  itemVatInfo: any,
  warnings: string[],
  items: ReceiptItem[] = []
): { taxAmount: number | null; taxRate: number | null } => {
  let taxAmount: number | null = null;
  let taxRate: number | null = null;
  
  // Önce fişte açıkça belirtilen KDV bilgilerini ara
  let isVatIncluded = false;
  let isVatExcluded = false;
  
  for (const line of lines) {
    const upperLine = line.toUpperCase();
    
    // KDV DAHİL kontrolü
    if (upperLine.includes('KDV DAHİL') || upperLine.includes('KDV DAHIL')) {
      isVatIncluded = true;
    }
    
    // KDV HARİÇ kontrolü
    if (upperLine.includes('KDV HARİÇ') || upperLine.includes('KDV HARIC')) {
      isVatExcluded = true;
    }
    
    // Türk KDV oranlarını ara: %1, %8, %10, %20
    const turkishRateMatch = line.match(/KDV.*?(%?\s*(\d{1,2})(?:[,.]\d+)?%?)/i);
    if (turkishRateMatch) {
      let rate = parseFloat(turkishRateMatch[2]);
      if (rate > 0 && rate <= 100) {
        // Türkiye'de geçerli KDV oranlarına yuvarla
        const validRates = [1, 8, 10, 20];
        if (validRates.includes(rate)) {
          taxRate = rate;
        } else {
          // En yakın geçerli orana yuvarla
          let closestRate = validRates[0];
          let minDiff = Math.abs(rate - validRates[0]);
          for (const validRate of validRates) {
            const diff = Math.abs(rate - validRate);
            if (diff < minDiff) {
              minDiff = diff;
              closestRate = validRate;
            }
          }
          taxRate = closestRate;
          warnings.push(`KDV oranı ${rate}% geçersiz, ${closestRate}% olarak düzeltildi`);
        }
      }
    }
    
    // KDV tutarını ara (Türk fiş formatına göre)
    if (upperLine.includes('KDV') && !upperLine.includes('DAHİL') && !upperLine.includes('DAHIL')) {
      const numbers = extractTurkishNumbers(line);
      for (const num of numbers) {
        if (num > 0 && num < 10000) {
          // KDV tutarı genelde toplamın %1-30'u arasındadır
          if (subTotal && num < subTotal * 0.3 && num > subTotal * 0.01) {
            taxAmount = num;
            break;
          }
        }
      }
    }
  }
  
  // KDV DAHİL ise ve subtotal varsa KDV hesapla
  if (isVatIncluded && subTotal && taxRate) {
    // KDV DAHİL formülü: Net = Brüt / (1 + KDV/100)
    const netAmount = subTotal / (1 + taxRate / 100);
    taxAmount = parseFloat((subTotal - netAmount).toFixed(2));
    warnings.push(`KDV DAHİL: ${taxRate}% KDV tutarı hesaplandı`);
  }
  
  // KDV HARİÇ ise ve subtotal varsa
  if (isVatExcluded && subTotal && taxRate) {
    taxAmount = parseFloat((subTotal * taxRate / 100).toFixed(2));
    warnings.push(`KDV HARİÇ: ${taxRate}% KDV tutarı hesaplandı`);
  }
  
  // Eğer hala KDV oranı yoksa, ürünlerin bireysel KDV oranlarına bak
  if (!taxRate && items.length > 0) {
    const itemsWithTax = items.filter(item => item.taxRate !== undefined);
    if (itemsWithTax.length > 0) {
      // En yaygın KDV oranını kullan
      const taxRates = itemsWithTax.map(item => item.taxRate!);
      const mostCommonRate = taxRates.sort((a, b) => 
        taxRates.filter(v => v === a).length - taxRates.filter(v => v === b).length
      ).pop();
      taxRate = mostCommonRate || itemVatInfo?.estimatedVatRate;
      warnings.push(`KDV oranı ürünlerden alındı: ${taxRate}%`);
    } else if (itemVatInfo) {
      taxRate = itemVatInfo.estimatedVatRate;
      warnings.push(`KDV oranı ürünlerden tahmin edildi: ${taxRate}%`);
    }
  }
  
  // Varsayılan Türk KDV oranı
  if (!taxRate) {
    taxRate = TURKISH_VAT_RATES.STANDARD;
    warnings.push(`Varsayılan KDV oranı kullanıldı: ${taxRate}%`);
  }
  
  // Eğer hala KDV tutarı yoksa, ürünlerin bireysel KDV'lerini topla
  if (!taxAmount && items.length > 0) {
    const itemsWithTax = items.filter(item => item.taxRate !== undefined);
    if (itemsWithTax.length > 0) {
      // Her ürünün KDV'sini ayrı hesapla ve topla
      let totalTax = 0;
      for (const item of items) {
        const itemRate = item.taxRate || taxRate || 20;
        // KDV DAHİL fiyattan KDV'yi çıkar
        const netAmount = item.lineTotal / (1 + itemRate / 100);
        const itemTax = item.lineTotal - netAmount;
        totalTax += itemTax;
      }
      taxAmount = parseFloat(totalTax.toFixed(2));
      warnings.push(`KDV tutarı ürün bazlı hesaplandı: ${taxAmount} TL`);
    } else if (subTotal && taxRate) {
      // Standart hesaplama
      if (isVatIncluded) {
        const netAmount = subTotal / (1 + taxRate / 100);
        taxAmount = parseFloat((subTotal - netAmount).toFixed(2));
        warnings.push(`KDV tutarı (dahil) hesaplandı: ${taxAmount} TL (${taxRate}%)`);
      } else {
        taxAmount = parseFloat((subTotal * taxRate / 100).toFixed(2));
        warnings.push(`KDV tutarı hesaplandı: ${taxAmount} TL (${taxRate}%)`);
      }
    }
  }
  
  return { taxAmount, taxRate };
};

const extractTurkishNumbers = (text: string): number[] => {
  // Türk sayı formatına uygun çıkarım
  // Önce nokta ve virgül içeren kompleks formatları yakala
  const matches = text.match(/\d+(?:[.,]\d+)*(?:[.,]\d{2})?/g) || [];
  return matches.map(m => {
    // Eğer hem nokta hem virgül varsa: "1.250,50" -> "1250.50"
    if (m.includes('.') && m.includes(',')) {
      return parseFloat(m.replace(/\./g, '').replace(',', '.'));
    }
    // Sadece virgül varsa: "12,50" -> "12.50"
    if (m.includes(',')) {
      return parseFloat(m.replace(',', '.'));
    }
    // Sadece nokta varsa:
    // "1.250" (3 basamak) -> 1250 (binlik ayırıcı)
    // "12.50" (2 basamak) -> 12.50 (ondalık)
    if (m.includes('.')) {
      const parts = m.split('.');
      const lastPart = parts[parts.length - 1];
      if (lastPart.length === 2 && parts.length === 2) {
        // İki haneli son kısım, muhtemelen kuruş
        return parseFloat(m);
      } else {
        // 3 haneli, binlik ayırıcı
        return parseFloat(m.replace(/\./g, ''));
      }
    }
    return parseFloat(m);
  }).filter(n => !isNaN(n));
};

const extractTotalAmount = (
  lines: string[], 
  subTotal: number | null, 
  items: ReceiptItem[], 
  taxAmount: number | null,
  warnings: string[]
): number | null => {
  const candidates: Array<{
    value: number;
    line: string;
    score: number;
  }> = [];
  
  const itemsTotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const expectedTotal = subTotal && taxAmount ? subTotal + taxAmount : null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const upperLine = line.toUpperCase();
    
    // Türk fişlerinde yaygın toplam kelimeleri
    let hasTotalKeyword = false;
    let keywordScore = 0;
    
    for (const keyword of TOTAL_KEYWORDS) {
      if (upperLine.includes(keyword)) {
        hasTotalKeyword = true;
        // Türk fişlerinde öncelik sırası
        if (keyword.includes('ÖDENECEK') || keyword.includes('ODENECEK')) keywordScore = 30;
        else if (keyword.includes('GENEL')) keywordScore = 20;
        else if (keyword.includes('TOPLAM')) keywordScore = 15;
        else keywordScore = 10;
        break;
      }
    }
    
    if (!hasTotalKeyword) continue;
    
    // Türk fişlerinde "ARA TOPLAM"ı atla
    if (upperLine.includes('ARA TOPLAM') || upperLine.includes('ARATOPLAM')) {
      continue;
    }
    
    // Türk sayılarını çıkar
    const numbers = extractTurkishNumbers(line);
    
    for (const number of numbers) {
      if (number <= 0 || number > 100000) continue;
      
      let score = keywordScore;
      
      // KDV tutarı gibi küçük tutarları atla
      if (number < 1 && itemsTotal > 100) {
        continue; // Kuruşluk tutarlar toplam olamaz
      }
      
      // Beklenen toplama yakınlık
      if (expectedTotal) {
        const diff = Math.abs(number - expectedTotal);
        const diffPercentage = diff / expectedTotal;
        
        if (diffPercentage < 0.01) score += 40;
        else if (diffPercentage < 0.03) score += 30;
        else if (diffPercentage < 0.05) score += 20;
        else if (diffPercentage < 0.10) score += 10;
      }
      
      // Ürün toplamına yakınlık (ÇOK ÖNEMLİ!)
      if (itemsTotal > 0) {
        const diff = Math.abs(number - itemsTotal);
        const diffPercentage = diff / itemsTotal;
        
        if (diffPercentage < 0.05) score += 30; // Arttırdık
        else if (diffPercentage < 0.10) score += 20; // Arttırdık
        else if (diffPercentage < 0.20) score += 10; // Yeni eklendi
      }
      
      // Türk para birimi puanı
      if (line.includes('TL') || line.includes('₺')) score += 5;
      
      // Fişin alt kısmında olma (Türk fişlerinde toplam genelde altta olur)
      if (i > lines.length * 0.7) score += 5;
      
      candidates.push({
        value: number,
        line,
        score
      });
    }
    
    // Türk fişlerinde toplam bir sonraki satırda da olabilir (ÇOK YAYGIN!)
    if (i + 1 < lines.length) {
      const nextLine = lines[i + 1];
      const nextNumbers = extractTurkishNumbers(nextLine);
      
      for (const number of nextNumbers) {
        if (number > 0 && number < 100000) {
          // Bir sonraki satırdaki sayı, anahtar kelime satırındaki sayıdan daha yüksek skor almalı
          let score = keywordScore + 10; // Daha da yüksek skor!
          
          if (expectedTotal) {
            const diff = Math.abs(number - expectedTotal);
            const diffPercentage = diff / expectedTotal;
            if (diffPercentage < 0.05) score += 40;
            else if (diffPercentage < 0.10) score += 30;
          }
          
          // Ürün toplamına yakınlık kontrolü (ÇOK ÖNEMLİ!)
          if (itemsTotal > 0) {
            const itemDiff = Math.abs(number - itemsTotal);
            const itemDiffPerc = itemDiff / itemsTotal;
            if (itemDiffPerc < 0.05) score += 30;
            else if (itemDiffPerc < 0.10) score += 20;
            else if (itemDiffPerc < 0.20) score += 10;
          }
          
          candidates.push({
            value: number,
            line: `${line} -> ${nextLine}`,
            score
          });
        }
      }
    }
    
    // İki satır sonrasına da bak (bazı fişlerde boş satır olabiliyor)
    if (i + 2 < lines.length) {
      const nextNextLine = lines[i + 2];
      const nextNextNumbers = extractTurkishNumbers(nextNextLine);
      
      for (const number of nextNextNumbers) {
        if (number > 0 && number < 100000) {
          let score = keywordScore;
          
          if (expectedTotal) {
            const diff = Math.abs(number - expectedTotal);
            const diffPercentage = diff / expectedTotal;
            if (diffPercentage < 0.05) score += 25;
          }
          
          candidates.push({
            value: number,
            line: `${line} -> ... -> ${nextNextLine}`,
            score
          });
        }
      }
    }
  }
  
  // Eğer aday yoksa, Türk fişlerinde en büyük makul sayıyı dene
  if (candidates.length === 0) {
    const allNumbers: number[] = [];
    
    for (const line of lines) {
      const numbers = extractTurkishNumbers(line);
      allNumbers.push(...numbers.filter(n => n > 1 && n < 100000));
    }
    
    if (allNumbers.length > 0) {
      const maxNumber = Math.max(...allNumbers);
      
      // Bu sayının makul bir toplam olup olmadığını kontrol et
      if (itemsTotal > 0 && maxNumber >= itemsTotal && maxNumber <= itemsTotal * 1.5) {
        warnings.push('Toplam tutar en büyük sayı olarak belirlendi');
        return maxNumber;
      }
    }
    
    warnings.push('Toplam tutar bulunamadı');
    return subTotal;
  }
  
  // En iyi adayı seç
  candidates.sort((a, b) => b.score - a.score);
  const bestCandidate = candidates[0];
  
  // İkinci aday yakınsa uyarı ver
  if (candidates.length > 1) {
    const scoreDiff = bestCandidate.score - candidates[1].score;
    if (scoreDiff < 10) {
      warnings.push(`Birden fazla toplam adayı bulundu. Seçilen: ${bestCandidate.value} TL`);
    }
  }
  
  return bestCandidate.value;
};

const extractDate = (lines: string[]): string | null => {
  // Türk tarih formatları
  const turkishDatePatterns = [
    // dd.mm.yyyy HH:MM (saat ile birlikte)
    /(\d{2})[./-](\d{2})[./-](\d{4})\s+\d{2}:\d{2}/,
    // dd.mm.yyyy (Türkiye'de en yaygın)
    /(\d{2})[./-](\d{2})[./-](\d{4})/,
    // dd.mm.yy
    /(\d{2})[./-](\d{2})[./-](\d{2})/,
    // yyyy-mm-dd
    /(\d{4})[./-](\d{2})[./-](\d{2})/,
    // TARİH: dd.mm.yyyy
    /TARİH[:\s]*(\d{2})[./-](\d{2})[./-](\d{4})/i,
    // Tarih/Saat: dd.mm.yyyy
    /TARİH[\/\\]SAAT[:\s]*(\d{2})[./-](\d{2})[./-](\d{4})/i,
    // Fiş Tarihi: dd.mm.yyyy
    /FİŞ TARİHİ[:\s]*(\d{2})[./-](\d{2})[./-](\d{4})/i
  ];
  
  for (const line of lines) {
    for (const pattern of turkishDatePatterns) {
      const match = line.match(pattern);
      if (!match) continue;
      
      let day, month, year;
      
      if (match[1].length === 4) {
        // yyyy-mm-dd
        year = match[1];
        month = match[2];
        day = match[3];
      } else {
        // dd.mm.yyyy veya dd.mm.yy
        day = match[1];
        month = match[2];
        year = match[3];
        
        // 2 haneli yılı 4 haneye çevir
        if (year.length === 2) {
          const yearNum = parseInt(year, 10);
          // 2000'den sonra doğru tahmin
          year = yearNum >= 0 && yearNum <= 30 ? `20${year}` : `19${year}`;
        }
      }
      
      // Geçerli tarih kontrolü
      const date = new Date(`${year}-${month}-${day}`);
      if (!isNaN(date.getTime())) {
        const currentYear = new Date().getFullYear();
        const yearNum = parseInt(year, 10);
        
        // 2020-2030 arası tarihler geçerli
        if (yearNum >= 2020 && yearNum <= currentYear + 1) {
          return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        }
      }
    }
  }
  
  return null;
};

const extractPaymentMethod = (lines: string[]): 'cash' | 'card' | 'other' | null => {
  const text = lines.join(' ').toUpperCase();
  
  // Türk fişlerinde yaygın ödeme yöntemleri
  const turkishPaymentPatterns = {
    card: ['KREDI KARTI', 'KREDİ KARTI', 'BANKA KARTI', 'DEBIT KART', 'DEBIT', 
           'VISA', 'MASTERCARD', 'MASTER CARD', 'AMEX', 'AMERICAN EXPRESS',
           'BONUS', 'MAXIMUM', 'WORLD', 'AXESS', 'CARDFINANS',
           'YAPI KREDI', 'GARANTI', 'ISBANK', 'AKBANK', 'ZIRAAT'],
    cash: ['NAKİT', 'NAKIT', 'NAKİT ÖDEME', 'NAKIT ODEME', 'PARA', 'PARA ÜSTÜ', 'PARA USTU'],
    other: ['HAVALE', 'EFT', 'ÇEK', 'CEK', 'SENET', 'TAKSİT', 'TAKSIT', 'DİĞER', 'DIGER']
  };
  
  // Önce kart ödemelerini kontrol et (Türkiye'de en yaygın)
  for (const keyword of turkishPaymentPatterns.card) {
    if (text.includes(keyword)) {
      return 'card';
    }
  }
  
  // Sonra nakit
  for (const keyword of turkishPaymentPatterns.cash) {
    if (text.includes(keyword)) {
      return 'cash';
    }
  }
  
  // Diğer yöntemler
  for (const keyword of turkishPaymentPatterns.other) {
    if (text.includes(keyword)) {
      return 'other';
    }
  }
  
  return null;
};

// =======================
// TÜRKİYE ÖZEL VALIDASYON
// =======================

const validateTurkishReceipt = (
  items: ReceiptItem[],
  totalAmount: number | null,
  subTotal: number | null,
  taxInfo: { taxAmount: number | null; taxRate: number | null }
): boolean => {
  // En az bir ürün olmalı
  if (items.length === 0) {
    return false;
  }
  
  // Türk fişi için ürün validasyonu
  for (const item of items) {
    if (item.unitPrice <= 0 || item.quantity <= 0 || item.lineTotal <= 0) {
      return false;
    }
    
    // Türk fişlerinde kuruş hassasiyeti
    const calculatedTotal = item.quantity * item.unitPrice;
    if (Math.abs(calculatedTotal - item.lineTotal) > 0.005) { // 0.5 kuruş tolerans
      return false;
    }
  }
  
  // Türk KDV oranı kontrolü
  if (taxInfo.taxRate) {
    const validTurkishRates = [1, 8, 10, 20];
    if (!validTurkishRates.includes(taxInfo.taxRate)) {
      return false;
    }
  }
  
  // Tutarlılık kontrolü
  if (totalAmount && subTotal && taxInfo.taxAmount) {
    const calculatedTotal = subTotal + taxInfo.taxAmount;
    const tolerance = Math.max(0.01, totalAmount * 0.02); // %2 tolerans
    
    // Türk fişlerinde genellikle tam kuruş uyumu beklenir
    if (Math.abs(totalAmount - calculatedTotal) > tolerance) {
      return false;
    }
  }
  
  // Türk fişi için minimum validasyon
  return items.length > 0;
};

const calculateConfidence = (data: {
  storeName: string | null;
  items: ReceiptItem[];
  totalAmount: number | null;
  taxAmount: number | null;
  receiptDate: string | null;
  subTotal: number | null;
}): ConfidenceScores => {
  const scores: ConfidenceScores = {
    storeName: 0,
    totalAmount: 0,
    items: 0,
    tax: 0,
    date: 0,
    overall: 0
  };
  
  // Türk mağaza güven skoru
  scores.storeName = data.storeName ? 
    (TURKISH_STORES.some(store => data.storeName?.includes(store)) ? 0.95 : 0.65) : 
    0.15;
  
  // Toplam tutar güveni
  if (data.totalAmount) {
    scores.totalAmount = 0.85;
    
    // Türk KDV uyum kontrolü
    if (data.subTotal && data.taxAmount) {
      const calculatedTotal = data.subTotal + data.taxAmount;
      const diff = Math.abs(data.totalAmount - calculatedTotal);
      
      // Türk fişlerinde kuruş hassasiyeti
      if (diff < 0.01) scores.totalAmount = 1.0;        // Tam uyum
      else if (diff < 0.05) scores.totalAmount = 0.9;   // 5 kuruş fark
      else if (diff < 0.10) scores.totalAmount = 0.8;   // 10 kuruş fark
      else if (diff < 0.50) scores.totalAmount = 0.7;   // 50 kuruş fark
    }
  } else {
    scores.totalAmount = 0.25;
  }
  
  // Ürünler güven skoru
  scores.items = Math.min(1.0, data.items.length / 8);
  if (data.items.length >= 3) scores.items = Math.max(scores.items, 0.75);
  
  // KDV güven skoru (Türk oranlarına göre)
  scores.tax = data.taxAmount ? 0.75 : 0.25;
  
  // Tarih güven skoru
  scores.date = data.receiptDate ? 0.65 : 0.15;
  
  // Türk fişi için ağırlıklar
  const turkishWeights = {
    storeName: 0.12,
    totalAmount: 0.28,
    items: 0.35,
    tax: 0.15,
    date: 0.10
  };
  
  scores.overall = parseFloat((
    scores.storeName * turkishWeights.storeName +
    scores.totalAmount * turkishWeights.totalAmount +
    scores.items * turkishWeights.items +
    scores.tax * turkishWeights.tax +
    scores.date * turkishWeights.date
  ).toFixed(2));
  
  return scores;
};

const determineExtractionMethod = (lines: string[], itemCount: number): string => {
  if (itemCount === 0) return 'no_items';
  
  const text = lines.join(' ');
  
  // Türk fişi pattern'lerini kontrol et
  const hasTurkishPatterns = (text.match(/[xX×]/g) || []).length > 1;
  const hasTurkishPrices = (text.match(/\d+[.,]\d{2}/g) || []).length > 3;
  const hasTurkishKeywords = /TOPLAM|KDV|TL|₺|TRY/i.test(text);
  const hasTurkishStore = TURKISH_STORES.some(store => text.includes(store));
  
  if (hasTurkishStore && hasTurkishPatterns && hasTurkishPrices && hasTurkishKeywords) {
    return 'turkish_advanced';
  } else if (hasTurkishPrices && hasTurkishKeywords) {
    return 'turkish_basic';
  } else {
    return 'turkish_simple';
  }
};

// =======================
// POST-PROCESSING (Türkiye optimizasyonlu)
// =======================

const postProcessReceipt = (receipt: ParsedReceipt, warnings: string[]): ParsedReceipt => {
  const result = { ...receipt };
  
  // Türk KDV oranını geçerli değerlere yuvarla
  if (result.taxRate) {
    const validTurkishRates = [1, 8, 10, 20];
    if (!validTurkishRates.includes(result.taxRate)) {
      // En yakın geçerli orana yuvarla
      let closestRate = validTurkishRates[0];
      let minDiff = Math.abs(result.taxRate - validTurkishRates[0]);
      
      for (const rate of validTurkishRates) {
        const diff = Math.abs(result.taxRate - rate);
        if (diff < minDiff) {
          minDiff = diff;
          closestRate = rate;
        }
      }
      
      result.taxRate = closestRate;
      warnings.push(`KDV oranı ${receipt.taxRate}% -> ${closestRate}% olarak düzeltildi`);
    }
  }
  
  // Eğer toplam tutar çok düşükse yeniden hesapla
  if (result.totalAmount && result.subTotal && result.totalAmount < result.subTotal * 0.5) {
    warnings.push(`Toplam tutar hatalı (${result.totalAmount} TL < ${result.subTotal} TL), yeniden hesaplanıyor...`);
    result.totalAmount = null;
  }
  
  // Eksik toplam tutarı hesapla (Türk KDV'si ile)
  if (!result.totalAmount && result.subTotal) {
    if (result.taxAmount) {
      result.totalAmount = parseFloat((result.subTotal + result.taxAmount).toFixed(2));
      warnings.push('Toplam tutar KDV eklenerek hesaplandı');
    } else {
      // KDV yoksa ara toplamı kullan
      result.totalAmount = result.subTotal;
      warnings.push('KDV bulunamadı, ara toplam kullanıldı');
    }
  }
  
  // Eksik KDV tutarını hesapla
  if (!result.taxAmount && result.totalAmount && result.subTotal && result.taxRate) {
    // Türk KDV hesaplama mantığı
    const calculatedTax = parseFloat((result.subTotal * result.taxRate / 100).toFixed(2));
    result.taxAmount = calculatedTax;
    warnings.push(`KDV tutarı ${result.taxRate}% oranıyla hesaplandı`);
  }
  
  // Eksik ara toplamı hesapla
  if (!result.subTotal && result.items.length > 0) {
    result.subTotal = calculateSubTotal(result.items);
  }
  
  // Türk para birimi formatına uygun yuvarla
  if (result.totalAmount) result.totalAmount = parseFloat(result.totalAmount.toFixed(2));
  if (result.subTotal) result.subTotal = parseFloat(result.subTotal.toFixed(2));
  if (result.taxAmount) result.taxAmount = parseFloat(result.taxAmount.toFixed(2));
  
  // Türk ürün fiyatlarını yuvarla
  result.items = result.items.map(item => ({
    ...item,
    unitPrice: parseFloat(item.unitPrice.toFixed(2)),
    lineTotal: parseFloat(item.lineTotal.toFixed(2))
  }));
  
  // Güven skorunu güncelle
  result.confidence = calculateConfidence({
    storeName: result.storeName,
    items: result.items,
    totalAmount: result.totalAmount,
    taxAmount: result.taxAmount,
    receiptDate: result.receiptDate,
    subTotal: result.subTotal
  });
  
  // Türk validasyonunu tekrar yap
  result.isValid = validateTurkishReceipt(
    result.items,
    result.totalAmount,
    result.subTotal,
    { taxAmount: result.taxAmount, taxRate: result.taxRate }
  );
  
  return result;
};

const createEmptyReceipt = (
  rawText: string, 
  method: string,
  warnings: string[] = []
): ParsedReceipt => {
  return {
    storeName: null,
    totalAmount: null,
    receiptDate: null,
    paymentMethod: null,
    currency: 'TRY',
    items: [],
    subTotal: null,
    taxAmount: null,
    taxRate: null,
    rawText,
    confidence: {
      storeName: 0,
      totalAmount: 0,
      items: 0,
      tax: 0,
      date: 0,
      overall: 0
    },
    isValid: false,
    extractionMethod: method,
    warnings
  };
};

// =======================
// TÜRKÇE YARDIMCI FONKSİYONLAR
// =======================

export const formatReceiptForDisplay = (receipt: ParsedReceipt): string => {
  const lines: string[] = [];
  
  lines.push(`=== FİŞ BİLGİLERİ (Güven: %${Math.round(receipt.confidence.overall * 100)}) ===`);
  lines.push(`Mağaza: ${receipt.storeName || 'Bilinmiyor'}`);
  lines.push(`Tarih: ${receipt.receiptDate || 'Bilinmiyor'}`);
  lines.push(`Toplam: ${receipt.totalAmount?.toFixed(2) || '?'} ${receipt.currency}`);
  lines.push(`Ara Toplam: ${receipt.subTotal?.toFixed(2) || '?'} ${receipt.currency}`);
  lines.push(`KDV: ${receipt.taxAmount?.toFixed(2) || '?'} ${receipt.currency} (%${receipt.taxRate || '?'})`);
  lines.push(`Ödeme: ${getTurkishPaymentMethod(receipt.paymentMethod)}`);
  lines.push(`Geçerli: ${receipt.isValid ? 'Evet' : 'Hayır'}`);
  lines.push(`Yöntem: ${receipt.extractionMethod}`);
  
  if (receipt.warnings.length > 0) {
    lines.push(`\n⚠️ Uyarılar (${receipt.warnings.length}):`);
    receipt.warnings.forEach((warning, i) => {
      lines.push(`  ${i + 1}. ${warning}`);
    });
  }
  
  if (receipt.items.length > 0) {
    lines.push(`\n🛒 Ürünler (${receipt.items.length}):`);
    receipt.items.forEach((item, index) => {
      lines.push(`  ${index + 1}. ${item.productName} - ${item.quantity} x ${item.unitPrice.toFixed(2)} = ${item.lineTotal.toFixed(2)} ${receipt.currency}`);
    });
  }
  
  return lines.join('\n');
};

const getTurkishPaymentMethod = (method: string | null): string => {
  switch (method) {
    case 'cash': return 'Nakit';
    case 'card': return 'Kart';
    case 'other': return 'Diğer';
    default: return 'Bilinmiyor';
  }
};

export const getReceiptSummary = (receipt: ParsedReceipt) => {
  return {
    mağaza: receipt.storeName,
    toplam: receipt.totalAmount?.toFixed(2),
    ürünSayısı: receipt.items.length,
    tarih: receipt.receiptDate,
    geçerli: receipt.isValid,
    güven: receipt.confidence.overall,
    KDV_Oranı: receipt.taxRate ? `%${receipt.taxRate}` : null
  };
};

// =======================
// CONSOLE LOG FONKSİYONU
// =======================

export const logParsedReceipt = (receipt: ParsedReceipt): void => {
  console.log('\n========================================');
  console.log('📄 FİŞ ANALİZ SONUCU');
  console.log('========================================');
  
  console.log(`🏪 Mağaza: ${receipt.storeName || 'Bilinmiyor'}`);
  console.log(`📅 Tarih: ${receipt.receiptDate || 'Bilinmiyor'}`);
  console.log(`💳 Ödeme: ${getTurkishPaymentMethod(receipt.paymentMethod)}`);
  console.log(`💰 Para Birimi: ${receipt.currency}`);
  
  console.log('\n--- TUTARLAR ---');
  console.log(`Ara Toplam: ${receipt.subTotal?.toFixed(2) || '?'} ${receipt.currency}`);
  console.log(`KDV Tutarı: ${receipt.taxAmount?.toFixed(2) || '?'} ${receipt.currency} (%${receipt.taxRate || '?'})`);
  console.log(`TOPLAM: ${receipt.totalAmount?.toFixed(2) || '?'} ${receipt.currency}`);
  
  console.log('\n--- ÜRÜNLER ---');
  if (receipt.items.length > 0) {
    receipt.items.forEach((item, index) => {
      console.log(`  ${index + 1}. ${item.productName}`);
      console.log(`     ${item.quantity} x ${item.unitPrice.toFixed(2)} = ${item.lineTotal.toFixed(2)} ${receipt.currency}`);
    });
  } else {
    console.log('  Ürün bulunamadı');
  }
  
  console.log('\n--- GÜVEN SKORLARI ---');
  console.log(`  Mağaza: %${Math.round(receipt.confidence.storeName * 100)}`);
  console.log(`  Toplam: %${Math.round(receipt.confidence.totalAmount * 100)}`);
  console.log(`  Ürünler: %${Math.round(receipt.confidence.items * 100)}`);
  console.log(`  KDV: %${Math.round(receipt.confidence.tax * 100)}`);
  console.log(`  Tarih: %${Math.round(receipt.confidence.date * 100)}`);
  console.log(`  GENEL: %${Math.round(receipt.confidence.overall * 100)}`);
  
  console.log('\n--- META ---');
  console.log(`Geçerli: ${receipt.isValid ? '✅ Evet' : '❌ Hayır'}`);
  console.log(`Yöntem: ${receipt.extractionMethod}`);
  
  if (receipt.warnings.length > 0) {
    console.log('\n--- UYARILAR ---');
    receipt.warnings.forEach((warning, i) => {
      console.log(`  ⚠️ ${i + 1}. ${warning}`);
    });
  }
  
  console.log('========================================\n');
};