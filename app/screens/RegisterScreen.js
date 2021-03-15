import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
//Components
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms/index";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          icon="account"
          autoCorrect={false}
          keyBordType="default"
          placeholder="Name"
          textContentType="name"
        />
        <AppFormField
          name="email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyBoardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          keyBoardType="email-address"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="register" />
      </AppForm>
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
export default RegisterScreen;
