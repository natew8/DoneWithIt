import { StyleSheet, Platform } from "react-native";
import Colors from "../../config/Colors";

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
    ...Platform.select({
      ios: { fontSize: 20, fontFamily: "Avenir" },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default styles;
