import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Keşfet</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Kategoriler</Text>
          
          <View style={styles.categoryGrid}>
            <TouchableOpacity style={styles.categoryCard}>
              <View style={[styles.categoryIcon, { backgroundColor: '#FFE5E5' }]}>
                <Ionicons name="fast-food-outline" size={32} color="#FF6B6B" />
              </View>
              <Text style={styles.categoryName}>Gıda</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <View style={[styles.categoryIcon, { backgroundColor: '#E5F5FF' }]}>
                <Ionicons name="shirt-outline" size={32} color="#4A90E2" />
              </View>
              <Text style={styles.categoryName}>Giyim</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <View style={[styles.categoryIcon, { backgroundColor: '#F0F9F9' }]}>
                <Ionicons name="home-outline" size={32} color="#59B1B1" />
              </View>
              <Text style={styles.categoryName}>Ev & Yaşam</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <View style={[styles.categoryIcon, { backgroundColor: '#FFF5E5' }]}>
                <Ionicons name="fitness-outline" size={32} color="#FFA726" />
              </View>
              <Text style={styles.categoryName}>Spor</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <View style={[styles.categoryIcon, { backgroundColor: '#F5E5FF' }]}>
                <Ionicons name="game-controller-outline" size={32} color="#9C27B0" />
              </View>
              <Text style={styles.categoryName}>Eğlence</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <View style={[styles.categoryIcon, { backgroundColor: '#E5FFE5' }]}>
                <Ionicons name="add-circle-outline" size={32} color="#66BB6A" />
              </View>
              <Text style={styles.categoryName}>Diğer</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Öne Çıkanlar</Text>
          
          {/* Test Button */}
          {/* <TouchableOpacity 
            style={[styles.featureCard, styles.testCard]}
            onPress={() => router.push('/receipt/edit' as any)}
          >
            <View style={[styles.featureIcon, styles.testIcon]}>
              <Ionicons name="create-outline" size={28} color="#FFA726" />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>🧪 Fiş Düzenle (Test)</Text>
              <Text style={styles.featureDescription}>
                Yeni fiş düzenleme sayfasını test edin
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#FFA726" />
          </TouchableOpacity> */}

          <TouchableOpacity style={styles.featureCard}>
            <View style={styles.featureIcon}>
              <Ionicons name="people-outline" size={28} color="#59B1B1" />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Liste Paylaşımı</Text>
              <Text style={styles.featureDescription}>
                Listelerinizi aileniz ve arkadaşlarınızla paylaşın
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <View style={styles.featureIcon}>
              <Ionicons name="analytics-outline" size={28} color="#59B1B1" />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Harcama Analizi</Text>
              <Text style={styles.featureDescription}>
                Harcamalarınızı detaylı raporlar ile takip edin
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <View style={styles.featureIcon}>
              <Ionicons name="notifications-outline" size={28} color="#59B1B1" />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Hatırlatıcılar</Text>
              <Text style={styles.featureDescription}>
                Alışveriş listeniz için hatırlatıcılar oluşturun
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.tipCard}>
          <Ionicons name="bulb-outline" size={32} color="#FFA726" />
          <Text style={styles.tipTitle}>İpucu</Text>
          <Text style={styles.tipText}>
            Alışverişe çıkmadan önce listenizi kontrol etmeyi unutmayın!
          </Text>
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
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 16,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  categoryCard: {
    width: '30%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
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
  categoryIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C2C2C',
    textAlign: 'center',
  },
  featureCard: {
    flexDirection: 'row',
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
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#7C7C7C',
    lineHeight: 20,
  },
  testCard: {
    borderWidth: 2,
    borderColor: '#FFA726',
    borderStyle: 'dashed',
    backgroundColor: '#FFF5E5',
  },
  testIcon: {
    backgroundColor: '#FFF5E5',
    borderWidth: 2,
    borderColor: '#FFA726',
  },
  tipCard: {
    backgroundColor: '#FFF8E5',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFE5B3',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginTop: 12,
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#7C7C7C',
    textAlign: 'center',
    lineHeight: 20,
  },
});
