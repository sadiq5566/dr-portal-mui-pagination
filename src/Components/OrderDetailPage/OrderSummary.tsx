import React from "react";
import { Typography, Theme, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Order } from "../../Interfaces/orderInterface";

interface IProps {
  order: Order;
}

const useStyles = makeStyles((theme: Theme) => ({
  rightDiv: {
    borderRadius: "8px",
    background: "#FFFFFF",
    border: "1px solid #E7E7E9",
    marginTop: "2rem important"
  },
  summary: {
    color: theme.palette.text.primary,
    fontSize: "14px important",
    fontWeight: "bold !important"
  },
  customer: {
    fontWeight: 400,
    fontSize: "12px !important",
    color: theme.palette.text.primary
  }
}));

const OrderSummary: React.FC<IProps> = ({ order }) => {
  const classes = useStyles();
  return (
    <>
      <Box px={2} py={2} className={classes.rightDiv}>
        <Typography py={1} className={classes.summary}>
          summary
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Typography variant="h5">{order?.summaryInfo?.customer}</Typography>

          <Typography className={classes.customer}>
            {order?.summaryInfo?.cName}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Box mt={2}>
            <Typography variant="h5">{order?.summaryInfo?.order_Id}</Typography>
          </Box>
          <Box mt={2}>
            <Typography className={classes.customer}>
              {order?.summaryInfo?.ord_Id}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Box mt={2}>
            <Typography variant="h5">{order?.summaryInfo?.vin}</Typography>
          </Box>
          <Box mt={2}>
            <Typography className={classes.customer}>
              {order?.summaryInfo?.s_Vin}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Box mt={2}>
            <Typography variant="h5">Status</Typography>
          </Box>
          <Box mt={2}>
            <Typography className={classes.customer}>
              {order?.summaryInfo?.status}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Box mt={2}>
            <Typography variant="h5">{order?.summaryInfo?.sedan}</Typography>
          </Box>
          <Box mt={2}>
            <Typography className={classes.customer}>
              {order?.summaryInfo?.plate_type}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Box mt={2}>
            <Typography variant="h5">{order?.summaryInfo?.plate_Number}</Typography>
          </Box>
          <Box mt={2}>
            <Typography className={classes.customer}>
              {order?.summaryInfo?.pNumber}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OrderSummary;
