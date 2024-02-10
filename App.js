import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Count from './Components/Count';
import Color from './Components/Color';
const App = () => {
  const [counterLike, setCounterLike] = useState(0);
  const [counterdisLike, setCounterdisLike] = useState(0);

  const Like = () => {
    setCounterLike(counterLike + 1);
  };

  const disLike = () => {
    setCounterdisLike(counterdisLike + 1);
  };

  const Reset = ()=>{
    setCounterLike(0);
    setCounterdisLike(0);
  }
  
  return (
    <View style={styles.body}>
      {/* <Color/> */}
      {/* <Count counterlike={counterLike}  onLike={Like} counterdisLike={counterdisLike} ondisLike={disLike} Reset={Reset}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fefefe',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
