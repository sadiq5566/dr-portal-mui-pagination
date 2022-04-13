import React from "react";
import { Grid, Typography, Theme, Divider, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import WestIcon from "@mui/icons-material/West";
import Button from "../Button/index";
import AttachmentDetils from "./AttachmentDetails";
import { Link } from "react-router-dom";
import { Order } from "../../Interfaces/orderInterface";
import CompleteOrder from "../Modal/CompleteOrder";
import RejectOrder from "../Modal/RejectOrder";

interface IProps {
  order: Order;
}

const useStyles = makeStyles((theme: Theme) => ({
  arrow: {
    display: "flex",
    alignItems: "center",
    paddingTop: "2rem",
    cursor: "pointer",
    paddingBottom: "25px"
  },
  arrowIcon: {
    color: theme.palette.info.dark,
    textDecoration: "none"
  },
  back: {
    paddingLeft: "0.7rem",
    color: theme.palette.info.dark
  },
  order: {
    display: "flex",
    alignItems: "center",
    paddingTop: "2rem",
    paddingBottom: "2rem"
  },
  accepted: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.warning.dark,
    textTransform: "none",

    borderRadius: "7px",
    border: `1px solid ${theme.palette.success.contrastText}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "10px"
  }
}));

const Orders: React.FC<IProps> = ({ order }) => {
  const classes = useStyles();
  const [modal, setModal] = React.useState(false);
  const [rejectModal, setRejectModal] = React.useState(false);
  return (
    <>
      <Box pl={3}>
        <Grid container>
          <Link to="/" className={classes.arrowIcon}>
            <Grid item lg={2}>
              <Box className={classes.arrow}>
                <WestIcon />
                <Typography variant="h6" className={classes.back}>
                  Back
                </Typography>
              </Box>
            </Grid>
          </Link>
          <Grid item lg={9}></Grid>
        </Grid>
      </Box>
      <Box>
        <Divider />
      </Box>
      <Box px={3}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="body2" className={classes.order}>
              Order #: 124541
              <Box className={classes.accepted} ml={2} px={1}></Box>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <>
              {order?.Status === "new" ? (
                <Button
                  text="Mark as Pending"
                  variant="contained"
                  color="new"
                  size="large"
                />
              ) : order?.Status === "complete" ? (
                <Button
                  text="Complete Order"
                  variant="contained"
                  color="success"
                  size="large"
                  onClick={() => setModal(true)}
                />
              ) : (
                <Button
                  text="Lock Order"
                  variant="contained"
                  color="secondary"
                  size="large"
                />
              )}
            </>
            <Box>
              <Button
                variant="contained"
                text="Reject"
                size="medium"
                color="warning"
                onClick={() => setRejectModal(true)}
              />
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box mt={4}>
          <AttachmentDetils order={order} />
        </Box>
        {modal && <CompleteOrder setModal={setModal} />}
        {rejectModal && <RejectOrder setRejectModal={setRejectModal} />}
      </Box>
    </>
  );
};

export default Orders;
