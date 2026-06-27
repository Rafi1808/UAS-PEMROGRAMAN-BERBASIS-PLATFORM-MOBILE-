import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#989898" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#989898" secureTextEntry />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('Home')}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', justifyContent: 'center', padding: 30 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, color: '#333' },
  input: { backgroundColor: '#F6F6F6', padding: 15, borderRadius: 12, marginBottom: 15 },
  btn: { backgroundColor: '#C67C4E', paddingVertical: 16, borderRadius: 16, alignItems: 'center', marginTop: 15 },
  btnText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' }
});