# Authentication API Kullanım Kılavuzu

## Kurulum

### 1. Ortam Değişkenlerini Ayarlayın

Backend klasöründe `.env` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/monevo_db"

# JWT Secret (Güvenlik için güçlü bir secret key kullanın)
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"

# Server
PORT=5000
NODE_ENV=development
```

**Önemli:** Production ortamında `JWT_SECRET` değerini güçlü ve rastgele bir string ile değiştirin!

### 2. Veritabanını Hazırlayın

```bash
npx prisma migrate dev
npx prisma generate
```

### 3. Sunucuyu Başlatın

```bash
npm run dev
```

## API Endpoints

### 1. Kayıt Ol (Register)

**Endpoint:** `POST /api/auth/register`

**Request Body:**
```json
{
  "name": "Ahmet Yılmaz",
  "email": "ahmet@example.com",
  "password": "123456"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Kayıt başarılı",
  "data": {
    "user": {
      "user_id": 1,
      "name": "Ahmet Yılmaz",
      "email": "ahmet@example.com",
      "created_at": "2024-01-01T00:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Responses:**
- `400` - Eksik veya geçersiz veri
- `409` - Email zaten kayıtlı
- `500` - Sunucu hatası

### 2. Giriş Yap (Login)

**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "email": "ahmet@example.com",
  "password": "123456"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Giriş başarılı",
  "data": {
    "user": {
      "user_id": 1,
      "name": "Ahmet Yılmaz",
      "email": "ahmet@example.com",
      "created_at": "2024-01-01T00:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Responses:**
- `400` - Eksik veri
- `401` - Email veya şifre hatalı
- `500` - Sunucu hatası

### 3. Profil Bilgisi (Protected Route)

**Endpoint:** `GET /api/auth/profile`

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "user_id": 1,
      "name": "Ahmet Yılmaz",
      "email": "ahmet@example.com",
      "created_at": "2024-01-01T00:00:00.000Z",
      "updated_at": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

**Error Responses:**
- `401` - Token bulunamadı
- `403` - Geçersiz veya süresi dolmuş token
- `404` - Kullanıcı bulunamadı
- `500` - Sunucu hatası

## Güvenlik Özellikleri

### 1. Şifre Hash'leme
- Şifreler `bcryptjs` kullanılarak hash'lenir
- Salt factor: 10
- Şifreler asla düz metin olarak saklanmaz

### 2. JWT Token
- Token süresi: 30 gün
- Token payload: user_id ve email
- Her istekte token doğrulanır

### 3. Validasyon
- Email format kontrolü
- Şifre minimum 6 karakter
- Tüm gerekli alanlar kontrol edilir

## Frontend Entegrasyonu

### Token'ı Kaydetme

```javascript
// Login/Register sonrası
const response = await fetch('http://localhost:5000/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password })
});

const data = await response.json();

if (data.success) {
  // Token'ı localStorage'a kaydet
  localStorage.setItem('token', data.data.token);
  localStorage.setItem('user', JSON.stringify(data.data.user));
}
```

### Protected API Çağrıları

```javascript
const token = localStorage.getItem('token');

const response = await fetch('http://localhost:5000/api/auth/profile', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});
```

### React Native (Expo) Entegrasyonu

```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Token kaydetme
await AsyncStorage.setItem('token', data.data.token);

// Token okuma
const token = await AsyncStorage.getItem('token');

// API çağrısı
const response = await fetch('http://localhost:5000/api/auth/profile', {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});
```

## Test Etme

### cURL ile Test

#### Kayıt:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"123456"}'
```

#### Giriş:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"123456"}'
```

#### Profil (Token ile):
```bash
curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Postman ile Test

1. Yeni bir Collection oluşturun
2. Request'leri ekleyin
3. Environment variable olarak token'ı kaydedin
4. Protected route'lar için Authorization header'ına `Bearer {{token}}` ekleyin

## Diğer Route'larda Authentication Kullanımı

Diğer route'larınızı korumak için middleware'i kullanın:

```javascript
import { authenticateToken } from './src/middleware/authMiddleware.js';

// Korumalı route
app.get('/api/receipts', authenticateToken, (req, res) => {
  // req.user.user_id ile kullanıcıya erişebilirsiniz
  const userId = req.user.user_id;
  
  // İşlemleriniz...
});
```

## Hata Ayıklama

- JWT_SECRET'in .env dosyasında tanımlı olduğundan emin olun
- Prisma generate komutunu çalıştırdığınızdan emin olun
- Database bağlantısını kontrol edin
- Token'ın doğru formatta gönderildiğinden emin olun: `Bearer TOKEN`


