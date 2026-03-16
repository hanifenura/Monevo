// API servisleri için örnek kullanım
import apiClient from '../apiClient';

// Kullanıcı servisleri
export const userService = {
  // Örnek GET isteği
  getUsers: async () => {
    try {
      const response = await apiClient.get('/users');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Örnek POST isteği
  createUser: async (userData: { name: string; email: string }) => {
    try {
      const response = await apiClient.post('/users', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Örnek PUT isteği
  updateUser: async (userId: string, userData: { name?: string; email?: string }) => {
    try {
      const response = await apiClient.put(`/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Örnek DELETE isteği
  deleteUser: async (userId: string) => {
    try {
      const response = await apiClient.delete(`/users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

// Auth servisleri
export const authService = {
  // Giriş yap
  login: async (credentials: { email: string; password: string }) => {
    try {
      const response = await apiClient.post('/api/auth/login', credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Kayıt ol
  register: async (userData: { name: string; email: string; password: string }) => {
    try {
      const response = await apiClient.post('/api/auth/register', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Profil bilgilerini getir (token ile)
  getProfile: async () => {
    try {
      const response = await apiClient.get('/api/auth/profile');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Çıkış yap (local)
  logout: async () => {
    // Token'ı local storage'dan sil (AsyncStorage)
    // Bu fonksiyon auth screen'de çağrılacak
    return { success: true };
  },
};

// Receipt servisleri
export const receiptService = {
  // Fiş kaydet
  saveReceipt: async (receiptData: {
    storeName: string;
    purchaseDate: Date | string;
    products: Array<{
      name: string;
      quantity: number;
      price: number;
      unit: 'adet' | 'kg';
      pricePerUnit?: number;
      taxRate?: number;
    }>;
    subtotal: number;
    tax: number;
    total: number;
    user_id: number;
    list_id?: number;
  }) => {
    try {
      const response = await apiClient.post('/api/receipts', receiptData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Kullanıcının tüm fişlerini getir
  getUserReceipts: async (userId: number) => {
    try {
      const response = await apiClient.get(`/api/receipts?user_id=${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },  // Belirli bir fişi getir
  getReceiptById: async (receiptId: number, userId: number) => {
    try {
      const response = await apiClient.get(`/api/receipts/${receiptId}?user_id=${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Fiş güncelle
  updateReceipt: async (
    receiptId: number,
    receiptData: {
      storeName: string;
      purchaseDate: Date | string;
      products: Array<{
        name: string;
        quantity: number;
        price: number;
        unit: 'adet' | 'kg';
        pricePerUnit?: number;
        taxRate?: number;
      }>;
      subtotal: number;
      tax: number;
      total: number;
      user_id: number;
    }
  ) => {
    try {
      const response = await apiClient.put(`/api/receipts/${receiptId}`, receiptData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },  // Fiş sil
  deleteReceipt: async (receiptId: number, userId: number) => {
    try {
      const response = await apiClient.delete(`/api/receipts/${receiptId}?user_id=${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

// Shopping List servisleri
export const listService = {
  // Kullanıcının tüm listelerini getir
  getUserLists: async (userId: number) => {
    try {
      const response = await apiClient.get(`/api/lists?user_id=${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Belirli bir listeyi getir
  getListById: async (listId: number, userId: number) => {
    try {
      const response = await apiClient.get(`/api/lists/${listId}?user_id=${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Yeni liste oluştur
  createList: async (listData: {
    name: string;
    user_id: number;
  }) => {
    try {
      const response = await apiClient.post('/api/lists', listData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Liste güncelle
  updateList: async (
    listId: number,
    listData: {
      name: string;
    },
    userId: number
  ) => {
    try {
      const response = await apiClient.put(`/api/lists/${listId}?user_id=${userId}`, listData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Liste sil
  deleteList: async (listId: number, userId: number) => {
    try {
      const response = await apiClient.delete(`/api/lists/${listId}?user_id=${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
