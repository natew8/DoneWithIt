import React from "react";
import AppText from "./AppText";
import { StyleSheet } from "react-native";

function ErrorMessage({ error }) {
  return <>{error ? <AppText style={styles.error}>{error}</AppText> : null}</>;
}
const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
export default ErrorMessage;
