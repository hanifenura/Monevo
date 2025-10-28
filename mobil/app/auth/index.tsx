import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function AuthIndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
         
         <Image
          source={require('@/assets/images/logo_2.png')}
            style={styles.logo}
          resizeMode="contain"
         />
          <Text style={styles.appName}>Monevo</Text>
          <Text style={styles.tagline}>Alışveriş Listesi & Harcama Takibi</Text>
          </View>

        <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.loginButton}
            onPress={() => router.push('/auth/login' as any)}
            >
              <Text style={styles.loginButtonText}>Giriş Yap</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.signupButton}
            onPress={() => router.push('/auth/signup' as any)}
            >
              <Text style={styles.signupButtonText}>Hesap Oluştur</Text>
            </TouchableOpacity>
          </View>
      </View>

      <Text style={styles.footer}>
        © 2025 Monevo. Tüm hakları saklıdır.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
    marginTop: 20,
  },
  logo: {
    width: 160,
    height: 160,
  },
  appName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginTop: 10,
  },
  tagline: {
    fontSize: 16,
    color: '#7C7C7C',
    marginTop: 8,
  },
  buttonsContainer: {
    width: '100%',
    maxWidth: 400,
  },
  loginButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#59B1B1',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#59B1B1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  signupButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#59B1B1',
  },
  signupButtonText: {
    color: '#59B1B1',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    textAlign: 'center',
    padding: 20,
    color: '#AAAAAA',
    fontSize: 14,
  },
});
