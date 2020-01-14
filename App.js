import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './Components/Main';
import LoginForm from './Components/LoginForm';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import ToDo from './Components/ToDo';
import GuessTheNumber from './Components/GuessTheNumber';


const Apps = createStackNavigator({ 
  LoginForm: {
    screen: LoginForm,
    navigationOptions: {
      headerShown: false
    }
  },

  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false
    }
  },

  CreateAccount: {
    screen: CreateAccount,
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
      headerShown: false
    }
  },

  GuessTheNumber: {
    screen: GuessTheNumber,
    navigationOptions: {
      headerShown: false
    }
  }
});


export default createAppContainer(Apps)