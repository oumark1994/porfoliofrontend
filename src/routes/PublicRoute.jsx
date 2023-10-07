import React from "react";
import { Route, Navigate } from "react-router-dom";
const PublicRoute = (props) => {
  const token = JSON.parse(localStorage.getItem("isLogged"));

  return token ? (
    <Navigate to="/dashboard" />
  ) : (
    <Route {...props} />
  );
};

export default PublicRoute;