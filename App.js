import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import React, { useState } from "react";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
// import { View } from "react-native";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";

// import { MaterialCommunityIcons } from "@expo/vector-icons";

// import AppText from "./app/components/AppText/AppText";
// import Card from "./app/components/Card";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListItem from "./app/components/ListItem";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { Switch, Text, TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [isNew, setIsNew] = useState(false);

  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}
