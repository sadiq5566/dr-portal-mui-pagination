import React, { useEffect, useCallback } from "react";
import OrdersListingStatus from "./Components/ApiOrders/OrdersListingStatus";
import Index from "./Components/OrderDetailPage";
import Login from "./Components/Login/Login";
import BMV from "./Components/BMV/Index";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
const App = () => {
  const { loginWithRedirect, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  const loginRequest = useCallback(async () => {
    const datas = await getAccessTokenSilently();
    console.log(isAuthenticated);
    console.log(datas);
  }, [isAuthenticated]);

  useEffect(() => {
    loginRequest();
  }, [loginRequest]);
  if (!isAuthenticated) {
    <Navigate to="/login" />;
  }

  return (
    <Router>
      <Switch>
        <Route path="/" element={<OrdersListingStatus />} />
        <Route path="/orderdetails/:id" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bmv/:name" element={<BMV />} />
      </Switch>
    </Router>
  );
};

export default App;
