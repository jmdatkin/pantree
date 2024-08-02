import { useContext } from "react";
import { AuthContext } from "../_context/auth-context";

const useUser = () => {
  return useContext(AuthContext);
};
export default useUser;
