import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";
import Colors from "../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={Colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    borderRadius: 20,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    color: Colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "System",
  },
  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
