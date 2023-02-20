import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Recipe() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Recipes:
      </Text>
         <View style={styles.viewBox}>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    margin: 30,
    fontSize: 30,
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
   viewBox: {
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
})

