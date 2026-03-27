import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/store/authStore';
import { authService } from '@/services/api';

interface UserStats {
  total_lists: number;
  owned_lists: number;
  shared_lists: number;
  total_receipts: number;
  total_items: number;
}

export default function ProfileScreen() {
  const router = useRouter();
  const { user, logout, setUser } = useAuthStore();
  
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [isLoadingStats, setIsLoadingStats] = useState(true);
  
  // Şifre değiştirme state'leri
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Hesap bilgileri modal
  const [showAccountInfoModal, setShowAccountInfoModal] = useState(false);
  
  // Focus state'leri
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  useEffect(() => {
    if (user?.name) {
      setEditedName(user.name);
    }
    if (user?.user_id) {
      loadStats();
    }
  }, [user]);

  const loadStats = async () => {
    if (!user?.user_id) return;

    try {
      setIsLoadingStats(true);
      const response = await authService.getUserStats(user.user_id);
      
      if (response.success && response.data) {
        setStats(response.data);
      }
    } catch (error) {
      console.error('İstatistikler yüklenirken hata:', error);
    } finally {
      setIsLoadingStats(false);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Çıkış Yap',
      'Çıkış yapmak istediğinize emin misiniz?',
      [
        { text: 'İptal', style: 'cancel' },
        {
          text: 'Çıkış Yap',
          style: 'destructive',
          onPress: async () => {
            await logout();
            router.replace('/auth/login');
          },
        },
      ]
    );
  };

  const handleUpdateName = async () => {
    if (!editedName.trim()) {
      Alert.alert('Hata', 'İsim boş olamaz');
      return;
    }

    if (!user?.user_id) {
      Alert.alert('Hata', 'Kullanıcı bilgisi bulunamadı');
      return;
    }

    try {
      setIsUpdating(true);
      const response = await authService.updateProfile(user.user_id, {
        name: editedName.trim(),
      });

      if (response.success && response.data?.user) {
        // Store'daki kullanıcı bilgisini güncelle
        setUser({
          ...user,
          name: response.data.user.name,
        });
        
        setShowEditModal(false);
        Alert.alert('Başarılı', 'İsminiz güncellendi');
      }
    } catch (error) {
      console.error('İsim güncelleme hatası:', error);
      Alert.alert('Hata', 'İsim güncellenirken bir hata oluştu');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleChangePassword = async () => {
    // Validasyon
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun');
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert('Hata', 'Yeni şifre en az 6 karakter olmalıdır');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Hata', 'Yeni şifreler eşleşmiyor');
      return;
    }

    if (!user?.user_id) {
      Alert.alert('Hata', 'Kullanıcı bilgisi bulunamadı');
      return;
    }

    try {
      setIsChangingPassword(true);
      const response = await authService.changePassword(
        user.user_id,
        currentPassword,
        newPassword
      );

      if (response.success) {
        setShowPasswordModal(false);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        Alert.alert('Başarılı', 'Şifreniz başarıyla değiştirildi');
      }
    } catch (error: any) {
      console.error('Şifre değiştirme hatası:', error);
      const errorMessage = error.response?.data?.message || 'Şifre değiştirilirken bir hata oluştu';
      Alert.alert('Hata', errorMessage);
    } finally {
      setIsChangingPassword(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profil</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Profil Kartı */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </Text>
            </View>
          </View>

          <Text style={styles.userName}>{user?.name || 'Kullanıcı'}</Text>
          <Text style={styles.userEmail}>{user?.email || ''}</Text>

          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setShowEditModal(true)}
          >
            <Ionicons name="create-outline" size={18} color="#59B1B1" />
            <Text style={styles.editButtonText}>İsmi Düzenle</Text>
          </TouchableOpacity>
        </View>

        {/* İstatistikler */}
        <View style={styles.statsContainer}>
          {isLoadingStats ? (
            <View style={styles.statsLoading}>
              <ActivityIndicator size="small" color="#59B1B1" />
            </View>
          ) : (
            <>
              <View style={styles.statCard}>
                <Ionicons name="list" size={28} color="#59B1B1" />
                <Text style={styles.statNumber}>{stats?.total_lists || 0}</Text>
                <Text style={styles.statLabel}>Toplam Liste</Text>
              </View>

              <View style={styles.statCard}>
                <Ionicons name="receipt" size={28} color="#FFA726" />
                <Text style={styles.statNumber}>{stats?.total_receipts || 0}</Text>
                <Text style={styles.statLabel}>Alışveriş Fişi</Text>
              </View>

              <View style={styles.statCard}>
                <Ionicons name="cart" size={28} color="#66BB6A" />
                <Text style={styles.statNumber}>{stats?.total_items || 0}</Text>
                <Text style={styles.statLabel}>Toplam Öğe</Text>
              </View>
            </>
          )}
        </View>

        {/* Menü Seçenekleri */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Hızlı Erişim</Text>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              // Tüm Listeler sayfasına git
              router.push('/lists/all' as any);
            }}
          >
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuIcon, { backgroundColor: '#F0F9F9' }]}>
                <Ionicons name="list-outline" size={24} color="#59B1B1" />
              </View>
              <Text style={styles.menuItemText}>Alışveriş Listelerim</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              // TODO: Navigate to receipts screen
              Alert.alert('Yakında', 'Alışveriş fişleri özelliği yakında eklenecek');
            }}
          >
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuIcon, { backgroundColor: '#FFF5E5' }]}>
                <Ionicons name="receipt-outline" size={24} color="#FFA726" />
              </View>
              <Text style={styles.menuItemText}>Alışveriş Fişlerim</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#CCCCCC" />
          </TouchableOpacity>
        </View>

        {/* Hesap Ayarları */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Hesap</Text>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => setShowAccountInfoModal(true)}
          >
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuIcon, { backgroundColor: '#E3F2FD' }]}>
                <Ionicons name="person-circle-outline" size={24} color="#2196F3" />
              </View>
              <Text style={styles.menuItemText}>Hesap Bilgileri</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => setShowPasswordModal(true)}
          >
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuIcon, { backgroundColor: '#F3E5F5' }]}>
                <Ionicons name="key-outline" size={24} color="#9C27B0" />
              </View>
              <Text style={styles.menuItemText}>Şifre Değiştir</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#CCCCCC" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuItem, styles.logoutButton]}
            onPress={handleLogout}
          >
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuIcon, { backgroundColor: '#FFE5E5' }]}>
                <Ionicons name="log-out-outline" size={24} color="#FF4444" />
              </View>
              <Text style={[styles.menuItemText, styles.logoutText]}>Çıkış Yap</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#FF4444" />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Monevo v1.0.0</Text>
          <Text style={styles.footerSubtext}>Akıllı Alışveriş Asistanı</Text>
        </View>
      </ScrollView>

      {/* İsim Düzenleme Modal */}
      <Modal
        visible={showEditModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowEditModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>İsmi Düzenle</Text>
              <TouchableOpacity onPress={() => setShowEditModal(false)}>
                <Ionicons name="close" size={28} color="#2C2C2C" />
              </TouchableOpacity>
            </View>

            <TextInput
              style={[
                styles.input,
                focusedInput === 'editName' && styles.inputFocused
              ]}
              placeholder="İsim"
              value={editedName}
              onChangeText={setEditedName}
              onFocus={() => setFocusedInput('editName')}
              onBlur={() => setFocusedInput(null)}
              autoFocus
            />

            <TouchableOpacity
              style={[styles.saveButton, isUpdating && styles.saveButtonDisabled]}
              onPress={handleUpdateName}
              disabled={isUpdating}
            >
              {isUpdating ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.saveButtonText}>Kaydet</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Hesap Bilgileri Modal */}
      <Modal
        visible={showAccountInfoModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowAccountInfoModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Hesap Bilgileri</Text>
              <TouchableOpacity onPress={() => setShowAccountInfoModal(false)}>
                <Ionicons name="close" size={28} color="#2C2C2C" />
              </TouchableOpacity>
            </View>

            <View style={styles.infoSection}>
              <View style={styles.infoRow}>
                <View style={styles.infoIconContainer}>
                  <Ionicons name="person" size={20} color="#2196F3" />
                </View>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoLabel}>İsim</Text>
                  <Text style={styles.infoValue}>{user?.name || '-'}</Text>
                </View>
              </View>

              <View style={styles.infoRow}>
                <View style={styles.infoIconContainer}>
                  <Ionicons name="mail" size={20} color="#2196F3" />
                </View>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoLabel}>Email</Text>
                  <Text style={styles.infoValue}>{user?.email || '-'}</Text>
                </View>
              </View>

              <View style={styles.infoRow}>
                <View style={styles.infoIconContainer}>
                  <Ionicons name="finger-print" size={20} color="#2196F3" />
                </View>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoLabel}>Kullanıcı ID</Text>
                  <Text style={styles.infoValue}>{user?.user_id || '-'}</Text>
                </View>
              </View>

              <View style={styles.infoRow}>
                <View style={styles.infoIconContainer}>
                  <Ionicons name="calendar" size={20} color="#2196F3" />
                </View>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoLabel}>Kayıt Tarihi</Text>
                  <Text style={styles.infoValue}>
                    {user?.created_at ? new Date(user.created_at).toLocaleDateString('tr-TR') : '-'}
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowAccountInfoModal(false)}
            >
              <Text style={styles.closeButtonText}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Şifre Değiştirme Modal */}
      <Modal
        visible={showPasswordModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setShowPasswordModal(false);
          setCurrentPassword('');
          setNewPassword('');
          setConfirmPassword('');
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Şifre Değiştir</Text>
              <TouchableOpacity onPress={() => {
                setShowPasswordModal(false);
                setCurrentPassword('');
                setNewPassword('');
                setConfirmPassword('');
              }}>
                <Ionicons name="close" size={28} color="#2C2C2C" />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalDescription}>
              Güvenliğiniz için mevcut şifrenizi girin ve yeni şifrenizi belirleyin.
            </Text>

            <View style={[
              styles.passwordInputContainer,
              focusedInput === 'currentPassword' && styles.passwordInputFocused
            ]}>
              <Ionicons name="lock-closed-outline" size={20} color="#7C7C7C" style={styles.inputIcon} />
              <TextInput
                style={styles.passwordInput}
                placeholder="Mevcut Şifre"
                value={currentPassword}
                onChangeText={setCurrentPassword}
                secureTextEntry={!showCurrentPassword}
                onFocus={() => setFocusedInput('currentPassword')}
                onBlur={() => setFocusedInput(null)}
                autoFocus
              />
              <TouchableOpacity onPress={() => setShowCurrentPassword(!showCurrentPassword)}>
                <Ionicons 
                  name={showCurrentPassword ? "eye-off-outline" : "eye-outline"} 
                  size={20} 
                  color="#7C7C7C" 
                />
              </TouchableOpacity>
            </View>

            <View style={[
              styles.passwordInputContainer,
              focusedInput === 'newPassword' && styles.passwordInputFocused
            ]}>
              <Ionicons name="key-outline" size={20} color="#7C7C7C" style={styles.inputIcon} />
              <TextInput
                style={styles.passwordInput}
                placeholder="Yeni Şifre (en az 6 karakter)"
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry={!showNewPassword}
                onFocus={() => setFocusedInput('newPassword')}
                onBlur={() => setFocusedInput(null)}
              />
              <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)}>
                <Ionicons 
                  name={showNewPassword ? "eye-off-outline" : "eye-outline"} 
                  size={20} 
                  color="#7C7C7C" 
                />
              </TouchableOpacity>
            </View>

            <View style={[
              styles.passwordInputContainer,
              focusedInput === 'confirmPassword' && styles.passwordInputFocused
            ]}>
              <Ionicons name="shield-checkmark-outline" size={20} color="#7C7C7C" style={styles.inputIcon} />
              <TextInput
                style={styles.passwordInput}
                placeholder="Yeni Şifre (Tekrar)"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
                onFocus={() => setFocusedInput('confirmPassword')}
                onBlur={() => setFocusedInput(null)}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                <Ionicons 
                  name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} 
                  size={20} 
                  color="#7C7C7C" 
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[styles.saveButton, isChangingPassword && styles.saveButtonDisabled]}
              onPress={handleChangePassword}
              disabled={isChangingPassword}
            >
              {isChangingPassword ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <>
                  <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" />
                  <Text style={styles.saveButtonText}>Şifreyi Değiştir</Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  content: {
    flex: 1,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#59B1B1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#7C7C7C',
    marginBottom: 16,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#59B1B1',
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#59B1B1',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
    gap: 12,
  },
  statsLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#7C7C7C',
    marginTop: 4,
    textAlign: 'center',
  },
  menuSection: {
    marginTop: 24,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7C7C7C',
    marginBottom: 12,
    marginLeft: 4,
  },
  menuItem: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: '#2C2C2C',
    fontWeight: '500',
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: '#FFE5E5',
  },
  logoutText: {
    color: '#FF4444',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  footerText: {
    fontSize: 14,
    color: '#7C7C7C',
    fontWeight: '600',
  },
  footerSubtext: {
    fontSize: 12,
    color: '#AAAAAA',
    marginTop: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '85%',
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
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 20,
  },
  inputFocused: {
    borderColor: '#59B1B1',
    borderWidth: 2,
    backgroundColor: '#F0F9F9',
  },
  modalDescription: {
    fontSize: 14,
    color: '#7C7C7C',
    marginBottom: 20,
    lineHeight: 20,
  },
  infoSection: {
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  infoIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#7C7C7C',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    color: '#2C2C2C',
    fontWeight: '500',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
    backgroundColor: '#FAFAFA',
  },
  passwordInputFocused: {
    borderColor: '#59B1B1',
    borderWidth: 2,
    backgroundColor: '#F0F9F9',
  },
  inputIcon: {
    marginRight: 10,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  closeButtonText: {
    color: '#2C2C2C',
    fontSize: 16,
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#59B1B1',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
  },
  saveButtonDisabled: {
    opacity: 0.6,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
