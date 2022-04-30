import React from "react";
import { Stack, Box, Typography, Grid } from "@mui/material";
import Location from "./Location";
import { useTheme } from "@mui/material/styles";
import OrderCard from "./OrderCard";
import Divider from "@mui/material/Divider";
import OrderData from "../data/OrderData";
import OrderStatusMockData from "../data/OrderStatusMockData";
import { Scrollbars } from "react-custom-scrollbars-2";
const SideBarContent = () => {
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Stack
          spacing={2}
          pt={1}
          sx={{
            backgroundColor: theme.palette.common.white,
            border: 1,
            borderColor: theme.palette.lightGray.light
          }}
        >
          <Box px={2}>
            <Location />
          </Box>
          <Divider />
          <Scrollbars
            style={{
              width: "100%",
              height: 550
            }}
            autoHide
          >
            <Box px={2}>
              <Stack spacing={1}>
                <Typography variant="subtitle1" color={theme.palette.primary.dark}>
                  General Queues
                </Typography>
                {OrderStatusMockData.map((orderstatusMockData, i) => {
                  return (
                    <OrderCard
                      key={i}
                      ordersdata={orderstatusMockData}
                      orderStatus={true}
                    />
                  );
                })}
              </Stack>
              <Stack spacing={1} pt={3}>
                <Typography variant="subtitle1" color={theme.palette.primary.dark}>
                  Dealership Location Queues
                </Typography>

                <Box>
                  {OrderData.map((orderData, i) => {
                    return <OrderCard key={i} ordersdata={orderData} />;
                  })}
                </Box>
              </Stack>
            </Box>
          </Scrollbars>
        </Stack>
      </Grid>
    </Grid>
  );
};
export default SideBarContent;
