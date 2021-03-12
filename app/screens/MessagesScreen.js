import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  //used to delete an item from a list array//
  const handleDelete = (message) => {
    setMessages(messages.filter((mes) => mes.id !== message.id));
  };

  return (
    <Screen>
      <FlatList //This is the main list building component for applications. iT takes multiple props including refresh
        data={messages} //The data inside the list. Will come from the backend
        keyExtractor={(messages) => messages.id.toString()}//This extracts the key index from the data
        renderItem={({ item }) => ( //this renders the objects from the data /*Best to use a seperate reusable component
          <ListItem
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            onPress={() => console.log(item)}
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator} //Optional dividing line between list items
        refreshing={refreshing} //The refreshing prop
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      ></FlatList>
    </Screen>
  );
}
const styles = StyleSheet.create({});
export default MessagesScreen;
