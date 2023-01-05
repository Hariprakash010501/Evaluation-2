import { createContext, useState } from "react";
export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState({ token: null });
  const loggedIn = (token) => {
    setIsAuth({ ...isAuth, token });
  };
  const loggedOut = () => {
    setIsAuth({ token: null });
  };
  return (
    <Context.Provider value={{ loggedIn, loggedOut, isAuth }}>
      {children}
    </Context.Provider>
  );
};