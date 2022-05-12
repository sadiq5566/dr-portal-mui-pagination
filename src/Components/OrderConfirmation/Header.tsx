import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LogoSvg from "../../Assets/svgs/LogoSvg";

const useStyles = makeStyles({
  container: {
    width: "60% !important",
    marginTop: "60px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  logoItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  dateItem: {
    textAlign: "end"
  },
  mainHeading: {
    display: "inline-block",
    fontSize: "24px !important",
    fontWeight: "700 !important",
    lineHeight: "28px !important"
  }
});
const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} className={classes.logoItem}>
          <LogoSvg />
          <Typography className={classes.mainHeading} px={2}>
            DR Porter
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={12} className={classes.dateItem}>
          <Typography px={2}>Location Name Here</Typography>
          <Typography px={2}>9/20/2021</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
