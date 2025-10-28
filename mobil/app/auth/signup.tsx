import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SignupForm } from '@/components/auth/SignupForm';

export default function SignupScreen() {
  const router = useRouter();

  const handleSignup = async (data: {
    fullName: string;
    email: string;
    username: string;
    password: string;
  }) => {
    console.log('Signup:', data);
    router.replace('/(tabs)');
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
});
