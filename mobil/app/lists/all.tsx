import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/store/authStore';
import { listService } from '@/services/api';
import ShoppingListCard from '@/components/list/ShoppingListCard';

export default function AllListsScreen() {
  const router = useRouter();
  const { user } = useAuthStore();

  const [lists, setLists] = useState<any[]>([]);
  const [filteredLists, setFilteredLists] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'owned' | 'shared'>('all');

  useEffect(() => {
    if (user?.user_id) {
      loadLists();
    }
  }, [user]);

  useEffect(() => {
    filterLists();
  }, [lists, searchQuery, activeFilter]);

  const loadLists = async () => {
    if (!user?.user_id) return;

    try {
      setIsLoading(true);
      const response = await listService.getUserLists(user.user_id);

      if (response.success && response.data) {
        setLists(response.data);
      }
    } catch (error) {
      console.error('Listeler yüklenirken hata:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadLists();
    setRefreshing(false);
  };

  const filterLists = () => {
    let filtered = [...lists];

    // Arama filtresi
    if (searchQuery.trim()) {
      filtered = filtered.filter(list =>
        list.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sahiplik filtresi
    if (activeFilter === 'owned') {
      filtered = filtered.filter(list => list.is_owner);
    } else if (activeFilter === 'shared') {
      filtered = filtered.filter(list => !list.is_owner);
    }

    setFilteredLists(filtered);
  };

  const getFilterCounts = () => {
    return {
      all: lists.length,
      owned: lists.filter(l => l.is_owner).length,
      shared: lists.filter(l => !l.is_owner).length,
    };
  };

  const counts = getFilterCounts();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#59B1B1" />
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
        <Text style={styles.headerTitle}>Tüm Listeler</Text>
        <View style={styles.backButton} />
      </View>

      {/* Arama */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#7C7C7C" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Liste ara..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={20} color="#7C7C7C" />
          </TouchableOpacity>
        )}
      </View>

      {/* Filtreler */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === 'all' && styles.filterButtonActive
          ]}
          onPress={() => setActiveFilter('all')}
        >
          <Text style={[
            styles.filterButtonText,
            activeFilter === 'all' && styles.filterButtonTextActive
          ]}>
            Tümü ({counts.all})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === 'owned' && styles.filterButtonActive
          ]}
          onPress={() => setActiveFilter('owned')}
        >
          <Text style={[
            styles.filterButtonText,
            activeFilter === 'owned' && styles.filterButtonTextActive
          ]}>
            Sahip Olduğum ({counts.owned})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === 'shared' && styles.filterButtonActive
          ]}
          onPress={() => setActiveFilter('shared')}
        >
          <Text style={[
            styles.filterButtonText,
            activeFilter === 'shared' && styles.filterButtonTextActive
          ]}>
            Paylaşılan ({counts.shared})
          </Text>
        </TouchableOpacity>
      </View>

      {/* Liste */}
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
        {filteredLists.length > 0 ? (
          <View style={styles.listsContainer}>
            {filteredLists.map((list) => (
              <ShoppingListCard
                key={list.list_id}
                list={list}
              />
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="folder-open-outline" size={64} color="#CCCCCC" />
            <Text style={styles.emptyStateText}>
              {searchQuery ? 'Liste bulunamadı' : 'Henüz liste yok'}
            </Text>
            {searchQuery && (
              <Text style={styles.emptyStateSubtext}>
                Farklı bir arama yapın
              </Text>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    width: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#2C2C2C',
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 16,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  filterButtonActive: {
    backgroundColor: '#F0F9F9',
    borderColor: '#59B1B1',
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7C7C7C',
  },
  filterButtonTextActive: {
    color: '#59B1B1',
  },
  content: {
    flex: 1,
  },
  listsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyStateText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7C7C7C',
    marginTop: 16,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#AAAAAA',
    marginTop: 8,
  },
});
