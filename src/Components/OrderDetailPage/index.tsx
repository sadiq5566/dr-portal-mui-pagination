import React, { useState, useEffect } from "react";
import Orders from "./Orders";
import { useParams } from "react-router-dom";
import TableMockData from "../data/TableMockData";
import { Order } from "../../Interfaces/orderInterface";
import Layout from "../Layout/index";
import Status from "../OrdersStatus/Status";

const Index = () => {
  const { id } = useParams();
  const [order, setOrders] = useState<Order | null>(null);
  useEffect(() => {
    const product = TableMockData.find((orders) => orders.id === id);
    if (product) setOrders(product);
  }, [id]);

  return <Layout sideContent={<Status />}>{order && <Orders order={order} />}</Layout>;
};

export default Index;
