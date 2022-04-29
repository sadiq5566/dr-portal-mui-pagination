import React, { useState, useEffect, useCallback } from "react";
import OrdersListingStatus from "./Components/ApiOrders/OrdersListingStatus";
import Index from "./Components/OrderDetailPage";
import Login from "./Components/Login/Login";
import BMV from "./Components/BMV/Index";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import { useOrders } from "./Hooks/orders/orders";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";

import { useQuery } from "react-query";
import { getToken } from "./Hooks/ApiConfig";

const App = () => {
  const [isAuth, setIsAuth] = useState<Boolean>();
  const [tokens, setToken] = useState<string>("");
  const { loginWithRedirect, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  const loginRequest = useCallback(async () => {
    const token = await getAccessTokenSilently();
  }, [isAuthenticated]);

  useEffect(() => {
    loginRequest();
  }, [loginRequest]);

  useEffect(() => {
    setIsAuth(isAuthenticated);
    getToken(getAccessTokenSilently);
  }, [isAuthenticated]);
  useEffect(() => {
    // console.log(isAuth);
  }, [isAuth]);

  const { isError, data, error } = useQuery("orders", useOrders);
  console.log(data);
  return (
    <Router>
      <Switch>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            isAuth ? (
              <PrivateRoute redirectTo="/">
                <OrdersListingStatus />
              </PrivateRoute>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/orderdetails/:id"
          element={
            <PrivateRoute redirectTo="/orderdetails/:id">
              <Index />
            </PrivateRoute>
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

        {/* <Route path="/" element={<OrdersListingStatus />} /> */}
        {/* <Route path="/orderdetails/:id" element={<Index />} /> */}
        {/* <Route path="/bmv/:name" element={<BMV />} /> */}
      </Switch>
    </Router>
  );
};

export default App;
