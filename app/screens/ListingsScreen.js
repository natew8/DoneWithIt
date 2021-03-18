import React from "react";
import { FlatList, StyleSheet } from "react-native";
//Components//
import routes from "../Navigation/routes";
import Screen from "../components/Screen";
import listingsApi from "../api/listings";
import Card from "../components/Card";
import Colors from "../config/Colors";
import { useState } from "react";
import { useEffect } from "react";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState();
  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()} //keyExtractor expects a string as the unique identifier so a int must be converted to a string.
        renderItem={({ item }) => (
          <Card
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: Colors.light,
  },
});
export default ListingsScreen;
