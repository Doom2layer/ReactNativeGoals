import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState(''); // Yapılacaklar inputu
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoal === '') {
      return;
    }
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }
  console.log(props);
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Hedefler'
          onChangeText={goalInputHandler}
          value={enteredGoal}
          autoFocus={true}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Ekle' onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title='İptal' color='red' onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    width: '100%',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
