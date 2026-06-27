import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    opacity: 0.7,
  },
  contentContainer: {
    padding: 30,
    alignItems: 'center',
    paddingBottom: 50,
  },
  title: {
    color: '#FFF',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 45,
    marginBottom: 10,
  },
  subtitle: {
    color: '#A9A9A9',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#C67C4E',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});