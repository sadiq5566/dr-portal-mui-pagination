import React from "react";
import { Grid, Typography, Theme, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TimerIcon from "@mui/icons-material/Timer";
import OrderSummary from "./OrderSummary";
import { Order } from "../../Interfaces/orderInterface";
import StatusSvg from "../../Assets/svgs/StatusSvg/StatusSvg";

interface IProps {
  order: Order;
}

const useStyles = makeStyles((theme: Theme) => ({
  status: {
    marginTop: "1.2rem",
    fontSize: "14px",
    fontWeight: "bold"
  },
  rightDive: {
    borderRadius: "8px",
    backgroundColor: theme.palette.primary.light,
    border: `1px solid ${theme.palette.secondary.contrastText}`,
    alignItems: "center"
  },
  accepted: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.warning.dark,
    height: "22px !important",
    textTransform: "none",
    borderRadius: "7px",
    border: `1px solid ${theme.palette.success.contrastText} !important`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "1.2rem",
    fontSize: "10px"
  },
  accept: {
    marginTop: "2px !important",
    fontSize: "10px !important",
    paddingLeft: "8px",
    fontWeight: "bold !important"
  },
  lock: {
    display: "flex",
    alignItems: "center",
    background: theme.palette.info.main
  },
  timeUntil: {
    borderRadius: "6px",
    marginTop: "1rem",
    border: `1px solid ${theme.palette.success.contrastText}`,
    background: theme.palette.info.main
  },
  complete: {
    background: theme.palette.info.light,
    border: `1px solid ${theme.palette.success.main}`,
    borderRadius: "6px",
    marginTop: "1rem"
  },
  timer: {
    marginTop: "0.2rem !important",
    fontWeight: "bold !important",
    fontSize: "24px !important",
    color: theme.palette.text.primary
  },

  text: {
    marginTop: "0.3rem important"
  },
  icontext: {
    display: "flex",
    alignItems: "center"
  },
  person: {
    fontSize: "12px !important",
    fontWeight: 400,
    color: theme.palette.text.primary
  },
  icon: {
    color: theme.palette.primary.dark,
    marginRight: "0.2rem"
  },
  reject: {
    background: theme.palette.error.main,
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: "6px",
    marginTop: "1rem"
  },
  reason: {
    fontSize: "12px !important",
    color: theme.palette.secondary.light
  },
  comment: {
    fontSize: "12px !important",
    fontWeight: "bold !important",
    color: theme.palette.secondary.light
  }
}));

const OrderStatus: React.FC<IProps> = ({ order }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.rightDive} px={2} pb={2} pt={1}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Box className={classes.status}>Status</Box>

          <Box className={classes.accepted} px={1}>
            {order.Status === "new" ? (
              <>
                <Box className={classes.lock}>
                  <StatusSvg status="new" />
                  <Typography className={classes.accept}>New</Typography>
                </Box>
              </>
            ) : order.Status === "complete" ? (
              <>
                <Box className={classes.lock}>
                  <StatusSvg status="complete" />
                  <Typography className={classes.accept}>Complete</Typography>
                </Box>
              </>
            ) : order.Status === "reject" ? (
              <>
                <Box className={classes.lock}>
                  <StatusSvg status="reject" />
                  <Typography className={classes.accept}>Rejected</Typography>
                </Box>
              </>
            ) : (
              <>
                <Box className={classes.lock}>
                  <StatusSvg status="locked" />
                  <Typography className={classes.accept}>Locked</Typography>
                </Box>
              </>
            )}
          </Box>
        </Box>

        {order.Status === "complete" ? (
          <Box className={classes.complete}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                px: 2,
                py: 1
              }}
            >
              <Box>
                <Typography variant="h5">Receipt Number:</Typography>
                <Typography mt={1} variant="h5">
                  Total Amount Paid:
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5">1345646</Typography>
                <Typography mt={1} variant="h5">
                  $142.00
                </Typography>
              </Box>
            </Box>
          </Box>
        ) : order.Status === "reject" ? (
          <>
            <Box className={classes.reject}>
              <Box
                sx={{
                  px: 2,
                  py: 1
                }}
              >
                <Box>
                  <Typography className={classes.reason}>Reason:</Typography>
                  <Typography className={classes.comment}>
                    Some reason rejection reason in one line
                  </Typography>
                </Box>
              </Box>
            </Box>
          </>
        ) : (
          <Box className={classes.timeUntil}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                px: 1,
                py: 1
              }}
            >
              <Box>
                <Typography variant="h5" className={classes.text}>
                  Time Until
                </Typography>
                <Typography variant="h5">Unlocked</Typography>
              </Box>
              <Box className={classes.icontext}>
                <TimerIcon className={classes.icon} />
                <Typography className={classes.timer}>03:12:11</Typography>
              </Box>
            </Box>
          </Box>
        )}
        {order.Status === "new" ? (
          <Box mt={2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Typography variant="h5">Locked By:</Typography>

              <Typography className={classes.person}>Persons Name</Typography>
            </Box>
          </Box>
        ) : order.Status === "complete" ? (
          <Box mt={2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Typography variant="h5">Accepted By:</Typography>

              <Typography className={classes.person}>Persons Name</Typography>
            </Box>
          </Box>
        ) : order.Status === "reject" ? (
          <Box mt={2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Typography variant="h5">Rejected By:</Typography>

              <Typography className={classes.person}>Persons Name</Typography>
            </Box>
          </Box>
        ) : (
          <Box mt={2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Typography variant="h5">Locked By:</Typography>

              <Typography className={classes.person}>Person Name</Typography>
            </Box>
          </Box>
        )}
      </Box>
      <Grid item mt={3}>
        <OrderSummary order={order} />
      </Grid>
    </>
  );
};

export default OrderStatus;
