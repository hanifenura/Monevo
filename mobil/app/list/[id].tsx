import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  RefreshControl,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Share,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useAuthStore } from '@/store/authStore';
import { listService, shareService } from '@/services/api';
import ListItemCard from '@/components/list/ListItemCard';

interface ListItem {
  item_id: number;
  name: string;
  quantity: number;
  is_checked: boolean;
  price?: number;
  category?: {
    name: string;
    color_code?: string;
  };
  checkedBy?: {
    name: string;
  };
  checkedAt?: string;
}

interface ShoppingList {
  list_id: number;
  name: string;
  is_owner?: boolean;
  user_role?: string;
  owner: {
    name: string;
    user_id?: number;
  };
  items: ListItem[];
}

export default function ListDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { user } = useAuthStore();
  
  const [list, setList] = useState<ShoppingList | null>(null);
  const [items, setItems] = useState<ListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('1');
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingItem, setEditingItem] = useState<ListItem | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItemName, setEditItemName] = useState('');
  const [editItemQuantity, setEditItemQuantity] = useState('1');
  const [isUpdatingItem, setIsUpdatingItem] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [invitation, setInvitation] = useState<any>(null);
  const [isCreatingInvite, setIsCreatingInvite] = useState(false);

  useEffect(() => {
    if (id && user) {
      loadList();
    }
  }, [id, user]);

  const loadList = async () => {
    if (!user?.user_id || !id) return;

    try {
      setIsLoading(true);
      const response = await listService.getListById(Number(id), user.user_id);
      
      if (response.success && response.data) {
        setList(response.data);
        setEditedTitle(response.data.name || 'Alışveriş Listesi');
        
        const itemsResponse = await listService.getListItems(Number(id), user.user_id);
        if (itemsResponse.success && itemsResponse.data) {
          setItems(itemsResponse.data);
        }
      }
    } catch (error) {
      console.error('Liste yüklenirken hata:', error);
      Alert.alert('Hata', 'Liste yüklenirken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadList();
    setRefreshing(false);
  };

  const handleToggleCheck = async (itemId: number) => {
    if (!user?.user_id || !id) return;

    try {
      const response = await listService.toggleItemCheck(Number(id), itemId, user.user_id);
      
      if (response.success) {
        setItems(prevItems => 
          prevItems.map(item => 
            item.item_id === itemId 
              ? { 
                  ...item, 
                  is_checked: !item.is_checked,
                  checkedBy: !item.is_checked ? { name: user.name } : undefined,
                  checkedAt: !item.is_checked ? new Date().toISOString() : undefined,
                }
              : item
          )
        );
      }
    } catch (error) {
      console.error('Öğe işaretlenirken hata:', error);
      Alert.alert('Hata', 'Öğe işaretlenirken bir hata oluştu');
    }
  };

  const handleAddItem = async () => {
    if (!newItemName.trim() || !user?.user_id || !id) return;

    const quantity = parseInt(newItemQuantity) || 1;
    if (quantity < 1) {
      Alert.alert('Hata', 'Miktar en az 1 olmalıdır');
      return;
    }

    try {
      setIsAddingItem(true);
      const response = await listService.addListItem(Number(id), {
        name: newItemName.trim(),
        quantity: quantity,
        user_id: user.user_id,
      });

      if (response.success && response.data) {
        setItems(prevItems => [...prevItems, response.data]);
        setNewItemName('');
        setNewItemQuantity('1');
      }
    } catch (error) {
      console.error('Öğe eklenirken hata:', error);
      Alert.alert('Hata', 'Öğe eklenirken bir hata oluştu');
    } finally {
      setIsAddingItem(false);
    }
  };

  const handleUpdateTitle = async () => {
    if (!editedTitle.trim() || !user?.user_id || !id) {
      setIsEditingTitle(false);
      return;
    }

    try {
      const response = await listService.updateList(
        Number(id),
        { name: editedTitle.trim() },
        user.user_id
      );

      if (response.success) {
        setList(prev => prev ? { ...prev, name: editedTitle.trim() } : null);
        setIsEditingTitle(false);
      }
    } catch (error) {
      console.error('Liste adı güncellenirken hata:', error);
      Alert.alert('Hata', 'Liste adı güncellenirken bir hata oluştu');
    }
  };

  const handleDeleteItem = async (itemId: number) => {
    if (!user?.user_id || !id) return;

    Alert.alert(
      'Öğeyi Sil',
      'Bu öğeyi silmek istediğinizden emin misiniz?',
      [
        {
          text: 'İptal',
          style: 'cancel',
        },
        {
          text: 'Sil',
          style: 'destructive',
          onPress: async () => {
            try {
              const response = await listService.deleteListItem(Number(id), itemId, user.user_id);
              
              if (response.success) {
                setItems(prevItems => prevItems.filter(item => item.item_id !== itemId));
              }
            } catch (error) {
              console.error('Öğe silinirken hata:', error);
              Alert.alert('Hata', 'Öğe silinirken bir hata oluştu');
            }
          },
        },
      ]
    );
  };

  const handleEditItem = (item: ListItem) => {
    setEditingItem(item);
    setEditItemName(item.name);
    setEditItemQuantity(item.quantity.toString());
    setShowEditModal(true);
  };

  const handleUpdateItem = async () => {
    if (!editingItem || !editItemName.trim() || !user?.user_id || !id) return;

    try {
      setIsUpdatingItem(true);
      const response = await listService.updateListItem(
        Number(id),
        editingItem.item_id,
        {
          name: editItemName.trim(),
          quantity: parseInt(editItemQuantity) || 1,
          user_id: user.user_id,
        }
      );

      if (response.success && response.data) {
        setItems(prevItems => 
          prevItems.map(item => 
            item.item_id === editingItem.item_id ? response.data : item
          )
        );
        setShowEditModal(false);
        setEditingItem(null);
      }
    } catch (error) {
      console.error('Öğe güncellenirken hata:', error);
      Alert.alert('Hata', 'Öğe güncellenirken bir hata oluştu');
    } finally {
      setIsUpdatingItem(false);
    }
  };

  const handleCreateInvitation = async (role: 'viewer' | 'editor' = 'editor') => {
    if (!user?.user_id || !id) return;

    try {
      setIsCreatingInvite(true);
      const response = await shareService.createInvitation({
        list_id: Number(id),
        user_id: user.user_id,
        role: role,
        expires_in_days: 7,
        max_uses: 10,
      });

      if (response.success && response.data) {
        setInvitation(response.data);
        setShowMenuModal(false);
        setShowShareModal(true);
      }
    } catch (error) {
      console.error('Davet oluşturma hatası:', error);
      Alert.alert('Hata', 'Davet oluşturulurken bir hata oluştu');
    } finally {
      setIsCreatingInvite(false);
    }
  };

  const handleShareViaLink = async () => {
    if (!invitation) {
      await handleCreateInvitation('editor');
      return;
    }

    try {
      const message = `${list?.name || 'Alışveriş Listesi'}'ne katıl!\n\nDavet Kodu: ${invitation.invite_code}\n\nYa da bu linke tıkla: ${invitation.share_link}`;
      
      await Share.share({
        message: message,
        title: 'Liste Daveti',
      });
    } catch (error) {
      console.error('Paylaşım hatası:', error);
    }
  };

  const handleLeaveList = async () => {
    if (!user?.user_id || !id) return;

    Alert.alert(
      'Listeden Ayrıl',
      'Bu listeden ayrılmak istediğinize emin misiniz?',
      [
        {
          text: 'İptal',
          style: 'cancel',
        },
        {
          text: 'Ayrıl',
          style: 'destructive',
          onPress: async () => {
            try {
              const response = await shareService.leaveList(Number(id), user.user_id);
              
              if (response.success) {
                Alert.alert('Başarılı', 'Listeden ayrıldınız', [
                  {
                    text: 'Tamam',
                    onPress: () => router.back(),
                  },
                ]);
              }
            } catch (error: any) {
              console.error('Listeden ayrılma hatası:', error);
              const errorMessage = error?.response?.data?.error || 'Listeden ayrılırken bir hata oluştu';
              Alert.alert('Hata', errorMessage);
            }
          },
        },
      ]
    );
  };

  const uncheckedItems = items.filter(item => !item.is_checked);
  const checkedItems = items.filter(item => item.is_checked);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#59B1B1" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color="#2C2C2C" />
        </TouchableOpacity>

        {isEditingTitle ? (
          <TextInput
            style={styles.titleInput}
            value={editedTitle}
            onChangeText={setEditedTitle}
            onBlur={handleUpdateTitle}
            onSubmitEditing={handleUpdateTitle}
            autoFocus
            selectTextOnFocus
          />
        ) : (
          <TouchableOpacity 
            onPress={() => list?.user_role === 'owner' && setIsEditingTitle(true)}
            disabled={list?.user_role !== 'owner'}
          >
            <Text style={styles.headerTitle}>{list?.name || 'Alışveriş Listesi'}</Text>
          </TouchableOpacity>
        )}

        {list?.user_role === 'owner' || list?.user_role === 'editor' ? (
          <TouchableOpacity 
            style={styles.moreButton}
            onPress={() => setShowMenuModal(true)}
          >
            <Ionicons name="ellipsis-horizontal" size={24} color="#2C2C2C" />
          </TouchableOpacity>
        ) : (
          <View style={styles.moreButton} />
        )}
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
        <View style={styles.statsBar}>
          <View style={styles.statItem}>
            <Ionicons name="list-outline" size={20} color="#59B1B1" />
            <Text style={styles.statText}>
              Öğeler ({uncheckedItems.length})
            </Text>
          </View>
          
          {items.length > 0 && (
            <TouchableOpacity 
              style={[
                styles.editButton,
                isEditMode && styles.editButtonActive
              ]}
              onPress={() => setIsEditMode(!isEditMode)}
            >
              <Text style={[
                styles.editButtonText,
                isEditMode && styles.editButtonTextActive
              ]}>
                {isEditMode ? 'Bitti' : 'Düzenle'}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {uncheckedItems.length > 0 ? (
          <View style={styles.section}>
            {uncheckedItems.map(item => (
              <ListItemCard
                key={item.item_id}
                item={item}
                onToggleCheck={() => handleToggleCheck(item.item_id)}
                isEditMode={isEditMode}
                onEdit={() => handleEditItem(item)}
                onDelete={() => handleDeleteItem(item.item_id)}
              />
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="basket-outline" size={64} color="#CCCCCC" />
            <Text style={styles.emptyStateText}>Liste boş</Text>
            <Text style={styles.emptyStateSubtext}>
              Alışveriş öğeleri ekleyerek başlayın
            </Text>
          </View>
        )}

        {checkedItems.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Tamamlananlar ({checkedItems.length})
            </Text>
            {checkedItems.map(item => (
              <ListItemCard
                key={item.item_id}
                item={item}
                onToggleCheck={() => handleToggleCheck(item.item_id)}
                isEditMode={isEditMode}
                onEdit={() => handleEditItem(item)}
                onDelete={() => handleDeleteItem(item.item_id)}
              />
            ))}
          </View>
        )}
      </ScrollView>

      <View style={styles.addItemContainer}>
        <View style={styles.addItemInputsRow}>
          <TextInput
            style={styles.addItemInput}
            placeholder="Yeni öğe ekle..."
            value={newItemName}
            onChangeText={setNewItemName}
            onSubmitEditing={handleAddItem}
            returnKeyType="done"
            editable={!isAddingItem}
          />
          <View style={styles.quantityInputContainer}>
            <TouchableOpacity 
              style={styles.quantityButton}
              onPress={() => {
                const current = parseInt(newItemQuantity) || 1;
                if (current > 1) setNewItemQuantity(String(current - 1));
              }}
              disabled={isAddingItem}
            >
              <Ionicons name="remove" size={20} color="#59B1B1" />
            </TouchableOpacity>
            <TextInput
              style={styles.quantityInput}
              value={newItemQuantity}
              onChangeText={(text) => {
                const num = text.replace(/[^0-9]/g, '');
                setNewItemQuantity(num || '1');
              }}
              keyboardType="numeric"
              maxLength={3}
              editable={!isAddingItem}
            />
            <TouchableOpacity 
              style={styles.quantityButton}
              onPress={() => {
                const current = parseInt(newItemQuantity) || 1;
                if (current < 999) setNewItemQuantity(String(current + 1));
              }}
              disabled={isAddingItem}
            >
              <Ionicons name="add" size={20} color="#59B1B1" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity 
          style={[
            styles.addButton,
            (!newItemName.trim() || isAddingItem) && styles.addButtonDisabled
          ]}
          onPress={handleAddItem}
          disabled={!newItemName.trim() || isAddingItem}
        >
          {isAddingItem ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <Ionicons name="checkmark" size={28} color="#FFFFFF" />
          )}
        </TouchableOpacity>
      </View>

      <Modal
        visible={showEditModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowEditModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Öğeyi Düzenle</Text>
              <TouchableOpacity
                onPress={() => {
                  setShowEditModal(false);
                  setEditingItem(null);
                }}
              >
                <Ionicons name="close" size={28} color="#2C2C2C" />
              </TouchableOpacity>
            </View>

            <View style={styles.modalBody}>
              <Text style={styles.inputLabel}>Öğe Adı</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Öğe adı girin..."
                value={editItemName}
                onChangeText={setEditItemName}
                autoFocus
                editable={!isUpdatingItem}
              />

              <Text style={styles.inputLabel}>Miktar</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Miktar"
                value={editItemQuantity}
                onChangeText={setEditItemQuantity}
                keyboardType="numeric"
                editable={!isUpdatingItem}
              />
            </View>

            <TouchableOpacity
              style={[
                styles.modalButton,
                (!editItemName.trim() || isUpdatingItem) && styles.modalButtonDisabled
              ]}
              onPress={handleUpdateItem}
              disabled={!editItemName.trim() || isUpdatingItem}
            >
              {isUpdatingItem ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Text style={styles.modalButtonText}>Güncelle</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={showMenuModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowMenuModal(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowMenuModal(false)}
        >
          <View style={styles.menuModal}>
            <View style={styles.menuHandle} />
            
            {list?.user_role === 'owner' ? (
              <>
                <TouchableOpacity 
                  style={styles.menuItem}
                  onPress={() => {
                    setShowMenuModal(false);
                    handleCreateInvitation('editor');
                  }}
                >
                  <View style={[styles.menuIcon, { backgroundColor: '#F0F9F9' }]}>
                    <Ionicons name="share-outline" size={24} color="#59B1B1" />
                  </View>
                  <View style={styles.menuItemContent}>
                    <Text style={styles.menuItemTitle}>Listeyi Paylaş</Text>
                    <Text style={styles.menuItemDescription}>
                      QR kod, link veya davet kodu ile paylaş
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#CCCCCC" />
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.menuItem}
                  onPress={() => {
                    setShowMenuModal(false);
                    router.push(`/members/${id}` as any);
                  }}
                >
                  <View style={[styles.menuIcon, { backgroundColor: '#FFF5E5' }]}>
                    <Ionicons name="people-outline" size={24} color="#FFA726" />
                  </View>
                  <View style={styles.menuItemContent}>
                    <Text style={styles.menuItemTitle}>Liste Üyeleri</Text>
                    <Text style={styles.menuItemDescription}>
                      Listeye erişimi olanları gör
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#CCCCCC" />
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[styles.menuItem, styles.menuItemDanger]}
                  onPress={() => {
                    setShowMenuModal(false);
                    Alert.alert(
                      'Listeyi Sil',
                      'Bu listeyi silmek istediğinize emin misiniz?',
                      [
                        { text: 'İptal', style: 'cancel' },
                        { text: 'Sil', style: 'destructive', onPress: () => {} },
                      ]
                    );
                  }}
                >
                  <View style={[styles.menuIcon, { backgroundColor: '#FFE5E5' }]}>
                    <Ionicons name="trash-outline" size={24} color="#FF4444" />
                  </View>
                  <View style={styles.menuItemContent}>
                    <Text style={[styles.menuItemTitle, styles.menuItemTitleDanger]}>
                      Listeyi Sil
                    </Text>
                    <Text style={styles.menuItemDescription}>
                      Liste kalıcı olarak silinecek
                    </Text>
                  </View>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity 
                style={[styles.menuItem, styles.menuItemDanger]}
                onPress={() => {
                  setShowMenuModal(false);
                  handleLeaveList();
                }}
              >
                <View style={[styles.menuIcon, { backgroundColor: '#FFE5E5' }]}>
                  <Ionicons name="exit-outline" size={24} color="#FF4444" />
                </View>
                <View style={styles.menuItemContent}>
                  <Text style={[styles.menuItemTitle, styles.menuItemTitleDanger]}>
                    Listeden Ayrıl
                  </Text>
                  <Text style={styles.menuItemDescription}>
                    Bu listeden ayrılacaksınız
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal
        visible={showShareModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowShareModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.shareModalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Listeyi Paylaş</Text>
              <TouchableOpacity onPress={() => setShowShareModal(false)}>
                <Ionicons name="close" size={28} color="#2C2C2C" />
              </TouchableOpacity>
            </View>

            {invitation && (
              <View style={styles.shareOptionsContainer}>
                <View style={styles.inviteCodeBox}>
                  <Text style={styles.inviteCodeLabel}>Davet Kodu</Text>
                  <Text style={styles.inviteCode}>{invitation.invite_code}</Text>
                  <Text style={styles.inviteCodeExpiry}>
                    {new Date(invitation.expires_at).toLocaleDateString('tr-TR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })} tarihine kadar geçerli
                  </Text>
                </View>

                <TouchableOpacity 
                  style={styles.shareOption}
                  onPress={handleShareViaLink}
                >
                  <View style={[styles.shareIcon, { backgroundColor: '#E8F5E9' }]}>
                    <Ionicons name="link" size={28} color="#4CAF50" />
                  </View>
                  <View style={styles.shareOptionContent}>
                    <Text style={styles.shareOptionTitle}>Link ile Paylaş</Text>
                    <Text style={styles.shareOptionDescription}>
                      WhatsApp, SMS veya diğer uygulamalar
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#CCCCCC" />
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.shareOption}
                  onPress={() => {
                    Alert.alert('Yakında', 'QR kod özelliği yakında eklenecek');
                  }}
                >
                  <View style={[styles.shareIcon, { backgroundColor: '#F3E5F5' }]}>
                    <Ionicons name="qr-code" size={28} color="#9C27B0" />
                  </View>
                  <View style={styles.shareOptionContent}>
                    <Text style={styles.shareOptionTitle}>QR Kod Göster</Text>
                    <Text style={styles.shareOptionDescription}>
                      Yüz yüze paylaşım için
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color="#CCCCCC" />
                </TouchableOpacity>

                <View style={styles.shareInfo}>
                  <Ionicons name="information-circle-outline" size={20} color="#7C7C7C" />
                  <Text style={styles.shareInfoText}>
                    Bu kodu kullananlar listeye düzenleyici olarak eklenecek
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  titleInput: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
    borderBottomWidth: 1,
    borderBottomColor: '#59B1B1',
    paddingVertical: 4,
    minWidth: 200,
  },
  moreButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  statsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C2C2C',
  },
  editButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#F0F9F9',
  },
  editButtonActive: {
    backgroundColor: '#59B1B1',
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#59B1B1',
  },
  editButtonTextActive: {
    color: '#FFFFFF',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7C7C7C',
    marginBottom: 12,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60,
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
  addItemContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  addItemInputsRow: {
    flex: 1,
    flexDirection: 'column',
    gap: 8,
  },
  addItemInput: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  quantityInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F9F9',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#59B1B1',
    alignSelf: 'flex-start',
  },
  quantityButton: {
    padding: 8,
  },
  quantityInput: {
    width: 40,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#59B1B1',
  },
  addButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#59B1B1',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#59B1B1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  addButtonDisabled: {
    backgroundColor: '#CCCCCC',
    shadowOpacity: 0.1,
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
  modalBody: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 8,
    marginTop: 12,
  },
  modalInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#2C2C2C',
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
  },
  menuModal: {
    position: 'absolute' as 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: Platform.OS === 'ios' ? 34 : 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  menuHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#E5E5E5',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
  },
  menuItemDanger: {
    backgroundColor: '#FFF5F5',
  },
  menuIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 2,
  },
  menuItemTitleDanger: {
    color: '#FF4444',
  },
  menuItemDescription: {
    fontSize: 13,
    color: '#7C7C7C',
  },
  shareModalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    maxHeight: '80%',
  },
  shareOptionsContainer: {
    marginTop: 8,
  },
  inviteCodeBox: {
    backgroundColor: '#F0F9F9',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#59B1B1',
    borderStyle: 'dashed',
  },
  inviteCodeLabel: {
    fontSize: 14,
    color: '#7C7C7C',
    marginBottom: 8,
  },
  inviteCode: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#59B1B1',
    letterSpacing: 4,
    marginBottom: 8,
  },
  inviteCodeExpiry: {
    fontSize: 12,
    color: '#7C7C7C',
  },
  shareOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
  },
  shareIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  shareOptionContent: {
    flex: 1,
  },
  shareOptionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  shareOptionDescription: {
    fontSize: 14,
    color: '#7C7C7C',
  },
  shareInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFF8E5',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    gap: 8,
  },
  shareInfoText: {
    flex: 1,
    fontSize: 13,
    color: '#7C7C7C',
    lineHeight: 18,
  },
});
