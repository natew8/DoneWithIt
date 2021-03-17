import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//Components
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AuthNavigator from "./app/Navigation/AuthNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
