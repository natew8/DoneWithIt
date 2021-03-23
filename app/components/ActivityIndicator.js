import React from "react";
import LottieView from "lottie-react-native";
import AppText from "./AppText";
import { View, StyleSheet } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoSize
        style={{ alignSelf: "center", paddingTop: 100 }}
        autoPlay
        loop
        source={require("../assets/animations/lf20_iuefe8vd.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    zIndex: 1,
    opacity: 0.8,
  },
});
export default ActivityIndicator;
