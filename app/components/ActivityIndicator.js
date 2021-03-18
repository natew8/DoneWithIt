import React from "react";
import LottieView from "lottie-react-native";
import AppText from "./AppText";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      autoSize
      style={{ alignSelf: "center" }}
      autoPlay
      loop
      source={require("../assets/animations/lf20_iuefe8vd.json")}
    />
  );
}
export default ActivityIndicator;
