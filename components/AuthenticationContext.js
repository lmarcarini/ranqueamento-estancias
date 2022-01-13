import { createContext, useContext } from "react";

const authUserContext = createContext({
  authUser: null,
  userType: "municipio",
  loading: false,
});

export const AuthUserProvider = ({ children }) => {
  const auth = {
    authUser: true,
    userType: "municipio",
    loading: false,
  };
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
};

export const useAuth = () => useContext(authUserContext);
