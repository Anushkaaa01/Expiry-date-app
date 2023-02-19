import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default function List() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        LIST:
      </Text>
      <View style={styles.listBox}>
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    margin: 10,
    fontSize: 40,
    color: '#929982',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  listBox: {
    alignItems: 'center',
    position: 'absolute',
    top: 90,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 10,
    marginBottom:100,
    borderRadius: 18,
    backgroundColor: '#929982',
    borderWidth: 3,
    borderColor: '#667161',
  },
  
});