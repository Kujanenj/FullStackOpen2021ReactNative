import { useApolloClient, useMutation } from "@apollo/client";
import useAuthStorage from "../hooks/useAuthStorage";
import {CREATE_REVIEW} from "../graphql/mutations";
const useCreateReview = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({
    repositoryName,
    ownerName,
    rating,
    text = null,
  }) => {
    const review = { repositoryName, ownerName, rating, text };
    const { data } = await mutate({ variables: { review } });
    return data;
  };
  return [createReview, result];
};
export default useCreateReview;
