import React from "react";
import { Grid, Box, Paper, Typography, InputBase, IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import SearchSvg from "../../Assets/svgs/SearchSvg/SearchSvg";
import DropDownSvg from "../../Assets/svgs/DropDownSvg/DropDownSvg";
const useStyles = makeStyles({
  mainHeading: {
    fontSize: "21px !important",
    fontWeight: "700 !important",
    paddingTop: "35.5px"
  },
  SearchDiv: {
    background: "#24BD86",
    height: "40px",
    width: "40px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px"
  },
  MainBox: {
    backgroundColor: " #F6F6F7  ",
    borderRadius: "5px"
  }
});
const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography className={classes.mainHeading} px={2}>
          API Orders
        </Typography>
        <Divider sx={{ marginTop: "22px" }} />
      </Grid>
      <Grid item xs={12} pt={2} px={2}>
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
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33333 7.33333H7.80667L7.62 7.15333C8.27333 6.39333 8.66667 5.40667 8.66667 4.33333C8.66667 1.94 6.72667 0 4.33333 0C1.94 0 0 1.94 0 4.33333C0 6.72667 1.94 8.66667 4.33333 8.66667C5.40667 8.66667 6.39333 8.27333 7.15333 7.62L7.33333 7.80667V8.33333L10.6667 11.66L11.66 10.6667L8.33333 7.33333V7.33333ZM4.33333 7.33333C2.67333 7.33333 1.33333 5.99333 1.33333 4.33333C1.33333 2.67333 2.67333 1.33333 4.33333 1.33333C5.99333 1.33333 7.33333 2.67333 7.33333 4.33333C7.33333 5.99333 5.99333 7.33333 4.33333 7.33333Z"
                  fill=" #FFFFFF"
                />
              </svg>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
