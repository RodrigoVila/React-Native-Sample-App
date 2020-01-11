import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";


const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");

  //If input is NOT a number (dot or commas), replace with empty value.
  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const deleteInputHandler = () => {
    setEnteredValue("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <View style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <TextInput
            style={styles.textInput}
            keyboardType={"number-pad"}
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title={"Reset"} onPress={deleteInputHandler} />
            </View>
            <View style={styles.button}>
              <Button
                title={"Confirm"}
                onPress={confirmInputHandler}
                color="#4BB543"
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },

  title: {
    fontSize: 20,
    marginVertical: 10
  },

  inputContainer: {
    width: 300,
    minWidth: "80%",
    alignItems: "center",
    // Shadow Properties only works on IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // Elevation works in the same way as Shadow Properties but it hass less control.
    elevation: 8,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10
  },

  textInput: {
    width: "25%",
    textAlign: "center",
    fontSize: 25,
    borderWidth: 1,
    borderBottomColor: "grey",
    marginVertical: 15
  },

  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    paddingHorizontal: 15
  },

  button: {
    width: "40%"
  }
});

export default StartGameScreen;
