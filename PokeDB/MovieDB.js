import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import Card from './MovieDB/Card'

const Main = props => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Image
        style={{width: '100%', height: '100%'}}
        source={require('../assets/cinema.jpg')} />
        <View style={styles.rating}>
          <Text style={styles.textRating}>4 Stars</Text>
        </View>
      </Card>
    </View>
  );
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    borderWidth: 2,
    width: '40%',
    height: '30%'
  },

  rating: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    opacity: 1,
    paddingHorizontal: 5,
    borderRadius: 20
  },

  textRating: {
    fontWeight: 'bold'

  }


});