import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
  textStyle,
}) => {
  const buttonStyle = [
    styles.button,
    variant === 'primary' && styles.primaryButton,
    variant === 'secondary' && styles.secondaryButton,
    variant === 'outline' && styles.outlineButton,
    (disabled || loading) && styles.disabledButton,
    style,
  ];

  const textStyles = [
    styles.text,
    variant === 'primary' && styles.primaryText,
    variant === 'secondary' && styles.secondaryText,
    variant === 'outline' && styles.outlineText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? '#59B1B1' : '#FFFFFF'} />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  primaryButton: {
    backgroundColor: '#59B1B1',
    shadowColor: '#59B1B1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  secondaryButton: {
    backgroundColor: '#E0E0E0',
  },
  outlineButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#59B1B1',
  },
  disabledButton: {
    opacity: 0.5,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#2C2C2C',
  },
  outlineText: {
    color: '#59B1B1',
  },
});


