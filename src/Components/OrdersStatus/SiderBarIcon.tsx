import React from "react";
import { Stack, Box } from "@mui/material";
import LogoSvg from "../../Assets/svgs/LogoSvg";
import StarIcon from "../../Assets/svgs/StarIcon";
import WorldIcon from "../../Assets/svgs/WorldIcon";
import HistoryIcon from "../../Assets/svgs/HistoryIcon";
import SettingIcon from "../../Assets/svgs/SettingIcon";
import Modal from "../Modal/index";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  mainBox: {
    cursor: "pointer"
  }
});
const SideBarIcon = () => {
  const classes = useStyles();
  return (
    <Box>
      <Stack spacing={2} px={3} pt={4}>
        <Box pb={3} className={classes.mainBox}>
          <LogoSvg />
        </Box>
        <Link to="/">
          <Box className={classes.mainBox}>
            <StarIcon />
          </Box>
        </Link>
        <Box className={classes.mainBox}>
          <WorldIcon />
        </Box>
        <Link to="/orderdetails/1">
          <Box className={classes.mainBox}>
            <HistoryIcon />
          </Box>
        </Link>
        <Box className={classes.mainBox}>
          <SettingIcon />
        </Box>
        <Box pt={33}>
          <Modal />
        </Box>
      </Stack>
    </Box>
  );
};
export default SideBarIcon;
