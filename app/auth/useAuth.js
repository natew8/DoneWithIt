import { useContext } from "react";
import AuthContext from "./context";
import storage from "./storage";
import jwtDecode from "jwt-decode";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    storage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    storage.removeToken();
  };
  return { user, setUser, logOut, login };
};
