import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text } from "native-base";

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.moviesContainer}>
        <View style={styles.movies}>
          <Image
          style={{width: 150, height: 200}}
          source={require('../assets/cinema.jpg')}
          />
          <Text style={styles.title}>Title</Text>

          {/* <Text style={styles.rating}>Rating</Text> */}
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  moviesContainer: {

  },

  movies: {

  }

});