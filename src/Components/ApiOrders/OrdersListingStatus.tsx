import React from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import OrdersListing from "./OrdersListing";
import Button from "../Button";
import Layout from "../Layout/index";
import StatusSvg from "../../Assets/svgs/StatusSvg/StatusSvg";
import Header from "./Header";
import SideBarContent from "../OrdersStatus/SideBarContent";
import { useOrders } from "../../Hooks/orders/orders";
import { useDebounce } from "../../Hooks/useDebounce";
import { OrdersQueryFilters } from "../../Interfaces/orderInterface";

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
  const [queryFilters] = React.useState<OrdersQueryFilters>({});
  const classes = useStyles();
  const debouncedFilters = useDebounce(queryFilters, 800);
  const { data } = useOrders(debouncedFilters);
  const [activeClass, setActiveClass] = React.useState<Iprops>({
    new: false,
    pending: false,
    complete: false,
    reject: false
  });

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
          <OrdersListing orders={data} />
        </Grid>
      </Grid>
    </Layout>
  );
};
export default React.memo(OrdersListingStatus);
