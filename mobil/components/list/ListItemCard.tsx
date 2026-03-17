import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ListItemCardProps {
  item: {
    item_id: number;
    name: string;
    quantity: number;
    is_checked: boolean;
    category?: {
      name: string;
      color_code?: string;
    };
    checkedBy?: {
      name: string;
    };
    checkedAt?: string;
  };
  onToggleCheck: () => void;
  onPress?: () => void;
  isEditMode?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function ListItemCard({ item, onToggleCheck, onPress, isEditMode, onEdit, onDelete }: ListItemCardProps) {
  const getCategoryColor = () => {
    if (item.category?.color_code) {
      return item.category.color_code;
    }
    return '#7C7C7C';
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 0) {
      return `${diffInDays} gün önce`;
    } else if (diffInHours > 0) {
      return `${diffInHours} saat önce`;
    } else {
      return 'Az önce';
    }
  };

  return (
    <TouchableOpacity 
      style={[
        styles.container,
        item.is_checked && styles.checkedContainer
      ]} 
      onPress={onPress}
      activeOpacity={0.7}
      disabled={isEditMode}
    >
      {!isEditMode ? (
        <TouchableOpacity 
          style={styles.checkbox}
          onPress={onToggleCheck}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          {item.is_checked ? (
            <View style={styles.checkedBox}>
              <Ionicons name="checkmark" size={20} color="#FFFFFF" />
            </View>
          ) : (
            <View style={styles.uncheckedBox} />
          )}
        </TouchableOpacity>
      ) : (
        <View style={styles.editActions}>
          {onEdit && (
            <TouchableOpacity 
              style={styles.editIconButton}
              onPress={onEdit}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="create-outline" size={22} color="#59B1B1" />
            </TouchableOpacity>
          )}
          {onDelete && (
            <TouchableOpacity 
              style={styles.deleteIconButton}
              onPress={onDelete}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="trash-outline" size={22} color="#FF4444" />
            </TouchableOpacity>
          )}
        </View>
      )}

      <View style={styles.content}>
        <Text style={[
          styles.itemName,
          item.is_checked && styles.checkedText
        ]}>
          {item.name}
        </Text>
        
        <View style={styles.metaContainer}>
          {item.category && (
            <View style={styles.category}>
              <View 
                style={[
                  styles.categoryDot,
                  { backgroundColor: getCategoryColor() }
                ]} 
              />
              <Text style={styles.categoryText}>{item.category.name}</Text>
            </View>
          )}
          
          {item.is_checked && item.checkedBy && (
            <Text style={styles.checkedInfo}>
              {item.checkedBy.name} tarafından işaretlendi
            </Text>
          )}
          
          {item.is_checked && item.checkedAt && (
            <Text style={styles.timeText}>
              {getTimeAgo(item.checkedAt)}
            </Text>
          )}
        </View>
      </View>

      {onPress && !isEditMode && (
        <TouchableOpacity style={styles.cameraButton}>
          <Ionicons name="camera-outline" size={20} color="#59B1B1" />
        </TouchableOpacity>
      )}
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
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  checkedContainer: {
    backgroundColor: '#F5F5F5',
    opacity: 0.7,
  },
  checkbox: {
    marginRight: 12,
  },
  uncheckedBox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
  },
  checkedBox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    backgroundColor: '#59B1B1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  checkedText: {
    textDecorationLine: 'line-through',
    color: '#7C7C7C',
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  categoryDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  categoryText: {
    fontSize: 12,
    color: '#7C7C7C',
  },
  checkedInfo: {
    fontSize: 11,
    color: '#AAAAAA',
  },
  timeText: {
    fontSize: 11,
    color: '#AAAAAA',
  },
  cameraButton: {
    padding: 8,
    marginLeft: 8,
  },
  editActions: {
    flexDirection: 'row',
    gap: 8,
    marginRight: 8,
  },
  editIconButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F0F9F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteIconButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFE5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
