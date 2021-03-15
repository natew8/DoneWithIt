import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, style, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.Colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.Colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.Colors.light,
    borderRadius: 20,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
