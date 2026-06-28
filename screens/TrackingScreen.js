import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function TrackingScreen({ navigation }) {
  const [isOrdered, setIsOrdered] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState('Deliver'); 

  return (
    <View style={styles.container}>
      {!isOrdered ? (
        <ScrollView contentContainerStyle={{ padding: 20, paddingTop: 40 }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{"<"}</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Order</Text>
            <View style={{ width: 20 }} />
          </View>

          {/* Navigasi Deliver / Pick Up yang sudah diperbaiki */}
          <View style={styles.toggleContainer}>
            <TouchableOpacity 
              style={[styles.toggleBtn, deliveryMethod === 'Deliver' && styles.toggleActive]}
              onPress={() => setDeliveryMethod('Deliver')}
            >
              <Text style={deliveryMethod === 'Deliver' ? styles.toggleTextActive : styles.toggleText}>Deliver</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.toggleBtn, deliveryMethod === 'Pick Up' && styles.toggleActive]}
              onPress={() => setDeliveryMethod('Pick Up')}
            >
              <Text style={deliveryMethod === 'Pick Up' ? styles.toggleTextActive : styles.toggleText}>Pick Up</Text>
            </TouchableOpacity>
          </View>

          {/* Delivery Address - (Edit Address dan Add Note SUDAH DIHAPUS) */}
          <Text style={styles.sectionTitle}>Delivery Address</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 14, marginTop: 10 }}>Jl. Kpg Sutoyo</Text>
          <Text style={{ color: '#989898', fontSize: 12, marginTop: 4, marginBottom: 15 }}>Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai</Text>
          
          {/* Garis Pembatas */}
          <View style={{ height: 1, backgroundColor: '#EAEAEA', marginBottom: 15 }} />

          {/* Item Row */}
          <View style={styles.itemRow}>
            <Image source={require('../assets/images/mocha.png')} style={styles.itemImg} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Caffe Mocha</Text>
              <Text style={{ color: '#989898', fontSize: 12, marginTop: 2 }}>Deep Foam</Text>
            </View>
            <View style={styles.qtyContainer}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>1</Text>
            </View>
          </View>

          {/* Garis Pembatas */}
          <View style={{ height: 4, backgroundColor: '#F4F4F4', marginVertical: 20, borderRadius: 2 }} />

          {/* Payment Summary */}
         <Text style={styles.sectionTitle}>Payment Summary</Text>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.priceVal}>Rp 45.000</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Delivery Fee</Text>
            <Text style={styles.priceVal}>Rp 10.000</Text>
          </View>
          
          <View style={{ height: 1, backgroundColor: '#EAEAEA', marginVertical: 15 }} />
          
          <View style={styles.priceRow}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Total Payment</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#C67C4E' }}>Rp 55.000</Text>
          </View>

          <TouchableOpacity style={styles.mainBtn} onPress={() => setIsOrdered(true)}>
            <Text style={styles.mainBtnText}>Order</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <View style={{ flex: 1 }}>
          <View style={styles.mapPlaceholder}>
            <Text style={{ color: '#989898', fontSize: 16 }}>[ Peta Jalur Pengiriman Kopi ]</Text>
            <TouchableOpacity style={styles.backFloat} onPress={() => setIsOrdered(false)}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{"<"}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.driverCard}>
            <Text style={styles.timeTitle}>10 minutes left</Text>
            <Text style={{ color: '#989898', fontSize: 12, textAlign: 'center', marginBottom: 15 }}>Delivery to Jl. Kpg Sutoyo</Text>
            
            <View style={styles.progressBg}><View style={styles.progressActive} /></View>

            <View style={styles.driverProfile}>
              <Image source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' }} style={styles.driverAvatar} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Brooklyn Simmons</Text>
                <Text style={{ color: '#989898', fontSize: 12 }}>Personal Courier</Text>
              </View>
              <TouchableOpacity style={styles.callBtn}><Text>📞</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#2F2F2F' },
  
  toggleContainer: { flexDirection: 'row', backgroundColor: '#F3F3F3', borderRadius: 14, padding: 4, marginBottom: 25 },
  toggleBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
  toggleActive: { backgroundColor: '#C67C4E' },
  toggleText: { color: '#2F2F2F', fontSize: 14, fontWeight: '500' },
  toggleTextActive: { color: '#FFF', fontSize: 14, fontWeight: 'bold' },
  
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#2F2F2F' },
  itemRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  itemImg: { width: 54, height: 54, borderRadius: 12 },
  qtyContainer: { flexDirection: 'row', alignItems: 'center' },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 },
  priceLabel: { color: '#2F2F2F', fontSize: 14 },
  priceVal: { fontWeight: 'bold', fontSize: 14, color: '#2F2F2F' },
  mainBtn: { backgroundColor: '#C67C4E', paddingVertical: 18, borderRadius: 16, alignItems: 'center', marginTop: 30 },
  mainBtnText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  mapPlaceholder: { flex: 1, backgroundColor: '#E5E5E5', justifyContent: 'center', alignItems: 'center' },
  backFloat: { position: 'absolute', top: 40, left: 20, backgroundColor: '#FFF', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 12, elevation: 3 },
  driverCard: { backgroundColor: '#FFF', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24, elevation: 8 },
  timeTitle: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#2F2F2F' },
  progressBg: { height: 4, backgroundColor: '#EAEAEA', borderRadius: 2, overflow: 'hidden', marginVertical: 15 },
  progressActive: { height: '100%', backgroundColor: '#34A853', width: '70%' },
  driverProfile: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  driverAvatar: { width: 50, height: 50, borderRadius: 25 },
  callBtn: { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#EAEAEA', padding: 12, borderRadius: 12 }
});
