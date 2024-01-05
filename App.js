import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useState } from 'react';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goals, setGoals] = useState([]); // Yapılacaklar listesi
  const [ModalIsVisiable, setModalIsVisiable] = useState(false); // Modal açma kapama

  const startAddGoalHandler = () => {
    setModalIsVisiable(true);
  };

  function addGoalHandler(enteredGoal) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, key: Math.random().toString() },
    ]);
    setModalIsVisiable(false);
  }

  function endAddGoalHandler() {
    setModalIsVisiable(false);
  }

  function deleteGoalHandler(goalKey) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalKey);
    });
  }

  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.appContainer}>
        <Button
          color={'#5e0acc'}
          title='Yeni Hedef'
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={ModalIsVisiable}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <Text style={styles.goalTitle}>Yapılacaklar</Text>
          <FlatList
            data={goals}
            key={goals.key}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.key}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
    backgroundColor: '#5e0acc',
    borderColor: 'black',
    borderWidth: 1,
  },
  goalTitle: {
    color: 'black',
    fontSize: 24,
  },
  goalText: {
    color: 'white',
    fontSize: 24,
  },
});
