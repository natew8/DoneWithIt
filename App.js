import React from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import AppNavigator from "./app/Navigation/AppNavigator";
import navigationTheme from "./app/Navigation/navigationTheme";
import { NavigationContainer } from "@react-navigation/native";
import OfflineNotification from "./app/components/OfflineNotification";

export default function App() {
  const netInfo = useNetInfo();
  return (
    <>
      <OfflineNotification visible={netInfo.isInternetReachable} />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
