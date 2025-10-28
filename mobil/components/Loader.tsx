import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';

interface LoaderProps {
  size?: 'small' | 'large';
  color?: string;
  text?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  size = 'large',
  color = '#59B1B1',
  text,
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: '#7C7C7C',
  },
});


