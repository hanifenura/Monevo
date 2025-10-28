import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  username: string;
  fullName: string;
}

interface AuthStore {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  
  setUser: (user) => set({ 
    user, 
    isAuthenticated: !!user 
  }),
  
  setToken: (token) => set({ token }),
  
  logout: () => set({ 
    user: null, 
    token: null, 
    isAuthenticated: false 
  }),
}));


