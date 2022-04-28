import React, { useState, useEffect, useCallback } from "react";
import OrdersListingStatus from "./Components/ApiOrders/OrdersListingStatus";
import Index from "./Components/OrderDetailPage";
import Login from "./Components/Login/Login";
import BMV from "./Components/BMV/Index";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
const App = () => {
  const { loginWithRedirect, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  const [isAuth, setIsAuth] = useState<Boolean>();

  // const loginRequest = useCallback(async () => {
  //   const datas = await getAccessTokenSilently();
  //   const daa = await isAuthenticated;
  //   setIsAuth(isAuthenticated);
  //   console.log(datas);
  // }, [isAuthenticated]);

  // useEffect(() => {
  //   loginRequest();
  // }, [loginRequest]);

  useEffect(() => {
    setIsAuth(isAuthenticated);
  }, [isAuthenticated]);
  useEffect(() => {
    // console.log(isAuth);
  }, [isAuth]);

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
