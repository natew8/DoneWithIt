import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Colors from "../config/Colors";
import AppText from "./AppText";

function Card({ title, subTitle, imageUrl, thumbnailUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          preview={{ uri: thumbnailUrl }}
          tint="light"
          uri={imageUrl}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 10,
  },
  subTitle: {
    fontWeight: "700",
    color: Colors.secondary,
  },
});
export default Card;
