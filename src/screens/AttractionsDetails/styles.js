import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  mainImage: {
    width: '100%',
    height: height / 2,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    width: 36,
    height: 36,
    margin: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(256,256,256,0.35)',
    margin: 16,
    paddingHorizontal: 8,
  },
  miniImage: {
    width: 40,
    height: 40,
    margin: 8,
    borderRadius: 10,
  },
});
export default styles;
