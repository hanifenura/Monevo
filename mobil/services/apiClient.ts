import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
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
  (config: InternalAxiosRequestConfig) => {
    // Buraya authentication token ekleyebilirsiniz
    // const token = await AsyncStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
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
  (error: AxiosError) => {
    // Hata yönetimi
    if (error.response) {
      // Sunucu yanıt verdi ama hata kodu döndü
      console.error('API Hatası:', error.response.data);
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
