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
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useAuthStore } from '@/store/authStore';
import { shareService } from '@/services/api';

interface Member {
  user_id: number;
  name: string;
  email: string;
  role: string;
  is_owner: boolean;
  joined_at?: string;
}

export default function ListMembersScreen() {
  const router = useRouter();
  const { listId } = useLocalSearchParams();
  const { user } = useAuthStore();

  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  useEffect(() => {
    if (listId && user) {
      loadMembers();
    }
  }, [listId, user]);

  const loadMembers = async () => {
    if (!user?.user_id || !listId) return;

    try {
      setIsLoading(true);
      const response = await shareService.getListMembers(Number(listId), user.user_id);

      if (response.success && response.data) {
        // Üyeleri role göre sırala: owner -> editor -> viewer
        const sortedMembers = response.data.sort((a: Member, b: Member) => {
          const roleOrder: Record<string, number> = { owner: 0, editor: 1, viewer: 2 };
          return (roleOrder[a.role] ?? 999) - (roleOrder[b.role] ?? 999);
        });
        setMembers(sortedMembers);
      }
    } catch (error) {
      console.error('Üyeler yüklenirken hata:', error);
      Alert.alert('Hata', 'Üyeler yüklenirken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadMembers();
    setRefreshing(false);
  };

  const handleChangeRole = (member: Member) => {
    setSelectedMember(member);
    setShowRoleModal(true);
  };

  const handleSelectRole = async (newRole: 'viewer' | 'editor' | 'owner') => {
    if (!selectedMember) return;

    setShowRoleModal(false);
    await performRoleUpdate(newRole);
  };

  const performRoleUpdate = async (newRole: 'viewer' | 'editor' | 'owner') => {
    if (!selectedMember) return;

    const roleText = newRole === 'owner' ? 'Sahip' : newRole === 'editor' ? 'Düzenleyici' : 'Görüntüleyici';

    try {
      const response = await shareService.updateMemberRole(
        Number(listId),
        selectedMember.user_id,
        newRole,
        user!.user_id
      );

      if (response.success) {
        // Üyeleri güncelle ve role göre sırala
        setMembers(prevMembers => {
          const updatedMembers = prevMembers.map(m =>
            m.user_id === selectedMember.user_id ? { ...m, role: newRole } : m
          );
          const sortedMembers = updatedMembers.sort((a: Member, b: Member) => {
            const roleOrder: Record<string, number> = { owner: 0, editor: 1, viewer: 2 };
            return (roleOrder[a.role] ?? 999) - (roleOrder[b.role] ?? 999);
          });
          return sortedMembers;
        });
        Alert.alert('Başarılı', `${selectedMember.name} artık ${roleText}`);
        Alert.alert('Başarılı', `${selectedMember.name} artık ${roleText}`);
      }
    } catch (error) {
      console.error('Role değiştirme hatası:', error);
      Alert.alert('Hata', 'Role değiştirilirken bir hata oluştu');
    } finally {
      setSelectedMember(null);
    }
  };

  const handleRemoveMember = (member: Member) => {
    Alert.alert(
      'Üyeyi Çıkar',
      `${member.name} kullanıcısını listeden çıkarmak istediğinize emin misiniz?`,
      [
        { text: 'İptal', style: 'cancel' },
        {
          text: 'Çıkar',
          style: 'destructive',
          onPress: async () => {
            try {
              const response = await shareService.removeMemberAccess(
                Number(listId),
                member.user_id,
                user!.user_id
              );

              if (response.success) {
                setMembers(prevMembers =>
                  prevMembers.filter(m => m.user_id !== member.user_id)
                );
                Alert.alert('Başarılı', `${member.name} listeden çıkarıldı`);
              }
            } catch (error) {
              console.error('Üye çıkarma hatası:', error);
              Alert.alert('Hata', 'Üye çıkarılırken bir hata oluştu');
            }
          },
        },
      ]
    );
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'owner':
        return { bg: '#FFF5E5', text: '#FFA726' };
      case 'editor':
        return { bg: '#F0F9F9', text: '#59B1B1' };
      case 'viewer':
        return { bg: '#F5F5F5', text: '#7C7C7C' };
      default:
        return { bg: '#F5F5F5', text: '#7C7C7C' };
    }
  };

  const getRoleText = (role: string) => {
    switch (role) {
      case 'owner':
        return 'Sahip';
      case 'editor':
        return 'Düzenleyici';
      case 'viewer':
        return 'Görüntüleyici';
      default:
        return role;
    }
  };

  const isOwner = members.find(m => m.user_id === user?.user_id)?.role === 'owner';

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#59B1B1" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#2C2C2C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Liste Üyeleri</Text>
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
        <View style={styles.infoCard}>
          <Ionicons name="people" size={24} color="#59B1B1" />
          <Text style={styles.infoText}>
            Bu listede {members.length} üye var
          </Text>
        </View>

        {members.map((member) => {
          const roleColors = getRoleBadgeColor(member.role);
          
          return (
            <View key={member.user_id} style={styles.memberCard}>
              <View style={styles.memberAvatar}>
                <Text style={styles.memberAvatarText}>
                  {member.name.charAt(0).toUpperCase()}
                </Text>
              </View>

              <View style={styles.memberInfo}>
                <View style={styles.memberNameRow}>
                  <Text style={styles.memberName}>{member.name}</Text>
                  {member.role === 'owner' && (
                    <Ionicons name="star" size={16} color="#FFA726" />
                  )}
                  {member.is_owner && (
                    <View style={styles.creatorBadge}>
                      <Text style={styles.creatorBadgeText}>Oluşturan</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.memberEmail}>{member.email}</Text>
                <View
                  style={[styles.roleBadge, { backgroundColor: roleColors.bg }]}
                >
                  <Text style={[styles.roleText, { color: roleColors.text }]}>
                    {getRoleText(member.role)}
                  </Text>
                </View>
              </View>

              {isOwner && member.user_id !== user?.user_id && (
                <View style={styles.memberActions}>
                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => handleChangeRole(member)}
                  >
                    <Ionicons name="swap-horizontal" size={20} color="#59B1B1" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.actionButton, styles.removeButton]}
                    onPress={() => handleRemoveMember(member)}
                  >
                    <Ionicons name="close-circle" size={20} color="#FF4444" />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          );
        })}

        {members.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="people-outline" size={64} color="#CCCCCC" />
            <Text style={styles.emptyStateText}>Henüz üye yok</Text>
          </View>
        )}
      </ScrollView>

      <Modal
        visible={showRoleModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setShowRoleModal(false);
          setSelectedMember(null);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Rol Seç</Text>
              <TouchableOpacity
                onPress={() => {
                  setShowRoleModal(false);
                  setSelectedMember(null);
                }}
              >
                <Ionicons name="close" size={28} color="#2C2C2C" />
              </TouchableOpacity>
            </View>

            {selectedMember && (
              <>
                <Text style={styles.modalDescription}>
                  {selectedMember.name} için bir rol seçin
                </Text>

                <TouchableOpacity
                  style={[
                    styles.roleOption,
                    selectedMember.role === 'editor' && styles.roleOptionActive
                  ]}
                  onPress={() => handleSelectRole('editor')}
                >
                  <View style={styles.roleOptionLeft}>
                    <View style={[styles.roleIcon, { backgroundColor: '#F0F9F9' }]}>
                      <Ionicons name="create" size={24} color="#59B1B1" />
                    </View>
                    <View style={styles.roleOptionContent}>
                      <Text style={styles.roleOptionTitle}>Düzenleyici</Text>
                      <Text style={styles.roleOptionDescription}>
                        Öğe ekleyebilir, düzenleyebilir ve silebilir
                      </Text>
                    </View>
                  </View>
                  {selectedMember.role === 'editor' && (
                    <Ionicons name="checkmark-circle" size={24} color="#59B1B1" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.roleOption,
                    selectedMember.role === 'viewer' && styles.roleOptionActive
                  ]}
                  onPress={() => handleSelectRole('viewer')}
                >
                  <View style={styles.roleOptionLeft}>
                    <View style={[styles.roleIcon, { backgroundColor: '#F5F5F5' }]}>
                      <Ionicons name="eye" size={24} color="#7C7C7C" />
                    </View>
                    <View style={styles.roleOptionContent}>
                      <Text style={styles.roleOptionTitle}>Görüntüleyici</Text>
                      <Text style={styles.roleOptionDescription}>
                        Sadece listeyi görüntüleyebilir
                      </Text>
                    </View>
                  </View>
                  {selectedMember.role === 'viewer' && (
                    <Ionicons name="checkmark-circle" size={24} color="#7C7C7C" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.roleOption,
                    styles.roleOptionOwner,
                  ]}
                  onPress={() => handleSelectRole('owner')}
                >
                  <View style={styles.roleOptionLeft}>
                    <View style={[styles.roleIcon, { backgroundColor: '#FFF5E5' }]}>
                      <Ionicons name="star" size={24} color="#FFA726" />
                    </View>
                    <View style={styles.roleOptionContent}>
                      <Text style={[styles.roleOptionTitle, styles.roleOptionTitleOwner]}>
                        Sahip
                      </Text>
                      <Text style={styles.roleOptionDescription}>
                        Tam yetki + liste paylaşabilir
                      </Text>
                    </View>
                  </View>
                  <Ionicons name="arrow-forward" size={24} color="#FFA726" />
                </TouchableOpacity>

                <View style={styles.modalInfo}>
                  <Ionicons name="information-circle-outline" size={20} color="#7C7C7C" />
                  <Text style={styles.modalInfoText}>
                    Rolü değiştirdiğinizde kullanıcı hemen yeni izinlere sahip olacak
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
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
    padding: 16,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F9F9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    gap: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#59B1B1',
    fontWeight: '600',
  },
  memberCard: {
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
  memberAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#59B1B1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  memberAvatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  memberInfo: {
    flex: 1,
  },
  memberNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  creatorBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  creatorBadgeText: {
    fontSize: 10,
    color: '#4CAF50',
    fontWeight: '600',
  },
  memberName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
  },
  memberEmail: {
    fontSize: 13,
    color: '#7C7C7C',
    marginBottom: 6,
  },
  roleBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  roleText: {
    fontSize: 12,
    fontWeight: '600',
  },
  memberActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F9F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor: '#FFE5E5',
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
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  modalDescription: {
    fontSize: 14,
    color: '#7C7C7C',
    marginBottom: 20,
  },
  roleOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  roleOptionActive: {
    backgroundColor: '#F0F9F9',
    borderColor: '#59B1B1',
  },
  roleOptionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  roleIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  roleOptionContent: {
    flex: 1,
  },
  roleOptionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  roleOptionDescription: {
    fontSize: 13,
    color: '#7C7C7C',
    lineHeight: 18,
  },
  roleOptionOwner: {
    backgroundColor: '#FFF5E5',
    borderColor: '#FFA726',
  },
  roleOptionTitleOwner: {
    color: '#FFA726',
  },
  modalInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFF8E5',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    gap: 8,
  },
  modalInfoText: {
    flex: 1,
    fontSize: 13,
    color: '#7C7C7C',
    lineHeight: 18,
  },
});
