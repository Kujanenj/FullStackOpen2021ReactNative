import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import * as yup from "yup";
import SignInContainer from "../../components/SignInFormContainer";
// ...
const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      const { debug, getByTestId, getAllByTestId } = render(
        <SignInContainer
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        ></SignInContainer>
      );

      fireEvent.changeText(getByTestId("username"), "kalle");
      fireEvent.changeText(getByTestId("password"), "password");
      fireEvent.press(getByTestId("submitButton"));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "kalle",
          password: "password",
        });
        // expect the onSubmit function to have been called once and with a correct first argument
      });
    });
  });
});
