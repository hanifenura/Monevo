import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ReceiptProduct } from '@/types/receipt';

interface ProductItemProps {
  product: ReceiptProduct;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  onEdit,
  onDelete,
}) => {
  const handleDelete = () => {
    Alert.alert(
      'Ürünü Sil',
      `"${product.name}" ürününü silmek istediğinize emin misiniz?`,
      [
        { text: 'İptal', style: 'cancel' },
        {
          text: 'Sil',
          style: 'destructive',
          onPress: () => onDelete(product.id),
        },
      ]
    );
  };

  const formatPrice = (price: number) => {
    return `₺${price.toFixed(2)}`;
  };

  const getQuantityText = () => {
    if (product.unit === 'kg') {
      return `${product.quantity} Kg x ${formatPrice(product.pricePerUnit || 0)}/kg`;
    }
    return `${product.quantity} Adet x ${formatPrice(product.pricePerUnit || product.price)}`;
  };

  const getTaxText = () => {
    if (product.taxRate) {
      return `KDV: %${product.taxRate}`;
    }
    return '';
  };

  return (
    <View style={styles.container}>
      {/* Product Header */}
      <View style={styles.header}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.totalPrice}>{formatPrice(product.price)}</Text>
      </View>

      {/* Product Details & Actions */}
      <View style={styles.footer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.quantityText}>{getQuantityText()}</Text>
          {product.taxRate !== undefined && (
            <Text style={styles.taxText}>{getTaxText()}</Text>
          )}
        </View>
        
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => onEdit(product.id)}
          >
            <Ionicons name="create-outline" size={18} color="#59B1B1" />
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleDelete}
          >
            <Ionicons name="trash-outline" size={18} color="#EF4444" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    flex: 1,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginLeft: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
  },
  quantityText: {
    fontSize: 14,
    color: '#7C7C7C',
  },
  taxText: {
    fontSize: 12,
    color: '#59B1B1',
    marginTop: 4,
    fontWeight: '500',
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


