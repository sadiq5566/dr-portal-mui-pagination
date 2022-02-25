import React from "react";
import { Stack, Box } from "@mui/material";
import LogoSvg from "../../Assets/Svgs/LogoSvg";
import StarIcon from "../../Assets/Svgs/StarIcon";
import WorldIcon from "../../Assets/Svgs/WorldIcon";
import HistoryIcon from "../../Assets/Svgs/HistoryIcon";
import SettingIcon from "../../Assets/Svgs/SettingIcon";
import ProfileImg from "../../Assets/images/ProfileImg.png";
const SideBar = () => {
  return (
    <Box>
      <Stack spacing={2} px={3} pt={4}>
        <Box pb={3}>
          <LogoSvg />
        </Box>
        <Box>
          <StarIcon />
        </Box>
        <Box>
          <WorldIcon />
        </Box>
        <Box>
          <HistoryIcon />
        </Box>
        <Box>
          <SettingIcon />
        </Box>
        <Box pt={33}>
          <img src={ProfileImg} alt="profile_picture" />
        </Box>
      </Stack>
    </Box>
  );
};

export default SideBar;
