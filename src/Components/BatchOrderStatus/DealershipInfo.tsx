import React from "react";
import { Grid, Typography, Divider, Box } from "@mui/material";

const DealershipInfo: React.FC = () => {
  return (
    <Box mt={3}>
      <Grid container>
        <Box>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h4">Dealership Info</Typography>
          </Grid>
        </Box>
      </Grid>
      <Box mt={3}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Dealership:</Typography>
            <Typography variant="h3">DelearShip Name Here</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Location:</Typography>
            <Typography variant="h3">Dealership Location Here</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={4}>
        <Divider />
      </Box>
    </Box>
  );
};
export default DealershipInfo;
