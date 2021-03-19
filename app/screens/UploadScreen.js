import React from "react";
import { View, StyleSheet, Modal, Text } from "react-native";
import AppText from "../components/AppText";

function UploadScreen({ progress = 0, visible = false }) {
  console.log(progress, visible);
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Text>{progress * 100}%</Text>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", flex: 1 },
});
export default UploadScreen;
