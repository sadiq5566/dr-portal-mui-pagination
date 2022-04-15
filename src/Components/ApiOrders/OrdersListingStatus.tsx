import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import OrdersListing from "./OrdersListing";
import Button from "../Button";
import Layout from "../Layout/index";
import StatusSvg from "../../Assets/svgs/StatusSvg/StatusSvg";
import Header from "./Header";
import SideBarContent from "../OrdersStatus/SideBarContent";
import TableMockData from "../data/TableMockData";

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
interface Iprops {
  new?: boolean;
  pending?: boolean;
  complete?: boolean;
  reject?: boolean;
}

const OrdersListingStatus = () => {
  const [activeClass, setActiveClass] = useState<Iprops>({
    new: false,
    pending: false,
    complete: false,
    reject: false
  });
  const [orders, setOrders] = useState(TableMockData);

  useEffect(() => {
    const filterStatus = activeClass.new
      ? "new"
      : activeClass.pending
      ? "pending"
      : activeClass.complete
      ? "complete"
      : activeClass.reject
      ? "reject"
      : null;
    const filterItem = (categItem: any) => {
      const updateItems = TableMockData.filter((curElem) => {
        return curElem.Status === categItem;
      });
      setOrders(updateItems);
      if (!filterStatus) {
        setOrders(TableMockData);
      }
    };
    filterItem(filterStatus);
  }, [activeClass]);
  const classes = useStyles();
  return (
    <Layout sideContent={<SideBarContent />}>
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
                onClick={() => {
                  setActiveClass((current) => ({ ...current, new: !activeClass.new }));
                }}
                startIcon={<StatusSvg status="new" activeClass={activeClass.new} />}
              />
              <Box px={1}>
                <Button
                  size="small"
                  variant="outlined"
                  text="Pending"
                  color={
                    activeClass.pending
                      ? "ActiveButtonStatus" && "ActivePending"
                      : "chooseStatus"
                  }
                  onClick={() =>
                    setActiveClass((current) => ({
                      ...current,
                      pending: !current.pending
                    }))
                  }
                  startIcon={
                    <StatusSvg status="pending" activeClass={activeClass.pending} />
                  }
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
                    setActiveClass((current) => ({
                      ...current,
                      complete: !activeClass.complete
                    }))
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
                  setActiveClass((current) => ({
                    ...current,
                    reject: !activeClass.reject
                  }))
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
                  activeClass.pending ||
                  activeClass.complete ||
                  activeClass.reject
                    ? "Lock Orders"
                    : "Batch Order"
                }
                color="Batchorder"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.orderListing}>
          <OrdersListing data={orders} />
        </Grid>
      </Grid>
    </Layout>
  );
};
export default OrdersListingStatus;
