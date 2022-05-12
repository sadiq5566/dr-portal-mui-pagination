import React, { useEffect } from "react";
import Index from "./Components/OrderDetailPage";
import BMV from "./Components/BMV/Index";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./routes/PrivateRoute";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import { getTokens } from "./Hooks/orders/orders";
import OrderConfirmation from "./Components/OrderConfirmation";
import BatchOrderStatus from "./Components/BatchOrderStatus";
import OrdersListingStatus from "./Components/ApiOrders/OrdersListingStatus";
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
              <ProtectedRoute>
                <OrdersListing />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orderdetails/:id"
            element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bmv/:name"
            element={
              <ProtectedRoute>
                <BMV />
              </ProtectedRoute>
            }
          />
          <Route path="/:name" element={<OrdersListingStatus />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/batch-order-status" element={<BatchOrderStatus />} />
          <Route path="/batchorderdetails/:id" element={<OrdersListingStatus />} />
        </Switch>
      </Router>
    </React.Suspense>
  );
};

export default App;
