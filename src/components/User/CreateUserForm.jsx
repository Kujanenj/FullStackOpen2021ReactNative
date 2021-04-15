import React from "react";
import * as yup from "yup";
import CreateUserFormContainer from "./CreateUserFormContainer";
import { useHistory } from "react-router-native";
import useCreateUser from "../../hooks/useCreateUser";
import useSignIn from "../../hooks/useSignIn";
const initialValues = {
  username: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, "Must be atleast ${min} chars")
    .max(30, "Maximum length of ${max} reached")
    .required("Required"),

  password: yup
    .string()
    .min(5, "Must be atleast ${min} chars long!")
    .max(50, "Upper limit of ${max} reached!")
    .required("Required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const CreateUserForm = () => {
  const history = useHistory();
  const [createUser, result] = useCreateUser();
  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await createUser(username, password);
      await signIn(username, password);
      history.push("/repositories");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CreateUserFormContainer
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    ></CreateUserFormContainer>
  );
};
export default CreateUserForm;
