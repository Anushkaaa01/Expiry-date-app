import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function List(props) {
  const [date, setDate] = useState('');
  const [foodItem, setFoodItem] = useState('');
  
  const handleDateChange = (text) => {
    setDate(text);
  }

  const handleFoodItemChange = (text) => {
    setFoodItem(text);
  }

  const handleAdd = () => {
    console.log(`Added food item: ${foodItem}, Expiry date: ${date}`);
    // You can add your logic here to process the user input
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Add an item manually:
      </Text>
      <View style={styles.viewBox}>
        <TextInput
          style={styles.input}
          placeholder="Enter food item"
          placeholderTextColor="#000000"
          onChangeText={handleFoodItemChange}
          value={foodItem}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter expiry date"
          placeholderTextColor="#000000"
          onChangeText={handleDateChange}
          value={date}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAdd}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    margin: 10,
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
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#667161',
    padding: 10,
    borderRadius: 18,
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  }
})



