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
  Alert,
  TextInput,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useAuthStore } from '@/store/authStore';
import { useRouter } from 'expo-router';
import { receiptService, listService, shareService } from '@/services/api';
import ShoppingListCard from '@/components/list/ShoppingListCard';

export default function HomeScreen() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const router = useRouter();
  
  const [receiptsCount, setReceiptsCount] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [listsCount, setListsCount] = useState(0);
  const [lists, setLists] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [recentReceipts, setRecentReceipts] = useState<any[]>([]);
  const [showCreateListModal, setShowCreateListModal] = useState(false);
  const [newListName, setNewListName] = useState('');
  const [isCreatingList, setIsCreatingList] = useState(false);
  const [showJoinListModal, setShowJoinListModal] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const [isJoiningList, setIsJoiningList] = useState(false);

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
            const amount = parseFloat(receipt.total_amount);
            return sum + (isNaN(amount) ? 0 : amount);
          }, 0);
          setTotalExpense(total);
          
          // Son 5 fişi al
          setRecentReceipts(receipts.slice(0, 5));
        }

        // Listeleri çek
        const listsResponse = await listService.getUserLists(user.user_id);
        
        if (listsResponse.success && listsResponse.data) {
          setListsCount(listsResponse.count || listsResponse.data.length);
          setLists(listsResponse.data.slice(0, 5));
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
  const formatCurrency = (amount: number | string | undefined | null) => {
    if (amount === undefined || amount === null || amount === '') return '0,00';
    const num = typeof amount === 'string' ? parseFloat(amount) : amount;
    if (isNaN(num)) return '0,00';
    return num.toFixed(2).replace('.', ',');
  };

  // Tarih formatı
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

  const handleCreateList = async () => {
    if (!newListName.trim() || !user?.user_id) return;

    try {
      setIsCreatingList(true);
      const response = await listService.createList({
        name: newListName.trim(),
        user_id: user.user_id,
      });

      if (response.success && response.data) {
        setShowCreateListModal(false);
        setNewListName('');
        await loadStats();
        router.push(`/list/${response.data.list_id}` as any);
      }
    } catch (error) {
      console.error('Liste oluşturma hatası:', error);
      Alert.alert('Hata', 'Liste oluşturulurken bir hata oluştu');
    } finally {
      setIsCreatingList(false);
    }
  };

  const handleJoinList = async () => {
    if (!inviteCode.trim() || !user?.user_id) return;

    try {
      setIsJoiningList(true);
      const response = await shareService.joinWithCode({
        invite_code: inviteCode.trim().toUpperCase(),
        user_id: user.user_id,
      });

      if (response.success && response.data) {
        setShowJoinListModal(false);
        setInviteCode('');
        await loadStats();
        Alert.alert(
          'Başarılı!',
          `${response.data.list_name} listesine katıldınız`,
          [
            {
              text: 'Listeyi Aç',
              onPress: () => router.push(`/list/${response.data.list_id}` as any),
            },
            {
              text: 'Tamam',
              style: 'cancel',
            },
          ]
        );
      }
    } catch (error: any) {
      console.error('Listeye katılma hatası:', error);
      let errorMessage = error?.response?.data?.error || 'Listeye katılırken bir hata oluştu';
      
      // Eğer kullanıcı zaten üye ise, modal'ı kapat ve listeye git
      if (errorMessage.includes('Zaten bu listeye erişiminiz var')) {
        setShowJoinListModal(false);
        setInviteCode('');
        await loadStats();
        Alert.alert('Bilgi', 'Bu listeye zaten erişiminiz var', [
          {
            text: 'Tamam',
          },
        ]);
      } else if (errorMessage.includes('Kendi listenize davet kullanamassınız')) {
        Alert.alert('Bilgi', errorMessage);
      } else {
        Alert.alert('Hata', errorMessage);
      }
    } finally {
      setIsJoiningList(false);
    }
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
          
          <TouchableOpacity 
            style={styles.actionCard}
            onPress={() => setShowCreateListModal(true)}
          >
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

          <TouchableOpacity 
            style={styles.actionCard}
            onPress={() => setShowJoinListModal(true)}
          >
            <View style={styles.actionIcon}>
              <Ionicons name="enter-outline" size={28} color="#59B1B1" />
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Listeye Katıl</Text>
              <Text style={styles.actionDescription}>
                QR kod veya davet kodu ile katılın
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
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Listelerim</Text>
            {lists.length > 0 && (
              <TouchableOpacity onPress={() => router.push('/lists/all' as any)}>
                <Text style={styles.seeAllText}>Tümünü Gör</Text>
              </TouchableOpacity>
            )}
          </View>

          {isLoading ? (
            <View style={styles.emptyState}>
              <ActivityIndicator size="large" color="#59B1B1" />
            </View>
          ) : lists.length > 0 ? (
            <>
              {lists.map((list) => (
                <ShoppingListCard key={list.list_id} list={list} />
              ))}
            </>
          ) : (
            <View style={styles.emptyState}>
              <Ionicons name="list-outline" size={64} color="#CCCCCC" />
              <Text style={styles.emptyStateText}>Henüz liste yok</Text>
              <Text style={styles.emptyStateSubtext}>
                İlk alışveriş listenizi oluşturun
              </Text>
              <TouchableOpacity
                style={styles.createListButton}
                onPress={() => setShowCreateListModal(true)}
              >
                <Ionicons name="add-circle-outline" size={20} color="#FFFFFF" />
                <Text style={styles.createListButtonText}>Liste Oluştur</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.createListButton, styles.joinListButton]}
                onPress={() => setShowJoinListModal(true)}
              >
                <Ionicons name="enter-outline" size={20} color="#59B1B1" />
                <Text style={[styles.createListButtonText, styles.joinListButtonText]}>
                  Listeye Katıl
                </Text>
              </TouchableOpacity>
            </View>
          )}
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
                <TouchableOpacity 
                  key={receipt.receipt_id} 
                  style={styles.activityCard}
                  onPress={() => router.push(`/receipt/${receipt.receipt_id}` as any)}
                >
                  <View style={styles.activityIcon}>
                    <Ionicons name="receipt" size={24} color="#59B1B1" />
                  </View>
                  <View style={styles.activityContent}>
                    <Text style={styles.activityTitle}>{receipt.store_name || 'Bilinmeyen Mağaza'}</Text>
                    <Text style={styles.activityDate}>
                      {formatDate(receipt.receipt_date)}
                    </Text>
                  </View>
                  <Text style={styles.activityAmount}>₺{formatCurrency(receipt.total_amount)}</Text>
                </TouchableOpacity>
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

      <Modal
        visible={showCreateListModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowCreateListModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Yeni Liste Oluştur</Text>
              <TouchableOpacity
                onPress={() => {
                  setShowCreateListModal(false);
                  setNewListName('');
                }}
              >
                <Ionicons name="close" size={28} color="#2C2C2C" />
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.modalInput}
              placeholder="Liste adı girin..."
              value={newListName}
              onChangeText={setNewListName}
              autoFocus
              onSubmitEditing={handleCreateList}
              returnKeyType="done"
              editable={!isCreatingList}
            />

            <TouchableOpacity
              style={[
                styles.modalButton,
                (!newListName.trim() || isCreatingList) && styles.modalButtonDisabled
              ]}
              onPress={handleCreateList}
              disabled={!newListName.trim() || isCreatingList}
            >
              {isCreatingList ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Text style={styles.modalButtonText}>Oluştur</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={showJoinListModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowJoinListModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Listeye Katıl</Text>
              <TouchableOpacity
                onPress={() => {
                  setShowJoinListModal(false);
                  setInviteCode('');
                }}
              >
                <Ionicons name="close" size={28} color="#2C2C2C" />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalDescription}>
              Davet kodunu girerek veya QR kod tarayarak paylaşılan bir listeye katılabilirsiniz
            </Text>

            <TouchableOpacity
              style={styles.scanQRButton}
              onPress={() => {
                setShowJoinListModal(false);
                router.push('/qr-scanner' as any);
              }}
            >
              <Ionicons name="qr-code-outline" size={24} color="#FFFFFF" />
              <Text style={styles.scanQRButtonText}>QR Kod Tara</Text>
            </TouchableOpacity>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>veya</Text>
              <View style={styles.dividerLine} />
            </View>

            <TextInput
              style={styles.inviteCodeInput}
              placeholder="Davet kodunu girin (örn: ABC123)"
              value={inviteCode}
              onChangeText={(text) => setInviteCode(text.toUpperCase())}
              autoCapitalize="characters"
              autoCorrect={false}
              maxLength={6}
              onSubmitEditing={handleJoinList}
              returnKeyType="done"
              editable={!isJoiningList}
            />

            <TouchableOpacity
              style={[
                styles.modalButton,
                (inviteCode.length !== 6 || isJoiningList) && styles.modalButtonDisabled
              ]}
              onPress={handleJoinList}
              disabled={inviteCode.length !== 6 || isJoiningList}
            >
              {isJoiningList ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <>
                  <Ionicons name="checkmark-circle-outline" size={20} color="#FFFFFF" />
                  <Text style={styles.modalButtonText}>Katıl</Text>
                </>
              )}
            </TouchableOpacity>

            <View style={styles.modalInfo}>
              <Ionicons name="information-circle-outline" size={20} color="#7C7C7C" />
              <Text style={styles.modalInfoText}>
                Davet kodu, liste sahibi tarafından paylaşılmış olmalıdır
              </Text>
            </View>
          </View>
        </View>
      </Modal>
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#59B1B1',
  },
  createListButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#59B1B1',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
    gap: 8,
  },
  createListButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  joinListButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#59B1B1',
  },
  joinListButtonText: {
    color: '#59B1B1',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  modalInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#2C2C2C',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#59B1B1',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 52,
  },
  modalButtonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginLeft: 8,
  },
  modalDescription: {
    fontSize: 14,
    color: '#7C7C7C',
    marginBottom: 20,
    lineHeight: 20,
  },
  inviteCodeInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
    textAlign: 'center',
    letterSpacing: 4,
    marginBottom: 20,
  },
  modalInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFF8E5',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    gap: 8,
  },
  modalInfoText: {
    flex: 1,
    fontSize: 13,
    color: '#7C7C7C',
    lineHeight: 18,
  },
  scanQRButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9C27B0',
    borderRadius: 12,
    padding: 16,
    gap: 8,
    marginBottom: 16,
  },
  scanQRButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 14,
    color: '#7C7C7C',
  },
});
