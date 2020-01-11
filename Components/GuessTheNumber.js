import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';

import Header from './GTN/Header'
import StartGameScreen from './GTN/StartGameScreen';
import GameScreen from './GTN/GameScreen'


export default function GuessTheNumber() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen />;

  }

  return (
    <View style={styles.container}>
      <Header title={'Guess The Number'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});