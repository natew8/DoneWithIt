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
      <View style={styles.itemContainer}>
        <Icon
          name={name}
          size={size}
          iconColor={iconColor}
          backgroundColor={backgroundColor}
        />
        <AppText style={styles.text}>{label}</AppText>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
  },
  text: {
    padding: 20,
  },
});
export default PickerItem;
