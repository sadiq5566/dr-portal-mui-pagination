import React from "react";
import { Stack, Box } from "@mui/material";
import LogoSvg from "../../Assets/svgs/LogoSvg";
import StarIcon from "../../Assets/svgs/StarIcon";
import WorldIcon from "../../Assets/svgs/WorldIcon";
import HistoryIcon from "../../Assets/svgs/HistoryIcon";
import SettingIcon from "../../Assets/svgs/SettingIcon";
import Modal from "../Modal/index";
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
          <Modal />
        </Box>
      </Stack>
    </Box>
  );
};

export default SideBar;
