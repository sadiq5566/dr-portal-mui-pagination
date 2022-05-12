import React from "react";
import { Grid, Typography, Box, Divider } from "@mui/material";

const OwnerInfo: React.FC = () => {
  return (
    <>
      <Typography variant="h4">Owner Info</Typography>
      <Box mt={3}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">First Name:</Typography>
            <Typography variant="h3">Amanda</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Middle:</Typography>
            <Typography variant="h3">G</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Last Name:</Typography>
            <Typography variant="h3">Barras</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Email:</Typography>
            <Typography variant="h3">paigeortiz@villa.net</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Phone:</Typography>
            <Typography variant="h3">180-598-4456</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Date of Birth:</Typography>
            <Typography variant="h3">1/03/2015</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Address 1:</Typography>
            <Typography variant="h3">625 Hilleview Drive</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Adress 2:</Typography>
            <Typography variant="h3">625 Hilleview Drive</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Date of Birth:</Typography>
            <Typography variant="h3">94103</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">City:</Typography>
            <Typography variant="h3">San Francisco</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">State</Typography>
            <Typography variant="h3">CA</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Company</Typography>
            <Typography variant="h3">Sportman</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Type:</Typography>
            <Typography variant="h3">Company</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Suffix:</Typography>
            <Typography variant="h3">type of affix</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">SSN:</Typography>
            <Typography variant="h3">MG 49 43 24 B</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Customer Id:</Typography>
            <Typography variant="h3">12345</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Minor</Typography>
            <Typography variant="h3">-</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Primary</Typography>
            <Typography variant="h3">True</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OwnerInfo;
