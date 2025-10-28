import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useAuthStore } from '@/store/authStore';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace("../../auth/login" as any);
  };

  return (
    <ScrollView style={styles.container}>
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
            {isAuthenticated ? `Hoş Geldiniz, ${user?.fullName}!` : 'Hoş Geldiniz!'}
          </Text>
          <Text style={styles.welcomeSubtitle}>
            Alışveriş listelerinizi ve harcamalarınızı yönetin
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Ionicons name="list-outline" size={32} color="#59B1B1" />
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Alışveriş Listesi</Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons name="cash-outline" size={32} color="#59B1B1" />
            <Text style={styles.statNumber}>₺0</Text>
            <Text style={styles.statLabel}>Toplam Harcama</Text>
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
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Son Aktiviteler</Text>
          <View style={styles.emptyState}>
            <Ionicons name="time-outline" size={64} color="#CCCCCC" />
            <Text style={styles.emptyStateText}>Henüz aktivite yok</Text>
            <Text style={styles.emptyStateSubtext}>
              İlk alışveriş listenizi oluşturarak başlayın
            </Text>
          </View>
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
  statsContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
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
