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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SignupForm } from '@/components/auth/SignupForm';
import { authService } from '@/services/api';
import { useAuthStore } from '@/store/authStore';

export default function SignupScreen() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    // Basit validasyon
    if (!data.name || !data.email || !data.password) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun');
      return;
    }

    if (data.password.length < 6) {
      Alert.alert('Hata', 'Şifre en az 6 karakter olmalıdır');
      return;
    }

    setIsLoading(true);

    try {
      const response = await authService.register(data);
      
      if (response.success) {
        // Token ve kullanıcı bilgisini store'a kaydet
        await login(response.data.user, response.data.token);
        
        // Başarılı mesajı
        Alert.alert('Başarılı', response.message || 'Kayıt başarılı', [
          {
            text: 'Tamam',
            onPress: () => router.replace('/(tabs)'),
          },
        ]);
      } else {
        Alert.alert('Hata', response.message || 'Kayıt başarısız');
      }
    } catch (error: any) {
      console.error('Signup hatası:', error);
      
      // Hata mesajını göster
      const errorMessage = error?.response?.data?.message || 
                          'Kayıt olunurken bir hata oluştu';
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
          <Text style={styles.title}>Hesap Oluştur</Text>
          <Text style={styles.subtitle}>
            Yeni bir hesap oluşturarak başlayın
          </Text>

          <SignupForm
            onSubmit={handleSignup}
            onNavigateToLogin={() => router.push('/auth/login' as any)}
          />

          {isLoading && (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color="#59B1B1" />
            </View>
          )}
        </View>
      </ScrollView>
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
});
