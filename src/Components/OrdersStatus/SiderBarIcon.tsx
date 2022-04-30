import React from "react";
import { Stack, Box, Tabs, Tab } from "@mui/material";
import LogoSvg from "../../Assets/svgs/LogoSvg";
import ApiIcon from "@mui/icons-material/Api";
import LanguageIcon from "@mui/icons-material/Language";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import ProfileModal from "../Modal/ProfileModal";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

import { useLocation, Link, useParams } from "react-router-dom";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const useStyles = makeStyles({
  mainBox: {
    cursor: "pointer"
  }
});
const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    padding: theme.spacing(1)
  }
}));

const SideBarIcon: React.FC = () => {
  let params = useParams();
  const { id = 1, name = "Owners" } = params;
  const classes = useStyles();
  const location = useLocation();
  const values: string[] = ["/", `/orderdetails/${id}`, `/bmv/${name}`];

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
        TabIndicatorProps={{
          style: {
            display: "none"
          }
        }}
      >
        <Tab
          label={
            <BootstrapTooltip title="API Orders" placement="right">
              <ApiIcon />
            </BootstrapTooltip>
          }
          value={values[0]}
          aria-label="Star"
          component={Link}
          to="/"
        />

        <Tab
          label={
            <BootstrapTooltip title="Website Orders" placement="right">
              <LanguageIcon />
            </BootstrapTooltip>
          }
          aria-label="World"
          value
        />

        <Tab
          label={
            <BootstrapTooltip title="History" placement="right">
              <HistoryIcon />
            </BootstrapTooltip>
          }
          aria-label="History"
          component={Link}
          value={values[1]}
          to={`/orderdetails/${id}`}
        />

        <Tab
          label={
            <BootstrapTooltip title="BMV Settings" placement="right">
              <SettingsIcon />
            </BootstrapTooltip>
          }
          aria-label="Setting"
          value={values[2]}
          component={Link}
          to={`/bmv/${name}`}
        />
      </Tabs>
      <Stack spacing={2} px={3} pt={4}>
        <Box pt={33}>
          <ProfileModal />
        </Box>
      </Stack>
    </Box>
  );
};
export default SideBarIcon;
