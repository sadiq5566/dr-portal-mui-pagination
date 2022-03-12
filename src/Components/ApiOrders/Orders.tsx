import React from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import OrdersListing from "./OrdersListing";
import Button from "../Button";
import Layout from "../Layout/index";
import StatusSvg from "../../Assets/svgs/StatusSvg/StatusSvg";
import Status from "../OrdersStatus/Status";
import Header from "./Header";

interface Iprops {
  new?: boolean;
  accept?: boolean;
  lock?: boolean;
  complete?: boolean;
  reject?: boolean;
}

const useStyles = makeStyles({
  mainBox: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 32px 0px 16px"
  },
  orderListing: {
    padding: "5px 32px 0px 32px !important"
  }
});

const Orders = () => {
  const [activeClass, setActiveClass] = React.useState<Iprops>({
    new: false,
    accept: false,
    lock: false,
    complete: false,
    reject: false
  });
  const classes = useStyles();

  return (
    <Layout sideContent={<Status />}>
      <Grid container spacing={2}>
        <Header />
        <Grid item xs={12}>
          <Box className={classes.mainBox}>
            <Box sx={{ display: "flex" }}>
              <Button
                size="small"
                variant="outlined"
                text="New"
                color={activeClass.new ? "ActiveButtonStatus" : "chooseStatus"}
                onClick={() =>
                  setActiveClass({
                    ...activeClass,
                    new: !activeClass.new
                  })
                }
                startIcon={<StatusSvg status="new" activeClass={activeClass.new} />}
              />
              <Box px={1}>
                <Button
                  size="small"
                  variant="outlined"
                  text="Accepted"
                  color={
                    activeClass.accept
                      ? "ActiveButtonStatus" && "ActiveAccept"
                      : "chooseStatus"
                  }
                  onClick={() =>
                    setActiveClass({
                      ...activeClass,
                      accept: !activeClass.accept
                    })
                  }
                  startIcon={
                    <StatusSvg status="accept" activeClass={activeClass.accept} />
                  }
                />
              </Box>
              <Box pr={1}>
                <Button
                  size="small"
                  variant="outlined"
                  text="Locked"
                  color={
                    activeClass.lock
                      ? "ActiveButtonStatus" && "ActiveLock"
                      : "chooseStatus"
                  }
                  onClick={() =>
                    setActiveClass({
                      ...activeClass,
                      lock: !activeClass.lock
                    })
                  }
                  startIcon={<StatusSvg status="locked" activeClass={activeClass.lock} />}
                />
              </Box>
              <Box pr={1}>
                <Button
                  size="small"
                  variant="outlined"
                  text="Complete"
                  color={
                    activeClass.complete
                      ? "ActiveButtonStatus" && "ActiveComp"
                      : "chooseStatus"
                  }
                  onClick={() =>
                    setActiveClass({
                      ...activeClass,
                      complete: !activeClass.complete
                    })
                  }
                  startIcon={
                    <StatusSvg status="complete" activeClass={activeClass.complete} />
                  }
                />
              </Box>
              <Button
                size="small"
                variant="outlined"
                text="Rejected"
                color={
                  activeClass.reject
                    ? "ActiveButtonStatus" && "ActiveReject"
                    : "chooseStatus"
                }
                onClick={() =>
                  setActiveClass({
                    ...activeClass,
                    reject: !activeClass.reject
                  })
                }
                startIcon={<StatusSvg status="reject" activeClass={activeClass.reject} />}
              />
            </Box>
            <Box>
              <Button
                size="medium"
                variant="outlined"
                text={
                  activeClass.new ||
                  activeClass.accept ||
                  activeClass.lock ||
                  activeClass.complete ||
                  activeClass.reject
                    ? "Lock Orders"
                    : "Accept & Lock"
                }
                color="AccLock"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.orderListing}>
          <OrdersListing />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Orders;
