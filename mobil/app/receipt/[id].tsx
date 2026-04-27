import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useAuthStore } from '@/store/authStore';
import { receiptService } from '@/services/api';

interface Product {
  item_id?: number;
  productName: string;
  quantity: number;
  unit: string;
  price: number;
  pricePerUnit?: number;
  taxRate?: number;
}

interface ReceiptDetail {
  receipt_id: number;
  store_name: string;
  receipt_date: string;
  subtotal: string;
  tax_amount: string;
  total_amount: string;
  user_id: number;
  created_at: string;
  items: Product[];
}

export default function ReceiptDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { user } = useAuthStore();

  const [receipt, setReceipt] = useState<ReceiptDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (id && user) {
      loadReceipt();
    }
  }, [id, user]);

  const loadReceipt = async () => {
    if (!user?.user_id || !id) return;

    try {
      setIsLoading(true);
      const response = await receiptService.getReceiptById(Number(id), user.user_id);

      if (response.success && response.data) {
        setReceipt(response.data);
      }
    } catch (error) {
      console.error('Fiş yüklenirken hata:', error);
      Alert.alert('Hata', 'Fiş yüklenirken bir hata oluştu', [
        { text: 'Tamam', onPress: () => router.back() }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadReceipt();
    setRefreshing(false);
  };

  const handleDelete = () => {
    Alert.alert(
      'Fişi Sil',
      'Bu fişi silmek istediğinize emin misiniz?',
      [
        { text: 'İptal', style: 'cancel' },
        {
          text: 'Sil',
          style: 'destructive',
          onPress: async () => {
            try {
              const response = await receiptService.deleteReceipt(
                Number(id),
                user!.user_id
              );

              if (response.success) {
                Alert.alert('Başarılı', 'Fiş silindi', [
                  { text: 'Tamam', onPress: () => router.back() }
                ]);
              }
            } catch (error) {
              console.error('Fiş silinirken hata:', error);
              Alert.alert('Hata', 'Fiş silinirken bir hata oluştu');
            }
          },
        },
      ]
    );
  };

  const handleEdit = () => {
    router.push(`/receipt/edit?id=${id}` as any);
  };

  const formatCurrency = (amount: number | string | undefined | null) => {
    if (amount === undefined || amount === null || amount === '') return '0,00';
    const num = typeof amount === 'string' ? parseFloat(amount) : amount;
    if (isNaN(num)) return '0,00';
    return num.toFixed(2).replace('.', ',');
  };

  const formatDate = (dateString: string | undefined | null, includeTime: boolean = false) => {
    if (!dateString) return 'Tarih bilgisi yok';
    
    try {
      const date = new Date(dateString);
      
      // Geçerli bir tarih mi kontrol et
      if (isNaN(date.getTime())) {
        return 'Tarih bilgisi yok';
      }
      
      const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      };
      
      if (includeTime) {
        options.hour = '2-digit';
        options.minute = '2-digit';
      }
      
      return date.toLocaleDateString('tr-TR', options);
    } catch (error) {
      console.error('Tarih formatlama hatası:', error);
      return 'Tarih bilgisi yok';
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#59B1B1" />
      </View>
    );
  }

  if (!receipt) {
    return (
      <View style={styles.errorContainer}>
        <Ionicons name="alert-circle-outline" size={64} color="#FF4444" />
        <Text style={styles.errorText}>Fiş bulunamadı</Text>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>Geri Dön</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#2C2C2C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Fiş Detayı</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={handleEdit} style={styles.headerButton}>
            <Ionicons name="create-outline" size={24} color="#59B1B1" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete} style={styles.headerButton}>
            <Ionicons name="trash-outline" size={24} color="#FF4444" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#59B1B1']}
            tintColor="#59B1B1"
          />
        }
      >
        {/* Mağaza Bilgisi */}
        <View style={styles.storeCard}>
          <View style={styles.storeIcon}>
            <Ionicons name="storefront" size={32} color="#59B1B1" />
          </View>
          <View style={styles.storeInfo}>
            <Text style={styles.storeName}>{receipt.store_name}</Text>
            <Text style={styles.storeDate}>
              {formatDate(receipt.receipt_date, true)}
            </Text>
          </View>
        </View>

        {/* Ürünler */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Ürünler ({receipt.items?.length || 0})
          </Text>

          {receipt.items && receipt.items.length > 0 ? (
            receipt.items.map((product, index) => (
              <View key={product.item_id || index} style={styles.productCard}>
                <View style={styles.productLeft}>
                  <View style={styles.productIcon}>
                    <Ionicons name="cube-outline" size={20} color="#59B1B1" />
                  </View>
                  <View style={styles.productInfo}>
                    <Text style={styles.productName}>{product.productName || 'Ürün'}</Text>
                    <Text style={styles.productQuantity}>
                      {product.quantity || 0} {product.unit || 'adet'}
                      {product.pricePerUnit && 
                        ` × ₺${formatCurrency(product.pricePerUnit)}`
                      }
                    </Text>
                  </View>
                </View>
                <Text style={styles.productPrice}>
                  ₺{formatCurrency(product.price)}
                </Text>
              </View>
            ))
          ) : (
            <View style={styles.emptyProducts}>
              <Text style={styles.emptyProductsText}>Ürün bulunamadı</Text>
            </View>
          )}
        </View>

        {/* Özet */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Ara Toplam</Text>
            <Text style={styles.summaryValue}>
              ₺{formatCurrency(receipt.subtotal)}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>KDV</Text>
            <Text style={styles.summaryValue}>
              ₺{formatCurrency(receipt.tax_amount)}
            </Text>
          </View>

          <View style={styles.summaryDivider} />

          <View style={styles.summaryRow}>
            <Text style={styles.summaryTotalLabel}>Toplam</Text>
            <Text style={styles.summaryTotalValue}>
              ₺{formatCurrency(receipt.total_amount)}
            </Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 40,
  },
  errorText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF4444',
    marginTop: 16,
    marginBottom: 24,
  },
  backBtn: {
    backgroundColor: '#59B1B1',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
  },
  backBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
    flex: 1,
    textAlign: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 8,
  },
  headerButton: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
  storeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 16,
    marginBottom: 8,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  storeIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F0F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  storeInfo: {
    flex: 1,
  },
  storeName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  storeDate: {
    fontSize: 14,
    color: '#7C7C7C',
  },
  section: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 12,
    marginLeft: 4,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  productLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  productIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  productQuantity: {
    fontSize: 13,
    color: '#7C7C7C',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#59B1B1',
    marginLeft: 12,
  },
  emptyProducts: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
  },
  emptyProductsText: {
    fontSize: 14,
    color: '#7C7C7C',
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    marginTop: 8,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  summaryLabel: {
    fontSize: 15,
    color: '#7C7C7C',
  },
  summaryValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C2C2C',
  },
  summaryDivider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 12,
  },
  summaryTotalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  summaryTotalValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#59B1B1',
  },
});
