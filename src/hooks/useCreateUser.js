import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
const useCreateUser = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const createUser = async ( username, password ) => {
    console.log(username,password)
    const credentials = { username, password };
    console.log(credentials)
    console.log("'*****'")
    const { data } = await mutate({ variables: { credentials } });
    return data;
  };
  return [createUser, result];
};
export default useCreateUser;
