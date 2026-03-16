import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface TotalsSectionProps {
  subtotal: number;
  tax: number;
  total: number;
  onSubtotalChange: (value: string) => void;
  onTaxChange: (value: string) => void;
  onTotalChange: (value: string) => void;
}

export const TotalsSection: React.FC<TotalsSectionProps> = ({
  subtotal,
  tax,
  total,
  onSubtotalChange,
  onTaxChange,
  onTotalChange,
}) => {
  // Virgüllü formatlama
  const formatValue = (value: number) => {
    return value.toFixed(2).replace('.', ',');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Toplamlar</Text>
      
      <View style={styles.card}>
        {/* Subtotal */}
        <View style={styles.row}>
          <Text style={styles.label}>Ara Toplam</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.currency}>₺</Text>
            <TextInput
              style={styles.input}
              value={formatValue(subtotal)}
              onChangeText={onSubtotalChange}
              keyboardType="decimal-pad"
            />
          </View>
        </View>

        {/* Tax */}
        <View style={styles.row}>
          <Text style={styles.label}>Vergi</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.currency}>₺</Text>
            <TextInput
              style={styles.input}
              value={formatValue(tax)}
              onChangeText={onTaxChange}
              keyboardType="decimal-pad"
            />
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Total */}
        <View style={styles.row}>
          <Text style={styles.totalLabel}>Toplam</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.totalCurrency}>₺</Text>
            <TextInput
              style={styles.totalInput}
              value={formatValue(total)}
              onChangeText={onTotalChange}
              keyboardType="decimal-pad"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 100, // Space for fixed button
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#7C7C7C',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    paddingHorizontal: 12,
    height: 44,
    minWidth: 120,
  },
  currency: {
    fontSize: 16,
    color: '#7C7C7C',
    marginRight: 4,
  },
  totalCurrency: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginRight: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#2C2C2C',
    textAlign: 'right',
  },
  totalInput: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 12,
    borderStyle: 'dashed',
  },
});


