import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Text } from "native-base";
import { Video } from 'expo-av';

export default class Main extends Component {
  constructor() {
    super();
  }
render() {
  return (
    <View style={styles.container}>
    <Video
  source={require('../assets/snowy.mp4')}
  rate={1.0}
  volume={1.0}
  isMuted={true}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={styles.video}
/>
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
              <Text style={styles.buttonText}>Nothing yet :)</Text>
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

  video: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1,
  },

  buttons: {
    width: '50%',
    zIndex: 2
  },

  button: {
    borderWidth: 2,
    borderRadius: 50,
    margin: 10,
    paddingVertical: 10,
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: "bold",
    color: 'white'
  },

  toDoButton: {
    borderColor: 'red'
  },

  moviesButton: {
    borderColor: 'orange'
  },

  toseeButton: {
    borderColor: 'purple'
  }
});