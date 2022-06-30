import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width / 2.4,
    margin: 3,
    borderRadius: 10,
  },
  card: {
    backgroundColor: '',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: '#3e4a5b',
    width: width / 2.4,
    borderRadius: 10,
    alignItems: 'center',
  },
  item_text: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    marginTop: 10
  },
  image: {
    width: 100,
    height: 100
  }
});

export default styles;
