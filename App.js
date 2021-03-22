import React, { useState } from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import AppNavigator from "./app/Navigation/AppNavigator";
import navigationTheme from "./app/Navigation/navigationTheme";
import { NavigationContainer } from "@react-navigation/native";
import OfflineNotification from "./app/components/OfflineNotification";
import AuthContext from "./app/auth/context";

export default function App() {
  const netInfo = useNetInfo();

  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotification visible={netInfo.isInternetReachable} />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
