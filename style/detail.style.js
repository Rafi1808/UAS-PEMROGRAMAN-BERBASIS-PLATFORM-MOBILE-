import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF', 
    paddingHorizontal: 20, 
    paddingTop: 40 
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 20 
  },
  headerTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#2F2F2F' 
  },
  mainImage: { 
    width: '100%', 
    height: 200, 
    borderRadius: 16, 
    marginBottom: 15 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#2F2F2F' 
  },
  type: { 
    fontSize: 12, 
    color: '#989898', 
    marginTop: 4 
  },
  rating: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    marginTop: 8 
  },
  sectionTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#2F2F2F', 
    marginBottom: 8 
  },
  description: { 
    color: '#989898', 
    fontSize: 14, 
    lineHeight: 22 
  },
  sizeRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 10 
  },
  sizeBox: { 
    flex: 1, 
    paddingVertical: 10, 
    borderWidth: 1, 
    borderColor: '#EAEAEA', 
    borderRadius: 12, 
    alignItems: 'center', 
    marginHorizontal: 8,
    backgroundColor: '#FFF' 
  },
  sizeBoxActive: { 
    borderColor: '#C67C4E', 
    backgroundColor: '#FFF5EE' // Warna krem pucat sesuai referensi gambar
  },
  sizeText: { 
    fontSize: 14, 
    color: '#2F2F2F' 
  },
  sizeTextActive: { 
    color: '#C67C4E', 
    fontWeight: 'bold' 
  },
  bottomBar: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    padding: 20, 
    borderTopWidth: 1, 
    borderColor: '#F0F0F0', 
    backgroundColor: '#FFF' 
  },
  finalPrice: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#C67C4E' 
  },
  buyButton: { 
    backgroundColor: '#C67C4E', 
    paddingVertical: 16, 
    paddingHorizontal: 50, 
    borderRadius: 16 
  },
  buyButtonText: { 
    color: '#FFF', 
    fontSize: 16, 
    fontWeight: 'bold' 
  }
});