import React, { useCallback, useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, redirectTo }) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
