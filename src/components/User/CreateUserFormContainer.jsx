import { Formik } from "formik";
import FormikTextInput from "../Texts/FormikTextInput";
import React from "react";
import { StyleSheet, View, Button } from "react-native";
const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },
  flexItem: {
    flexGrow: 1,
  },
});

const CreateUserForm = ({ onSubmit, errors }) => {
  return (
    <View style={styles.flexContainer}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <FormikTextInput name="passwordConfirm" placeholder="ConfirmPassword" />
      <Button
        onPress={onSubmit}
        title="Register"
        disabled={!(Object.keys(errors).length === 0)}
      />
    </View>
  );
};
const CreateUserFormContainer = ({
  onSubmit,
  initialValues,
  validationSchema,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors }) => (
        <CreateUserForm onSubmit={handleSubmit} errors={errors} />
      )}
    </Formik>
  );
};
export default CreateUserFormContainer;
