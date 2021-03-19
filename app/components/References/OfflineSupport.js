import React from "react";
//we can use this library to detect a users network status and info.
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import { Button, View } from "react-native";

// There are a few ways you can handle offline support. Choosing which one or combination of these approaches depends on the need of the application and user experience.
//1. Notify the user that they are not connected to the internet
//2. disable certain features when they are not online
//3. Cache data so the user still has access to certain data when offline.
//4. if the user would like to make any changes to data while offline we can store these changes in the cache as well and they will be updated the next time the user comes back online.

export default function App() {
  //Conditional rendering based on the users internet activity
  const netInfo = useNetInfo();
  //example 1 returning one view if on line another if off line
  return netInfo.isInternetReachable ? <View></View> : <View></View>;
  //Example 2 disabling certain features if not online
  return <Button disabled={!netInfo.isInternetReachable} />;
}

//Persistence options
//1. AsyncStorage - like local storage on browsers. Dont save anything sensitive here.
//2, SecureStore - built and managed by expo can be used in bare and expo managed apps. Limit of 2mb
//3. SQLite - a mini sql db. gives you the ability to make sql queries when offline.
//All of these options will work on app refresh but if the user uninstalls the app all of this data will be deleted.
