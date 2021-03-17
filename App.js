import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//Components
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import navigationTheme from "./app/Navigation/navigationTheme";
import AppNavigator from "./app/Navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
