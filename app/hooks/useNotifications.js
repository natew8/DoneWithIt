import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
//Components
import expoPushTokensApi from "../api/expoPushTokens";

export default useNotification = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    Notifications.addNotificationResponseReceivedListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting push token.", error);
    }
  };
};
