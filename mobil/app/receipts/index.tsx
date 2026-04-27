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
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/store/authStore';
import { receiptService } from '@/services/api';

interface Receipt {
  receipt_id: number;
  store_name: string;
  receipt_date: string;
  total_amount: string;
  user_id: number;
  created_at: string;
}

export default function ReceiptsScreen() {
  const router = useRouter();
  const { user } = useAuthStore();
  
  const [receipts, setReceipts] = useState<Receipt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (user?.user_id) {
      loadReceipts();
    }
  }, [user]);

  const loadReceipts = async () => {
    if (!user?.user_id) return;

    try {
      setIsLoading(true);
      const response = await receiptService.getUserReceipts(user.user_id);
      
      if (response.success && response.data) {
        setReceipts(response.data);
      }
    } catch (error) {
      console.error('Fişler yüklenirken hata:', error);
      Alert.alert('Hata', 'Fişler yüklenirken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadReceipts();
    setRefreshing(false);
  };

  const formatCurrency = (amount: number | string | undefined | null) => {
    if (amount === undefined || amount === null || amount === '') return '0,00';
    const num = typeof amount === 'string' ? parseFloat(amount) : amount;
    if (isNaN(num)) return '0,00';
    return num.toFixed(2).replace('.', ',');
  };

  const formatDate = (dateString: string | undefined | null, options?: Intl.DateTimeFormatOptions) => {
    if (!dateString) return 'Tarih yok';
    
    try {
      const date = new Date(dateString);
      
      // Geçerli bir tarih mi kontrol et
      if (isNaN(date.getTime())) {
        return 'Tarih yok';
      }
      
      const defaultOptions: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      };
      
      return date.toLocaleDateString('tr-TR', options || defaultOptions);
    } catch (error) {
      console.error('Tarih formatlama hatası:', error);
      return 'Tarih yok';
    }
  };

  const getTotalExpense = () => {
    return receipts.reduce((sum, receipt) => {
      const amount = parseFloat(receipt.total_amount);
      return sum + (isNaN(amount) ? 0 : amount);
    }, 0);
  };

  const groupReceiptsByMonth = () => {
    const grouped: { [key: string]: Receipt[] } = {};
    
    receipts.forEach((receipt) => {
      const monthKey = formatDate(receipt.receipt_date, { year: 'numeric', month: 'long' });
      
      if (!grouped[monthKey]) {
        grouped[monthKey] = [];
      }
      grouped[monthKey].push(receipt);
    });

    return grouped;
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#59B1B1" />
      </View>
    );
  }

  const groupedReceipts = groupReceiptsByMonth();
  const totalExpense = getTotalExpense();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#2C2C2C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alışveriş Fişlerim</Text>
        <View style={styles.backButton} />
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
        {/* Özet Kartı */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <View style={styles.summaryItem}>
              <Ionicons name="receipt" size={24} color="#59B1B1" />
              <Text style={styles.summaryNumber}>{receipts.length}</Text>
              <Text style={styles.summaryLabel}>Toplam Fiş</Text>
            </View>
            <View style={styles.summaryDivider} />
            <View style={styles.summaryItem}>
              <Ionicons name="cash" size={24} color="#FFA726" />
              <Text style={styles.summaryNumber}>₺{formatCurrency(totalExpense)}</Text>
              <Text style={styles.summaryLabel}>Toplam Harcama</Text>
            </View>
          </View>
        </View>

        {receipts.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="receipt-outline" size={80} color="#CCCCCC" />
            <Text style={styles.emptyStateTitle}>Henüz fiş yok</Text>
            <Text style={styles.emptyStateText}>
              İlk alışveriş fişinizi ekleyerek başlayın
            </Text>
            <TouchableOpacity
              style={styles.addReceiptButton}
              onPress={() => router.push('/camera' as any)}
            >
              <Ionicons name="camera" size={20} color="#FFFFFF" />
              <Text style={styles.addReceiptButtonText}>Fiş Ekle</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            {Object.entries(groupedReceipts).map(([month, monthReceipts]) => (
              <View key={month} style={styles.monthSection}>
                <Text style={styles.monthTitle}>{month}</Text>
                
                {monthReceipts.map((receipt) => (
                  <TouchableOpacity
                    key={receipt.receipt_id}
                    style={styles.receiptCard}
                    onPress={() => {
                      router.push(`/receipt/${receipt.receipt_id}` as any);
                    }}
                  >
                    <View style={styles.receiptIcon}>
                      <Ionicons name="receipt" size={24} color="#59B1B1" />
                    </View>
                    
                    <View style={styles.receiptInfo}>
                      <Text style={styles.receiptStore}>
                        {receipt.store_name || 'Bilinmeyen Mağaza'}
                      </Text>
                      <Text style={styles.receiptDate}>
                        {formatDate(receipt.receipt_date)}
                      </Text>
                    </View>
                    
                    <View style={styles.receiptRight}>
                      <Text style={styles.receiptAmount}>
                        ₺{formatCurrency(receipt.total_amount)}
                      </Text>
                      <Ionicons name="chevron-forward" size={20} color="#CCCCCC" />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </>
        )}
      </ScrollView>

      {/* Floating Action Button */}
      {receipts.length > 0 && (
        <TouchableOpacity
          style={styles.fab}
          onPress={() => router.push('/camera' as any)}
        >
          <Ionicons name="camera" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      )}
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
    width: 36,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  content: {
    flex: 1,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    margin: 16,
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
    alignItems: 'center',
  },
  summaryItem: {
    flex: 1,
    alignItems: 'center',
  },
  summaryDivider: {
    width: 1,
    height: 60,
    backgroundColor: '#E0E0E0',
  },
  summaryNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginTop: 8,
    marginBottom: 4,
  },
  summaryLabel: {
    fontSize: 12,
    color: '#7C7C7C',
    textAlign: 'center',
  },
  monthSection: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  monthTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 12,
    marginLeft: 4,
  },
  receiptCard: {
    flexDirection: 'row',
    alignItems: 'center',
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
  receiptIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  receiptInfo: {
    flex: 1,
  },
  receiptStore: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  receiptDate: {
    fontSize: 13,
    color: '#7C7C7C',
  },
  receiptRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  receiptAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#59B1B1',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 15,
    color: '#7C7C7C',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  addReceiptButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#59B1B1',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  addReceiptButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#59B1B1',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
});
