import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Alert, Modal, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [image, setImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const cameraRef = useRef<any>(null);
  const router = useRouter();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Kamerayı kullanmak için izin gerekiyor</Text>
        <TouchableOpacity onPress={requestPermission} style={styles.permissionButton}>
          <Text style={styles.permissionText}>İzin Ver</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // 🖼️ Fotoğrafı optimize et (boyutunu küçült)
  async function compressImage(uri: string) {
    try {
      console.log("Fotoğraf sıkıştırılıyor...");
      const manipResult = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { width: 1500 } }], // Max 1500px genişlik
        { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG } // %70 kalite
      );
      console.log("Sıkıştırma tamamlandı:", manipResult.uri);
      return manipResult.uri;
    } catch (error) {
      console.warn("Sıkıştırma başarısız, orijinal kullanılıyor:", error);
      return uri; // Hata varsa orijinali kullan
    }
  }

  // 📸 Fotoğraf çekme
  async function takePhoto() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      const compressedUri = await compressImage(photo.uri);
      setImage(compressedUri);
      await sendToOCR(compressedUri);
    }
  }

  // 🖼️ Galeriden fotoğraf seçme
  async function pickImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Erişim reddedildi', 'Galeriye erişim izni gerekli.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const compressedUri = await compressImage(result.assets[0].uri);
      setImage(compressedUri);
       // Fotoğrafı OCR servisine gönder
      await sendToOCR(compressedUri);
    }
  }

  // 🔄 Retry mekanizması ile fetch
  async function fetchWithRetry(url: string, options: any, maxRetries = 3, timeout = 90000) {
    for (let i = 0; i < maxRetries; i++) {
      try {
        console.log(`Deneme ${i + 1}/${maxRetries}...`);
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        
        const response = await fetch(url, {
          ...options,
          signal: controller.signal,
        }).finally(() => clearTimeout(timeoutId));
        
        return response;
      } catch (error: any) {
        console.warn(`Deneme ${i + 1} başarısız:`, error.message);
        
        if (i === maxRetries - 1) throw error; // Son denemeyse hatayı fırlat
        
        // Bekleme süresi: 2^i * 1000ms (exponential backoff)
        const waitTime = Math.pow(2, i) * 1000;
        console.log(`${waitTime}ms bekleniyor...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
    throw new Error("Tüm denemeler başarısız");
  }

  async function sendToOCR(uri: string) {
    try {
      // API key kontrolü
      const apiKey = process.env.EXPO_PUBLIC_SPACE_KEY;
      if (!apiKey || apiKey === "your_ocr_space_api_key_here" || apiKey === "helloworld") {
        Alert.alert(
          "Yapılandırma Hatası", 
          ".env dosyasında EXPO_PUBLIC_SPACE_KEY ayarlanmamış. OCR.space'ten API key alın."
        );
        return;
      }

      console.log("OCR işlemi başlatılıyor...");
      setIsProcessing(true);

      const formData = new FormData();
      
      // 📱 Mobile için dosya ekleme
      formData.append("file", {
        uri: uri,
        name: "receipt.jpg",
        type: "image/jpeg",
      } as any);
      
      // OCR.space için gerekli parametreler
      formData.append("language", "tur"); // Türkçe dil desteği
      formData.append("isOverlayRequired", "false");
      formData.append("detectOrientation", "true");
      formData.append("scale", "true");
      formData.append("OCREngine", "2"); // Engine 2 daha iyi sonuç verir
  
      // 🔑 OCR.space API çağrısı (retry ile, 90 saniye timeout)
      const ocrResponse = await fetchWithRetry(
        "https://api.ocr.space/parse/image",
        {
          method: "POST",
          headers: {
            "apikey": apiKey,
          },
          body: formData,
        },
        3, // 3 deneme
        90000 // 90 saniye timeout
      );
  
      if (!ocrResponse.ok) {
        throw new Error(`OCR API hatası: ${ocrResponse.status} ${ocrResponse.statusText}`);
      }

      const ocrResult = await ocrResponse.json();
      console.log("OCR yanıtı:", JSON.stringify(ocrResult, null, 2));
      
      // API hatası kontrolü
      if (ocrResult.IsErroredOnProcessing) {
        const errorMessages = ocrResult.ErrorMessage || ocrResult.ErrorDetails;
        throw new Error(`OCR hatası: ${Array.isArray(errorMessages) ? errorMessages.join(", ") : errorMessages}`);
      }
      
      // OCR sonucu kontrolü
      if (!ocrResult.ParsedResults || ocrResult.ParsedResults.length === 0) {
        console.error("OCR yanıtı boş:", ocrResult);
        throw new Error("Fişte metin tespit edilemedi. Lütfen daha net bir fotoğraf çekin.");
      }

      const extractedText = ocrResult.ParsedResults[0].ParsedText;
      
      if (!extractedText || extractedText.trim().length === 0) {
        throw new Error("OCR boş metin döndürdü. Lütfen fişin tamamını çerçeveleyip tekrar deneyin.");
      }

      console.log("Tespit edilen metin:", extractedText);
      
      // ⚡ Mobil tarafta direkt parse et (Python backend'e gitmeden!)
      console.log("📱 Mobil tarafta parse ediliyor...");
      
      // receiptParser'ı import et ve kullan
      const { parseReceiptText, logParsedReceipt } = require('@/utils/receiptParser');
      const parsedReceipt = parseReceiptText(extractedText);
      
      // Console'a yazdır
      logParsedReceipt(parsedReceipt);
      
      // Sonuçları göster
      if (parsedReceipt.items.length === 0) {
        Alert.alert(
          "❌ Ürün Bulunamadı", 
          "Fişte ürün tespit edilemedi. Lütfen daha net bir fotoğraf çekin."
        );
        return;
      }
      
      // Edit sayfasına yönlendir
      console.log("📱 Edit sayfasına yönlendiriliyor...");
      
      // ParsedReceipt'i JSON string'e çevir (route params olarak göndermek için)
      router.push({
        pathname: '/receipt/edit',
        params: {
          ocrData: JSON.stringify(parsedReceipt)
        }
      });
  
    } catch (error) {
      console.error("❌ OCR/Parse hatası:", error);
      const errorMessage = error instanceof Error ? error.message : "Bilinmeyen hata oluştu";
      Alert.alert("Hata", errorMessage);
    } finally {
      setIsProcessing(false);
    }
  }
  
  // 💾 Backend'e kaydetme fonksiyonu (mobil tarafta parse edilmiş veri)
  async function saveToBackend(parsedReceipt: any) {
    try {
      console.log("📤 Backend'e kaydediliyor...");
      
      // Backend'e gönderilecek veri
      const payload = {
        user_id: 1,
        list_id: 1,
        store_name: parsedReceipt.storeName,
        total_amount: parsedReceipt.totalAmount,
        sub_total: parsedReceipt.subTotal,
        tax_amount: parsedReceipt.taxAmount,
        tax_rate: parsedReceipt.taxRate,
        receipt_date: parsedReceipt.receiptDate,
        payment_method: parsedReceipt.paymentMethod,
        currency: parsedReceipt.currency,
        items: parsedReceipt.items.map((item: any) => ({
          productName: item.productName,
          quantity: item.quantity,
          unitPrice: item.unitPrice,
          lineTotal: item.lineTotal || (item.unitPrice * item.quantity)
        }))
      };
      
      console.log("Backend payload:", JSON.stringify(payload, null, 2));
      
      // Node.js backend'e gönder
      const computerIp = process.env.EXPO_PUBLIC_COMPUTER_IP || "localhost";
      const backendResponse = await fetchWithRetry(
        `http://${computerIp}:5000/api/receipts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
        3,
        30000
      );
      
      if (!backendResponse.ok) {
        const errorText = await backendResponse.text();
        console.error("Backend hatası:", errorText);
        throw new Error(`Backend hatası: ${backendResponse.status}`);
      }
      
      const backendResult = await backendResponse.json();
      console.log("✅ Backend yanıtı:", backendResult);
      
      Alert.alert(
        "Başarılı! 🎉", 
        `Fiş başarıyla kaydedildi!\n\n📦 ${parsedReceipt.items.length} ürün\n💰 Toplam: ${parsedReceipt.totalAmount} TL\n🏪 ${parsedReceipt.storeName}`
      );
    } catch (error) {
      console.error("❌ Backend kaydetme hatası:", error);
      const errorMessage = error instanceof Error ? error.message : "Backend'e kaydedilemedi";
      Alert.alert("Backend Hatası", errorMessage);
    }
  }
  
  

  return (
    <View style={styles.container}>
      {/* 📷 Arka Kamera */}
      <CameraView ref={cameraRef} style={styles.camera} facing="back" />

      {/* 📸 Alt Menü (foto çek & galeri) */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={pickImage} style={styles.iconButton}>
          <Ionicons name="image-outline" size={36} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={takePhoto} style={styles.captureButton}>
          <Ionicons name="camera" size={42} color="white" />
        </TouchableOpacity>
      </View>

      {/* 📸 Çekilen veya seçilen fotoğraf önizlemesi */}
      {image && (
        <View style={styles.previewContainer}>
          <Image source={{ uri: image }} style={styles.preview} />
        </View>
      )}

      {/* 🔄 Loading Modal */}
      <Modal
        visible={isProcessing}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#59B1B1" />
            <Text style={styles.modalTitle}>Fiş İşleniyor</Text>
            <Text style={styles.modalText}>
              Fişiniz okunuyor, lütfen bekleyin...
            </Text>
            <View style={styles.modalInfo}>
              <Ionicons name="time-outline" size={20} color="#7C7C7C" />
              <Text style={styles.modalInfoText}>Bu işlem 1-2 dakika sürebilir</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
  },
  message: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
  permissionButton: {
    alignSelf: 'center',
    backgroundColor: '#007bff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  permissionText: {
    color: 'white',
    fontWeight: '600',
  },
  controls: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 12,
    borderRadius: 50,
  },
  captureButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 20,
    borderRadius: 50,
  },
  previewContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  preview: {
    width: 100,
    height: 100,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
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
    minWidth: 280,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginTop: 16,
    marginBottom: 8,
  },
  modalText: {
    fontSize: 16,
    color: '#7C7C7C',
    textAlign: 'center',
    marginBottom: 16,
  },
  modalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    gap: 8,
  },
  modalInfoText: {
    fontSize: 14,
    color: '#7C7C7C',
  },
});
