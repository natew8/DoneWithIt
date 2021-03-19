import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FeedNavigator from "./app/Navigation/FeedNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <FeedNavigator />
    </NavigationContainer>
  );
}
