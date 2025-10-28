import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface SignupFormProps {
  onSubmit: (data: {
    fullName: string;
    email: string;
    username: string;
    password: string;
  }) => void;
  onNavigateToLogin?: () => void;
}

export const SignupForm: React.FC<SignupFormProps> = ({
  onSubmit,
  onNavigateToLogin,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState<string | null>(null); // 🔹 Focus durumu

  const handleSubmit = () => {
    if (password === confirmPassword) {
      onSubmit({ fullName, email, username, password });
    } else {
      alert('Şifreler eşleşmiyor!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Full Name Input */}
      <TextInput
        style={[
          styles.input,
          focusedInput === 'fullName' && styles.inputFocused,
        ]}
        placeholder="Ad Soyad"
        placeholderTextColor="#A0A0A0"
        value={fullName}
        onChangeText={setFullName}
        autoCapitalize="words"
        onFocus={() => setFocusedInput('fullName')}
        onBlur={() => setFocusedInput(null)}
      />

      {/* Email Input */}
      <TextInput
        style={[
          styles.input,
          focusedInput === 'email' && styles.inputFocused,
        ]}
        placeholder="E-posta"
        placeholderTextColor="#A0A0A0"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        onFocus={() => setFocusedInput('email')}
        onBlur={() => setFocusedInput(null)}
      />

      {/* Username Input */}
      <TextInput
        style={[
          styles.input,
          focusedInput === 'username' && styles.inputFocused,
        ]}
        placeholder="Kullanıcı Adı"
        placeholderTextColor="#A0A0A0"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        onFocus={() => setFocusedInput('username')}
        onBlur={() => setFocusedInput(null)}
      />

      {/* Password Input */}
      <TextInput
        style={[
          styles.input,
          focusedInput === 'password' && styles.inputFocused,
        ]}
        placeholder="Şifre"
        placeholderTextColor="#A0A0A0"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        onFocus={() => setFocusedInput('password')}
        onBlur={() => setFocusedInput(null)}
      />

      {/* Confirm Password Input */}
      <TextInput
        style={[
          styles.input,
          focusedInput === 'confirmPassword' && styles.inputFocused,
        ]}
        placeholder="Şifre Tekrar"
        placeholderTextColor="#A0A0A0"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
        onFocus={() => setFocusedInput('confirmPassword')}
        onBlur={() => setFocusedInput(null)}
      />

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
        <Text style={styles.registerButtonText}>Hesap Oluştur</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Veya</Text>
        <View style={styles.divider} />
      </View>

      {/* Login Link */}
      {onNavigateToLogin && (
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Zaten hesabınız var mı? </Text>
          <TouchableOpacity onPress={onNavigateToLogin}>
            <Text style={styles.loginLink}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#2C2C2C',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: 'transparent', // Başlangıçta border yok
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  inputFocused: {
    borderColor: '#59B1B1', // 🔹 Mavi çerçeve
  },
  registerButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#59B1B1',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 30,
    shadowColor: '#59B1B1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#D0D0D0',
  },
  dividerText: {
    marginHorizontal: 16,
    color: '#7C7C7C',
    fontSize: 14,
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    color: '#7C7C7C',
    fontSize: 15,
  },
  loginLink: {
    color: '#59B1B1',
    fontSize: 15,
    fontWeight: '600',
  },
});
