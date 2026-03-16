import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import env from '../config/env';

const apiClient = axios.create({
  baseURL: env.apiUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - İstek öncesi işlemler (ör: token ekleme)
apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // AsyncStorage'dan token'ı al ve header'a ekle
    try {
      const token = await AsyncStorage.getItem('token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Token alınamadı:', error);
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Yanıt sonrası işlemler
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    // Hata yönetimi
    if (error.response) {
      // Sunucu yanıt verdi ama hata kodu döndü
      console.error('API Hatası:', error.response.data);
      
      // 401 - Token geçersiz veya süresi dolmuş
      if (error.response.status === 401) {
        // Token'ı temizle
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('user');
        // Kullanıcıyı login sayfasına yönlendir (bu kısım auth store'da yapılacak)
      }
    } else if (error.request) {
      // İstek yapıldı ama yanıt alınamadı
      console.error('Ağ Hatası:', error.request);
    } else {
      // İstek oluşturulurken hata oluştu
      console.error('Hata:', error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
