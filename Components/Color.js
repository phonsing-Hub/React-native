import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Color = () => {
  const [textColor, setTextColor] = useState('black');

  const changeColor = (color) => {
    setTextColor(color);
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: textColor, fontSize: 30 }}>P.PHONSING</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => changeColor('red')}
        >
          <Text style={styles.buttonText}>Red</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => changeColor('blue')}
        >
          <Text style={styles.buttonText}>Blue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => changeColor('green')}
        >
          <Text style={styles.buttonText}>Green</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'yellow' }]}
          onPress={() => changeColor('yellow')}
        >
          <Text style={styles.buttonText}>Yellow</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'purple' }]}
          onPress={() => changeColor('purple')}
        >
          <Text style={styles.buttonText}>Purple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'orange' }]}
          onPress={() => changeColor('orange')}
        >
          <Text style={styles.buttonText}>Orange</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    marginTop: 20,
    borderRadius: 10,
    width: 300,
    padding: 20,
    height: 400
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: 200,
    height: 40
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
  },
});

export default Color;
