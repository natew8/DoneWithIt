import React, { useState, useEffect } from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import jwtDecode from "jwt-decode";
import AppLoading from "expo-app-loading";

//Components
import AuthNavigator from "./app/Navigation/AuthNavigator";
import AppNavigator from "./app/Navigation/AppNavigator";
import navigationTheme from "./app/Navigation/navigationTheme";
import OfflineNotification from "./app/components/OfflineNotification";
import AuthContext from "./app/auth/context";
import storage from "./app/auth/storage";

export default function App() {
  const netInfo = useNetInfo();
  const [appReady, setAppReady] = useState(false);
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await storage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };

  if (!appReady)
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotification visible={netInfo.isInternetReachable} />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
