import React from "react";
import { Grid, Typography, Theme, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BatchOrderSummary from "./BatchOrderSummary";
import CircleIcon from "@mui/icons-material/Circle";
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
  },
  completed: {
    width: "90px",
    height: "28px",
    background: "#F9FBFD",
    border: "1px solid #F2F1F6",
    boxSizing: "border-box",
    borderRadius: "3px",
    textAlign: "center",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    // lineHeight: "9px",
    textTransform: "capitalize"
  }
}));

const OrderStatus: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.rightDive} px={2} pb={2} pt={1}>
        <Box mt={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Typography variant="h5">Status</Typography>
            <Typography className={classes.completed}>
              <CircleIcon color="success" fontSize="inherit" /> Complete
            </Typography>
          </Box>
        </Box>
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
      </Box>
      <Grid item mt={3}>
        <BatchOrderSummary />
      </Grid>
    </>
  );
};

export default OrderStatus;
