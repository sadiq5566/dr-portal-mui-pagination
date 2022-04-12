import React from "react";
import { Grid, Box, Paper, Typography, InputBase, IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import SearchSvg from "../../Assets/svgs/SearchSvg/SearchSvg";
import DropDownSvg from "../../Assets/svgs/DropDownSvg/DropDownSvg";
import theme from "../../theme";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  mainHeading: {
    fontSize: "21px !important",
    fontWeight: "700 !important",
    paddingTop: "35.5px"
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
  }
});
function capitalize(s: string): string {
  return s[0].toUpperCase() + s.slice(1);
}
const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const theme = useTheme();
  const urlSplit = location.pathname.split("/", 3);
  const title = capitalize(urlSplit[2]);

  return (
    <Grid container>
      <Grid item xs={12} pt={2} px={2}>
        <Typography className={classes.mainHeading} px={2}>
          BMV {title}
        </Typography>
        <Divider sx={{ marginTop: "22px" }} />
      </Grid>
      <Grid item xs={12} pt={2} px={4}>
        <Box p={2} my={3} className={classes.MainBox}>
          <Box sx={{ display: "flex" }}>
            <Box>
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
                <Typography variant="body3" color={theme.palette.primary.dark}>
                  VIN
                </Typography>
                <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
                  <DropDownSvg />
                </IconButton>
              </Paper>
            </Box>
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
