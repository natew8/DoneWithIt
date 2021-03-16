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
import ImageInputList from "./app/components/ImageInputList";
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
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };
  return (
    <Screen>
      <ImageInputList
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
        imageUris={imageUris}
      />
    </Screen>
  );
}
