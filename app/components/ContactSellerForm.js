import React from "react";
import * as Notifications from "expo-notifications";
import { Alert, Keyboard } from "react-native";
import messages from "../api/messages";
import { AppFormField, SubmitButton, AppForm } from "./Forms";

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messages.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message to the seller.");
    }

    resetForm();
    Notifications.scheduleNotificationAsync(
      {
        content: {
          title: "Awesome!",
          body: "Your message was sent to the seller. ",
        },
        trigger: null,
      },
      null
    );
  };

  return (
    <AppForm initialValues={{ message: "" }} onSubmit={handleSubmit}>
      <AppFormField
        name="message"
        autoCorrect={false}
        keyBoardType="default"
        placeholder="Message"
      />
      <SubmitButton title="Send" />
    </AppForm>
  );
}

export default ContactSellerForm;
