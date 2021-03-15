import { useFormikContext } from "formik";
import React from "react";
import AppButton from "../AppButton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title="Login" onPress={handleSubmit} />;
}

export default SubmitButton;
