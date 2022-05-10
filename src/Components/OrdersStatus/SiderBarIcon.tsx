import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import LogoSvg from "../../Assets/svgs/LogoSvg";
import StarIcon from "../../Assets/svgs/StarIcon";
import WorldIcon from "../../Assets/svgs/WorldIcon";
import HistoryIcon from "../../Assets/svgs/HistoryIcon";
import SettingIcon from "../../Assets/svgs/SettingIcon";
import ProfileModal from "../Modal/ProfileModal";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import theme from "../../theme";

const useStyles = makeStyles({
  mainBox: {
    cursor: "pointer"
  },
  activeClass: {
    height: "35px",
    minWidth: "35px",
    border: 1,
    borderColor: "grey.300",
    borderRadius: "5px",
    backgroundColor: "#F6F6F7",
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  }
});
const SideBarIcon = () => {
  const [isActive, setActive] = useState("orders");
  const classes = useStyles();
  return (
    <Box>
      <Stack spacing={2} px={2} pt={4} alignItems="center">
        <Box pb={3} className={classes.mainBox}>
          <LogoSvg />
        </Box>
        <Link to="/">
          <Box
            className={`${classes.mainBox} ${
              isActive === "orders" ? classes.activeClass : ""
            }`}
            onClick={() => setActive("orders")}
          >
            <StarIcon active={isActive === "orders" ? "active" : ""} />
          </Box>
        </Link>
        <Box
          className={`${classes.mainBox} ${
            isActive === "globe" ? classes.activeClass : ""
          }`}
          onClick={() => setActive("globe")}
        >
          <WorldIcon active={isActive === "globe" ? "active" : ""} />
        </Box>
        <Link to="/orderdetails/1">
          <Box
            className={`${classes.mainBox} ${
              isActive === "history" ? classes.activeClass : ""
            }`}
            onClick={() => setActive("history")}
          >
            <HistoryIcon active={isActive === "history" ? "active" : ""} />
          </Box>
        </Link>
        <Box
          className={`${classes.mainBox} ${
            isActive === "settings" ? classes.activeClass : ""
          }`}
          onClick={() => setActive("settings")}
        >
          <SettingIcon active={isActive === "settings" ? "active" : ""} />
        </Box>
        <Box pt={33}>
          <ProfileModal />
        </Box>
      </Stack>
    </Box>
  );
};
export default SideBarIcon;
