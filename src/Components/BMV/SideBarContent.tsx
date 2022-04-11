import React from "react";
import { Stack, Box, Typography, Grid } from "@mui/material";
import Location from "../OrdersStatus/Location";
import { useTheme } from "@mui/material/styles";
import BmvCard from "./BmvCard";
import Divider from "@mui/material/Divider";
import OrderData from "../data/OrderData";
import BmvSettingsMockData from "../data/BmvSettingsMockData";
import * as icons from "@material-ui/icons";
// import Icon from "@material-ui/core/Icon";

import { Scrollbars } from "react-custom-scrollbars-2";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupsIcon from "@mui/icons-material/Groups";
// interface Icoons {
//   icon: keyof typeof icons;
// }

const SideBarContent = () => {
  // const iconsArr: Icoons[] = [
  //   { icon: "Home" },
  //   { icon: "AccountCircle" },
  //   { icon: "Settings" },

  //   { icon: "Home" }
  // ];

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
