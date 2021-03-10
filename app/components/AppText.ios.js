import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 40,
    fontFamily: "Avenir",
  },
});
export default AppText;
