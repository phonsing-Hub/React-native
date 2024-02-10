import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Count = ({ counterlike , onLike ,counterdisLike , ondisLike ,Reset }) => {
  return (
<View style={styles.container}>
      <View style={styles.vote}>
        <Text style={{ fontSize: 30 }}>{counterlike}</Text>
        <Text style={{ fontSize: 30}}>{counterdisLike}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onLike}>
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={ondisLike}>
          <Text style={styles.buttonText}>dislike</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.reset} onPress={Reset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
</View>
  );
};

const styles = StyleSheet.create({

container: {
    justifyContent: 'center',
    alignItems: 'center',
    },
buttonContainer:{
    flexDirection: 'row',
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 300,
    height: 80,
    borderRadius: 10,
    marginTop: 20
    },
vote:{
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    },
button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#89bee8',
    width: 100,
    height: 50,
    borderRadius: 10,
  },
reset:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#000000',
    width: 80,
    height: 30,
    borderRadius: 10,
  },
buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Count;
