import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState({
    token: null,
  });
  const login=(token)=>{
    setIsAuth({
      ...isAuth,
      token,
    });
  };
  const logout=()=>{
    setIsAuth({
      ...isAuth,
      token:null,
    });
  };
  return (
    <AuthContext.Provider value={{login,logout,isAuth}}>
      {children}
    </AuthContext.Provider>
  );
};
