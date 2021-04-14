import { Formik } from "formik";
import FormikTextInput from "../../Texts/FormikTextInput";
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

const ReviewForm = ({ onSubmit, errors }) => {
  return (
    <View style={styles.flexContainer}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating" />
      <FormikTextInput name="reviewText" placeholder="Review" />
      <Button
        onPress={onSubmit}
        title="Create a review"
        disabled={!(Object.keys(errors).length === 0)}
      />
    </View>
  );
};
const ReviewFormContainer = ({ onSubmit, initialValues, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors }) => (
        <ReviewForm onSubmit={handleSubmit} errors={errors} />
      )}
    </Formik>
  );
};
export default ReviewFormContainer;
