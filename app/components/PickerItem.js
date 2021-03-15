import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

//Components
import Icon from "./Icon";
import AppText from "./AppText";

function PickerItem({
  label,
  onPress,
  name,
  size,
  iconColor,
  backgroundColor,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <AppText style={styles.text}>{label}</AppText>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
export default PickerItem;
