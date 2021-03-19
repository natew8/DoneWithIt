import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
//Components
import Colors from "../config/Colors";
import AppText from "./AppText";

function OfflineNotification({ visible }) {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  return null;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: 50,
    top: Constants.statusBarHeight,
    width: "100%",
    position: "absolute",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: Colors.white,
  },
});
export default OfflineNotification;
