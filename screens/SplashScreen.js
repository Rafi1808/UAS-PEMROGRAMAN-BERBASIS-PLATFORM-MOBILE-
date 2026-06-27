import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/splash-icon.png')} 
        style={styles.bgImage} 
        resizeMode="cover"
      />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>Fall in Love with Coffee in Blissful Delight!</Text>
        <Text style={styles.subtitle}>Welcome to our cozy coffee corner, where every cup is a delightful for you.</Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('Login')}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  bgImage: { ...StyleSheet.absoluteFillObject, width: '100%', height: '70%' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.45)' },
  content: { flex: 1, justifyContent: 'flex-end', padding: 30, paddingBottom: 50 },
  title: { color: '#FFF', fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 12, lineHeight: 42 },
  subtitle: { color: '#A9A9A9', fontSize: 14, textAlign: 'center', marginBottom: 30 },
  btn: { backgroundColor: '#C67C4E', paddingVertical: 18, borderRadius: 16, alignItems: 'center' },
  btnText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});