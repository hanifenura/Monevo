import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';


interface StoreDetailsSectionProps {
  storeName: string;
  purchaseDate: Date;
  onStoreNameChange: (value: string) => void;
  onDateChange: (date: Date) => void;
}

export const StoreDetailsSection: React.FC<StoreDetailsSectionProps> = ({
  storeName,
  purchaseDate,
  onStoreNameChange,
  onDateChange,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const formatDate = (date: Date) => {
    const months = [
      'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
      'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
    ];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  };

  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    // Android'de picker kapatılır
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }

    if (event.type === 'set' && selectedDate) {
      onDateChange(selectedDate);
      // iOS'ta da kapatmak için
      if (Platform.OS === 'ios') {
        setShowDatePicker(false);
      }
    } else if (event.type === 'dismissed') {
      setShowDatePicker(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Mağaza Detayları</Text>
      
      <View style={styles.grid}>
        {/* Store Name Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mağaza Adı</Text>
          <TextInput
            style={styles.input}
            value={storeName}
            onChangeText={onStoreNameChange}
            placeholder="Mağaza adını girin"
            placeholderTextColor="#A0A0A0"
          />
        </View>

        {/* Purchase Date Input */}
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Satın Alma Tarihi</Text>
          <TouchableOpacity
            style={styles.dateInput}
            onPress={() => setShowDatePicker(true)}
            activeOpacity={0.7}
          >
            <Text style={styles.dateText}>{formatDate(purchaseDate)}</Text>
            <Ionicons name="calendar-outline" size={24} color="#59B1B1" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Date Picker */}
      {showDatePicker && (
       <DateTimePicker
       value={purchaseDate}
       mode="date"
       display={Platform.OS === "ios" ? "compact" : "default"}
       onChange={handleDateChange}
       maximumDate={new Date()}
       locale="tr-TR"

     />

      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 16,
  },
  grid: {
    gap: 16,
  },
  inputContainer: {
    marginBottom: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2C2C2C',
    marginBottom: 8,
  },
  input: {
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#2C2C2C',
  },
  dateInput: {
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 16,
    color: '#2C2C2C',
  },
});


