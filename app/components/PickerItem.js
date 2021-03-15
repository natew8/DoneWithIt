import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

//Components
import Icon from "./Icon";
import AppText from "./AppText";

function PickerItem({ onPress, item }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <AppText style={styles.text}>{item.label}</AppText>
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
