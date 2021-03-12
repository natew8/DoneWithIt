import React from "react";
import { FlatList } from "react-native-gesture-handler";
import ListItem from "../components/ListItem";

function MyAccountScreen(props) {
  return (
    <View>
      <ListItem />
      <FlatList></FlatList>
      <ListItem />
    </View>
  );
}

export default MyAccountScreen;
