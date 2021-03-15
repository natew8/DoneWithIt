import React from "react";
import { useFormikContext } from "formik";

//Components
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  name,
  placeholder,
  PickerItemComponent,
  width,
}) {
  const { errors, touched, setFieldValue, values } = useFormikContext();
  return (
    <>
      <AppPicker
        PickerItemComponent={PickerItemComponent}
        width={width}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppFormPicker;
