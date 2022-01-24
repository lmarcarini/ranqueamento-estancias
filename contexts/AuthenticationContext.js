import { createContext, useContext } from "react";
import useFirebaseAuth from "../Firebase/useFirebaseAuth";

const authUserContext = createContext({
  name: "Estela",
  authUser: null,
  userType: "municipio",
  loading: false,
});

export const AuthUserProvider = ({ children }) => {
  const auth = useFirebaseAuth();

  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
};

export const useAuth = () => useContext(authUserContext);
