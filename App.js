import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import LoginForm from './Components/LoginForm'
import ToDo from './Components/ToDo'

const Apps = createStackNavigator({ 
  Login: {
    screen: LoginForm,
    navigationOptions: {
      headerShown: false
    }
  },
  ToDo: {
    screen: ToDo,
    navigationOptions: {
      title: 'Back to Login',
    },
    headerStyle: {
      backgroundColor: '#f4511e',
  }
}
});

export default createAppContainer(Apps)