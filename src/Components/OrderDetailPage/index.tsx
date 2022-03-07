import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Orders from "./Orders";
import LeftBar from "../OrdersStatus/SideBarIcon";
import { useParams } from "react-router-dom";
import TableMockData from "../data/TableMockData";
import { Order } from "../../Interfaces/orderInterface";
import VersionHistory from "../OrdersStatus/VersionHistory";
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
        <LeftBar />
        <VersionHistory />
      </Grid>

      <Grid item xs={9}>
        {order && <Orders order={order} />}
      </Grid>
    </Grid>
  );
};

export default Index;
