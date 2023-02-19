import { Text, View, StyleSheet } from 'react-native';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>

        Expiry List

      </Text>
      <Text style={styles.paragraph}>

        The best app for saving food!

      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: -50,
    BackgroundColor: 'white',
    color: '#849abd',
  },
  title: {
    margin: 10,
    fontSize: 30,
    color: '#929982',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 40,
  },
  paragraph: {
    margin: 20,
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#929982',
  },
});

