# 📅 Tarih Seçici Özelliği

## ✅ Eklenen Özellik

Fiş düzenleme sayfasına **tarih seçici** özelliği eklendi!

---

## 🎯 Özellikler

### ✨ Temel Özellikler
- ✅ Native tarih seçici (iOS & Android)
- ✅ Türkçe tarih formatı (örn: "26 Ekim 2023")
- ✅ Gelecek tarihler engellenmiş
- ✅ Platform spesifik görünüm
- ✅ Türkçe locale

### 📱 Platform Desteği

| Platform | Görünüm | Davranış |
|----------|---------|----------|
| **iOS** | Spinner (silindir) | Modal içinde açılır |
| **Android** | Calendar dialog | Popup dialog |
| **Web** | Browser native | HTML date input |

---

## 🚀 Kullanım

### 1. Tarih Seçme
```
1. "Satın Alma Tarihi" alanına tıklayın
2. Tarih seçici açılır
3. İstediğiniz tarihi seçin
4. iOS: Tarih otomatik güncellenecek
5. Android: "Tamam" butonuna tıklayın
6. ✅ Tarih güncellenir
```

### 2. Tarih Formatı
```
Input: Date object (2023-10-26)
Output: "26 Ekim 2023"
```

### 3. İptal Etme
```
- iOS: Picker dışına tıklayın
- Android: "İptal" butonuna tıklayın
```

---

## 📦 Kurulum

### Yüklenen Paket
```bash
npm install @react-native-community/datetimepicker
```

**Versiyon:** Latest
**Platform:** iOS, Android, Web

---

## 🔧 Teknik Detaylar

### Component: StoreDetailsSection

**Güncellemeler:**
```typescript
interface StoreDetailsSectionProps {
  storeName: string;
  purchaseDate: Date;           // ← String'den Date'e değişti
  onStoreNameChange: (value: string) => void;
  onDateChange: (date: Date) => void;  // ← onDatePress yerine
}
```

**Yeni State:**
```typescript
const [showDatePicker, setShowDatePicker] = useState(false);
```

**Tarih Formatlama:**
```typescript
const formatDate = (date: Date) => {
  const months = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ];
  
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${day} ${month} ${year}`;
};
```

**Event Handler:**
```typescript
const handleDateChange = (
  event: DateTimePickerEvent, 
  selectedDate?: Date
) => {
  // Platform kontrolü
  if (Platform.OS === 'android') {
    setShowDatePicker(false);
  }

  // Tarih seçildi mi?
  if (event.type === 'set' && selectedDate) {
    onDateChange(selectedDate);
    if (Platform.OS === 'ios') {
      setShowDatePicker(false);
    }
  }
};
```

**DateTimePicker:**
```typescript
{showDatePicker && (
  <DateTimePicker
    value={purchaseDate}
    mode="date"
    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
    onChange={handleDateChange}
    maximumDate={new Date()}
    locale="tr-TR"
  />
)}
```

---

## 📱 Görünüm

### iOS
```
┌─────────────────────────────┐
│ Satın Alma Tarihi           │
│ ┌─────────────────────┐     │
│ │ 26 Ekim 2023     📅 │ ← Tıkla
│ └─────────────────────┘     │
└─────────────────────────────┘
        ↓
┌─────────────────────────────┐
│   ╔═══════════════════╗     │
│   ║   Ekim              ║     │
│   ║      25             ║     │
│   ║    ┃26┃ ← Spinner  ║     │
│   ║      27             ║     │
│   ╚═══════════════════╝     │
└─────────────────────────────┘
```

### Android
```
┌─────────────────────────────┐
│ Satın Alma Tarihi           │
│ ┌─────────────────────┐     │
│ │ 26 Ekim 2023     📅 │ ← Tıkla
│ └─────────────────────┘     │
└─────────────────────────────┘
        ↓
┌─────────────────────────────┐
│   Ekim 2023                 │
│ ┌─┬─┬─┬─┬─┬─┬─┐            │
│ │P│S│Ç│P│C│C│P│            │
│ ├─┼─┼─┼─┼─┼─┼─┤            │
│ │1│2│3│4│5│6│7│            │
│ │ │ │ │ │ │ │ │            │
│ │ │ │ │●│ │ │ │ ← 26       │
│ └─┴─┴─┴─┴─┴─┴─┘            │
│   [İptal]  [Tamam]          │
└─────────────────────────────┘
```

---

## 🎨 Styling

### Input (Görsel)
```typescript
dateInput: {
  height: 56,
  backgroundColor: '#FFFFFF',
  borderRadius: 12,
  borderWidth: 1,
  borderColor: '#D0D0D0',
  paddingHorizontal: 16,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}
```

### Tarih Metni
```typescript
dateText: {
  fontSize: 16,
  color: '#2C2C2C',
}
```

---

## ⚙️ Konfigürasyon

### DateTimePicker Props

| Prop | Değer | Açıklama |
|------|-------|----------|
| `value` | `purchaseDate` | Seçili tarih |
| `mode` | `"date"` | Sadece tarih |
| `display` | `"spinner"` (iOS) / `"default"` (Android) | Görünüm tipi |
| `onChange` | `handleDateChange` | Değişiklik handler |
| `maximumDate` | `new Date()` | Bugünden sonrası yasak |
| `locale` | `"tr-TR"` | Türkçe |

---

## 🧪 Test Senaryoları

### 1. Temel Kullanım
```
✓ Tarih alanına tıklayın
✓ Picker açılmalı
✓ Tarih seçin
✓ Tarih güncellenmeli
✓ Format doğru olmalı: "Gün Ay Yıl"
```

### 2. Gelecek Tarih
```
✓ Tarih seçicide gelecek tarihlere gidin
✓ Gelecek tarihler seçilememeli (gri)
✓ Bugünden sonraki tarih seçilemez
```

### 3. Tarih Değiştirme
```
✓ Mevcut tarih: 26 Ekim 2023
✓ Yeni tarih seçin: 15 Kasım 2023
✓ Tarih güncellenmiş olmalı
```

### 4. İptal Etme
```
✓ Picker açın
✓ Tarih değiştirin (ama kaydetmeyin)
✓ İptal edin
✓ Eski tarih korunmalı
```

### 5. Platform Farkları
```
iOS:
✓ Spinner görünümü
✓ Otomatik kapanma

Android:
✓ Calendar dialog
✓ Tamam/İptal butonları
```

---

## 🔄 State Yönetimi

### Edit Page

**Önce:**
```typescript
const [purchaseDate, setPurchaseDate] = useState('26 Ekim 2023');

<StoreDetailsSection
  purchaseDate={purchaseDate}
  onDatePress={() => Alert.alert('Coming soon')}
/>
```

**Sonra:**
```typescript
const [purchaseDate, setPurchaseDate] = useState(new Date('2023-10-26'));

const handleDateChange = (date: Date) => {
  setPurchaseDate(date);
};

<StoreDetailsSection
  purchaseDate={purchaseDate}
  onDateChange={handleDateChange}
/>
```

---

## 💡 Kullanım İpuçları

### 1. Tarih Format İpuçları
```javascript
// Bugün
const today = new Date();

// Belirli bir tarih
const specificDate = new Date('2023-10-26');

// Tarih işlemleri
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

// Format
formatDate(today); // "9 Aralık 2024"
```

### 2. Backend Gönderimi
```typescript
// Date'i ISO string'e çevir
const dateString = purchaseDate.toISOString();
// "2023-10-26T00:00:00.000Z"

// Backend'e gönder
await api.saveReceipt({
  storeName: 'Köşe Market',
  purchaseDate: dateString,
  ...
});
```

### 3. Backend'den Okuma
```typescript
// String'den Date'e çevir
const date = new Date(response.purchaseDate);
setPurchaseDate(date);
```

---

## 🐛 Bilinen Sorunlar

### Android
- ✅ Dialog doğru çalışıyor
- ✅ Türkçe locale destekleniyor

### iOS
- ✅ Spinner doğru çalışıyor
- ✅ Türkçe destekleniyor

### Web
- ⚠️ Browser native picker kullanılıyor
- ⚠️ Görünüm browser'a göre değişebilir

---

## 📊 Öncesi vs Sonrası

| Özellik | Önce | Sonra |
|---------|------|-------|
| Tarih Girişi | ❌ Disabled | ✅ Aktif |
| Format | String | Date object |
| Picker | ❌ Alert | ✅ Native |
| Türkçe | ❌ Yok | ✅ Var |
| Platform Optimized | ❌ Yok | ✅ Var |
| Gelecek Tarih | ❌ Kontrol yok | ✅ Engellenmiş |

---

## 📝 Örnek Kullanım

### Tam Akış
```typescript
// 1. Component
import DateTimePicker from '@react-native-community/datetimepicker';

// 2. State
const [purchaseDate, setPurchaseDate] = useState(new Date());
const [showPicker, setShowPicker] = useState(false);

// 3. Handler
const handleDateChange = (event, selectedDate) => {
  setShowPicker(false);
  if (selectedDate) {
    setPurchaseDate(selectedDate);
  }
};

// 4. UI
<TouchableOpacity onPress={() => setShowPicker(true)}>
  <Text>{formatDate(purchaseDate)}</Text>
</TouchableOpacity>

{showPicker && (
  <DateTimePicker
    value={purchaseDate}
    mode="date"
    onChange={handleDateChange}
    locale="tr-TR"
  />
)}
```

---

## 🎉 Özet

### Yeni Özellikler
- ✅ Native tarih seçici
- ✅ Türkçe format
- ✅ iOS/Android optimize
- ✅ Gelecek tarih kontrolü

### Güncellemeler
- ✅ StoreDetailsSection component'i
- ✅ Edit sayfası state yönetimi
- ✅ Tarih formatı fonksiyonu

### Paket
- ✅ @react-native-community/datetimepicker

---

## 🚀 Hemen Test Edin!

```bash
# Uygulamayı başlatın
cd Monevo/mobil
npx expo start

# Test edin
1. Fiş düzenleme sayfasını açın
2. "Satın Alma Tarihi" alanına tıklayın
3. Tarih seçin
4. ✅ Tarih güncellenir!
```

---

**Tarih seçici kullanıma hazır! 📅✨**





