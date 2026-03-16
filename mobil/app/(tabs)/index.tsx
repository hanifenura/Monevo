import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useAuthStore } from '@/store/authStore';
import { useRouter } from 'expo-router';
import { receiptService, listService } from '@/services/api';

export default function HomeScreen() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const router = useRouter();
  
  const [receiptsCount, setReceiptsCount] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [listsCount, setListsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [recentReceipts, setRecentReceipts] = useState<any[]>([]);

  // İstatistikleri yükle
  const loadStats = async () => {
    if (isAuthenticated && user?.user_id) {
      try {
        setIsLoading(true);
        
        // Fişleri çek
        const receiptsResponse = await receiptService.getUserReceipts(user.user_id);
        
        if (receiptsResponse.success && receiptsResponse.data) {
          const receipts = receiptsResponse.data;
          
          // Fiş sayısı
          setReceiptsCount(receipts.length);
          
          // Toplam harcama (virgüllü formatta)
          const total = receipts.reduce((sum: number, receipt: any) => {
            return sum + (parseFloat(receipt.total_amount) || 0);
          }, 0);
          setTotalExpense(total);
          
          // Son 5 fişi al
          setRecentReceipts(receipts.slice(0, 5));
        }

        // Listeleri çek
        const listsResponse = await listService.getUserLists(user.user_id);
        
        if (listsResponse.success && listsResponse.data) {
          setListsCount(listsResponse.count || listsResponse.data.length);
        }
      } catch (error) {
        console.error('İstatistikler yüklenirken hata:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  // Sayfa yüklendiğinde istatistikleri çek
  useEffect(() => {
    loadStats();
  }, [isAuthenticated, user]);

  // Pull-to-refresh handler
  const onRefresh = async () => {
    setRefreshing(true);
    await loadStats();
    setRefreshing(false);
  };

  const handleLogout = () => {
    logout();
    router.replace("../../auth/login" as any);
  };

  // Para formatı
  const formatCurrency = (amount: number) => {
    return amount.toFixed(2).replace('.', ',');
  };

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#59B1B1']}
          tintColor="#59B1B1"
        />
      }
    >
      <View style={styles.header}>
        <View style={styles.headerContent}>
        <Image
            source={require('@/assets/images/logo_2.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appName}>Monevo</Text>
        </View>
        {isAuthenticated && (
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={24} color="#FF4444" />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.content}>
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>
            {isAuthenticated ? `Hoş Geldiniz!` : 'Hoş Geldiniz!'}
          </Text>
          <Text style={styles.welcomeSubtitle}>
            Alışveriş listelerinizi ve harcamalarınızı yönetin
          </Text>
        </View>

        {/* Üst İstatistikler - Yan Yana */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Ionicons name="list-outline" size={32} color="#59B1B1" />
            {isLoading ? (
              <ActivityIndicator color="#59B1B1" style={styles.statLoading} />
            ) : (
              <Text style={styles.statNumber}>{listsCount}</Text>
            )}
            <Text style={styles.statLabel}>Listelerim</Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons name="receipt-outline" size={32} color="#59B1B1" />
            {isLoading ? (
              <ActivityIndicator color="#59B1B1" style={styles.statLoading} />
            ) : (
              <Text style={styles.statNumber}>{receiptsCount}</Text>
            )}
            <Text style={styles.statLabel}>Kayıtlı Fiş</Text>
          </View>
        </View>

        {/* Alt İstatistik - Toplam Harcama */}
        <View style={styles.totalExpenseCard}>
          <View style={styles.totalExpenseContent}>
            <Ionicons name="cash-outline" size={32} color="#59B1B1" />
            <View style={styles.totalExpenseTextContainer}>
              <Text style={styles.totalExpenseLabel}>Toplam Harcama</Text>
              {isLoading ? (
                <ActivityIndicator color="#59B1B1" />
              ) : (
                <Text style={styles.totalExpenseAmount}>₺{formatCurrency(totalExpense)}</Text>
              )}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hızlı İşlemler</Text>
          
          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Ionicons name="add-circle" size={28} color="#59B1B1" />
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Yeni Liste Oluştur</Text>
              <Text style={styles.actionDescription}>
                Yeni bir alışveriş listesi oluşturun
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} 
           onPress={() => router.push("/camera")}>
            <View style={styles.actionIcon}>
              <Ionicons name="receipt" size={28} color="#59B1B1" />
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Harcama Ekle</Text>
              <Text style={styles.actionDescription}>
                Yeni bir harcama kaydı ekleyin
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#CCCCCC" />
          </TouchableOpacity>

          {/* <TouchableOpacity 
            style={[styles.actionCard, styles.testCard]} 
            onPress={() => router.push("/receipt/edit" as any)}
          >
            <View style={[styles.actionIcon, styles.testIcon]}>
              <Ionicons name="create-outline" size={28} color="#FFA726" />
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Fiş Düzenle</Text>
              <Text style={styles.actionDescription}>
                Fiş düzenleme sayfasını test edin
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#CCCCCC" />
          </TouchableOpacity> */}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Son Aktiviteler</Text>
          {isLoading ? (
            <View style={styles.emptyState}>
              <ActivityIndicator size="large" color="#59B1B1" />
            </View>
          ) : recentReceipts.length > 0 ? (
            <>
              {recentReceipts.map((receipt) => (
                <View key={receipt.receipt_id} style={styles.activityCard}>
                  <View style={styles.activityIcon}>
                    <Ionicons name="receipt" size={24} color="#59B1B1" />
                  </View>
                  <View style={styles.activityContent}>
                    <Text style={styles.activityTitle}>{receipt.store_name || 'Bilinmeyen Mağaza'}</Text>
                    <Text style={styles.activityDate}>
                      {new Date(receipt.receipt_date).toLocaleDateString('tr-TR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </Text>
                  </View>
                  <Text style={styles.activityAmount}>₺{formatCurrency(parseFloat(receipt.total_amount))}</Text>
                </View>
              ))}
            </>
          ) : (
            <View style={styles.emptyState}>
              <Ionicons name="time-outline" size={64} color="#CCCCCC" />
              <Text style={styles.emptyStateText}>Henüz aktivite yok</Text>
              <Text style={styles.emptyStateSubtext}>
                İlk fişinizi ekleyerek başlayın
              </Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
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
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  logoutButton: {
    padding: 8,
  },
  content: {
    padding: 20,
  },
  welcomeCard: {
    backgroundColor: '#59B1B1',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#7C7C7C',
    marginTop: 4,
    textAlign: 'center',
  },
  totalExpenseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  totalExpenseContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalExpenseTextContainer: {
    marginLeft: 16,
    flex: 1,
  },
  totalExpenseLabel: {
    fontSize: 14,
    color: '#7C7C7C',
    marginBottom: 4,
  },
  totalExpenseAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  statLoading: {
    marginTop: 8,
    marginBottom: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 16,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 14,
    color: '#7C7C7C',
  },
  testCard: {
    borderWidth: 2,
    borderColor: '#FFA726',
    borderStyle: 'dashed',
  },
  testIcon: {
    backgroundColor: '#FFF5E5',
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  activityIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  activityDate: {
    fontSize: 14,
    color: '#7C7C7C',
  },
  activityAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#59B1B1',
  },
  emptyState: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 40,
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#7C7C7C',
    marginTop: 16,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#AAAAAA',
    marginTop: 8,
    textAlign: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 0,
    marginTop: 0,

  },
});
