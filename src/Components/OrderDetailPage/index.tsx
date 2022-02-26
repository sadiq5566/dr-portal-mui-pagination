import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Orders from "./Orders";
import SideBar from "../OrdersStatus/SiderBar";
import OrdersStatus from "../OrdersStatus/Status";
import { useParams } from "react-router-dom";
import TableMockData from "../data/TableMockData";
import { Order } from "../../Interfaces/orderInterface";

const Index = () => {
  const { id } = useParams();
  const [order, setOrders] = useState<Order | null>(null);
  useEffect(() => {
    const product = TableMockData.find((orders) => orders.id === id);
    if (product) setOrders(product);
  }, [id]);

  return (
    <Grid container>
      <Grid item xs={3} sx={{ display: "flex" }}>
        <SideBar />
        <OrdersStatus />
      </Grid>

      <Grid item xs={9}>
        {order && <Orders order={order} />}
      </Grid>
    </Grid>
  );
};

export default Index;
