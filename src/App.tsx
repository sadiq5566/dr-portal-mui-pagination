import React from "react";
import Orders from "./Components/ApiOrders/Orders";
import Index from "./Components/OrderDetailPage";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Orders />} />
        <Route path="/orderdetails/:id" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Switch>
    </Router>
  );
};

export default App;
