import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "./BodyText";
import TitleText from "./TitleText";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("./assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.roundTextContainer}>
        <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
        <BodyText>Number was: {props.userNumber}</BodyText>
      </View>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  roundTextContainer: {
    marginBottom: 30,
    alignItems: 'center',
  }
});

export default GameOverScreen;
