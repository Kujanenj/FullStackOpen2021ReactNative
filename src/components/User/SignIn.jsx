import React from "react";
import useSignIn from "../../hooks/useSignIn";
import * as yup from "yup";
import { useHistory } from "react-router-native";
import SignInContainer from "./SignInFormContainer";


const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

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
    <SignInContainer
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    ></SignInContainer>
  );
};
export default SignIn;
