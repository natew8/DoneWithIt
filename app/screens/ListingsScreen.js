import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
//Components//
import AppButton from "../components/AppButton";
import routes from "../Navigation/routes";
import Screen from "../components/Screen";
import Colors from "../config/Colors";
import listingsApi from "../api/listings";
import Card from "../components/Card";
import AppText from "../components/AppText";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    loadListings(1, 2, 3);
  }, []);
  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Couldn't retrieve the listings</AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </>
        )}
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()} //keyExtractor expects a string as the unique identifier so a int must be converted to a string.
          renderItem={({ item }) => (
            <Card
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: Colors.light,
  },
});
export default ListingsScreen;
