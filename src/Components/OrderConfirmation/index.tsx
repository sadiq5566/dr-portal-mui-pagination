import React, { FC } from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import BatchOrder from "./BatchOrder";
import OrderDetail from "./OrderDetail";

const OrderConfirmation: FC = () => {
  return (
    <Box>
      <Header />
      <BatchOrder />
      <OrderDetail />
    </Box>
  );
};

export default OrderConfirmation;
