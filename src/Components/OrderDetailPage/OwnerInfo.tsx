import React, { useState, useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { Order } from "../../Interfaces/orderInterface";

interface IProps {
  order: Order;
}

const OwnerInfo: React.FC<IProps> = ({ order }) => {
  return (
    <>
      <Typography variant="h4">Owner Info</Typography>
      <Box mt={3}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.ownerInfo?.first_name}</Typography>
            <Typography variant="h3">{order?.ownerInfo?.name}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.ownerInfo?.last_name}</Typography>
            <Typography variant="h3">{order?.ownerInfo?.last_Name}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.ownerInfo?.email}</Typography>
            <Typography variant="h3">{order?.ownerInfo?.paige}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.ownerInfo?.phone}</Typography>
            <Typography variant="h3">{order?.ownerInfo?.cell}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5"> {order?.ownerInfo?.date_Of_birth}</Typography>
            <Typography variant="h3">{order?.ownerInfo?.birth}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.ownerInfo?.address_1}</Typography>
            <Typography variant="h3">{order?.ownerInfo?.address}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.ownerInfo?.address_2}</Typography>
            <Typography variant="h3">{order?.ownerInfo?.address_sec}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.ownerInfo?.sec_Date}</Typography>
            <Typography variant="h3">{order?.ownerInfo?.day}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.ownerInfo?.city}</Typography>
            <Typography variant="h3">{order?.ownerInfo?.Francico}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.ownerInfo?.state}</Typography>
            <Typography variant="h3">{order?.ownerInfo?.ca}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.ownerInfo?.type}</Typography>
            <Typography variant="h3">{order?.ownerInfo?.quality}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.ownerInfo?.type}</Typography>
            <Typography variant="h3">{order?.ownerInfo?.comp_2}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.ownerInfo?.suffiex}</Typography>
            <Typography variant="h3">{order?.ownerInfo?.affix}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.ownerInfo?.ssn}</Typography>
            <Typography variant="h3">{order?.ownerInfo?.mg}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.ownerInfo?.customer}</Typography>
            <Typography variant="h3">{order?.ownerInfo?.numbers}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.ownerInfo?.minor}</Typography>
            <Typography variant="h3">{order?.ownerInfo?.dot}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.ownerInfo?.primary}</Typography>
            <Typography variant="h3">{order?.ownerInfo?.true}</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OwnerInfo;
