import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import useSignIn from "../hooks/useSignIn";
import * as yup from "yup";
import { useHistory } from "react-router-native";

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

const SignInForm = ({ onSubmit, errors }) => {
  return (
    <View style={styles.flexContainer}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <Button
        onPress={onSubmit}
        title="Submit"
        disabled={!(Object.keys(errors).length === 0)}
      />
    </View>
  );
};

const SignIn = () => {
  let history = useHistory();

  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const data = await signIn({ username, password });
      history.push("/repositories");
    } catch (e) {
      console.log(e);
    }
  };

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
export default SignIn;
