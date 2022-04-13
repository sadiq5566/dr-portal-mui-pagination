import React from "react";
import { Stack, Box, Typography, Grid } from "@mui/material";
import Location from "../OrdersStatus/Location";
import { useTheme } from "@mui/material/styles";
import BmvCard from "./BmvCard";
import Divider from "@mui/material/Divider";
import BmvSettingsMockData from "../data/BmvSettingsMockData";

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
            height: "100vh",
            border: 1,
            borderColor: theme.palette.lightGray.light
          }}
        >
          <Box px={2}>
            <Location />
          </Box>
          <Divider />
          {/* <Scrollbars
            style={{
              width: "100%",
              height: 525
            }}
            autoHide
          ></Scrollbars> */}
          <Box px={2} pt={1}>
            <Stack spacing={1}>
              <Typography variant="subtitle1" color={theme.palette.primary.dark}>
                BMV Settings
              </Typography>
              {BmvSettingsMockData.map((BmvSettingMockData, i) => {
                return <BmvCard key={i} bmvdata={BmvSettingMockData} bmvStatus={true} />;
              })}
            </Stack>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};
export default SideBarContent;
