import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        onChangeText={(text) => setEmail(text)}
        icon="email"
        autoCapitalize="none"
        autoCorrect={false}
        keyBoardType="email-address"
        placeholder="Email"
        textContentType="emailAddress"
      />
      <AppTextInput
        onChangeText={(text) => setPassword(text)}
        icon="lock"
        autoCapitalize="none"
        autoCorrect={false}
        keyBoardType="email-address"
        placeholder="Password"
        textContentType="password"
        secureTextEntry
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
