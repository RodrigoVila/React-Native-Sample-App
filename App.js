import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './Components/Main';
import LoginForm from './Components/LoginForm';
import ToDo from './Components/ToDo';
import MovieDB from './Components/MovieDB';
import ToSee from './Components/ToSee';

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
      title: 'Back to Login'
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

  ToSee: {
    screen: ToSee,
    navigationOptions: {
      title: 'Back to Main'
    }
  }
});


export default createAppContainer(Apps)