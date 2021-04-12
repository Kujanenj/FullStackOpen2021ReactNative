import { Formik } from "formik";
import FormikTextInput from './FormikTextInput'
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

const SignInForm = ({ onSubmit, errors }) => {
  return (
    <View style={styles.flexContainer}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        testID="username"
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        testID="password"
      />
      <Button
        onPress={onSubmit}
        title="Submit"
        testID="submitButton"
        disabled={!(Object.keys(errors).length === 0)}
      />
    </View>
  );
};
const SignInContainer = ({ onSubmit, initialValues, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors }) => (
        <SignInForm onSubmit={handleSubmit} errors={errors} />
      )}
    </Formik>
  );
};
export default SignInContainer;
