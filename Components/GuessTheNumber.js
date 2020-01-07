import React from "react";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from "native-base";

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity 
          style={styles.button, styles.todoButton}
          activeOpacity = {1}
          onPress={() => {this.props.navigation.navigate('ToDo')}}>
          <View style={styles.loginButtonContainer}>
            <Text style={styles.loginButtonText}>Login</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  buttons: {

  },
  button: {

  },

  todoButton: {

  },

  moviesButton: {

  },

  toseeButton: {

  }
});