import React from "react";
import { Stack, Box, Tabs, Tab } from "@mui/material";
import LogoSvg from "../../Assets/svgs/LogoSvg";
import ApiIcon from "@mui/icons-material/Api";
import LanguageIcon from "@mui/icons-material/Language";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import Modal from "../Modal/index";
import { makeStyles } from "@mui/styles";
import { useLocation, Link } from "react-router-dom";
const useStyles = makeStyles({
  mainBox: {
    cursor: "pointer"
  }
});
const SideBarIcon = () => {
  const classes = useStyles();
  const location = useLocation();
  const values = ["/", "/orderdetails/1"];

  return (
    <Box>
      <Stack spacing={2} px={3} pt={4}>
        <Box pb={3} className={classes.mainBox}>
          <LogoSvg />
        </Box>
      </Stack>
      <Tabs
        value={location.pathname !== "/" ? location.pathname : "/"}
        aria-label="icon tabs example"
        orientation="vertical"
      >
        <Tab
          icon={<ApiIcon />}
          value={values[0]}
          aria-label="Star"
          component={Link}
          to="/"
        />

        <Tab icon={<LanguageIcon />} aria-label="World" value />

        <Tab
          icon={<HistoryIcon />}
          aria-label="History"
          component={Link}
          value={values[1]}
          to="/orderdetails/1"
        />

        <Tab icon={<SettingsIcon />} aria-label="Setting" value />
      </Tabs>
      <Stack spacing={2} px={3} pt={4}>
        <Box pt={33}>
          <Modal />
        </Box>
      </Stack>
    </Box>
  );
};
export default SideBarIcon;
