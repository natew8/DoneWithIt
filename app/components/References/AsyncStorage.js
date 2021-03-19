import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };
  demo();
  return null;
}

//setItem returns a promise so it needs to be put in an async function.
//setItem allows you to create an object with key value pairs.
//setItem requires that your object be a string so you need to use JSON.stringify on the key value pairs.

//getItem - when you get a certain item you need to parse the item back into an object.
