import React from "react";
import * as yup from "yup";
import ReviewFormContainer from "./ReviewFormContainer";
import { useHistory } from "react-router-native";
import useCreateReview from "../../../hooks/useCreateReview";
const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  reviewText: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Super required this one"),
  repositoryName: yup.string().required("IS required"),
  rating: yup
    .number()
    .min(0, "Too low")
    .max(100, "Too high")
    .required("Is required"),
});

const ReviewForm = () => {
  const history = useHistory();
  const [createReview, result] = useCreateReview();
  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, reviewText } = values;
    try {
      const data = await createReview({
        ownerName,
        repositoryName,
        rating: Number(rating),
        text: reviewText,
      });
      history.push(`/repositories/${data.createReview.repository.id}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ReviewFormContainer
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    ></ReviewFormContainer>
  );
};
export default ReviewForm;
