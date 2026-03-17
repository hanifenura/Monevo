import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface ShoppingListCardProps {
  list: {
    list_id: number;
    name: string;
    created_at: string;
    is_owner?: boolean;
    user_role?: string;
    owner?: {
      name: string;
    };
    items?: any[];
    _count?: {
      items: number;
    };
  };
}

export default function ShoppingListCard({ list }: ShoppingListCardProps) {
  const router = useRouter();
  
  const itemCount = list._count?.items || list.items?.length || 0;
  const checkedCount = list.items?.filter(item => item.is_checked).length || 0;
  const uncheckedCount = itemCount - checkedCount;

  const handlePress = () => {
    router.push(`/list/${list.list_id}` as any);
  };

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <Ionicons name="list" size={28} color="#59B1B1" />
      </View>
      
      <View style={styles.content}>
        <View style={styles.listNameRow}>
          <Text style={styles.listName} numberOfLines={1}>
            {list.name || 'İsimsiz Liste'}
          </Text>
          {!list.is_owner && list.owner?.name && (
            <View style={styles.sharedBadge}>
              <Ionicons name="people" size={12} color="#59B1B1" />
              <Text style={styles.sharedText}>{list.owner.name}</Text>
            </View>
          )}
        </View>
        
        <View style={styles.statsRow}>
          {uncheckedCount > 0 && (
            <View style={styles.stat}>
              <Ionicons name="checkbox-outline" size={14} color="#7C7C7C" />
              <Text style={styles.statText}>{uncheckedCount} öğe</Text>
            </View>
          )}
          
          {checkedCount > 0 && (
            <View style={styles.stat}>
              <Ionicons name="checkmark-circle" size={14} color="#59B1B1" />
              <Text style={[styles.statText, styles.completedText]}>
                {checkedCount} tamamlandı
              </Text>
            </View>
          )}
          
          {itemCount === 0 && (
            <Text style={styles.emptyText}>Liste boş</Text>
          )}
        </View>
      </View>
      
      <Ionicons name="chevron-forward" size={20} color="#CCCCCC" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
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
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  listNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  listName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    flex: 1,
  },
  sharedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F9F9',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    gap: 4,
  },
  sharedText: {
    fontSize: 11,
    color: '#59B1B1',
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 13,
    color: '#7C7C7C',
  },
  completedText: {
    color: '#59B1B1',
  },
  emptyText: {
    fontSize: 13,
    color: '#AAAAAA',
    fontStyle: 'italic',
  },
});
