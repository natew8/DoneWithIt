import React from "react";
import { View, StyleSheet, Modal, Text } from "react-native";
import * as Progress from "react-native-progress"; // npm i react-native-progress
import LottieView from "lottie-react-native";
//Components
import Colors from "../config/Colors";

function UploadScreen({ progress = 0, visible = false, onDone }) {
  console.log(progress, visible);
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={Colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            onAnimationFinish={onDone}
            autoPlay
            loop={false}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", flex: 1 },
  animation: {
    width: 150,
  },
});
export default UploadScreen;
