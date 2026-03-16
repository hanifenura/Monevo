# Monevo Mobil - Authentication Entegrasyonu

Backend API'ye başarıyla entegre edilmiş authentication sistemi.

## ✅ Yapılan Değişiklikler

### 1. API Servisleri (`services/api/index.ts`)
Backend endpoint'lerine göre güncellendi:
- ✅ `POST /api/auth/login` - Giriş yapma
- ✅ `POST /api/auth/register` - Kayıt olma
- ✅ `GET /api/auth/profile` - Profil bilgisi (korumalı)

```typescript
// Kullanım örneği
const response = await authService.login({ email, password });
const userData = await authService.getProfile();
```

### 2. API Client (`services/apiClient.ts`)
- ✅ Otomatik token ekleme (Authorization header)
- ✅ AsyncStorage'dan token okuma
- ✅ 401 hata durumunda otomatik token temizleme
- ✅ Hata yönetimi

### 3. Auth Store (`store/authStore.ts`)
Backend response formatına göre güncellendi:
```typescript
interface User {
  user_id: number;      // Backend'den gelen format
  email: string;
  name: string;         // fullName yerine name
  created_at: string;
}
```

Fonksiyonlar:
- ✅ `login(user, token)` - Token ve kullanıcı bilgisini kaydet
- ✅ `logout()` - Çıkış yap ve temizle
- ✅ `loadStoredAuth()` - Uygulama açılışında token kontrolü

### 4. SignupForm (`components/auth/SignupForm.tsx`)
Backend API'sine göre düzenlendi:
- ✅ `name` alanı (fullName yerine)
- ✅ `email` alanı
- ✅ `password` alanı (username kaldırıldı)
- ✅ Şifre tekrar kontrolü
- ✅ Minimum 6 karakter validasyonu

### 5. LoginForm (`components/auth/LoginForm.tsx`)
Sadeleştirildi:
- ✅ Email ve şifre alanları
- ✅ "Beni Hatırla" özelliği kaldırıldı (token otomatik kaydediliyor)
- ✅ Şifremi unuttum linki

### 6. Login Sayfası (`app/auth/login.tsx`)
- ✅ Backend API entegrasyonu
- ✅ Loading göstergesi
- ✅ Hata yönetimi
- ✅ Başarılı girişte token kaydı
- ✅ Otomatik yönlendirme

### 7. Signup Sayfası (`app/auth/signup.tsx`)
- ✅ Backend API entegrasyonu
- ✅ Loading göstergesi
- ✅ Validasyon kontrolleri
- ✅ Hata yönetimi
- ✅ Başarılı kayıtta otomatik giriş

## 🚀 Kullanım

### Backend'i Başlatma

```bash
cd Monevo/backend

# .env dosyasını oluşturun ve düzenleyin
# DATABASE_URL ve JWT_SECRET'i ayarlayın

# Prisma'yı güncelleyin
npx prisma generate

# Sunucuyu başlatın
npm run dev
```

### Mobil Uygulamayı Başlatma

```bash
cd Monevo/mobil

# Bağımlılıkları yükleyin (gerekirse)
npm install

# Uygulamayı başlatın
npx expo start
```

### Backend URL Ayarı

`Monevo/mobil/config/env.ts` dosyasında backend URL'ini ayarlayın:

```typescript
const ENV = {
  dev: {
    apiUrl: 'http://localhost:5000',  // Geliştirme
    // veya
    // apiUrl: 'http://192.168.1.100:5000',  // Fiziksel cihaz için
  },
  prod: {
    apiUrl: 'https://your-production-api.com',  // Production
  },
};
```

**Önemli:** Fiziksel cihazda test ediyorsanız:
1. Bilgisayarınızın local IP adresini bulun
2. `http://BILGISAYAR_IP:5000` formatında ayarlayın
3. Backend'in tüm network arayüzlerinde dinlediğinden emin olun

## 📱 Kullanıcı Akışı

### 1. Kayıt Olma
```
Auth Index → Signup → Form Doldur → Backend'e Gönder → 
Token Kaydet → Ana Sayfa
```

### 2. Giriş Yapma
```
Auth Index → Login → Email/Şifre Gir → Backend'e Gönder → 
Token Kaydet → Ana Sayfa
```

### 3. Korumalı API Çağrıları
```typescript
// Token otomatik olarak eklenir
const profile = await authService.getProfile();
```

## 🔐 Güvenlik Özellikleri

- ✅ Şifreler backend'de bcrypt ile hash'leniyor
- ✅ JWT token 30 gün geçerli
- ✅ Token AsyncStorage'da güvenli şekilde saklanıyor
- ✅ Her API isteğinde token otomatik gönderiliyor
- ✅ 401 hatalarında otomatik logout

## 🧪 Test Etme

### 1. Kayıt Olma Testi
```
1. Signup sayfasına git
2. Ad Soyad: Test User
3. Email: test@example.com
4. Şifre: 123456
5. Şifre Tekrar: 123456
6. "Hesap Oluştur" butonuna tıkla
```

### 2. Giriş Yapma Testi
```
1. Login sayfasına git
2. Email: test@example.com
3. Şifre: 123456
4. "Giriş Yap" butonuna tıkla
```

### 3. Token Kontrolü
```typescript
// Console'da kontrol et
import AsyncStorage from '@react-native-async-storage/async-storage';

const token = await AsyncStorage.getItem('token');
const user = await AsyncStorage.getItem('user');
console.log('Token:', token);
console.log('User:', JSON.parse(user));
```

## 🐛 Hata Ayıklama

### Backend'e Bağlanamıyor
1. Backend'in çalıştığından emin olun (`http://localhost:5000`)
2. `config/env.ts`'de doğru URL'i kullandığınızdan emin olun
3. Fiziksel cihazda test ediyorsanız local IP kullanın
4. Firewall'un 5000 portunu engellediğini kontrol edin

### Token Hatası
```bash
# AsyncStorage'ı temizle
import AsyncStorage from '@react-native-async-storage/async-storage';
await AsyncStorage.clear();
```

### Loglama
```typescript
// apiClient.ts'de detaylı log için
console.log('Request:', config);
console.log('Response:', response);
console.log('Error:', error);
```

## 🔄 Auth Store Kullanımı

### Herhangi bir component'te:

```typescript
import { useAuthStore } from '@/store/authStore';

function MyComponent() {
  const { user, isAuthenticated, logout } = useAuthStore();

  // Kullanıcı bilgisi
  console.log(user?.name);
  console.log(user?.email);

  // Auth durumu
  if (isAuthenticated) {
    // Kullanıcı giriş yapmış
  }

  // Çıkış yap
  const handleLogout = async () => {
    await logout();
    router.replace('/auth');
  };
}
```

### App başlangıcında token kontrolü:

```typescript
// _layout.tsx veya index.tsx
import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';

export default function RootLayout() {
  const { loadStoredAuth, isAuthenticated } = useAuthStore();

  useEffect(() => {
    loadStoredAuth(); // Token varsa yükle
  }, []);

  // isAuthenticated durumuna göre yönlendirme
}
```

## 📦 Gerekli Paketler

Zaten yüklü olması gerekenler:
- ✅ `axios` - API istekleri
- ✅ `zustand` - State management
- ✅ `@react-native-async-storage/async-storage` - Local storage
- ✅ `expo-router` - Navigation

## 🎯 Sonraki Adımlar

1. **Profil Sayfası**: Kullanıcı bilgilerini göster ve düzenle
2. **Şifre Sıfırlama**: Forgot password özelliği ekle
3. **Token Refresh**: Token yenileme mekanizması
4. **Persistent Login**: Otomatik giriş kontrolü
5. **Loading States**: Daha iyi UX için loading durumları
6. **Error Handling**: Daha detaylı hata mesajları
7. **Form Validation**: Daha kapsamlı validasyon kuralları

## 📝 API Response Formatı

### Başarılı Login/Register:
```json
{
  "success": true,
  "message": "Giriş başarılı",
  "data": {
    "user": {
      "user_id": 1,
      "name": "Test User",
      "email": "test@example.com",
      "created_at": "2024-01-01T00:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Hata:
```json
{
  "success": false,
  "message": "Email veya şifre hatalı"
}
```

## 🎉 Tamamlandı!

Artık mobil uygulamanız backend API'sine tam entegre edilmiş ve çalışır durumda! 
Kullanıcılar kayıt olabilir, giriş yapabilir ve korumalı API endpoint'lerini kullanabilir.



