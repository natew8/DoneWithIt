import { Platform } from "react-native";
import Colors from "./Colors";

export default {
  Colors,
  text: {
    width: "100%",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "System",
  },
};
