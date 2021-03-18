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

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setListings(response.data);
    setError(false);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
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
