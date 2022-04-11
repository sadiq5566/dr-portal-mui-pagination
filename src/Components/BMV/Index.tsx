import React from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Button from "../Button";
import Layout from "../Layout/index";
import StatusSvg from "../../Assets/svgs/StatusSvg/StatusSvg";
import Header from "./Header";
import SideBarContent from "./SideBarContent";
import BmvTable from "./BmvTable";

const Index = () => {
  return (
    <Layout sideContent={<SideBarContent />}>
      <Grid container spacing={2}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <BmvTable />
      </Grid>
    </Layout>
  );
};
export default Index;
