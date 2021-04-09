import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";
const useSignIn = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };
    const { data } = await mutate({ variables: { credentials } });
    await authStorage.setAccessToken(data.authorize.accessToken);
    client.resetStore();
    return data.authorize.accessToken;
  };

  return [signIn, result];
};
export default useSignIn;
