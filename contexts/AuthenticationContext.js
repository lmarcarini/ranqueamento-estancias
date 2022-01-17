import { createContext, useContext } from "react";

const authUserContext = createContext({
  name: "Estela",
  authUser: null,
  userType: "municipio",
  loading: false,
});

export const AuthUserProvider = ({ children }) => {
  const auth = {
    name: "Estela",
    authUser: true,
    userType: "municipio",
    loading: false,
  };
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
};

export const useAuth = () => useContext(authUserContext);
