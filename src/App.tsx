import React, { useEffect } from "react";
import Index from "./Components/OrderDetailPage";
import BMV from "./Components/BMV/Index";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute, { PrivateWrapper } from "./routes/PrivateRoute";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import { getTokens } from "./Hooks/orders/orders";

const LoginScreen = React.lazy(() => import("./Components/Login/Login"));
const OrdersListing = React.lazy(
  () => import("./Components/ApiOrders/OrdersListingStatus")
);

const App = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      getTokens(getAccessTokenSilently);
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route path="/login" element={<LoginScreen />} />
          <Route
            path="/"
            element={
              <PrivateWrapper>
                <OrdersListing />
              </PrivateWrapper>
            }
          />
          <Route
            path="/orderdetails/:id"
            element={
              <PrivateWrapper>
                <Index />
              </PrivateWrapper>
            }
          />
          <Route
            path="/bmv/:name"
            element={
              <PrivateRoute redirectTo="/bmv/:name">
                <BMV />
              </PrivateRoute>
            }
          />
        </Switch>
      </Router>
    </React.Suspense>
  );
};

export default App;
