import React from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  View,
  Button,
} from "react-native";
import { Formik, useField } from "formik";
import FormikTextInput from "./FormikTextInput";

import * as yup from "yup";

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
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignInForm = ({ onSubmit,errors}) => {
  console.log("Sign in form errors -->")
  console.log(!(Object.keys(errors).length===0))
  console.log("---")
  return (
    <View style={styles.flexContainer}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <Button onPress={onSubmit} title="Submit" disabled={!(Object.keys(errors).length===0)} />
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
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      
    >
      {({ handleSubmit,errors }) => <SignInForm onSubmit={handleSubmit} errors={errors} />}
    </Formik>
  );
};
export default SignIn;
