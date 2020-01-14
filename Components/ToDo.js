import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList, Text } from "react-native";

import GoalItem from "./ToDo/GoalItem";
import GoalInput from "./ToDo/GoalInput";
import Header from "./Header";
import Colors from './constants/Colors'

export default function ToDo() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Header title="To Do List" style={styles.header} />
      <View style={styles.container}>
        <Text style={{fontSize: 16, textAlign: 'center'}}>Long press on each ToDo to remove from the list</Text>
        <View style={styles.button}>
          <Button title="Add New To Do" color={Colors.secondary} onPress={() => setIsAddMode(true)} />
        </View>
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoalAdditionHandler}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },

  header: {
    backgroundColor: Colors.secondary,
  },

  container: {
    marginHorizontal: 50,
    marginVertical: 20,
  },

  button: {
    marginVertical: 10
  }
});
