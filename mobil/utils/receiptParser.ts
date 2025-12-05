

export interface ParsedReceipt {
  store_name: string | null;
  total_amount: number | null;
  receipt_date: string | null;
  payment_method: 'cash' | 'card' | 'other' | null;
  tax_amount: number | null;
  tax_rate: number | null;
  currency: string;
  items: ReceiptItem[];
  raw_text: string;
  sub_total?: number; 
  is_valid?: boolean; 
}

export interface ReceiptItem {
  productName: string;
  price: number | null; 
  quantity: number;
  lineTotal?: number; 
}

export const parseReceiptText = (ocrText: string): ParsedReceipt => {
  const lines = ocrText.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  
  const result: ParsedReceipt = {
    store_name: null,
    total_amount: null,
    receipt_date: null,
    payment_method: null,
    tax_amount: null,
    tax_rate: null,
    currency: 'TRY',
    items: [],
    raw_text: ocrText
  };

  result.store_name = extractStoreName(lines);
  result.items = extractItems(lines);
  
  // Ürünlerden sub_total hesapla
  result.sub_total = result.items.reduce((sum, item) => {
    return sum + (item.lineTotal || (item.price || 0) * item.quantity);
  }, 0);
  result.sub_total = parseFloat(result.sub_total.toFixed(2));
  
  console.log(`\n💡 Ürünler toplamı (sub_total): ${result.sub_total} TL\n`);
  
  const taxInfo = extractTaxInfo(lines);
  result.tax_amount = taxInfo.tax_amount;
  result.tax_rate = taxInfo.tax_rate || 10; 
  
  if (!result.tax_amount && result.sub_total > 0) {
    result.tax_amount = parseFloat((result.sub_total * 0.18).toFixed(2));
  }

  // Toplam tutarı bul - ürünler toplamını da gönder ki karşılaştırsın
  result.total_amount = extractTotalAmount(lines, result.sub_total);
  
  if (!result.total_amount && result.sub_total > 0) {
    result.total_amount = parseFloat((result.sub_total + (result.tax_amount || 0)).toFixed(2));
  }

  result.receipt_date = extractDate(lines);

  result.payment_method = extractPaymentMethod(lines);
  
  result.is_valid = validateReceipt(result);

  return result;
};


const validateReceipt = (receipt: ParsedReceipt): boolean => {
  try {
    if (!receipt.items || receipt.items.length === 0) {
      return false;
    }
    
    const subTotal = receipt.sub_total || 0;
    const total = receipt.total_amount || 0;
    const tax = receipt.tax_amount || 0;
    
    if (total <= 0) {
      return subTotal > 0;
    }
    
    const tolerance = 10.0; 
    
    if (Math.abs(subTotal + tax - total) < tolerance) {
      return true;
    }
    
    if (Math.abs(subTotal - total) < tolerance) {
      return true;
    }
    
    if (total > 0 && Math.abs(subTotal - total) / total < 0.20) {
      return true;
    }
    
    return false;
  } catch {
    return false;
  }
};


const extractStoreName = (lines: string[]): string | null => {
  const storeKeywords = [
    'MARKET', 'MAĞAZA', 'A101', 'BİM', 'ŞOK', 'MIGROS', 'FILE', 
    'CARREFOUR', 'LC WAIKIKI', 'WATSONS', 'GRATIS', 'ROSSMANN'
  ];
  
  for (let i = 0; i < Math.min(5, lines.length); i++) {
    const line = lines[i].trim();
    const upperLine = line.toUpperCase();
    
    for (const keyword of storeKeywords) {
      if (upperLine.includes(keyword)) {
        return line;
      }
    }
  }
  
  for (let i = 0; i < Math.min(3, lines.length); i++) {
    const line = lines[i].trim();
    if (line.length > 3 && /[a-zA-ZğüşıöçĞÜŞİÖÇ]{3,}/.test(line)) {
      return line;
    }
  }
  
  return 'Bilinmeyen Mağaza';
};

  const extractTotalAmount = (lines: string[], itemsTotal: number = 0): number | null => {
    const candidates: { value: number; priority: number; source: string; diff: number }[] = [];
    
    console.log('💰 Toplam tutar aranıyor...');
    console.log('📋 Tüm satırlar:', lines.map((l, i) => `${i}: ${l}`).join('\n'));
         
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      const upperLine = line.toUpperCase();
      
      // ARA TOPLAM'ı atla
      if (upperLine.includes('ARA TOPLAM') || upperLine.includes('ARATOPLAM')) {
        console.log(`⏭️ ARA TOPLAM atlandı: ${line}`);
        continue;
      }
      
      let priority = 0;
      let shouldCheck = false;
      
      // Öncelik belirleme (düşük numara = yüksek öncelik)
      if (upperLine.includes('ÖDENECEK') || upperLine.includes('ODENECEK')) {
        priority = 1;
        shouldCheck = true;
      } else if ((upperLine.includes('KDV') && upperLine.includes('DAHIL')) || upperLine.includes('KDV DAHIL')) {
        priority = 2;
        shouldCheck = true;
      } else if (upperLine.includes('GENEL TOPLAM')) {
        priority = 3;
        shouldCheck = true;
      } else if (upperLine.includes('TOPLAM') || upperLine.includes('TOTAL')) {
        priority = 4;
        shouldCheck = true;
      }
      
      if (!shouldCheck) continue;
      
      // Aynı satırda sayı ara (=, $, * gibi işaretlerle başlayabilir)
      const numberMatches = Array.from(line.matchAll(/([=*#$·]?[\d,]+\.?\d*)/g));
      for (const match of numberMatches) {
        const value = cleanPrice(match[1]);
        if (value && value > 5 && value < 100000) {
          const diff = Math.abs(value - itemsTotal);
          console.log(`  💵 Aday: "${line}" -> ${value} TL (Fark: ${diff.toFixed(2)} TL)`);
          candidates.push({ value, priority, source: line, diff });
        }
      }
      
      // Sonraki 5 satırı kontrol et (toplam değeri daha aşağıda olabilir)
      for (let j = i + 1; j <= Math.min(i + 5, lines.length - 1); j++) {
        const nextLine = lines[j].trim();
        
        // Boş satırları atla
        if (!nextLine || nextLine.length === 0) continue;
        
        // Sadece sayı içeren satırları kontrol et (=, $, * ile başlayabilir, boşluk olabilir)
        const priceMatch = nextLine.match(/^([=*#$·]?)\s*([\d,]+\.?\d*)[\s]*(?:TL|₺)?$/i);
        if (priceMatch) {
          const value = cleanPrice(priceMatch[2]);
          if (value && value > 5 && value < 100000) {
            const diff = Math.abs(value - itemsTotal);
            console.log(`  💵 ${j-i} satır sonra aday: "${nextLine}" -> ${value} TL (Fark: ${diff.toFixed(2)} TL)`);
            candidates.push({ value, priority: priority - 0.3, source: `${line} -> [+${j-i}] ${nextLine}`, diff });
          }
        }
      }
    }
  
    // Eğer hiç aday bulunamadıysa, tüm satırlarda = veya $ ile başlayan büyük sayıları ara
    if (candidates.length === 0) {
      console.log('⚠️ Toplam satırlarında bulunamadı, tüm satırlarda aranıyor...');
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // = veya $ ile başlayan satırları kontrol et
        const bigNumberMatch = line.match(/^([=$])[\s]*([\d,]+\.?\d*)[\s]*(?:TL|₺)?$/i);
        if (bigNumberMatch) {
          const value = cleanPrice(bigNumberMatch[2]);
          if (value && value > 10 && value < 100000) {
            const diff = Math.abs(value - itemsTotal);
            console.log(`  💵 Büyük sayı bulundu: "${line}" -> ${value} TL (Fark: ${diff.toFixed(2)} TL)`);
            candidates.push({ value, priority: 5, source: line, diff });
          }
        }
      }
    }
    
    if (candidates.length === 0) {
      console.log('⚠️ Hiçbir yerde toplam tutar bulunamadı');
      return null;
    }
    
    // Ürünler toplamına en yakın olanı seç
    console.log(`\n🔍 Karşılaştırma yapılıyor (Ürünler toplamı: ${itemsTotal} TL):`);
    
    // Farka göre sırala (en küçük fark en üstte)
    candidates.sort((a, b) => {
      // Önce farka bak
      if (Math.abs(a.diff - b.diff) > 0.5) {
        return a.diff - b.diff;
      }
      // Fark çok yakınsa önceliğe bak
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }
      // Her şey eşitse büyük değeri seç
      return b.value - a.value;
    });
    
    const selected = candidates[0];
    
    console.log(`\n✅ SEÇILEN TOPLAM: ${selected.value} TL`);
    console.log(`   Kaynak: "${selected.source}"`);
    console.log(`   Ürünlerle fark: ${selected.diff.toFixed(2)} TL`);
    console.log(`   Toplam ${candidates.length} aday bulundu\n`);
    
    return selected.value;
  };

const cleanPrice = (priceStr: string): number | null => {
try {
  if (!priceStr || priceStr.trim() === '') return null;
  
  // =, *, #, $, ·, ₺, TL ve boşlukları temizle
  let cleaned = priceStr.replace(/[=·*#$₺TL\s]/g, '');
  
  if (cleaned.includes(',') && cleaned.includes('.')) {
    const lastComma = cleaned.lastIndexOf(',');
    const lastDot = cleaned.lastIndexOf('.');
    if (lastComma > lastDot) {
      cleaned = cleaned.replace(/\./g, '').replace(',', '.');
    } else {
      cleaned = cleaned.replace(/,/g, '');
    }
  } else if (cleaned.includes(',')) {
    const parts = cleaned.split(',');
    if (parts.length === 2 && parts[1].length <= 2) {
      cleaned = cleaned.replace(',', '.');
    } else {
      cleaned = cleaned.replace(/,/g, '');
    }
  }
  
  const value = parseFloat(cleaned);
  return isNaN(value) || value < 0 ? null : value;
} catch {
  return null;
}
};

const extractAmountFromLine = (line: string): number | null => {

  const patterns = [
    /([·*#$]?[\d,]+\.?\d+)\s*(?:TL|₺|TRY)/i,  
    /([·*#$]?[\d,]+\.?\d+)$/,                   
    /(?:TL|₺|TRY)\s*([·*#$]?[\d,]+\.?\d+)/i,   
    /[xX×]\s*([·*#$]?[\d,]+\.?\d+)/,          
  ];

  for (const pattern of patterns) {
    const match = line.match(pattern);
    if (match) {
      return cleanPrice(match[1]);
    }
  }

  return null;
};


const extractDate = (lines: string[]): string | null => {
  const datePatterns = [
    /TARİH[:\s]*(\d{2})[.\/](\d{2})[.\/](\d{4})/i,  
    /(\d{2})[.\/](\d{2})[.\/](\d{4})/,              
    /(\d{2})[.\/](\d{2})[.\/](\d{2})/,              
  ];

  for (const line of lines) {
    for (const pattern of datePatterns) {
      const match = line.match(pattern);
      if (match) {
        const day = match[1];
        const month = match[2];
        let year = match[3];
        
        if (year && year.length === 2) {
          year = `20${year}`;
        }
        
        return `${year}-${month}-${day}`;
      }
    }
  }

  return null;
};


const extractPaymentMethod = (lines: string[]): 'cash' | 'card' | 'other' | null => {
  const text = lines.join(' ').toUpperCase();
  
  
  if (text.includes('BANKA KARTI') || 
      text.includes('BANKKART') ||
      text.includes('KREDİ KARTI') || 
      text.includes('KART') || 
      text.includes('CARD') || 
      text.includes('KREDİ') ||
      text.includes('VISA') ||
      text.includes('MASTERCARD')) {
    return 'card';
  }
  
  if (text.includes('NAKİT') || text.includes('NAKIT') || text.includes('CASH')) {
    return 'cash';
  }
  
  return null;
};


const extractTaxInfo = (lines: string[]): { tax_amount: number | null; tax_rate: number | null } => {
  let tax_amount: number | null = null;
  let tax_rate: number | null = null;

  console.log(' KDV bilgisi aranıyor...');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const upperLine = line.toUpperCase();
    
   
    if (upperLine.includes('KDV') && !upperLine.includes('DAHIL')) {
      
      if (upperLine.includes('TUTAR') || upperLine.includes('TOPKDV')) {

        const numberMatches = line.matchAll(/([·*#$]?[\d,]+\.?\d+)/g);
        for (const match of numberMatches) {
          const value = cleanPrice(match[1]);

          if (value && value > 0.1 && value < 200) {
            console.log(`KDV bulundu: ${line} -> ${value} TL`);
            tax_amount = value;
            break;
          }
        }
        
        if (!tax_amount && i + 1 < lines.length) {
          const nextLine = lines[i + 1].trim();
          if (/^[*#$·\d\s,.]+$/.test(nextLine)) {
            const value = cleanPrice(nextLine);
            if (value && value > 0.1 && value < 200) {
              console.log(` KDV alt satırda: ${nextLine} -> ${value} TL`);
              tax_amount = value;
            }
          }
        }
      }
    }
    
    const ratePatterns = [
      /(%?\d+)%?\s*KDV/i,
      /KDV\s*(%?\d+)%?/i,
      /KDV.*?%(\d+)/i,
    ];
    
    for (const pattern of ratePatterns) {
      const rateMatch = line.match(pattern);
      if (rateMatch) {
        const rate = parseFloat(rateMatch[1].replace('%', ''));
        if (rate > 0 && rate <= 100) {
          tax_rate = rate;
          console.log(`KDV oranı: %${rate}`);
          break;
        }
      }
    }
  }
  
  if (tax_amount) {
    console.log(`KDV tutarı: ${tax_amount} TL`);
  } else {
    console.log('KDV tutarı bulunamadı');
  }

  return { tax_amount, tax_rate };
};

const extractItems = (lines: string[]): ReceiptItem[] => {
  const items: ReceiptItem[] = [];
  
  const skipKeywords = [
    'TOPLAN', 'TOPLAM', 'TOTAL', 'GENEL', 'TUTAR', 'ÖDEME',
    'NAKİT', 'KART', 'FATURA', 'FİŞ', 'NO:', 'TARIH',
    'SIRA', 'ETT', 'TCKN', 'VKN', 'VDM', 'VOM', 'MATRAH', 'POS',
    'REF', 'ONAY', 'BANK', 'TEŞEKKÜR', 'SATIŞ', 'IPPOS',
    'VISA', 'MASTERCARD', 'AMERICAN', 'IBAN', 'SARIGEZI'
  ];
  
  const invalidProductNames = [
    'SARIYAZI', 'SARIYER', 'ŞİŞLİ', 'KADIKÖY', 'ÜSKÜDAR', 'BEŞİKTAŞ',
    'BEYKOZ', 'BEYOĞLU', 'ANKARA', 'İZMİR', 'BURSA', 'ANTALYA',
    'ADANA', 'KONYA', 'GAZİANTEP', 'ESKİŞEHİR', 'KOCAELI', 'MERSİN',
    'ISTANBUL', 'İSTANBUL', 'TURKEY', 'TÜRKİYE', 'TURKIYE',
    'CADDE', 'SOKAK', 'MAHALLE', 'BULVARI', 'CD.', 'SK.', 'MAH.',
    'SARIYAZI', 'SARIGAZİ', 'SARIGEZI', 'MALTEPE', 'PENDİK', 'KARTAL',
    'AYRILIK', 'AYDINLIK', 'UMRANIYE', 'ÜMRANİYE', 'ATAŞEHİR',
    'SELÇUKLU', 'YAZIR', 'VKN', 'VOM', 'VDM'
  ];
  

  const isValidProductName = (name: string): boolean => {
    if (!name || name.length < 2) return false;
    
    const upperName = name.toUpperCase().trim();
    
    
    if (skipKeywords.some(kw => upperName.includes(kw))) {
      return false;
    }
    
    
    if (invalidProductNames.some(invalid => {
      const upperInvalid = invalid.toUpperCase();
      return upperName === upperInvalid || upperName.includes(upperInvalid);
    })) {
      console.log(`Geçersiz ürün adı atlandı: ${name}`);
      return false;
    }
    
    
    if (/^\d+$/.test(name)) {
      return false;
    }
    
    
    const letterCount = (name.match(/[a-zA-ZğüşıöçĞÜŞİÖÇ]/g) || []).length;
    return letterCount >= 2;
  };
  
  console.log(`🔍 Parsing ${lines.length} satır...`);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    
    if (!line || line.length < 3) continue;
    
    
    const upperLine = line.toUpperCase();
    const hasSkipKeyword = skipKeywords.some(keyword => {
      if (keyword === 'KDV') return false; 
      return upperLine.includes(keyword);
    });
    
    if (hasSkipKeyword) {
      console.log(`tlıyorum (keyword): ${line}`);
      continue;
    }
    
    
    if (/^\d{10,}$/.test(line)) {
      console.log(`Atlıyorum (barkod/uzun sayı): ${line}`);
      continue;
    }
    
    if (/^[*#$·.\s,]+$/.test(line) || line.length === 1) {
      console.log(`Atlıyorum (geçersiz): ${line}`);
      continue;
    }
    
    let itemFound = false;
    
    // VKN gibi uzun sayılar içeren satırları atla
    if (/\d{10,}/.test(line)) {
      continue;
    }
    
    const nameKdvPricePattern = /^([a-zA-ZğüşıöçĞÜŞİÖÇ\s]{3,}?)\s+(?:%?(\d+))?\s*([*#$·\d,.]+)\s*(?:TL|₺)?$/i;
    const match_format1 = line.match(nameKdvPricePattern);
    
    if (match_format1) {
      const productName = match_format1[1].trim();
      const kdvRate = match_format1[2] ? parseInt(match_format1[2]) : null;
      const priceStr = match_format1[3];
      const unitPrice = cleanPrice(priceStr);

      if (unitPrice && unitPrice > 0 && unitPrice < 10000 && isValidProductName(productName)) {
        const lineTotal = 1 * unitPrice;
        items.push({
          productName,
          price: unitPrice,
          quantity: 1,
          lineTotal: parseFloat(lineTotal.toFixed(2))
        });
        console.log(`Format 1: ${productName} - 1 x ${unitPrice} = ${lineTotal}${kdvRate ? ` (KDV %${kdvRate})` : ''}`);
        itemFound = true;
        continue;
      }
    }
    
   
    if (!itemFound) {
      const qtyPricePattern = /^(\d+(?:\.\d+)?)\s+(?:ad|adet|kg|gr|KG|GR)?\s*[xX×]\s*([*#$·\d,.]+)$/i;
      const match_format2 = line.match(qtyPricePattern);
      
      if (match_format2 && i + 1 < lines.length) {
        const quantity = parseFloat(match_format2[1].replace(',', '.'));
        const unitPrice = cleanPrice(match_format2[2]);
        const nextLine = lines[i + 1].trim();
        
        
        if (nextLine && isValidProductName(nextLine)) {
          if (unitPrice && unitPrice > 0 && quantity > 0 && unitPrice < 10000) {
            const lineTotal = quantity * unitPrice;
            items.push({
              productName: nextLine,
              price: unitPrice,
              quantity,
              lineTotal: parseFloat(lineTotal.toFixed(2))
            });
            console.log(`✅ Format 2: ${nextLine} - ${quantity} x ${unitPrice} = ${lineTotal}`);
            i++; 
            itemFound = true;
            continue;
          }
        }
      }
    }
    
    
    if (!itemFound) {
      const singleLinePatterns = [
       
        { regex: /(\d+(?:\.\d+)?)\s+(?:ad|adet)?\s*[xX×]\s*([*#$·\d,.]+)\s+(.{3,})/i, type: 'qty_price_name' },
        
        { regex: /([\d,.]+)\s+(?:kg|gr|KG|GR)\s*[xX×]\s*([*#$·\d,.]+)\s+(.{3,})/i, type: 'qty_price_name' },
        
        { regex: /(.{3,}?)\s+[xX×]?(\d+)[xX×]?\s+([*#$·\d,.]+)\s*(?:TL|₺)?$/i, type: 'name_qty_price' },
      ];
      
      for (const { regex, type } of singleLinePatterns) {
        const match = line.match(regex);
        if (match) {
          try {
            let productName: string;
            let quantity: number;
            let unitPrice: number | null;
            
            if (type === 'qty_price_name') {
              
              quantity = parseFloat(match[1].replace(',', '.'));
              unitPrice = cleanPrice(match[2]);
              productName = match[3].trim();
            } else {
              
              productName = match[1].trim();
              quantity = parseFloat(match[2].replace(',', '.'));
              unitPrice = cleanPrice(match[3]);
            }
            
            
            if (unitPrice && unitPrice > 0 && quantity > 0 && unitPrice < 10000 && isValidProductName(productName)) {
              const lineTotal = quantity * unitPrice;
              items.push({
                productName,
                price: unitPrice,
                quantity,
                lineTotal: parseFloat(lineTotal.toFixed(2))
              });
              console.log(`Format 3: ${productName} - ${quantity} x ${unitPrice} = ${lineTotal}`);
              itemFound = true;
              break;
            }
          } catch (error) {
            continue;
          }
        }
      }
    }
  }

  console.log(`Toplam ${items.length} ürün bulundu`);
  return items;
};


const parseItemLine = (line: string): ReceiptItem | null => {
  const price = extractAmountFromLine(line);
  if (price === null) return null;

  
  let productName = line
    .replace(/\d+[.,]\d{2}\s*(?:TL|₺|TRY)?/gi, '')
    .replace(/(?:TL|₺|TRY)\s*\d+[.,]\d{2}/gi, '')
    .trim();

  
  let quantity = 1;
  const quantityMatch = productName.match(/(\d+)\s*[xX×]|(\d+)\s*AD/i);
  if (quantityMatch) {
    quantity = parseInt(quantityMatch[1] || quantityMatch[2]);
    productName = productName.replace(/\d+\s*[xX×]|\d+\s*AD/gi, '').trim();
  }

  if (productName.length < 2) return null;

  return {
    productName,
    price,
    quantity
  };
};


export const logParsedReceipt = (receipt: ParsedReceipt) => {
  console.log('\n=== FİŞ BİLGİLERİ ===');
  console.log(`Mağaza: ${receipt.store_name || 'Bilinmiyor'}`);
  console.log(`Toplam: ${receipt.total_amount} ${receipt.currency}`);
  console.log(`Tarih: ${receipt.receipt_date || 'Bilinmiyor'}`);
  console.log(`Ödeme: ${receipt.payment_method || 'Bilinmiyor'}`);
  console.log(`KDV: ${receipt.tax_amount} ${receipt.currency} (${receipt.tax_rate}%)`);
  console.log(`\nÜrünler (${receipt.items.length}):`);
  receipt.items.forEach((item, index) => {
    console.log(`  ${index + 1}. ${item.productName} - ${item.quantity}x ${item.price} ${receipt.currency}`);
  });
  console.log('\n==================\n');
};


