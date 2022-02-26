import React from "react";
import Orders from "./Components/ApiOrders/Orders";
import Index from "./Components/OrderDetailPage";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Orders />} />
        <Route path="/index/:id" element={<Index />} />
      </Switch>
    </Router>
  );
};

export default App;
