import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  user_id: number;
  email: string;
  name: string;
  created_at: string;
}

interface AuthStore {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  rememberMe: boolean;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  login: (user: User, token: string, rememberMe?: boolean) => Promise<void>;
  logout: () => Promise<void>;
  loadStoredAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  rememberMe: false,
  
  setUser: (user) => set({ 
    user, 
    isAuthenticated: !!user 
  }),
  
  setToken: (token) => set({ token }),
  
  login: async (user, token, rememberMe = false) => {
    try {
      // Token ve kullanıcı bilgisini AsyncStorage'a kaydet
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user', JSON.stringify(user));
      await AsyncStorage.setItem('rememberMe', JSON.stringify(rememberMe));
      
      // State'i güncelle
      set({ 
        user, 
        token, 
        isAuthenticated: true,
        isLoading: false,
        rememberMe
      });
    } catch (error) {
      console.error('Login kaydetme hatası:', error);
    }
  },
  
  logout: async () => {
    try {
      // AsyncStorage'dan temizle
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      
      // State'i sıfırla
      set({ 
        user: null, 
        token: null, 
        isAuthenticated: false,
        isLoading: false
      });
    } catch (error) {
      console.error('Logout hatası:', error);
    }
  },

  loadStoredAuth: async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const userStr = await AsyncStorage.getItem('user');
      const rememberMeStr = await AsyncStorage.getItem('rememberMe');
      
      const rememberMe = rememberMeStr ? JSON.parse(rememberMeStr) : false;
      
      // Eğer "Hesabım açık kalsın" seçilmemişse, uygulama yeniden açıldığında çıkış yap
      if (token && userStr && rememberMe) {
        const user = JSON.parse(userStr);
        set({ 
          user, 
          token, 
          isAuthenticated: true,
          isLoading: false,
          rememberMe
        });
      } else {
        // RememberMe false ise token'ları temizle
        if (token && !rememberMe) {
          await AsyncStorage.removeItem('token');
          await AsyncStorage.removeItem('user');
          await AsyncStorage.removeItem('rememberMe');
        }
        set({ isLoading: false });
      }
    } catch (error) {
      console.error('Auth yükleme hatası:', error);
      set({ isLoading: false });
    }
  },
}));


