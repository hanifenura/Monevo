import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [image, setImage] = useState<string | null>(null);
  const cameraRef = useRef<any>(null);

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

  // 📸 Fotoğraf çekme
  async function takePhoto() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setImage(photo.uri);
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
      setImage(result.assets[0].uri);
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
});
