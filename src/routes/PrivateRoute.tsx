import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  return !isAuthenticated && !isLoading ? <Navigate to="/login" replace /> : children;
};

export default ProtectedRoute;
