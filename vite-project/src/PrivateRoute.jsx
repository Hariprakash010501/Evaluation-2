import React from "react";
import { useContext } from "react";
import { Context } from "./Context";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(Context);
  if (isAuth.token) {
    return children;
  }
  return <Navigate to="/login" />;
};
export default PrivateRoute;