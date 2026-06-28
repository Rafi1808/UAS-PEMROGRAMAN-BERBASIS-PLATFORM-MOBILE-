import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from '../style/home.style';

const categories = ['All Coffee', 'Machiato', 'Latte', 'Americano'];

export default function HomeScreen({ navigation }) {
  const [activeCat, setActiveCat] = useState('All Coffee');
  
  const coffeeData = [
    { id: '1', name: 'Caffe Mocha', type: 'Deep Foam', price: 'Rp 45.000', rating: '4.8', image: require('../assets/images/mocha.png') },
    { id: '2', name: 'Flat White', type: 'Espresso', price: 'Rp 35.000', rating: '4.8', image: require('../assets/images/flatwhite.png') },
    { id: '3', name: 'Latte Art', type: 'Creamy milk', price: 'Rp 40.000', rating: '4.7', image: require('../assets/images/latte.png') },
    { id: '4', name: 'Americano Ice', type: 'Black Coffee', price: 'Rp 30.000', rating: '4.9', image: require('../assets/images/americano.png') },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemCard} onPress={() => navigation.navigate('Detail', { coffee: item })}>
      <View>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.ratingTag}>
          <Text style={styles.ratingText}>⭐ {item.rating}</Text>
        </View>
      </View>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemSubtitle}>{item.type}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <View style={styles.plusBtn}><Text style={{color:'#FFF', fontWeight:'bold'}}>+</Text></View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.darkSection}>
        <Text style={styles.headerText}>Location</Text>
        <Text style={styles.locationText}>Bilzen, Tanjungbalai ∨</Text>
        <TextInput style={styles.searchBox} placeholder="Search coffee" placeholderTextColor="#989898" />
      </View>

      {/* Promo Banner */}
      <View style={styles.promoBanner}>
        <Text style={styles.promoBadge}>Promo</Text>
        <Text style={styles.promoText}>Buy one get</Text>
        <Text style={styles.promoTextSub}>one FREE</Text>
      </View>

      {/* Category Tabs */}
      <View style={{ height: 38, marginBottom: 15 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
          {categories.map((cat) => (
            <TouchableOpacity 
              key={cat} 
              style={[styles.catTab, activeCat === cat && styles.catTabActive]} 
              onPress={() => setActiveCat(cat)}
            >
              <Text style={[styles.catText, activeCat === cat && styles.catTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Coffee Grid */}
      <FlatList
        data={coffeeData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
}
