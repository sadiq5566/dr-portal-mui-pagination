import React from "react";
import OrdersListingStatus from "./Components/ApiOrders/OrdersListingStatus";
import Index from "./Components/OrderDetailPage";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<OrdersListingStatus />} />
        <Route path="/orderdetails/:id" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Switch>
    </Router>
  );
};

export default App;
