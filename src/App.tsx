import React from "react";
import OrdersListingStatus from "./Components/ApiOrders/OrdersListingStatus";
import Index from "./Components/OrderDetailPage";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import OrderVersionPage from "./Components/OrdersStatus/OrderVersionPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<OrdersListingStatus />} />
        <Route path="/history" element={<OrderVersionPage />} />
        <Route path="/orderdetails/:id" element={<Index />} />
      </Switch>
    </Router>
  );
};

export default App;
