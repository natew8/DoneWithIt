import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//Components//
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    {/* mode will change whether the new page comes in from the side (card) or the bottom (modal)*/}
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen
      options={{ headerShown: false }}
      name="ListingDetails"
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
