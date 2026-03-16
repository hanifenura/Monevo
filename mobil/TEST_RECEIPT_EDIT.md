# 🧪 Fiş Düzenleme Sayfası - Test Kılavuzu

## 📱 Test Butonları Eklendi

Fiş düzenleme sayfasını test etmek için iki farklı yerden erişim sağladık:

### 1. Ana Sayfa (Home)
**Konum:** Ana ekran → "Hızlı İşlemler" bölümü

```
┌─────────────────────────────────┐
│ Hızlı İşlemler                  │
├─────────────────────────────────┤
│ ✅ Yeni Liste Oluştur           │
│ ✅ Harcama Ekle                 │
│ 🧪 Fiş Düzenle (Test)           │ ← YENİ!
└─────────────────────────────────┘
```

**Görünüm:**
- Turuncu kesikli kenarlık
- Turuncu düzenleme ikonu
- "🧪" test emojisi

### 2. Keşfet Sayfası (Explore)
**Konum:** Keşfet ekranı → "Öne Çıkanlar" bölümünün en üstü

```
┌─────────────────────────────────┐
│ Öne Çıkanlar                    │
├─────────────────────────────────┤
│ 🧪 Fiş Düzenle (Test)           │ ← YENİ!
│ Liste Paylaşımı                 │
│ Harcama Analizi                 │
│ Hatırlatıcılar                  │
└─────────────────────────────────┘
```

**Görünüm:**
- Turuncu kesikli kenarlık
- Açık turuncu arka plan
- Chevron ikonu

---

## 🚀 Nasıl Test Edilir?

### Adım 1: Uygulamayı Başlatın
```bash
cd Monevo/mobil
npx expo start
```

### Adım 2: Ana Sayfaya Gidin
- Uygulama açıldığında "Ana Sayfa" (Home) tab'ında olacaksınız
- Aşağı scroll edin

### Adım 3: Test Butonuna Tıklayın
- "Hızlı İşlemler" bölümünde **"Fiş Düzenle (Test) 🧪"** butonunu görün
- Butona tıklayın

### Adım 4: Fiş Düzenleme Sayfası Açılır
✅ Mağaza Detayları bölümü
✅ Ürün listesi (Elma, Badem Sütü, Avokado)
✅ Yeni ürün ekleme formu
✅ Toplamlar bölümü
✅ "Fişi Kaydet" butonu

---

## 🧪 Test Senaryoları

### 1. Mağaza Bilgilerini Düzenleme
```
1. Mağaza adını değiştirin (örn: "Migros")
2. Tarihe tıklayın (yakında: date picker)
```

### 2. Ürün Silme
```
1. Herhangi bir ürünün 🗑️ butonuna tıklayın
2. Silme onay dialog'unu görün
3. "Sil" veya "İptal" seçin
4. Toplam otomatik güncellenecek
```

### 3. Yeni Ürün Ekleme
```
1. "Başka Ürün Ekle" butonuna tıklayın
2. Turkuaz form açılacak
3. Ürün adı girin (örn: "Domates")
4. Miktar tipini seçin: Adet / Kg
5. Miktar ve fiyat girin
6. "Ürünü Ekle" butonuna tıklayın
7. Ürün listeye eklenecek
8. Form otomatik temizlenecek
```

### 4. Miktar Tipi Değiştirme
```
1. Yeni ürün formunda
2. "Adet Bazında" ve "Kilogram Bazında" arasında geçiş yapın
3. Segment control animasyonunu gözlemleyin
```

### 5. Toplamları Manuel Düzenleme
```
1. Toplamlar bölümüne scroll edin
2. Ara Toplam, Vergi veya Toplam değerlerini değiştirin
3. Değerlerin input'larda değiştiğini görün
```

### 6. Fişi Kaydetme
```
1. Alt kısımdaki "Fişi Kaydet" butonuna tıklayın
2. Başarı dialog'unu görün
3. "Tamam" deyince ana sayfaya dönün
```

---

## 📋 Kontrol Listesi

Test ederken şunları kontrol edin:

- [ ] **Header**
  - [ ] Geri butonu çalışıyor
  - [ ] Başlık görünüyor

- [ ] **Mağaza Detayları**
  - [ ] Mağaza adı düzenlenebiliyor
  - [ ] Tarih inputu tıklanabiliyor

- [ ] **Ürün Listesi**
  - [ ] 3 örnek ürün görünüyor
  - [ ] Fiyatlar doğru formatta (₺37.50)
  - [ ] Miktar bilgileri doğru ("2.5 Kg x ₺15.00/kg")

- [ ] **Düzenle/Sil Butonları**
  - [ ] Düzenle butonu tıklanabiliyor
  - [ ] Sil butonu onay dialog açıyor
  - [ ] Silme işlemi çalışıyor
  - [ ] Toplam otomatik güncelleniyor

- [ ] **Yeni Ürün Formu**
  - [ ] "Başka Ürün Ekle" butonu çalışıyor
  - [ ] Form açılıyor/kapanıyor
  - [ ] Ürün adı yazılabiliyor
  - [ ] Segment control çalışıyor
  - [ ] Miktar ve fiyat girilip kayıt ediliyor
  - [ ] Form submit sonrası temizleniyor

- [ ] **Toplamlar**
  - [ ] Ara toplam görünüyor
  - [ ] Vergi görünüyor
  - [ ] Toplam görünüyor
  - [ ] Input'lar düzenlenebiliyor

- [ ] **Kaydet Butonu**
  - [ ] Fixed footer'da sabit duruyor
  - [ ] Tıklanabiliyor
  - [ ] Dialog gösteriyor
  - [ ] Geri dönüş çalışıyor

- [ ] **Scroll**
  - [ ] Sayfa yukarı aşağı scroll oluyor
  - [ ] Kaydet butonu her zaman görünür

---

## 🎨 Görsel Kontroller

### Renkler
- [ ] Primary color turkuaz (#59B1B1)
- [ ] Yeni ürün formu turkuaz arka planlı
- [ ] Sil butonu kırmızı
- [ ] Düzenle butonu turkuaz

### Tipografi
- [ ] Başlıklar kalın (Bold)
- [ ] Metin boyutları tutarlı
- [ ] Fiyatlar büyük ve belirgin

### Spacing
- [ ] Component'ler arası boşluklar düzgün
- [ ] Padding'ler tutarlı
- [ ] Margin'ler dengeli

### Animasyonlar
- [ ] Form açılış/kapanış smooth
- [ ] Segment control geçişi animasyonlu
- [ ] Dialog'lar smooth açılıyor

---

## 🐛 Bilinen Sorunlar / Yakında

- [ ] **Ürün düzenleme modal'ı** - Şu an sadece alert gösteriyor
- [ ] **Tarih seçici** - Henüz entegre edilmedi
- [ ] **Backend kaydetme** - Sadece local state'te
- [ ] **Kategori seçimi** - Henüz yok
- [ ] **Loading states** - Henüz eklenmedi

---

## 📸 Beklenen Görünüm

```
┌─────────────────────────────────┐
│  ←  Fişi Gözden Geçir          │ Header
├─────────────────────────────────┤
│                                 │
│  Mağaza Detayları               │
│  ┌─────────────────────────┐   │
│  │ Köşe Market             │   │
│  ┌─────────────────────────┐   │
│  │ 26 Ekim 2023         📅 │   │
│  └─────────────────────────┘   │
│                                 │
│  Ürünler                        │
│  ┌─────────────────────────┐   │
│  │ Elma           ₺37.50   │   │
│  │ 2.5 Kg x ₺15/kg  ✏️ 🗑️  │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │ ← Turkuaz
│  │ 🔹 Yeni Ürün Formu      │   │
│  │ [Ürün Adı]              │   │
│  │ Adet ● Kg ○             │   │
│  │ [Miktar] [Fiyat]        │   │
│  │ [✓ Ürünü Ekle]          │   │
│  └─────────────────────────┘   │
│                                 │
│  ➕ Başka Ürün Ekle             │ ← Dashed
│                                 │
│  Toplamlar                      │
│  ┌─────────────────────────┐   │
│  │ Ara Toplam    ₺49.49    │   │
│  │ Vergi         ₺4.45     │   │
│  │ ─────────────────────    │   │
│  │ Toplam        ₺53.94    │   │
│  └─────────────────────────┘   │
│                                 │
└─────────────────────────────────┘
│   [   Fişi Kaydet   ]          │ ← Fixed
└─────────────────────────────────┘
```

---

## 💡 Test İpuçları

1. **Farklı Cihazlarda Test Edin**
   - iOS Simulator
   - Android Emulator
   - Fiziksel cihaz

2. **Scroll Davranışını Kontrol Edin**
   - Uzun ürün listesi ekleyin
   - Scroll'un smooth olduğunu görün
   - Footer'ın sabit kaldığını kontrol edin

3. **Form Validasyonunu Test Edin**
   - Boş ürün adı eklemeyi deneyin
   - Sıfır fiyat girmeyi deneyin
   - Negatif değerler deneyin

4. **Hızlı Kullanım**
   - Klavye açıkken scroll edin
   - Hızlı ekleme/silme yapın
   - Çok sayıda ürün ekleyin

---

## 🎯 Başarı Kriterleri

Test başarılı sayılır eğer:

✅ Tüm butonlar çalışıyorsa
✅ Form doğru submit ediyorsa
✅ Ürünler eklenip silinebiliyorsa
✅ Toplamlar otomatik hesaplanıyorsa
✅ Kaydet butonu dialog gösteriyorsa
✅ Görsel tasarım referansa uygunsa
✅ Hiçbir crash/error olmuyorsa

---

## 🚨 Hata Raporlama

Eğer bir sorun bulursanız:

1. Sorunu açıkça tanımlayın
2. Adımları not edin (nasıl oluştu?)
3. Ekran görüntüsü alın
4. Console loglarını kontrol edin
5. Cihaz bilgisini not edin

---

## 🎉 Test Tamamlandı!

Test sürecini tamamladıktan sonra:

- ✅ Test butonlarını kaldırabilirsiniz (production'da)
- ✅ Backend API'ye entegre edebilirsiniz
- ✅ Eksik özellikleri ekleyebilirsiniz
- ✅ Real data ile test edebilirsiniz

---

**Happy Testing! 🧪✨**





