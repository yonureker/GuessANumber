import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
  return <View>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    //shadow for Android
    elevation: 5
  }
});

export default Card;
