import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Orders from "./Orders";
import SiderBarIcon from "../OrdersStatus/SiderBarIcon";
import { useParams } from "react-router-dom";
import TableMockData from "../data/TableMockData";
import { Order } from "../../Interfaces/orderInterface";
import VersionHistory from "../OrdersStatus/VersionHistory";
import { getOrderByID } from "../../Hooks/orders/orders";
const Index = () => {
  const { id } = useParams();
  const [order, setOrders] = useState<Order | null>(null);
  // useEffect(() => {
  //   const product = TableMockData.find((orders) => orders.id === id);
  //   if (product) setOrders(product);
  // }, [id]);

  useEffect(() => {
    getOrderData();
  }, [id]);

  const getOrderData = async () => {
    try {
      const response = await getOrderByID(id);
      // const product = response?.data.find((orders) => orders.id === id);
      console.log(response?.data);
      // if (product) setOrders(product);
      setOrders(response?.data);
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <Grid container>
      <Grid item xs={3} sx={{ display: "flex" }}>
        <SiderBarIcon />
        <VersionHistory />
      </Grid>
      <Grid item xs={9}>
        {order && <Orders order={order} />}
      </Grid>
    </Grid>
  );
};
export default Index;
