import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import Card from "./GTN/Card";
import Colors from "./constants/Colors";

export default class Main extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.cardContainer}>
          <Text style={styles.cardTitle}>To Do List</Text>
          <Text style={styles.cardText}>
            Do you want to get things done? Just write them down in this simple to do app. 
          </Text>
          <View style={styles.button}>
            <Button
              title="TO DO LIST"
              style={styles.button}
              color={Colors.secondary}
              onPress={() => {
                this.props.navigation.navigate("ToDo");
              }}
            />
          </View>
        </Card>

        <Card style={styles.cardContainer}>
          <Text style={styles.cardTitle}>Guess The Number</Text>
          <Text style={styles.cardText}>
            Computer has to guess a number of your choice from 1 to 99, but
            don't cheat when giving hints!
          </Text>
          <View style={styles.button}>
            <Button
              title="GUESS THE NUMBER GAME"
              color={Colors.primary}
              onPress={() => {
                this.props.navigation.navigate("GuessTheNumber");
              }}
            />
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  cardContainer: {
    width: "80%",
    height: 200,
    marginVertical: 40
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10
  },

  cardText: {
    paddingVertical: 10
  },

  button: {
    marginVertical: 10,
    width: "90%",
    alignSelf: "center"
  }
});
