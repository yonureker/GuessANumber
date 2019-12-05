import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Card from "../Card";
import Colors from "../../constants/colors";
import Input from "../Input";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g), '');
  }

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  }

  const confirmInputHandler = () => {
      const chosenNumber = parseInt(enteredValue);
      if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
        Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.')
        return;
      }
    setConfirmed(true);
    setSelectedNumber(chosenNumber)
    setEnteredValue('');
  }

  const confirmedOutputText = () => {
    if (confirmed) {
      return (
        <Text>Chosen Number: {selectedNumber}</Text>
      )
    }
  }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          keyboardType="number-pad"
          maxLenght={2}
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
          </View>
        </View>
      </Card>
      {confirmedOutputText()}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
    // justifyContent: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    padding: 15
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  button: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: "center"
  }
});

export default StartGameScreen;
