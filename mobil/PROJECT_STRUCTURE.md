# Monevo Mobile - Proje Yapısı

Bu doküman, Monevo mobil uygulamasının klasör yapısını ve organizasyonunu açıklar.

## 📁 Klasör Yapısı

```
mobil/
├── app/                          # Expo Router Sayfaları (Sadece Ekranlar)
│   ├── index.tsx                 # Ana giriş noktası - auth'a yönlendirir
│   ├── _layout.tsx               # Global layout ve navigation yapılandırması
│   ├── auth/                     # Auth sayfaları
│   │   ├── index.tsx             # "/auth" - Karşılama ekranı
│   │   ├── login.tsx             # "/auth/login" - Giriş ekranı
│   │   ├── signup.tsx            # "/auth/signup" - Kayıt ekranı
│   ├── (tabs)/                   # Ana uygulama tab navigation
│   │   ├── index.tsx             # Ana sayfa
│   │   ├── explore.tsx           # Keşfet sayfası
│   │   └── _layout.tsx           # Tab layout
│
├── modules/                      # Feature Modülleri
│   └── auth/                     # Auth modülü
│       ├── components/           # Auth'a özel componentler
│       │   ├── LoginForm.tsx     # Login formu
│       │   ├── SignupForm.tsx    # Kayıt formu
│       │   └── index.ts          # Export dosyası
│       ├── hooks/                # Auth hooks
│       │   └── useAuth.ts        # Auth işlemleri için hook
│       ├── services/             # Auth API servisleri
│       │   └── authService.ts    # Login, signup, logout API'leri
│       ├── store/                # Auth state management
│       │   └── useAuthStore.ts   # Zustand auth store
│       └── validation/           # Validasyon kuralları
│           └── authSchema.ts     # Auth form validasyonları
│
├── components/                   # Global Yeniden Kullanılabilir Componentler
│   ├── Button.tsx                # Global button component
│   ├── Input.tsx                 # Global input component
│   ├── Loader.tsx                # Loading göstergesi
│   └── index.ts                  # Export dosyası
│
├── hooks/                        # Global Hooks
│   ├── use-color-scheme.ts       # Tema hook'u
│   ├── use-theme-color.ts        # Renk theme hook'u
│
├── services/                     # Global API Servisleri
│   └── apiClient.ts              # Axios/Fetch yapılandırması
│
├── utils/                        # Yardımcı Fonksiyonlar
│   ├── formatDate.ts             # Tarih formatlama
│   ├── validateEmail.ts          # Email validasyonu
│   ├── navigation.ts             # Navigation yardımcıları
│   └── index.ts                  # Export dosyası
│
├── constants/                    # Sabitler
│   └── theme.ts                  # Tema renkleri ve stilleri
│
├── assets/                       # Statik dosyalar
│   └── images/                   # Resimler
│
├── node_modules/                 # Bağımlılıklar
├── package.json                  # Proje bağımlılıkları
├── tsconfig.json                 # TypeScript yapılandırması
└── README.md                     # Proje dokümantasyonu
```

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Primary Color**: `#59B1B1` (Turkuaz)
- **Background**: `#F5F5F5` (Açık Gri)
- **Text Primary**: `#2C2C2C` (Koyu Gri)
- **Text Secondary**: `#7C7C7C` (Orta Gri)
- **White**: `#FFFFFF`
- **Error**: `#FF4444`

### Komponent Standartları
- **Input Height**: 60px
- **Button Height**: 60px
- **Border Radius**: 12px
- **Padding**: 20px (horizontal)
- **Font Sizes**: 
  - Title: 36px
  - Subtitle: 18px
  - Body: 16px
  - Caption: 14px

## 🚀 Kullanım

### Sayfa Oluşturma
Yeni bir sayfa oluşturmak için `app/` klasörüne yeni bir dosya ekleyin:

```tsx
// app/new-page.tsx
import React from 'react';
import { View, Text } from 'react-native';

export default function NewPage() {
  return (
    <View>
      <Text>Yeni Sayfa</Text>
    </View>
  );
}
```

### Modül Oluşturma
Yeni bir feature modülü için `modules/` altında yeni klasör oluşturun:

```
modules/
└── yeni-modul/
    ├── components/
    ├── hooks/
    ├── services/
    ├── store/
    └── validation/
```

### Component Kullanımı

```tsx
import { Button, Input, Loader } from '@/components';

// Button kullanımı
<Button 
  title="Gönder" 
  onPress={handleSubmit}
  variant="primary"
  loading={isLoading}
/>

// Input kullanımı
<Input
  label="Email"
  value={email}
  onChangeText={setEmail}
  error={errors.email}
  keyboardType="email-address"
/>

// Loader kullanımı
<Loader size="large" text="Yükleniyor..." />
```

### State Management (Zustand)

```tsx
import { useAuthStore } from '@/modules/auth/store/useAuthStore';

function MyComponent() {
  const { user, isAuthenticated, logout } = useAuthStore();
  
  return (
    <View>
      {isAuthenticated && <Text>Hoş geldin {user?.fullName}</Text>}
      <Button title="Çıkış Yap" onPress={logout} />
    </View>
  );
}
```

### API Servisleri

```tsx
import { apiClient } from '@/services/apiClient';

// GET request
const data = await apiClient.get('/endpoint', token);

// POST request
const result = await apiClient.post('/endpoint', { data }, token);
```

### Navigation

```tsx
import { navigation } from '@/utils/navigation';

// Sayfalar arası geçiş
navigation.navigate('/profile');
navigation.toLogin();
navigation.toHome();
navigation.goBack();
```

## 🔧 Geliştirme

### Kurulum
```bash
cd mobil
npm install
```

### Çalıştırma
```bash
npm start        # Expo Dev Server'ı başlat
npm run android  # Android'de çalıştır
npm run ios      # iOS'ta çalıştır
npm run web      # Web'de çalıştır
```

### Linting
```bash
npm run lint
```

## 📱 Uygulama Akışı

```
App Başlangıç
    ↓
index.tsx (Redirect)
    ↓
Auth Index (/auth)
    ↓
Login veya Signup
    ↓
Authentication
    ↓
Ana Uygulama (Tabs)
```

## 🔐 Auth Akışı

1. Kullanıcı `/auth` sayfasına yönlendirilir
2. Login veya Signup seçeneğini seçer
3. Form doldurulur ve validate edilir
4. API'ye istek atılır (`authService`)
5. Token ve user bilgisi store'a kaydedilir (`useAuthStore`)
6. Ana uygulamaya yönlendirilir (`/(tabs)`)

## 📝 Notlar

- **Expo Router** kullanılıyor (file-based routing)
- **TypeScript** ile tip güvenliği
- **Zustand** ile state management
- **Modular Architecture** ile ölçeklenebilir yapı
- **Component-based** tasarım
- **Feature-first** organization

## 🎯 Best Practices

1. ✅ Sayfalar sadece `app/` klasöründe
2. ✅ Business logic `modules/` içinde
3. ✅ Reusable componentler `components/` içinde
4. ✅ Her modül kendi sorumluluğunda
5. ✅ Type safety her yerde
6. ✅ Index dosyaları ile clean imports
7. ✅ Validation her zaman client-side
8. ✅ Error handling her serviste

## 📚 Teknolojiler

- **Framework**: Expo (~54.0.13)
- **Navigation**: Expo Router (~6.0.11)
- **Language**: TypeScript (~5.9.2)
- **State Management**: Zustand
- **UI**: React Native (0.81.4)
- **Icons**: @expo/vector-icons

---

**Geliştirici**: Monevo Team
**Versiyon**: 1.0.0
**Son Güncelleme**: 2025


