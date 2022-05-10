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
    backgroundColor: theme.palette.success.light,
    color: theme.palette.primary.dark,

    "&:hover": {
      backgroundColor: theme.palette.warning.contrastText,
      color: theme.palette.success.light
    }
  },

  orderData: {
    display: "flex",
    justifyContent: "space-between",
    height: "45px",
    alignItems: "center",
    backgroundColor: theme.palette.success.light,
    paddingTop: "4px",
    paddingBottom: "4px",
    marginBottom: "8px",
    color: theme.palette.primary.dark
  },
  active: {
    backgroundColor: theme.palette.warning.contrastText,
    color: theme.palette.success.light
  },

  MiniText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  MiniTextColor: {
    color: theme.palette.success.dark
  },

  ordersStatusFont: {
    fontSize: theme.typography.subtitle1.fontSize
  },
  ordersStatusBox: {
    display: "flex",
    flexDirection: "column"
  },
  RegularFont: {
    fontFamily: "regular-400 !important"
  }
});
const OrderCard: React.FC<props> = ({ ordersdata, orderStatus }: props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Box
            className={
              orderStatus
                ? `${classes.ordersStatus} ${
                    ordersdata?.orderStatus ? classes.active : ""
                  }`
                : classes.orderData
            }
            px={2}
            sx={{ border: 1, borderColor: "grey.300", borderRadius: "5px" }}
          >
            <Box className={classes.ordersStatusBox}>
              <Typography variant="subtitle1" className={classes.RegularFont}>
                {ordersdata.name}
              </Typography>
              <Typography variant="body4" className={classes.RegularFont}>
                {ordersdata.location}
              </Typography>
            </Box>
            <Box
              className={
                ordersdata.orderStatus ? classes.MiniTextColor : classes.MiniText
              }
            >
              <Typography variant="body3" className={classes.RegularFont}>
                {ordersdata?.numbering}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default OrderCard;
