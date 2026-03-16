import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';

interface LoginFormProps {
  onSubmit: (email: string, password: string, rememberMe: boolean) => void;
  onForgotPassword?: () => void;
  onNavigateToSignup?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  onForgotPassword,
  onNavigateToSignup,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {
    onSubmit(email, password, rememberMe);
  };

  return (
    <View style={styles.container}>
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

      {/* Beni Hatırla ve Şifremi Unuttum */}
      <View style={styles.rowBetween}>
        <View style={styles.rememberMeContainer}>
          <Switch
            value={rememberMe}
            onValueChange={setRememberMe}
            trackColor={{ false: '#D0D0D0', true: '#59B1B1' }}
            thumbColor={rememberMe ? '#FFFFFF' : '#f4f3f4'}
          />
          <Text style={styles.rememberMeText}>Hesabım açık kalsın</Text>
        </View>

        {onForgotPassword && (
          <TouchableOpacity onPress={onForgotPassword}>
            <Text style={styles.forgotPasswordText}>Şifremi unuttum?</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
        <Text style={styles.loginButtonText}>Giriş Yap</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Veya</Text>
        <View style={styles.divider} />
      </View>

      {/* Register Button */}
      {onNavigateToSignup && (
        <TouchableOpacity
          style={styles.registerButton}
          onPress={onNavigateToSignup}
        >
          <Text style={styles.registerButtonText}>Yeni hesap oluştur</Text>
        </TouchableOpacity>
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
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  inputFocused: {
    borderColor: '#59B1B1',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    color: '#2C2C2C',
    marginLeft: 8,
    fontSize: 15,
  },
  forgotPasswordText: {
    color: '#59B1B1',
    fontSize: 15,
  },
  loginButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#59B1B1',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
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
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
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
  registerButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#59B1B1',
  },
  registerButtonText: {
    color: '#59B1B1',
    fontSize: 16,
    fontWeight: '500',
  },
});
