import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FDFDFD' 
  },
  darkSection: { 
    backgroundColor: '#131313', 
    paddingHorizontal: 20, 
    paddingTop: 50, 
    paddingBottom: 60 
  },
  headerText: { 
    color: '#B7B7B7', 
    fontSize: 12 
  },
  locationText: { 
    color: '#D8D8D8', 
    fontSize: 14, 
    fontWeight: 'bold', 
    marginTop: 4 
  },
  searchBox: { 
    backgroundColor: '#313131', 
    borderRadius: 16, 
    padding: 16, 
    color: '#FFF', 
    marginTop: 20 
  },
  promoBanner: { 
    backgroundColor: '#C67C4E', 
    borderRadius: 16, 
    padding: 20, 
    marginHorizontal: 20, 
    marginTop: -40, 
    marginBottom: 20 
  },
  promoBadge: { 
    backgroundColor: '#ED5151', 
    color: '#FFF', 
    paddingHorizontal: 6, 
    paddingVertical: 2, 
    borderRadius: 4, 
    alignSelf: 'flex-start', 
    fontSize: 12, 
    fontWeight: 'bold', 
    marginBottom: 8 
  },
  promoText: { 
    color: '#FFF', 
    fontSize: 26, 
    fontWeight: 'bold' 
  },
  promoTextSub: { 
    color: '#FFF', 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginTop: -4 
  },
  catTab: { 
    paddingHorizontal: 16, 
    paddingVertical: 10, 
    borderRadius: 12, 
    backgroundColor: '#F3F3F3', 
    marginRight: 12, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  catTabActive: { 
    backgroundColor: '#C67C4E' 
  },
  catText: { 
    color: '#2F2F2F', 
    fontSize: 14, 
    fontWeight: '500' 
  },
  catTextActive: { 
    color: '#FFF', 
    fontWeight: 'bold' 
  },
  itemCard: { 
    backgroundColor: '#FFF', 
    borderRadius: 16, 
    padding: 10, 
    width: '48%', 
    marginBottom: 15, 
    borderWidth: 1, 
    borderColor: '#F0F0F0' 
  },
  itemImage: { 
    width: '100%', 
    height: 125, 
    borderRadius: 12 
  },
  ratingTag: { 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    borderTopLeftRadius: 12, 
    borderBottomRightRadius: 12, 
    paddingHorizontal: 8, 
    paddingVertical: 4 
  },
  ratingText: { 
    color: '#FFF', 
    fontSize: 10, 
    fontWeight: 'bold' 
  },
  itemTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginTop: 10, 
    color: '#2F2F2F' 
  },
  itemSubtitle: { 
    fontSize: 12, 
    color: '#989898', 
    marginTop: 2 
  },
  cardFooter: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 8 
  },
  itemPrice: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#2F4B4E' 
  },
  plusBtn: { 
    backgroundColor: '#C67C4E', 
    width: 32, 
    height: 32, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
});