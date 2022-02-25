import React from "react";
import { Grid } from "@mui/material";
import SideBar from "../OrdersStatus/SiderBar";
import Status from "../OrdersStatus/Status";
import Header from "../ApiOrders/Header";

const Layout = ({ children }: any) => {
  return (
    <Grid container>
      <Grid item xs={3} sx={{ display: "flex" }}>
        <SideBar />
        <Status />
      </Grid>
      <Grid item xs={9}>
        <Header />
      </Grid>
    </Grid>
  );
};

export default Layout;
