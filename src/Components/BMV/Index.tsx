import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Layout from "../Layout/index";
import Header from "./Header";
import SideBarContent from "./SideBarContent";
import BmvTable from "./BmvTable";

const useStyles = makeStyles({
  bmvList: {
    padding: "5px 32px 0px 32px !important"
  }
});
const Index = () => {
  const classes = useStyles();

  return (
    <Layout sideContent={<SideBarContent />}>
      <Grid container spacing={2}>
        <Header />
        <Grid item xs={12} className={classes.bmvList}>
          <BmvTable />
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Index;
