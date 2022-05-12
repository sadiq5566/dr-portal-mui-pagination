import React from "react";
import { Grid, Typography, Theme, Stack, Divider, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import OwnerInfo from "./OwnerInfo";
import VehicleInfo from "./VehicleInfo";
import DealershipInfo from "./DealershipInfo";
import OrderStatus from "./OrderStatus";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "60% !important",
    marginLeft: "auto",
    marginRight: "auto"
  },
  leftGrid: {
    paddingLeft: "0px !important"
  },
  documents: {
    background: theme.palette.common.white,
    paddingBottom: "1rem",
    borderRadius: "8px",
    paddingLeft: "0.7rem"
  }
}));
const BatchOrderData: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={7} className={classes.leftGrid}>
        <Box className={classes.documents}>
          <Stack spacing={1} p={2}>
            <Typography variant="h4">Documents</Typography>
            <Typography variant="h5">Name: FileQGYYOG.pdf</Typography>
          </Stack>
        </Box>
        <Box mt={4}>
          <Grid item>
            <OwnerInfo />
          </Grid>
        </Box>
        <Box mt={4}>
          <Divider />
        </Box>
        <Box mt={4}>
          <Grid item>
            <VehicleInfo />
          </Grid>
        </Box>
        <Box mt={4}>
          <Grid item>
            <DealershipInfo />
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <OrderStatus />
      </Grid>
    </Grid>
  );
};
export default BatchOrderData;
