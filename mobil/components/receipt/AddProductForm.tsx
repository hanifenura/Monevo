import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NewProduct } from '@/types/receipt';

interface AddProductFormProps {
  onAdd: (product: NewProduct) => void;
  onCancel?: () => void;
}

export const AddProductForm: React.FC<AddProductFormProps> = ({
  onAdd,
  onCancel,
}) => {
  const [name, setName] = useState('');
  const [quantityType, setQuantityType] = useState<'adet' | 'kg'>('adet');
  const [quantity, setQuantity] = useState('1');
  const [price, setPrice] = useState('');
  const [taxRate, setTaxRate] = useState('10');
  const [selectedTaxPreset, setSelectedTaxPreset] = useState<'1' | '10' | '20' | 'custom'>('10');
  const [customTaxRate, setCustomTaxRate] = useState(''); 

  // Virgülü noktaya çevir
  const normalizeDecimalInput = (value: string): string => {
    return value.replace(',', '.');
  };

  // Sayıyı parse et (virgül veya nokta kabul eder)
  const parseDecimal = (value: string): number => {
    return parseFloat(normalizeDecimalInput(value)) || 0;
  };

  // Input değişikliklerini yönet
  const handleQuantityChange = (value: string) => {
    setQuantity(value);
  };

  const handlePriceChange = (value: string) => {
    setPrice(value);
  };

  const handleTaxPresetChange = (preset: '1' | '10' | '20' | 'custom') => {
    setSelectedTaxPreset(preset);
    if (preset !== 'custom') {
      setTaxRate(preset);
    } else {
      setTaxRate(customTaxRate || '0');
    }
  };

  const handleCustomTaxChange = (value: string) => {
    setCustomTaxRate(value);
    if (selectedTaxPreset === 'custom') {
      setTaxRate(value);
    }
  };

  const handleAdd = () => {
    if (!name.trim() || !price) {
      return;
    }

    const parsedQuantity = parseDecimal(quantity);
    const parsedPrice = parseDecimal(price);
    const parsedTaxRate = parseDecimal(taxRate);

    onAdd({
      name: name.trim(),
      quantityType,
      quantity: parsedQuantity || 1,
      price: parsedPrice || 0,
      taxRate: parsedTaxRate || 0,
    });

    // Reset form
    setName('');
    setQuantity('1');
    setPrice('');
    setTaxRate('10');
    setSelectedTaxPreset('10');
    setCustomTaxRate('');
  };

  return (
    <View style={styles.container}>
      {/* Product Name */}
      <View style={styles.nameRow}>
        <TextInput
          style={styles.nameInput}
          value={name}
          onChangeText={setName}
          placeholder="Yeni Ürün Adı"
          placeholderTextColor="#FFFFFF"
        />
        {onCancel && (
          <TouchableOpacity onPress={onCancel} style={styles.deleteButton}>
            <Ionicons name="trash-outline" size={24} color="#EF4444" />
          </TouchableOpacity>
        )}
      </View>

      {/* Quantity Type Selector */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Miktar Tipi</Text>
        <View style={styles.segmentContainer}>
          <TouchableOpacity
            style={[
              styles.segment,
              quantityType === 'adet' && styles.segmentActive,
            ]}
            onPress={() => setQuantityType('adet')}
          >
            <Text
              style={[
                styles.segmentText,
                quantityType === 'adet' && styles.segmentTextActive,
              ]}
            >
              Adet Bazında
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.segment,
              quantityType === 'kg' && styles.segmentActive,
            ]}
            onPress={() => setQuantityType('kg')}
          >
            <Text
              style={[
                styles.segmentText,
                quantityType === 'kg' && styles.segmentTextActive,
              ]}
            >
              Kilogram Bazında
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Quantity & Price */}
      <View style={styles.inputRow}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Miktar</Text>
          <View style={styles.quantityInputContainer}>
            <TextInput
              style={styles.quantityInput}
              value={quantity}
              onChangeText={handleQuantityChange}
              keyboardType="decimal-pad"
            />
            <Text style={styles.unit}>{quantityType}</Text>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Fiyat</Text>
          <View style={styles.priceInputContainer}>
            <Text style={styles.currency}>₺</Text>
            <TextInput
              style={styles.priceInput}
              value={price}
              onChangeText={handlePriceChange}
              keyboardType="decimal-pad"
              placeholder="0,00"
              placeholderTextColor="#A0A0A0"
            />
          </View>
        </View>
      </View>

      {/* Tax Rate */}
      <View style={styles.section}>
        <Text style={styles.inputLabel}>KDV Oranı</Text>
        
        {/* Tax Preset Buttons */}
        <View style={styles.taxPresetContainer}>
          <TouchableOpacity
            style={[
              styles.taxPresetButton,
              selectedTaxPreset === '1' && styles.taxPresetButtonActive,
            ]}
            onPress={() => handleTaxPresetChange('1')}
          >
            <Text
              style={[
                styles.taxPresetText,
                selectedTaxPreset === '1' && styles.taxPresetTextActive,
              ]}
            >
              %1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.taxPresetButton,
              selectedTaxPreset === '10' && styles.taxPresetButtonActive,
            ]}
            onPress={() => handleTaxPresetChange('10')}
          >
            <Text
              style={[
                styles.taxPresetText,
                selectedTaxPreset === '10' && styles.taxPresetTextActive,
              ]}
            >
              %10
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.taxPresetButton,
              selectedTaxPreset === '20' && styles.taxPresetButtonActive,
            ]}
            onPress={() => handleTaxPresetChange('20')}
          >
            <Text
              style={[
                styles.taxPresetText,
                selectedTaxPreset === '20' && styles.taxPresetTextActive,
              ]}
            >
              %20
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.taxPresetButton,
              selectedTaxPreset === 'custom' && styles.taxPresetButtonActive,
            ]}
            onPress={() => handleTaxPresetChange('custom')}
          >
            <Text
              style={[
                styles.taxPresetText,
                selectedTaxPreset === 'custom' && styles.taxPresetTextActive,
              ]}
            >
              Diğer
            </Text>
          </TouchableOpacity>
        </View>

        {/* Custom Tax Input */}
        {selectedTaxPreset === 'custom' && (
          <View style={styles.taxContainer}>
            <TextInput
              style={styles.taxInput}
              value={customTaxRate}
              onChangeText={handleCustomTaxChange}
              keyboardType="decimal-pad"
              placeholder="KDV oranını girin"
              placeholderTextColor="#A0A0A0"
            />
            <Text style={styles.taxPercent}>%</Text>
          </View>
        )}
      </View>

      {/* Add Button */}
      <TouchableOpacity
        style={[styles.addButton, (!name || !price) && styles.addButtonDisabled]}
        onPress={handleAdd}
        disabled={!name || !price}
      >
        <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" />
        <Text style={styles.addButtonText}>Ürünü Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#59B1B1',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#59B1B1',
    padding: 16,
    marginBottom: 12,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  nameInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',
    paddingBottom: 8,
  },
  deleteButton: {
    padding: 4,
  },
  section: {
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  segmentContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 8,
    padding: 4,
    gap: 4,
  },
  segment: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  segmentActive: {
    backgroundColor: '#FFFFFF',
  },
  segmentText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  segmentTextActive: {
    color: '#59B1B1',
  },
  inputRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  inputGroup: {
    flex: 1,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  quantityInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  quantityInput: {
    flex: 1,
    fontSize: 16,
    color: '#2C2C2C',
    textAlign: 'center',
  },
  unit: {
    fontSize: 14,
    color: '#7C7C7C',
    marginLeft: 8,
  },
  priceInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  currency: {
    fontSize: 16,
    color: '#7C7C7C',
    marginRight: 4,
  },
  priceInput: {
    flex: 1,
    fontSize: 16,
    color: '#2C2C2C',
    textAlign: 'right',
  },
  taxPresetContainer: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 12,
  },
  taxPresetButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
  },
  taxPresetButtonActive: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
  },
  taxPresetText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  taxPresetTextActive: {
    color: '#59B1B1',
  },
  taxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  taxInput: {
    flex: 1,
    fontSize: 16,
    color: '#2C2C2C',
    textAlign: 'center',
  },
  taxPercent: {
    fontSize: 16,
    color: '#7C7C7C',
    marginLeft: 4,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 12,
    gap: 8,
  },
  addButtonDisabled: {
    opacity: 0.5,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#59B1B1',
  },
});


