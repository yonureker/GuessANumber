import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Start a New Game!</Text>
      <View>
        <Text>Select a Number</Text>
        <TextInput />
        <View>
          <Button title=""/>
          <Button title=""/>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default StartGameScreen;