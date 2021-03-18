import React from "react";
import { Text, TextInput, StyleSheet, Pressable, View ,Button} from "react-native";
import { Formik, useField } from "formik";
import FormikTextInput from "./FormikTextInput";

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
const initialValues = {
  username: "username",
  password: "paas",
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.flexContainer}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <Button onPress={onSubmit} title="Submit" />
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    const username = values.username;
    const password = values.password;
    console.log(username + password);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};
export default SignIn;
