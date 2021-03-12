import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Colors from "../config/Colors";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: Colors.medium,
  },
});
export default ListItem;
