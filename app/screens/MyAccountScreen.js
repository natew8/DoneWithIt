import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import Colors from "../config/Colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      color: Colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      color: Colors.secondary,
    },
  },
];
function MyAccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Nate Waite"
          subTitle="n8w8dev@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => {
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.color} />
              }
            />;
          }}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: Colors.light,
  },
});
export default MyAccountScreen;
