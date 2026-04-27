import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Alert,
  ActivityIndicator,
  Modal,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {
  StoreDetailsSection,
  ProductItem,
  AddProductForm,
  TotalsSection,
  EditProductModal,
} from '@/components/receipt';
import { ReceiptProduct, NewProduct, ParsedReceiptData } from '@/types/receipt';
import { receiptService } from '@/services/api';
import { useAuthStore } from '@/store/authStore';

export default function EditReceiptScreen() {
  const router = useRouter();
  const { user } = useAuthStore();
  const params = useLocalSearchParams();
  
  // State
  const [storeName, setStoreName] = useState('');
  const [purchaseDate, setPurchaseDate] = useState(new Date());
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ReceiptProduct | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [products, setProducts] = useState<ReceiptProduct[]>([]);
  
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  // OCR sonucunu veya mevcut fişi yükle
  useEffect(() => {
    // Eğer id varsa, mevcut fişi yükle
    if (params.id && !params.ocrData) {
      loadExistingReceipt();
    }
    // Eğer OCR verisi varsa, onu yükle
    else if (params.ocrData && typeof params.ocrData === 'string') {
      try {
        const parsedData: ParsedReceiptData = JSON.parse(params.ocrData);
        console.log('📥 OCR verisi alındı:', parsedData);

        // Mağaza adını set et
        setStoreName(parsedData.storeName || 'Bilinmeyen Mağaza');

        // Tarihi set et
        if (parsedData.receiptDate) {
          setPurchaseDate(new Date(parsedData.receiptDate));
        }

        // Ürünleri dönüştür
        const convertedProducts: ReceiptProduct[] = parsedData.items.map((item, index) => {
          // Ürün adından veya quantity'den unit tipini tespit et
          const detectUnit = (): 'adet' | 'kg' => {
            const productName = item.productName.toUpperCase();
            
            // Ürün adında kg/kilo ifadeleri varsa
            if (productName.includes('KG') || 
                productName.includes('KILO') || 
                productName.includes('KILOGRAM') ||
                productName.includes('GR') ||
                productName.includes('GRAM')) {
              return 'kg';
            }
            
            // Quantity ondalıklı sayı ise muhtemelen kg'dır (örn: 2.5, 0.8, 1.25)
            if (item.quantity && item.quantity % 1 !== 0) {
              return 'kg';
            }
            
            // Varsayılan: adet
            return 'adet';
          };

          return {
            id: String(index + 1),
            name: item.productName,
            quantity: item.quantity || 1,
            price: item.lineTotal,
            unit: detectUnit(),
            pricePerUnit: item.unitPrice,
            taxRate: parsedData.taxRate || 0,
          };
        });

        setProducts(convertedProducts);

        // Toplamları hesapla (OCR'dan gelen değerler yerine ürünlere göre hesapla)
        // calculateTotals fonksiyonu çağrılacak
        setTimeout(() => {
          calculateTotals(convertedProducts);
        }, 0);

        console.log('✅ OCR verisi başarıyla yüklendi');
      } catch (error) {
        console.error('❌ OCR verisi parse edilemedi:', error);
        Alert.alert('Hata', 'Fiş bilgileri yüklenemedi');
      }
    }
  }, [params.ocrData, params.id]);

  // Mevcut fişi backend'den yükle
  const loadExistingReceipt = async () => {
    if (!params.id || !user?.user_id) return;

    try {
      const response = await receiptService.getReceiptById(
        Number(params.id),
        user.user_id
      );

      if (response.success && response.data) {
        const receipt = response.data;

        // Mağaza adını ve tarihi set et
        setStoreName(receipt.store_name);
        setPurchaseDate(new Date(receipt.receipt_date));

        // items'ı ReceiptProduct formatına dönüştür
        const convertedProducts: ReceiptProduct[] = receipt.items.map((item: any, index: number) => ({
          id: item.item_id ? String(item.item_id) : String(index),
          name: item.productName,
          quantity: Number(item.quantity) || 1,
          price: Number(item.price) || 0,
          unit: item.unit || 'adet',
          pricePerUnit: item.pricePerUnit ? Number(item.pricePerUnit) : 0,
          taxRate: item.taxRate ? Number(item.taxRate) : 0,
        }));

        setProducts(convertedProducts);

        // Toplamları set et
        const subtotalValue = Number(receipt.subtotal) || 0;
        const taxValue = Number(receipt.tax_amount) || 0;
        const totalValue = Number(receipt.total_amount) || 0;

        setSubtotal(subtotalValue);
        setTax(taxValue);
        setTotal(totalValue);

        console.log('✅ Mevcut fiş yüklendi:', receipt.receipt_id);
      }
    } catch (error) {
      console.error('❌ Fiş yüklenirken hata:', error);
      Alert.alert('Hata', 'Fiş bilgileri yüklenemedi');
      router.back();
    }
  };

  // Handlers
  const handleDateChange = (date: Date) => {
    setPurchaseDate(date);
  };

  const handleAddProduct = (newProduct: NewProduct) => {
    const product: ReceiptProduct = {
      id: Date.now().toString(),
      name: newProduct.name,
      quantity: newProduct.quantity,
      price: newProduct.price,
      unit: newProduct.quantityType,
      pricePerUnit: newProduct.price / newProduct.quantity,
      taxRate: newProduct.taxRate,
    };

    setProducts([...products, product]);
    setShowAddProduct(false);

    // Recalculate totals
    calculateTotals([...products, product]);
  };

  const handleEditProduct = (id: string) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setEditingProduct(product);
    }
  };

  const handleSaveEditedProduct = (updatedProduct: ReceiptProduct) => {
    const updatedProducts = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
    calculateTotals(updatedProducts);
  };

  const handleDeleteProduct = (id: string) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    calculateTotals(updatedProducts);
  };

  const calculateTotals = (productList: ReceiptProduct[]) => {
    // Her ürün için KDV dahil fiyattan KDV'siz fiyatı ve KDV tutarını hesapla
    let totalSubtotal = 0;
    let totalTax = 0;

    productList.forEach((product) => {
      const taxRate = product.taxRate || 0;
      const priceWithTax = product.price;
      
      // KDV'siz fiyat = KDV dahil fiyat / (1 + KDV_oranı/100)
      const priceWithoutTax = priceWithTax / (1 + taxRate / 100);
      
      // KDV tutarı = KDV dahil fiyat - KDV'siz fiyat
      const taxAmount = priceWithTax - priceWithoutTax;
      
      totalSubtotal += priceWithoutTax;
      totalTax += taxAmount;
    });

    const newTotal = totalSubtotal + totalTax;

    setSubtotal(totalSubtotal);
    setTax(totalTax);
    setTotal(newTotal);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    
    // Eğer düzenleme modundaysa, detay sayfasına yönlendir
    if (params.id) {
      router.replace(`/receipt/${params.id}` as any);
    } else {
      router.back();
    }
  };

  const handleSave = async () => {
    // Validasyon
    if (!storeName.trim()) {
      Alert.alert('Hata', 'Mağaza adı boş olamaz');
      return;
    }

    if (products.length === 0) {
      Alert.alert('Hata', 'En az bir ürün eklemelisiniz');
      return;
    }

    if (!user?.user_id) {
      Alert.alert('Hata', 'Kullanıcı bilgisi bulunamadı. Lütfen tekrar giriş yapın.');
      return;
    }

    setIsSaving(true);

    try {
      // Backend'e gönderilecek veriyi hazırla
      const receiptData = {
        storeName: storeName.trim(),
        purchaseDate: purchaseDate.toISOString(),
        products: products.map((product) => ({
          name: product.name,
          quantity: product.quantity,
          price: product.price,
          unit: product.unit,
          pricePerUnit: product.pricePerUnit,
          taxRate: product.taxRate,
        })),
        subtotal,
        tax,
        total,
        user_id: user.user_id,
      };

      let response;

      // Eğer id varsa güncelleme, yoksa yeni kayıt
      if (params.id) {
        response = await receiptService.updateReceipt(Number(params.id), receiptData);
      } else {
        response = await receiptService.saveReceipt(receiptData);
      }

      if (response.success) {
        // Başarı modalını göster
        setShowSuccessModal(true);
      } else {
        throw new Error(response.error || 'Bilinmeyen bir hata oluştu');
      }
    } catch (error: any) {
      console.error('Fiş kaydetme hatası:', error);
      
      // Hata mesajını kullanıcıya göster
      const errorMessage = error?.response?.data?.error 
        || error?.message 
        || 'Fiş kaydedilirken bir hata oluştu';
      
      Alert.alert('Hata', errorMessage);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#2C2C2C" />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>
          {params.id ? 'Fişi Düzenle' : 'Fişi Gözden Geçir'}
        </Text>
        
        <View style={styles.headerSpacer} />
      </View>

      {/* Content */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Store Details */}
        <StoreDetailsSection
          storeName={storeName}
          purchaseDate={purchaseDate}
          onStoreNameChange={setStoreName}
          onDateChange={handleDateChange}
        />

        {/* Products Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ürünler</Text>
          
          {/* Product List */}
          {products.length === 0 && !showAddProduct && (
            <View style={styles.emptyState}>
              <Ionicons name="cart-outline" size={48} color="#A0A0A0" />
              <Text style={styles.emptyText}>Henüz ürün eklenmedi</Text>
              <Text style={styles.emptySubtext}>
                OCR'dan ürün tespit edilemedi veya ürün listesi boş
              </Text>
            </View>
          )}
          
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          ))}

          {/* Add Product Form */}
          {showAddProduct && (
            <AddProductForm
              onAdd={handleAddProduct}
              onCancel={() => setShowAddProduct(false)}
            />
          )}

          {/* Add Product Button */}
          {!showAddProduct && (
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setShowAddProduct(true)}
            >
              <Ionicons name="add-circle-outline" size={24} color="#59B1B1" />
              <Text style={styles.addButtonText}>Başka Ürün Ekle</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Totals */}
        <TotalsSection
          subtotal={subtotal}
          tax={tax}
          total={total}
          onSubtotalChange={(value) => setSubtotal(parseFloat(value.replace(',', '.')) || 0)}
          onTaxChange={(value) => setTax(parseFloat(value.replace(',', '.')) || 0)}
          onTotalChange={(value) => setTotal(parseFloat(value.replace(',', '.')) || 0)}
        />
      </ScrollView>

      {/* Fixed Save Button */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={[styles.saveButton, isSaving && styles.saveButtonDisabled]} 
          onPress={handleSave}
          disabled={isSaving}
        >
          {isSaving ? (
            <View style={styles.savingContainer}>
              <ActivityIndicator color="#FFFFFF" />
              <Text style={styles.saveButtonText}>
                {params.id ? 'Güncelleniyor...' : 'Kaydediliyor...'}
              </Text>
            </View>
          ) : (
            <Text style={styles.saveButtonText}>
              {params.id ? 'Fişi Güncelle' : 'Fişi Kaydet'}
            </Text>
          )}
        </TouchableOpacity>
      </View>

      {/* Edit Product Modal */}
      <EditProductModal
        visible={!!editingProduct}
        product={editingProduct}
        onSave={handleSaveEditedProduct}
        onCancel={() => setEditingProduct(null)}
      />

      {/* Success Modal */}
      <Modal
        visible={showSuccessModal}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.successModalOverlay}>
          <View style={styles.successModalContent}>
            <View style={styles.successIconContainer}>
              <Ionicons name="checkmark-circle" size={80} color="#4CAF50" />
            </View>
            <Text style={styles.successTitle}>Başarılı!</Text>
            <Text style={styles.successMessage}>
              {params.id ? 'Fişiniz başarıyla güncellendi' : 'Fişiniz başarıyla kaydedildi'}
            </Text>
            <View style={styles.successDetails}>
              <View style={styles.successDetailRow}>
                <Ionicons name="storefront-outline" size={20} color="#7C7C7C" />
                <Text style={styles.successDetailText}>{storeName}</Text>
              </View>
              <View style={styles.successDetailRow}>
                <Ionicons name="cart-outline" size={20} color="#7C7C7C" />
                <Text style={styles.successDetailText}>{products.length} ürün</Text>
              </View>
              <View style={styles.successDetailRow}>
                <Ionicons name="cash-outline" size={20} color="#7C7C7C" />
                <Text style={styles.successDetailText}>₺{total.toFixed(2).replace('.', ',')}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.successButton}
              onPress={handleSuccessModalClose}
            >
              <Text style={styles.successButtonText}>Tamam</Text>
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
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 16,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#59B1B1',
    borderStyle: 'dashed',
    borderRadius: 12,
    paddingVertical: 16,
    gap: 8,
    marginTop: 4,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#59B1B1',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
    gap: 12,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7C7C7C',
    marginTop: 12,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#A0A0A0',
    textAlign: 'center',
    paddingHorizontal: 32,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(245, 245, 245, 0.95)',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: Platform.OS === 'ios' ? 32 : 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  saveButton: {
    backgroundColor: '#59B1B1',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#59B1B1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  saveButtonDisabled: {
    opacity: 0.6,
  },
  savingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  successModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successModalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    minWidth: 300,
    maxWidth: '85%',
  },
  successIconContainer: {
    marginBottom: 16,
  },
  successTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 8,
  },
  successMessage: {
    fontSize: 16,
    color: '#7C7C7C',
    textAlign: 'center',
    marginBottom: 24,
  },
  successDetails: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    gap: 12,
  },
  successDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  successDetailText: {
    fontSize: 16,
    color: '#2C2C2C',
    fontWeight: '500',
  },
  successButton: {
    backgroundColor: '#59B1B1',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 48,
    shadowColor: '#59B1B1',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  successButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


