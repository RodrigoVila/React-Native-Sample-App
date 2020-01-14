import React, { useState } from "react";
import { View, ImageBackground, Image, StyleSheet } from "react-native";

import Login from "./Login";
import CreateAccount from "./CreateAccount";

const LoginForm = props => {
  const [createAccount, setCreateAccount] = useState(false);

  function handleChange () {
    setCreateAccount(true)
  }

  // TODO: Show Login or CreateAccount components when "Create account" or "Back to Login" buttons are clicked
  if (!createAccount) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/space.jpg")}
          style={styles.backGround}
        >
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Login onChange={() => {handleChange}} />
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/space.jpg")}
          style={styles.backGround}
        >
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <CreateAccount />
        </ImageBackground>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain"
  },

  backGround: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});

export default LoginForm;
