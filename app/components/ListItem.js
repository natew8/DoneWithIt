import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import Icon from "./Icon";
import Colors from "../config/Colors";
import AppText from "../components/AppText";

function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
  showChevrons,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={Colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.textContainer}>
            <AppText numberOfLines={1} style={styles.title}>
              {title}
            </AppText>
            {subTitle && (
              <AppText numberOfLines={2} style={styles.subTitle}>
                {subTitle}
              </AppText>
            )}
          </View>
          {showChevrons && (
            <Icon
              name="chevron-right"
              size={45}
              iconColor={Colors.medium}
              backgroundColor={"transparent"}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: Colors.medium,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
});
export default ListItem;
