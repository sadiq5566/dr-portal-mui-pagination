import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "../../theme";

interface IProps {
  name: string;
  location: string;
  numbering: string;
  orderStatus?: boolean;
  id: string;
}
interface props {
  ordersdata: IProps;
  orderStatus?: Boolean;
  divStatus?: Boolean;
}
const useStyles: any = makeStyles({
  ordersStatus: {
    display: "flex",
    justifyContent: "space-between",
    height: "40px",
    borderRadius: "5px",
    alignItems: "center",
    backgroundColor: "#FFF",
    color: "#585F67",

    "&:hover": {
      backgroundColor: "#4363EA",
      color: "#FFF"
    }
  },

  orderData: {
    display: "flex",
    justifyContent: "space-between",
    height: "45px",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: "4px",
    paddingBottom: "4px",
    marginBottom: "8px",
    color: "#585F67"
  },
  active: {
    backgroundColor: "#4363EA !important",
    color: "#FFF"
  },

  MiniText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  MiniTextColor: {
    color: "#D5D9DE"
  },

  ordersStatusFont: {
    fontSize: theme.typography.subtitle1.fontSize
  },
  ordersStatusBox: {
    display: "flex",
    flexDirection: "column"
  }
});
const OrderCard: React.FC<props> = ({ ordersdata, orderStatus }: props) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          className={
            orderStatus
              ? `${classes.ordersStatus} ${ordersdata?.orderStatus ? classes.active : ""}`
              : classes.orderData
          }
          px={2}
          sx={{ border: 1, borderColor: "grey.300", borderRadius: "5px" }}
        >
          <Box className={classes.ordersStatusBox}>
            <Typography variant="subtitle1">{ordersdata.name}</Typography>
            <Typography variant="body4">{ordersdata.location}</Typography>
          </Box>
          <Box
            className={ordersdata.orderStatus ? classes.MiniTextColor : classes.MiniText}
          >
            <Typography variant="body3">{ordersdata?.numbering}</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default OrderCard;
