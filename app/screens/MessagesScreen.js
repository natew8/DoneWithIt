import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et tincidunt tellus. Pellentesque id efficitur mauris. Fusce magna eros, molestie eget ipsum non, dictum mattis ante. In laoreet placerat mollis. Maecenas eu odio risus. Fusce tortor lectus, blandit eu facilisis vel, aliquam sed quam. Praesent congue lacus efficitur nisl sodales fermentum. Aliquam erat volutpat. Sed ut dui lobortis, consequat quam vel, efficitur ligula. ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et tincidunt tellus. Pellentesque id efficitur mauris. Fusce magna eros, molestie eget ipsum non, dictum mattis ante. In laoreet placerat mollis. Maecenas eu odio risus. Fusce tortor lectus, blandit eu facilisis vel, aliquam sed quam. Praesent congue lacus efficitur nisl sodales fermentum. Aliquam erat volutpat. Sed ut dui lobortis, consequat quam vel, efficitur ligula. ",
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
    <Screen style={styles.container}>
      <FlatList //This is the main list building component for applications. iT takes multiple props including refresh
        data={messages} //The data inside the list. Will come from the backend
        keyExtractor={(messages) => messages.id.toString()} //This extracts the key index from the data
        renderItem={(
          { item } //this renders the objects from the data /*Best to use a seperate reusable component
        ) => (
          <ListItem
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            onPress={() => console.log(item)}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            showChevrons
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MessagesScreen;
