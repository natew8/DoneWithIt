import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/Forms/index";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
  },
  {
    label: "Clothing",
    value: 2,
    icon: "shoe-heel",
    backgroundColor: "#2bcbba",
  },
  {
    label: "Cameras",
    value: 3,
    icon: "camera",
    backgroundColor: "#fed330",
  },
  {
    label: "Cars",
    value: 4,
    icon: "car",
    backgroundColor: "#fd9644",
  },
  {
    label: "Games",
    value: 5,
    icon: "cards",
    backgroundColor: "#26de81",
  },
  {
    label: "Sports",
    value: 6,
    icon: "basketball",
    backgroundColor: "#45aaf2",
  },
  {
    label: "Movies & Music",
    value: 7,
    icon: "headphones",
    backgroundColor: "#4b7bec",
  },
  {
    label: "Books",
    value: 8,
    icon: "bookshelf",
    backgroundColor: "#9b67e3",
  },
  {
    label: "Other",
    value: 9,
    icon: "all-inclusive",
    backgroundColor: "#7c8ba0",
  },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          width={120}
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          PickerItemComponent={CategoryPickerItem}
          width="50%"
          items={categories}
          name="Category"
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="Description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
