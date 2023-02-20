import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';

import List from './components/List';
import MainScreen from './components/MainScreen';
import Scanner from './components/Scanner';
import EnterManually from './components/enterManually';
import Recipe from './components/Recipes';

function MainView({ navigation }) {
  return (
    <View style={styles.box}>
      <ImageBackground source={require('./assets/food2.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <MainScreen />
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#929982"
            onPress={() => navigation.navigate('Scanner')}
            style={styles.buttonMain}>
            <Text style={styles.txtButton}>Scan</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#929982"
            onPress={() => navigation.navigate('List')}
            style={styles.buttonMain}>
            <Text style={styles.txtButton}>List</Text>
          </TouchableHighlight>
            <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#929982"
            onPress={() => navigation.navigate('Recipe')}
            style={styles.buttonMain}>
            <Text style={styles.txtButton}>Recipes</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}

function ListView({ navigation }) {
  return (
    <View style={styles.box}>
      <ImageBackground source={require('./assets/food3.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <List />
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#929982"
            onPress={() => navigation.navigate('Main')}
            style={styles.buttonWrap}>
            <Text style={styles.txtBack}>Back</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#929982"
            onPress={() => navigation.navigate('EnterManually')}
            style={styles.button}>
            <Text style={styles.buttonText}>Enter Manually</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}

function EnterManuallyView({ navigation }) {
  return (
    <View style={styles.box}>
      <ImageBackground source={require('./assets/food3.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <EnterManually />
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#929982"
            onPress={() => navigation.navigate('Main')}
            style={styles.buttonWrap}>
            <Text style={styles.txtBack}>Back</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}


function ScanView({ navigation }) {
  return (
    <View style={styles.box}>
      <ImageBackground source={require('./assets/food3.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Scanner />
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#929982"
            onPress={() => navigation.navigate('Main')}
            style={styles.buttonWrap}>
            <Text style={styles.txtBack}>Cancel</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}

function RecipeView({ navigation }) {
  return (
    <View style={styles.box}>
      <ImageBackground source={require('./assets/food3.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Recipe/>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#929982"
            onPress={() => navigation.navigate('Main')}
            style={styles.buttonWrap}>
            <Text style={styles.txtBack}>Back</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: null }}>
        <Stack.Screen name="Main" component={MainView} />
        <Stack.Screen name="List" component={ListView} />
        <Stack.Screen name="Scanner" component={ScanView} />
        <Stack.Screen name="EnterManually" component={EnterManuallyView} />
        <Stack.Screen name="Recipe" component={RecipeView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  box: {
    flex: 1,
    backgroundColor: '#667161',
    padding: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: Constants.statusBarHeight,
    borderRadius: 18,
  },
  buttonMain: {
    alignItems: 'center',
    height: 70,
    width: 162,
    margin: 10,
    padding:7,
    borderRadius: 18,
    backgroundColor: '#929982',
    borderWidth: 3,
    borderColor: '#667161',
  },

  txtButton: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#252525',
  },
  buttonWrap: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10,
    borderRadius: 18,
    backgroundColor: '#929982',
    borderWidth: 3,
    borderColor: '#667161',
  },
  txtBack: {
    textAlign: 'center',
    marginTop: 0,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#252525',
  },
  button: {
    position: 'absolute',
    bottom: 60,
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#929982',
    borderWidth: 3,
    borderColor: '#667161',
  },
  buttonText: {
   textAlign: 'center',
    marginTop: 0,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#252525',
  },
});

