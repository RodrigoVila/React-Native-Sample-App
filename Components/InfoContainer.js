import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  function changeColor () {
    let hex = 'abcdef123456';
    let emptyStr = '';

    while (emptyStr.length < 6) {
      emptyStr += hex[Math.floor(Math.random() * hex.length)];
    }
  
    let newStr = '#' + emptyStr.toUpperCase();
    styles.container.backgroundColor = newStr;

    }
    return (
      <View style={styles.container}>
        <Button
          title="Press Me!"
          onPress={changeColor}
        ></Button>
      </View>
    );
  }

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a6ee2c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

////////////////////////



import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function DataBase() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});