import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ReceiptProduct } from '@/types/receipt';

interface EditProductModalProps {
  visible: boolean;
  product: ReceiptProduct | null;
  onSave: (product: ReceiptProduct) => void;
  onCancel: () => void;
}

export const EditProductModal: React.FC<EditProductModalProps> = ({
  visible,
  product,
  onSave,
  onCancel,
}) => {
  const [name, setName] = useState('');
  const [quantityType, setQuantityType] = useState<'adet' | 'kg'>('adet');
  const [quantity, setQuantity] = useState('1');
  const [price, setPrice] = useState('');
  const [taxRate, setTaxRate] = useState('20');
  const [selectedTaxPreset, setSelectedTaxPreset] = useState<'1' | '10' | '20' | 'custom'>('20');
  const [customTaxRate, setCustomTaxRate] = useState('');

  // Sayıyı virgüllü formata çevir
  const formatNumberWithComma = (value: number): string => {
    return value.toString().replace('.', ',');
  };

  // Virgülü noktaya çevir
  const normalizeDecimalInput = (value: string): string => {
    return value.replace(',', '.');
  };

  // Sayıyı parse et (virgül veya nokta kabul eder)
  const parseDecimal = (value: string): number => {
    return parseFloat(normalizeDecimalInput(value)) || 0;
  };

  useEffect(() => {
    if (product) {
      setName(product.name);
      setQuantityType(product.unit);
      setQuantity(formatNumberWithComma(product.quantity));
      
      // Birim fiyatı göster (pricePerUnit varsa onu kullan, yoksa hesapla)
      const unitPrice = product.pricePerUnit || (product.price / product.quantity);
      setPrice(formatNumberWithComma(unitPrice));
      
      const rate = (product.taxRate || 20).toString();
      setTaxRate(rate);
      
      // Preset değerlerden birini seç veya custom
      if (rate === '1' || rate === '10' || rate === '20') {
        setSelectedTaxPreset(rate as '1' | '10' | '20');
      } else {
        setSelectedTaxPreset('custom');
        setCustomTaxRate(rate);
      }
    }
  }, [product]);

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

  const handleSave = () => {
    if (!product || !name.trim() || !price) {
      return;
    }

    const parsedQuantity = parseDecimal(quantity);
    const parsedUnitPrice = parseDecimal(price); // Bu birim fiyat
    const parsedTaxRate = parseDecimal(taxRate);

    // Toplam fiyatı hesapla
    const totalPrice = parsedUnitPrice * parsedQuantity;

    const updatedProduct: ReceiptProduct = {
      ...product,
      name: name.trim(),
      unit: quantityType,
      quantity: parsedQuantity || 1,
      price: totalPrice || 0, // Toplam fiyat
      taxRate: parsedTaxRate || 0,
      pricePerUnit: parsedUnitPrice || 0, // Birim fiyat
    };

    onSave(updatedProduct);
  };

  if (!product) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onCancel}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.modalOverlay}
      >
        <View style={styles.modalContainer}>
          <ScrollView
            style={styles.modalContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Ürünü Düzenle</Text>
              <TouchableOpacity onPress={onCancel} style={styles.closeButton}>
                <Ionicons name="close" size={28} color="#7C7C7C" />
              </TouchableOpacity>
            </View>

            {/* Product Name */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Ürün Adı</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Ürün adını girin"
                placeholderTextColor="#A0A0A0"
              />
            </View>

            {/* Quantity Type Selector */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Miktar Tipi</Text>
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
            <View style={styles.row}>
              <View style={styles.halfInput}>
                <Text style={styles.label}>Miktar</Text>
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

              <View style={styles.halfInput}>
                <Text style={styles.label}>
                  Birim Fiyat {quantityType === 'kg' ? '(₺/kg)' : '(₺/adet)'}
                </Text>
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
            <View style={styles.inputContainer}>
              <Text style={styles.label}>KDV Oranı</Text>
              
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

            {/* Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={onCancel}
              >
                <Text style={styles.cancelButtonText}>İptal</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.saveButton,
                  (!name || !price) && styles.saveButtonDisabled,
                ]}
                onPress={handleSave}
                disabled={!name || !price}
              >
                <Text style={styles.saveButtonText}>Kaydet</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '90%',
  },
  modalContent: {
    padding: 24,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  closeButton: {
    padding: 4,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 8,
  },
  input: {
    height: 56,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#2C2C2C',
  },
  segmentContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 4,
    gap: 4,
  },
  segment: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  segmentActive: {
    backgroundColor: '#59B1B1',
  },
  segmentText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7C7C7C',
  },
  segmentTextActive: {
    color: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  halfInput: {
    flex: 1,
  },
  quantityInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    paddingHorizontal: 12,
    height: 56,
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
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    paddingHorizontal: 12,
    height: 56,
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
    gap: 8,
    marginBottom: 12,
  },
  taxPresetButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#D0D0D0',
    alignItems: 'center',
  },
  taxPresetButtonActive: {
    backgroundColor: '#59B1B1',
    borderColor: '#59B1B1',
  },
  taxPresetText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7C7C7C',
  },
  taxPresetTextActive: {
    color: '#FFFFFF',
  },
  taxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    paddingHorizontal: 12,
    height: 56,
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
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
    marginBottom: 20,
  },
  cancelButton: {
    flex: 1,
    height: 56,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7C7C7C',
  },
  saveButton: {
    flex: 1,
    height: 56,
    backgroundColor: '#59B1B1',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonDisabled: {
    opacity: 0.5,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});





