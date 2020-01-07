import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BlurView } from 'expo-blur';
import Main from './Components/Main';
import LoginForm from './Components/LoginForm';
import ToDo from './Components/ToDo';
import MovieDB from './Components/MovieDB';
import GuessTheNumber from './Components/GuessTheNumber';

const Apps = createStackNavigator({ 
  Login: {
    screen: LoginForm,
    navigationOptions: {
      headerShown: false
    }
  },

  Main: {
    screen: Main,
    navigationOptions: {
      title: 'Back to Login',
      headerTransparent: 'true',

    }
  },

  ToDo: {
    screen: ToDo,
    navigationOptions: {
      title: 'Back to Main',
    },
    headerStyle: {
      backgroundColor: '#f4511e',
    }
  },

  MovieDB: {
    screen: MovieDB,
    navigationOptions: {
      title: 'Back to Main'
    }
  },

  GTN: {
    screen: GuessTheNumber,
    navigationOptions: {
      title: 'Back to Main'
    }
  }
});


export default createAppContainer(Apps)