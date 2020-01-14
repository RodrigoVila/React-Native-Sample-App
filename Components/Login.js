import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { Text, Item } from "native-base";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={styles.loginForm}>
      <Item>
        <FontAwesome //Icon for Username
          style={{ color: "white" }}
          name="user-o"
          size={20}
        ></FontAwesome>

        <TextInput style={styles.textInput} placeholder="Username" />
      </Item>

      <Item>
        <MaterialIcons //Icon for Password
          style={{ color: "white" }}
          name="lock-outline"
          size={20}
        ></MaterialIcons>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <TextInput
            secureTextEntry={showPassword}
            style={styles.textInput}
            placeholder="Password"
            autoCorrect={false}
          />

          <MaterialCommunityIcons // Show/Hide Password Icon
            style={{ color: "white", alignSelf: "center" }}
            name={!showPassword ? "eye-outline" : "eye-off"}
            size={20}
            onPress={() => setShowPassword(!showPassword)}
          ></MaterialCommunityIcons>
        </View>
      </Item>

      <TouchableOpacity
        style={{ marginTop: 20 }}
        activeOpacity={1}
        onPress={() => {
          navigation.navigate("Main");
        }}
      >
        <View style={styles.loginButtonContainer}>
          <Text style={styles.loginButtonText}>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => {}}>
        <Text
          style={{
            color: "white",
            paddingTop: 20,
            fontSize: 14,
            textAlign: "center"
          }}
        >
          New around? Create account
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: "white",
    padding: 10,
    fontSize: 17
  },

  loginForm: {
    width: "60%"
  },

  loginButtonContainer: {
    padding: 9,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white"
  },

  loginButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18
  }
});

export default Login;
