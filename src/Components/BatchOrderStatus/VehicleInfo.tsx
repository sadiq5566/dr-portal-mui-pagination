import React from "react";
import { Grid, Typography, Divider, Box } from "@mui/material";

const VehicleInfo: React.FC = () => {
  return (
    <Box mt={3}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h4">Vehicle Info</Typography>
        </Grid>
      </Grid>
      <Box mt={3}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">VIN:</Typography>
            <Typography variant="h3">WN3QT78K5LX79307</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Year:</Typography>
            <Typography variant="h3">2010</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Make:</Typography>
            <Typography variant="h3">Hyndai</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={4}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Model:</Typography>
            <Typography variant="h3">Accent</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Body:</Typography>
            <Typography variant="h3">Hatchback.Sedan</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Condition:</Typography>
            <Typography variant="h3">Good</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={4}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">odometer Status</Typography>
            <Typography variant="h3">Not-Actual</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">odometer:</Typography>
            <Typography variant="h3">246750</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={4}>
        <Divider />
      </Box>
    </Box>
  );
};

export default VehicleInfo;
