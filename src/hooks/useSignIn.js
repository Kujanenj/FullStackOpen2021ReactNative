import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { SIGN_IN } from "../graphql/mutations";
const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };
    mutate({ variables: { credentials } });
    return result?.data?.authorize?.accessToken;
  };

  // console.log(result)
  return [signIn, result];
};
export default useSignIn;
