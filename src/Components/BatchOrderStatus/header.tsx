import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    width: "60% !important",
    marginTop: "50px",
    marginLeft: "auto",
    marginRight: "auto"
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
        <Typography className={classes.mainHeading} px={2}>
          Order#: 124541
        </Typography>
      </Grid>
      <hr />
    </Box>
  );
};
export default Header;
