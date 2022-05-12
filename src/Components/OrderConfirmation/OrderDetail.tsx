import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    width: "60% !important",
    marginBottom: "10px",
    marginTop: "60px",
    marginLeft: "auto",
    marginRight: "auto",
    background: "#F6F6F7",
    borderRadius: "8px",
    height: "78px",
    padding: "20px"
  },
  tableRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "7px"
  },
  tableHeading: {
    fontWeight: "600",
    fontSize: "10px",
    lineHeight: "12px"
  },
  tableData: {
    fontWeight: "400",
    fontSize: "10px",
    lineHeight: "12px"
  }
});
const OrderDetail = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12}>
          <div className={classes.tableRow}>
            <Typography className={classes.tableHeading} px={2}>
              Created By
            </Typography>
            <Typography variant="h6" className={classes.tableData} px={2}>
              Person Name Here
            </Typography>
          </div>
          <div className={classes.tableRow}>
            <Typography className={classes.tableHeading} px={2}>
              Unique Customers
            </Typography>
            <Typography variant="h6" className={classes.tableData} px={2}>
              11
            </Typography>
          </div>
          <div className={classes.tableRow}>
            <Typography className={classes.tableHeading} px={2}>
              Unique Dealerships
            </Typography>
            <Typography variant="h6" className={classes.tableData} px={2}>
              12
            </Typography>
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
          <div className={classes.tableRow}>
            <Typography className={classes.tableHeading} px={2}>
              Total Orders
            </Typography>
            <Typography variant="h6" className={classes.tableData} px={2}>
              12
            </Typography>
          </div>
          <div className={classes.tableRow}>
            <Typography className={classes.tableHeading} px={2}>
              Completed Orders
            </Typography>
            <Typography variant="h6" className={classes.tableData} px={2}>
              10
            </Typography>
          </div>
          <div className={classes.tableRow}>
            <Typography className={classes.tableHeading} px={2}>
              Rejected Orders
            </Typography>
            <Typography variant="h6" className={classes.tableData} px={2}>
              2
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};
export default OrderDetail;
