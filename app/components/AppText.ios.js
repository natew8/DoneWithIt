import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children, style, numberOfLines }) {
  return (
    <Text numberOfLines={numberOfLines} style={([styles.text], style)}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "System",
  },
});
export default AppText;
