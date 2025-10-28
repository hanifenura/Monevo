# API İstemci Servisleri

Bu klasör, backend API'si ile iletişim kurmak için gerekli servisleri içerir.

## Yapı

```
services/
├── apiClient.ts       # Ana axios istemcisi (interceptors ile)
├── api/
│   └── index.ts      # API servisleri (userService, authService, vb.)
└── README.md         # Bu dosya
```

## Kurulum

Gerekli paketler zaten yüklü:
- ✅ axios
- ✅ @types/node

## Yapılandırma

API URL'leri `config/env.ts` dosyasında tanımlanır:

```typescript
const ENV = {
  dev: {
    apiUrl: 'http://localhost:5000',  // Geliştirme
  },
  prod: {
    apiUrl: 'https://your-production-api.com',  // Production
  },
};
```

## Kullanım

### 1. Doğrudan apiClient kullanımı

```typescript
import apiClient from './services/apiClient';

// GET isteği
const response = await apiClient.get('/endpoint');

// POST isteği
const response = await apiClient.post('/endpoint', { data: 'value' });

// PUT isteği
const response = await apiClient.put('/endpoint/:id', { data: 'value' });

// DELETE isteği
const response = await apiClient.delete('/endpoint/:id');
```

### 2. Servis fonksiyonlarını kullanma (önerilen)

```typescript
import { userService, authService } from './services/api';

// Kullanıcıları getir
const users = await userService.getUsers();

// Yeni kullanıcı oluştur
const newUser = await userService.createUser({
  name: 'John Doe',
  email: 'john@example.com'
});

// Giriş yap
const loginResponse = await authService.login({
  email: 'user@example.com',
  password: 'password123'
});
```

### 3. Component içinde kullanım örneği

```typescript
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { userService } from '../services/api';

export default function UsersScreen() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await userService.getUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Hata: {error}</Text>;

  return (
    <View>
      {users.map(user => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </View>
  );
}
```

## Authentication Token Ekleme

`apiClient.ts` dosyasında request interceptor'a token ekleyebilirsiniz:

```typescript
apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // AsyncStorage'dan token al
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
```

## Hata Yönetimi

Tüm API hataları otomatik olarak yakalanır ve console'a yazılır. Response interceptor'da hata yönetimini özelleştirebilirsiniz.

## Yeni Servis Ekleme

`services/api/index.ts` dosyasına yeni servisler ekleyebilirsiniz:

```typescript
export const productService = {
  getProducts: async () => {
    const response = await apiClient.get('/products');
    return response.data;
  },
  // ... diğer metodlar
};
```

