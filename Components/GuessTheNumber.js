import React from "react";
import { StyleSheet, View } from 'react-native';
import Header from './GTN/Header'
import StartGameScreen from './GTN/StartGameScreen';


export default function GuessTheNumber() {
  return (
    <View style={styles.container}>
      <Header title={'Guess The Number'} />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});