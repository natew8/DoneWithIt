import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//Components
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import navigationTheme from "./app/Navigation/navigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
