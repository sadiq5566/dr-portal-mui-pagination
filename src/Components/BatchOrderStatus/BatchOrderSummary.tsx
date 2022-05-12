import React from "react";
import { Typography, Theme, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  rightDiv: {
    borderRadius: "8px",
    background: theme.palette.primary.light,
    border: `1px solid ${theme.palette.secondary.contrastText}`
  },
  summary: {
    color: theme.palette.text.primary,
    fontSize: "14px !important",
    fontWeight: "bold !important"
  },
  customer: {
    fontWeight: 400,
    fontSize: "12px !important",
    color: theme.palette.text.primary
  }
}));

const BatchOrderSummary: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Box px={2} py={2} className={classes.rightDiv}>
        <Typography py={1} className={classes.summary}>
          Summary
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Typography variant="h5">Customer</Typography>

          <Typography className={classes.customer}>Customer Name</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Box mt={2}>
            <Typography variant="h5">Order Id</Typography>
          </Box>
          <Box mt={2}>
            <Typography className={classes.customer}>Accent</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Box mt={2}>
            <Typography variant="h5">VIN</Typography>
          </Box>
          <Box mt={2}>
            <Typography className={classes.customer}>2010</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Box mt={2}>
            <Typography variant="h5">Status</Typography>
          </Box>
          <Box mt={2}>
            <Typography className={classes.customer}>HatchBack. Sedan</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Box mt={2}>
            <Typography variant="h5">PlateType</Typography>
          </Box>
          <Box mt={2}>
            <Typography className={classes.customer}>Hyndai</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Box mt={2}>
            <Typography variant="h5">PlateNumber</Typography>
          </Box>
          <Box mt={2}>
            <Typography className={classes.customer}>Good</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BatchOrderSummary;
