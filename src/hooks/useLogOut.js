import { useApolloClient } from "@apollo/client";
import useAuthStorage from "../hooks/useAuthStorage";
const useLogOut = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const logOut = async () => {
    console.log("Log me the f out");
    await authStorage.removeAccessToken();
    client.resetStore();
  };
  return logOut;
};
export default useLogOut;
