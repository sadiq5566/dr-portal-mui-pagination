import React from "react";
import OrdersListingStatus from "./Components/ApiOrders/OrdersListingStatus";
import Index from "./Components/OrderDetailPage";
import Login from "./Components/Login/Login";
import BMV from "./Components/BMV/Index";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<OrdersListingStatus />} />
        <Route path="/orderdetails/:id" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bmv/:name" element={<BMV />} />
        {/* <Route path="/bmv/managers" element={<BMV />} /> */}
        {/* <Route path="/bmv/employees" element={<BMV />} /> */}
        {/* <Route path="/bmv/locations"  element={<BMV />} /> */}
      </Switch>
    </Router>
  );
};

export default App;
