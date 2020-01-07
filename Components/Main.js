import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from "native-base";

export default class Main extends Component {
  constructor() {
    super();
  }
render() {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>

        <TouchableOpacity 
          style={[styles.button, styles.toDoButton]}
          activeOpacity = {1}
          onPress={() => {this.props.navigation.navigate('ToDo')}}>
          <View>
            <Text style={styles.buttonText}>To Do List</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.moviesButton]}
          activeOpacity = {1}
          onPress={() => {this.props.navigation.navigate('MovieDB')}}>
          <View>
            <Text style={styles.buttonText}>Movie DB</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.toseeButton]}
          activeOpacity = {1}
          onPress={() => {this.props.navigation.navigate('ToSee')}}>
          <View>
            <Text style={styles.buttonText}>????</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

  },

  buttons: {
    width: '50%',
  },

  button: {
    borderWidth: 2,
    borderRadius: 50,
    margin: 10,
    paddingVertical: 10,
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: "bold"
  },

  toDoButton: {
    backgroundColor: 'blue'
  },

  moviesButton: {
    backgroundColor: 'red'
  },

  toseeButton: {
    backgroundColor: 'green'
  }
});