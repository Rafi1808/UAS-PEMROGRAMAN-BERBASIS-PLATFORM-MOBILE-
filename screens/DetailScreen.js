import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../style/detail.style';

export default function DetailScreen({ route, navigation }) {
  const { coffee } = route.params || { coffee: { name: 'Caffe Mocha', type: 'Deep Foam', price: 'Rp 45.000', image: require('../assets/images/mocha.png') } };
  const [size, setSize] = useState('M');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={{ fontSize: 22 }}>←</Text></TouchableOpacity>
        <Text style={styles.headerTitle}>Detail</Text>
        <TouchableOpacity><Text style={{ fontSize: 22 }}>♡</Text></TouchableOpacity>
      </View>

      <Image source={coffee.image} style={styles.mainImage} />
      <Text style={styles.title}>{coffee.name}</Text>
      <Text style={styles.type}>{coffee.type}</Text>
      <Text style={styles.rating}>⭐ 4.8 <Text style={{color: '#989898'}}>(230)</Text></Text>
      
      <View style={{height: 1, backgroundColor: '#EAEAEA', marginVertical: 15}} />

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>
        A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo... <Text style={{ color: '#C67C4E', fontWeight: 'bold' }}>Read More</Text>
      </Text>

      <Text style={[styles.sectionTitle, {marginTop: 20}]}>Size</Text>
      <View style={styles.sizeRow}>
        {['S', 'M', 'L'].map((s) => (
          <TouchableOpacity 
            key={s} 
            style={[styles.sizeBox, size === s && styles.sizeBoxActive]} 
            onPress={() => setSize(s)}
          >
            <Text style={[styles.sizeText, size === s && styles.sizeTextActive]}>{s}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.bottomBar}>
        <View>
          <Text style={{ color: '#989898', fontSize: 12 }}>Price</Text>
          <Text style={styles.finalPrice}>{coffee.price}</Text>
        </View>
        <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('Tracking')}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
