# 🌍 Monevo - Çok Dilli Destek (Localization)

Bu doküman, Monevo mobil uygulamasının çok dilli destek yapısını açıklar.

## 📚 Mevcut Diller

- 🇹🇷 **Türkçe** (tr) - Varsayılan
- 🇬🇧 **İngilizce** (en)

## 📁 Dosya Yapısı

```
mobil/
├── localization/
│   ├── tr.json              # Türkçe çeviriler
│   ├── en.json              # İngilizce çeviriler
│   └── index.ts             # Localization utilities
├── hooks/
│   └── useTranslation.ts    # Translation hook
```

## 🚀 Kullanım

### Hook ile Kullanım (Önerilen)

```tsx
import { useTranslation } from '@/hooks/useTranslation';

function MyComponent() {
  const { t, language, changeLanguage } = useTranslation();

  return (
    <View>
      <Text>{t('auth.welcomeBack')}</Text>
      <Text>{t('auth.subtitle')}</Text>
      
      {/* Dil değiştirme */}
      <Button 
        title="English" 
        onPress={() => changeLanguage('en')} 
      />
      <Button 
        title="Türkçe" 
        onPress={() => changeLanguage('tr')} 
      />
    </View>
  );
}
```

### Direkt Kullanım

```tsx
import { t } from '@/localization';

// Varsayılan dil (Türkçe)
const text = t('auth.login'); // "Giriş Yap"

// Belirli bir dil
const textEn = t('auth.login', 'en'); // "Log In"
```

## 📝 Çeviri Anahtarları

### Auth (Kimlik Doğrulama)

| Anahtar | Türkçe | İngilizce |
|---------|--------|-----------|
| `auth.welcomeBack` | Tekrar Hoş Geldiniz | Welcome Back |
| `auth.createAccount` | Hesap Oluştur | Create Account |
| `auth.subtitle` | Alışveriş listelerinizi ve harcamalarınızı kolayca yönetin. | Manage your shopping lists and expenses with ease. |
| `auth.email` | E-posta | Email |
| `auth.password` | Şifre | Password |
| `auth.login` | Giriş Yap | Log In |
| `auth.signup` | Kayıt Ol | Sign Up |
| `auth.forgotPassword` | Şifremi unuttum? | Forgot password? |

### Validation (Doğrulama Mesajları)

| Anahtar | Türkçe | İngilizce |
|---------|--------|-----------|
| `validation.required` | Bu alan zorunludur | This field is required |
| `validation.invalidEmail` | Geçersiz e-posta formatı | Invalid email format |
| `validation.passwordTooShort` | Şifre en az 8 karakter olmalıdır | Password must be at least 8 characters long |
| `validation.passwordsDontMatch` | Şifreler eşleşmiyor | Passwords do not match |

### Common (Genel)

| Anahtar | Türkçe | İngilizce |
|---------|--------|-----------|
| `common.loading` | Yükleniyor... | Loading... |
| `common.error` | Hata | Error |
| `common.success` | Başarılı | Success |
| `common.save` | Kaydet | Save |

## ➕ Yeni Çeviri Ekleme

### 1. JSON Dosyalarına Ekleyin

**tr.json:**
```json
{
  "newFeature": {
    "title": "Yeni Özellik",
    "description": "Açıklama"
  }
}
```

**en.json:**
```json
{
  "newFeature": {
    "title": "New Feature",
    "description": "Description"
  }
}
```

### 2. Kodda Kullanın

```tsx
const { t } = useTranslation();
<Text>{t('newFeature.title')}</Text>
```

## 🌐 Yeni Dil Ekleme

### 1. Yeni JSON Dosyası Oluşturun

```bash
touch mobil/localization/de.json  # Almanca için
```

### 2. Çevirileri Ekleyin

```json
{
  "auth": {
    "login": "Anmelden",
    "signup": "Registrieren"
  }
}
```

### 3. index.ts'yi Güncelleyin

```typescript
import de from './de.json';

export type Language = 'tr' | 'en' | 'de';

export const translations = {
  tr,
  en,
  de,
};
```

## 🎯 Best Practices

### ✅ Yapılması Gerekenler

1. **Anlamlı anahtarlar kullanın**
   ```tsx
   t('auth.welcomeBack')  // ✅ İyi
   t('text1')             // ❌ Kötü
   ```

2. **Kategorize edin**
   ```json
   {
     "auth": { ... },
     "profile": { ... },
     "settings": { ... }
   }
   ```

3. **Dinamik değerler için parametreler ekleyin** (gelecekte)
   ```tsx
   t('welcome.greeting', { name: 'Ahmet' })
   // "Hoş geldin, Ahmet!"
   ```

### ❌ Yapılmaması Gerekenler

1. Kodda direkt metin yazmayın
   ```tsx
   <Text>Giriş Yap</Text>              // ❌ Kötü
   <Text>{t('auth.login')}</Text>      // ✅ İyi
   ```

2. Çevirileri hardcode etmeyin
   ```tsx
   const text = language === 'tr' ? 'Giriş' : 'Login';  // ❌ Kötü
   const text = t('auth.login');                         // ✅ İyi
   ```

## 🔄 Otomatik Dil Algılama (Gelecek Özellik)

Cihaz dilini otomatik algılamak için:

```tsx
import { Platform, NativeModules } from 'react-native';

const getDeviceLanguage = (): Language => {
  const locale = Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;
  
  if (locale.startsWith('tr')) return 'tr';
  return 'en'; // varsayılan
};
```

## 📊 Çeviri Durumu

| Modül | Türkçe | İngilizce |
|-------|--------|-----------|
| Auth | ✅ %100 | ✅ %100 |
| Common | ✅ %100 | ✅ %100 |
| Validation | ✅ %100 | ✅ %100 |

## 🚀 Gelecek İyileştirmeler

- [ ] Parametreli çeviriler (interpolation)
- [ ] Çoğul formlar (pluralization)
- [ ] Tarih/saat formatları
- [ ] Sayı formatları (1.000 vs 1,000)
- [ ] RTL dil desteği (Arapça, İbranice)
- [ ] Otomatik dil algılama
- [ ] AsyncStorage ile dil tercihini kaydetme

## 📱 Türkiye İçin Özel Düzenlemeler

### Yapılan Türkçeleştirmeler:

✅ **Auth Sayfaları:**
- `/auth` - Karşılama sayfası
- `/auth/login` - Giriş sayfası
- `/auth/signup` - Kayıt sayfası

✅ **Componentler:**
- LoginForm - Giriş formu
- SignupForm - Kayıt formu

✅ **Validation Mesajları:**
- E-posta doğrulama
- Şifre gereksinimleri
- Kullanıcı adı kuralları
- Form hataları

✅ **Varsayılan Dil:**
- Uygulama Türkçe olarak başlıyor
- İleride ayarlardan İngilizce'ye geçiş yapılabilir

## 🎨 Türkiye Pazar Uyumu

### Para Birimi
```tsx
// TL sembolü kullanımı
const price = "₺150,00";
```

### Tarih Formatı
```tsx
// DD.MM.YYYY formatı
const date = "12.10.2025";
```

### Telefon Formatı
```tsx
// +90 (5XX) XXX XX XX
const phone = "+90 (555) 123 45 67";
```

---

**Not:** Bu uygulama Türkiye pazarı için optimize edilmiştir. Varsayılan dil Türkçe'dir ve tüm içerikler Türkçeleştirilmiştir.


