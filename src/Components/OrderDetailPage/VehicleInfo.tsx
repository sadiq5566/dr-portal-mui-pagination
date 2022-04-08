import React from "react";
import { Grid, Typography, Divider, Box } from "@mui/material";
import { Order } from "../../Interfaces/orderInterface";

interface IProps {
  order: Order | undefined;
}

const VehicleInfo: React.FC<IProps> = ({ order }) => {
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
            <Typography variant="h5">{order?.vehicleInfo?.vin}</Typography>
            <Typography variant="h3">{order?.vehicleInfo?.wqn}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.vehicleInfo?.year}</Typography>
            <Typography variant="h3">{order?.vehicleInfo?.date}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.vehicleInfo?.make}</Typography>
            <Typography variant="h3">Six</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={4}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.vehicleInfo?.bmw}</Typography>
            <Typography variant="h3">{order?.vehicleInfo?.model}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.vehicleInfo?.accent}</Typography>
            <Typography variant="h3">{order?.vehicleInfo?.body}</Typography>
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
            <Typography variant="h3">{order?.vehicleInfo?.status}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.vehicleInfo?.odometer}</Typography>
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
