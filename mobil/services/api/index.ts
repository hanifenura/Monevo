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
  login: async (credentials: { email: string; password: string }) => {
    try {
      const response = await apiClient.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  register: async (userData: { name: string; email: string; password: string }) => {
    try {
      const response = await apiClient.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await apiClient.post('/auth/logout');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

