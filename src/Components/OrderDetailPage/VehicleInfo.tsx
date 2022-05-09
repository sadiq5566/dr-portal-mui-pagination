import React from "react";
import { Grid, Typography, Divider, Box } from "@mui/material";
import { Order } from "../../Interfaces/orderInterface";

interface IProps {
  order?: Order | undefined;
}

const VehicleInfo = ({ order }) => {
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
            <Typography variant="h5">{order?.attributes?.vehicle?.vin}</Typography>
            <Typography variant="h3">{order?.vehicleInfo?.wqn}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.attributes?.vehicle?.year}</Typography>
            <Typography variant="h3">
              {order?.attributes?.vehicle?.emissions_check_expiration_date}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.attributes?.vehicle?.make}</Typography>
            <Typography variant="h3">Six</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={4}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.vehicleInfo?.bmw}</Typography>
            <Typography variant="h3">{order?.attributes?.vehicle?.model}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.vehicleInfo?.accent}</Typography>
            <Typography variant="h3">{order?.attributes?.vehicle?.body}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.vehicleInfo?.sedan}</Typography>
            <Typography variant="h3">{order?.vehicleInfo?.condition}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={4}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.vehicleInfo?.good}</Typography>
            <Typography variant="h3">
              {order?.attributes?.vehicle?.odometer_status}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">
              {order?.attributes?.vehicle?.odometer_mileage}
            </Typography>
            <Typography variant="h3">{order?.vehicleInfo?.odoNum}</Typography>
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
