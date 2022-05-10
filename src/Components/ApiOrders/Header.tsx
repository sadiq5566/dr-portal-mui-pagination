import React from "react";
import {
  Grid,
  Box,
  Paper,
  Typography,
  InputBase,
  IconButton,
  Stack
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import SearchSvg from "../../Assets/svgs/SearchSvg/SearchSvg";
import DropDownSvg from "../../Assets/svgs/DropDownSvg/DropDownSvg";
import theme from "../../theme";
const useStyles = makeStyles({
  mainHeading: {
    fontSize: "21px !important",
    paddingTop: "35.5px",
    fontFamily: "robotoBold-700 !important"
  },
  SearchDiv: {
    background: theme.palette.success.main,
    height: "40px",
    width: "40px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px"
  },
  MainBox: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "5px"
  },
  RegularFont: {
    fontFamily: "regular-400 !important"
  }
});
const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item xs={12} pt={2} px={2}>
        <Typography className={classes.mainHeading} px={2}>
          API Orders
        </Typography>
        <Divider sx={{ marginTop: "22px" }} />
      </Grid>
      <Grid item xs={12} pt={2} px={4}>
        <Box p={2} my={3} className={classes.MainBox}>
          <Box sx={{ display: "flex" }}>
            <Stack alignItems="center" justifyContent="center">
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 256
                }}
              >
                <IconButton sx={{ p: "10px" }} aria-label="menu">
                  <SearchSvg />
                </IconButton>
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
                <Typography
                  className={classes.RegularFont}
                  variant="body3"
                  color={theme.palette.primary.dark}
                >
                  VIN
                </Typography>
                <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
                  <DropDownSvg />
                </IconButton>
              </Paper>
            </Stack>
            <Box className={classes.SearchDiv}>
              <SearchSvg color="whiteColor" />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Header;
