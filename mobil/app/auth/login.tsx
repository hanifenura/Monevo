import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LoginForm } from '@/components/auth/LoginForm';
import { authService } from '@/services/api';
import { useAuthStore } from '@/store/authStore';

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = async (email: string, password: string, rememberMe: boolean) => {
    // Basit validasyon
    if (!email || !password) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun');
      return;
    }

    setIsLoading(true);

    try {
      const response = await authService.login({ email, password });
      
      if (response.success) {
        // Token ve kullanıcı bilgisini store'a kaydet
        await login(response.data.user, response.data.token, rememberMe);
        
        // Kullanıcı adını kaydet ve modal göster
        setUserName(response.data.user.name);
        setShowSuccessModal(true);
        
        // 2 saniye sonra ana sayfaya yönlendir
        setTimeout(() => {
          setShowSuccessModal(false);
          router.replace('/(tabs)');
        }, 2000);
      } else {
        Alert.alert('Hata', response.message || 'Giriş başarısız');
      }
    } catch (error: any) {
      console.error('Login hatası:', error);
      
      // Hata mesajını göster
      const errorMessage = error?.response?.data?.message || 
                          'Giriş yapılırken bir hata oluştu';
      Alert.alert('Hata', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="#2C2C2C" />
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <Image
              source={require('@/assets/images/logo_2.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.appName}>Monevo</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Giriş Yap</Text>
          <Text style={styles.subtitle}>
            Hesabınıza giriş yaparak devam edin
          </Text>

          <LoginForm
            onSubmit={handleLogin}
            onForgotPassword={() => Alert.alert('Bilgi', 'Şifre sıfırlama özelliği yakında eklenecek')}
            onNavigateToSignup={() => router.push('/auth/signup' as any)}
          />

          {isLoading && (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color="#59B1B1" />
            </View>
          )}
        </View>
      </ScrollView>

      {/* Success Modal */}
      <Modal
        visible={showSuccessModal}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.successModalOverlay}>
          <View style={styles.successModalContent}>
            <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
            <Text style={styles.successTitle}>Giriş Başarılı</Text>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    width: 68,
    height: 68,
    },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#7C7C7C',
    marginBottom: 40,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  successModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successModalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    gap: 12,
  },
  successTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C2C2C',
  },
});

