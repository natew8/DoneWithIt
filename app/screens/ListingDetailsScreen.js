import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Image } from "react-native-expo-image-cache";
//Components
import AppText from "../components/AppText";
import Colors from "../config/Colors";
import ListItem from "../components/ListItem";
import ContactSellerForm from "../components/ContactSellerForm";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        uri={listing.images[0].url}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Mosh"
            subTitle="5 listings"
            image={require("../assets/mosh.jpg")}
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 10,
  },
  price: {
    color: Colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
