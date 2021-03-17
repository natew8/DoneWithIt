import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  </Screen>
);
const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details{route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "black" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      options={({ route }) => ({ title: route.params.id })}
      name="TweetDetails"
      component={TweetDetails}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);
const Profile = () => (
  <Screen>
    <Text>Profile</Text>
  </Screen>
);
const Settings = () => (
  <Screen>
    <Text>Settings</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "red",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={Tweets}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
