import React from "react";
import { Grid, Typography, Theme, Stack, Divider, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Button from "../Button/index";
import OrderSummary from "./OrderSummary";
import OwnerInfo from "./OwnerInfo";
import VehicleInfo from "./VehicleInfo";
import DealershipInfo from "./DealershipInfo";
import { Order } from "../../Interfaces/orderInterface";
import OrderStatus from "./OrderStatus";
interface IProps {
  order: Order;
}

const useStyles = makeStyles((theme: Theme) => ({
  documents: {
    background: theme.palette.common.white,
    paddingBottom: "1rem",
    borderRadius: "8px",
    paddingLeft: "0.7rem"
  }
}));

const AttachmentDetails: React.FC<IProps> = ({ order }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={9}>
        <Box className={classes.documents}>
          <Stack spacing={1} p={2}>
            <Typography variant="h4">Documents</Typography>
            <Typography variant="h5">Name: FileQGYYOG.pdf</Typography>
          </Stack>
          <Box pl={2}>
            <Button text="Print Attachments" size="large" color="success" />
          </Box>
        </Box>
        <Box mt={4}>
          <Grid item>
            <OwnerInfo order={order} />
          </Grid>
        </Box>
        <Box mt={4}>
          <Divider />
        </Box>
        <Box mt={4}>
          <Grid item>
            <VehicleInfo order={order} />
          </Grid>
        </Box>
        <Box mt={4}>
          <Grid item>
            <DealershipInfo order={order} />
          </Grid>
        </Box>
      </Grid>
      {order?.Status === "complete" ? (
        <Grid item xs={3}>
          <OrderStatus order={order} />
        </Grid>
      ) : order?.Status === "reject" ? (
        <Grid item xs={3}>
          <OrderStatus order={order} />
        </Grid>
      ) : (
        <Grid item xs={3}>
          <OrderSummary order={order} />
        </Grid>
      )}
    </Grid>
  );
};

export default AttachmentDetails;
