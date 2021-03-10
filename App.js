import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import React from "react";
import { View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText/AppText";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return <ViewImageScreen />;
}
