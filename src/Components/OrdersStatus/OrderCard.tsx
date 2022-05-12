import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "../../theme";
import { useLocation, Link, useParams } from "react-router-dom";

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
  const location = useLocation();
  let { id } = useParams();

  const result = ordersdata.name
    .split(" ")
    .filter((s) => s)
    .join("")
    .toLowerCase();

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Link to={id ? `/${result}/${id}` : `/${result}`}>
            <Box
              className={
                location.pathname.toLowerCase() !== "/allorders" &&
                location.pathname.toLowerCase() !== "/unassignedorders" &&
                location.pathname.toLowerCase() !== "/batchorders" &&
                location.pathname.toLowerCase() !== "/neworders" &&
                location.pathname.toLowerCase() !== `/batchorderdetails/${id}` &&
                location.pathname.toLowerCase() !== "/pendingorders"
                  ? "/neworders" && orderStatus
                    ? `${classes.ordersStatus} ${
                        ordersdata?.name
                          .split(" ")
                          .filter((s) => s)
                          .join("")
                          .toLowerCase() === "neworders"
                          ? classes.active
                          : ""
                      }`
                    : classes.orderData
                  : orderStatus
                  ? `${classes.ordersStatus} ${
                      `/${ordersdata?.name}`
                        .split(" ")
                        .filter((s) => s)
                        .join("")
                        .toLowerCase() === location.pathname.toLowerCase()
                        ? classes.active
                        : ""
                    }`
                  : ordersdata?.orderStatus === false &&
                    `/${ordersdata?.name}`
                      .split(" ")
                      .filter((s) => s)
                      .join("")
                      .toLowerCase() !== location.pathname.toLowerCase()
                  ? classes.orderData
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
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default OrderCard;
