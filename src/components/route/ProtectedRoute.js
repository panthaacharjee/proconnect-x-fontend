import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const history = useNavigate();
  return <Fragment>{isAuthenticated ? children : history("/login")}</Fragment>;
};
export default ProtectedRoute;
