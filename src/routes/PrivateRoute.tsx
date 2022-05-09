import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, redirectTo }) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};
export default PrivateRoute;

export const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  return !isAuthenticated && !isLoading ? <Navigate to="/login" replace /> : children;
};
