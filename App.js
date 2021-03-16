import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import React, { useEffect, useState } from "react";
import { Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
// import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
// import Icon from "./app/components/Icon";
// import LoginScreen from "./app/screens/LoginScreen";
// import RegisterScreen from "./app/screens/RegisterScreen";
// import ListingEditScreen from "./app/screens/ListingEditScreen";
// import { View } from "react-native";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";

// import { MaterialCommunityIcons } from "@expo/vector-icons";

// import AppText from "./app/components/AppText/AppText";
// import Card from "./app/components/Card";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import MessagesScreen from "./app/screens/MessagesScreen";
// import ListItem from "./app/components/ListItem";
// import MyAccountScreen from "./app/screens/MyAccountScreen";
// import ListingsScreen from "./app/screens/ListingsScreen";
// import { Switch, Text, TextInput } from "react-native";
// import AppTextInput from "./app/components/AppTextInput";
// import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access your photos.");
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Screen>
      <Button title="select image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      <ImageInput imageUri={imageUri} />
    </Screen>
  );
}
