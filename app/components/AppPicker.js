import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import Colors from "../config/Colors";

function AppPicker({
  icon,
  items,
  placeholder,
  PickerItemComponent = PickerItem,
  onSelectItem,
  selectedItem,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.Colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholderText}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.Colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen style={styles.list}>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            style={styles.list}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
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
  text: {
    flex: 1,
    fontSize: 18,
  },
  placeholderText: {
    fontSize: 18,
    flex: 1,
    color: defaultStyles.Colors.medium,
  },
  list: {
    flexWrap: "wrap",
    flexDirection: "column",
  },
});
export default AppPicker;
