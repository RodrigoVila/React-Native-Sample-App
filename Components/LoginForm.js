import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { Text, Item} from "native-base";
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default class App extends Component {
  constructor() {
    super();
    this.state = {hidePassword: true}
  }

  setPasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword})

  }

  render () {
    return (
      <View style={ styles.container }>
        <ImageBackground source={require('../assets/space.jpg')} style= { styles.backGround }>

          <Image style={styles.logo} source={require('../assets/logo.png')}/>

          <View style={styles.loginForm}>
            <Item>
              <FontAwesome //Icon for Username
                style={{color:'white'}} 
                name="user-o" 
                size={20}>
              </FontAwesome>

              <TextInput 
                style={styles.textInput} 
                placeholder='Nombre de usuario' />
            </Item>

            <Item>
              <MaterialIcons //Icon for Password 
                style={{color:'white'}} 
                name="lock-outline" 
                size={20}>
              </MaterialIcons>

              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextInput 
                  secureTextEntry={this.state.hidePassword} 
                  style={styles.textInput} 
                  placeholder='Contraseña' />

                <MaterialCommunityIcons // Show/Hide Password Icon
                  style={{color:'white', alignSelf: 'center'}} 
                  name={(this.state.hidePassword) ? 'eye-outline' : 'eye-off'} 
                  size={20}
                  onPress={this.setPasswordVisibility}>
                </MaterialCommunityIcons>
              </View>
            </Item>


            <TouchableOpacity 
              style={{marginTop: 20}}
              activeOpacity = {1}
              onPress={() => {this.props.navigation.navigate('dataBase')}}>

              <View style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Login</Text>
              </View>
            </TouchableOpacity>
            <Text style={{color: 'white', paddingTop: 20, fontSize: 14, textAlign: 'center'}}>Nuevo usuario? Crear cuenta</Text>
          </View>

        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain'
  },

  backGround: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  textInput: {
    color: 'white',
    padding: 10,
    fontSize: 17
  },

  loginForm: {
    width: '60%',
  },

  loginButtonContainer: {
    padding: 9,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white'
  },

  loginButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18

  }



})
