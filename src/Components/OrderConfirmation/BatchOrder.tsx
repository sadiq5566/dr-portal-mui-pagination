import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BatchImage from "../../Assets/svgs/BatchSvg/BatchSvg";

const useStyles = makeStyles({
  container: {
    width: "60% !important",
    marginTop: "60px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  batch: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  batchHeading: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: "35px",
    lineHeight: "41px",
    textTransform: "uppercase"
  }
});
const BatchOrder = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <div className={classes.batch}>
        <BatchImage />
        <Typography px={2} className={classes.batchHeading}>
          Batch Order
        </Typography>
        <Typography px={2} className={classes.batchHeading}>
          #1324514
        </Typography>
      </div>
    </Box>
  );
};
export default BatchOrder;
