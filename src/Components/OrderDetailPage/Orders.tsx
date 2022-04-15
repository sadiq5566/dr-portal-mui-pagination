import React, { useState } from "react";
import { Grid, Typography, Theme, Divider, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import WestIcon from "@mui/icons-material/West";
import Button from "../Button/index";
import AttachmentDetils from "./AttachmentDetails";
import { Link } from "react-router-dom";
import { Order } from "../../Interfaces/orderInterface";
import CompleteOrder from "../Modal/CompleteOrder";
import RejectOrder from "../Modal/RejectOrder";
import TickSvg from "../../Assets/svgs/TickSvg";

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
    background: theme.palette.warning.contrastText
  }
}));

const Orders: React.FC<IProps> = ({ order }) => {
  const classes = useStyles();
  const [modal, setModal] = React.useState(false);
  const [rejectModal, setRejectModal] = React.useState(false);
  const [statusBtn, setStatusButton] = useState(false);
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
        <Box>
          {order?.Status === "new" ? (
            <>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex" }}>
                  <Typography variant="body2" className={classes.order}>
                    Order #: 124541
                  </Typography>
                  <Box mt={4}>
                    {statusBtn ? (
                      <Button
                        size="small"
                        text="Pending"
                        color="pending"
                        startIcon={<TickSvg />}
                      />
                    ) : (
                      <Button
                        size="small"
                        text="New"
                        color="New"
                        startIcon={<TickSvg />}
                      />
                    )}
                  </Box>
                </Box>
                <Box mt={4}>
                  {statusBtn ? (
                    <Button
                      variant="contained"
                      text="Complete Order"
                      size="medium"
                      color="success"
                      onClick={() => setModal(true)}
                    />
                  ) : (
                    <Button
                      text="Mark as Pending"
                      variant="contained"
                      color="new"
                      size="large"
                      onClick={() => setStatusButton(!statusBtn)}
                    />
                  )}

                  <Button
                    variant="contained"
                    text="Reject"
                    size="medium"
                    color="warning"
                    onClick={() => setRejectModal(true)}
                  />
                </Box>
              </Box>
            </>
          ) : order?.Status === "pending" ? (
            <>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex" }}>
                  <Typography variant="body2" className={classes.order}>
                    Order #: 124541
                  </Typography>
                  <Box mt={4}>
                    <Button
                      size="small"
                      text="Pending"
                      color="pending"
                      startIcon={<TickSvg />}
                    />
                  </Box>
                </Box>
                <Box mt={4}>
                  <Button
                    variant="contained"
                    text="Complete Order"
                    size="medium"
                    color="success"
                    onClick={() => setModal(true)}
                  />
                  <Button
                    variant="contained"
                    text="Reject"
                    size="medium"
                    color="warning"
                    onClick={() => setRejectModal(true)}
                  />
                </Box>
              </Box>
            </>
          ) : order.Status === "reject" ? (
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body2" className={classes.order}>
                  Order #: 124541
                </Typography>
                <Box mt={4}>
                  <Button
                    size="small"
                    text="Rejected"
                    color="ActReject"
                    startIcon={<TickSvg />}
                  />
                </Box>
              </Box>
            </Box>
          ) : order.Status === "complete" ? (
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body2" className={classes.order}>
                  Order #: 124541
                </Typography>
                <Box mt={4}>
                  <Button
                    size="small"
                    text="Complete"
                    color="actAccept"
                    startIcon={<TickSvg />}
                  />
                </Box>
              </Box>
            </Box>
          ) : (
            ""
          )}
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
