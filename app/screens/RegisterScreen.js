//Libraries
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
//Custom Hooks
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
//Components
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/Forms/index";
import authApi from "../api/auth";
//
//
//
//Yup is used to validate form info. Very popular and works with Formik
const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  //State
  const [registerFailed, setRegisterFailed] = useState(false);
  const [error, setError] = useState("");
  //Hooks
  const registerApi = useApi(authApi.register);
  const loginApi = useApi(authApi.login);
  const { login } = useAuth();

  const handleRegister = async (userInfo) => {
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        MediaStreamErrorEvent("An unexpected error occurred");
        console.log(result);
      }
      return;
    }
    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    login(authToken);
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleRegister}
        validationSchema={validationSchema}
      >
        <ErrorMessage visible={registerFailed} error={error} />
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
        <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
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
