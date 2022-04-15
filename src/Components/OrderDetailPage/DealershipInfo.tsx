import React from "react";
import { Grid, Typography, Divider, Theme, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Button from "../Button/index";
import { Order } from "../../Interfaces/orderInterface";

interface IProps {
  order: Order;
}

const useStyles = makeStyles((theme: Theme) => ({
  btn: {
    paddingBottom: "2rem",
    marginTop: "2rem"
  }
}));

const DealershipInfo: React.FC<IProps> = ({ order }) => {
  const classes = useStyles();
  return (
    <>
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
            <Typography variant="h5">{order?.dealersInfo?.dealership}</Typography>
            <Typography variant="h3">{order?.dealersInfo?.dName}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">{order?.dealersInfo?.location}</Typography>
            <Typography variant="h3">{order?.dealersInfo?.name}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={4}>
        <Divider />
      </Box>

      <Box className={classes.btn}>
        <Grid container justifyContent="flex-end">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              {order?.Status === "new" ? (
                <>
                  <Button
                    text="Mark as Pending"
                    variant="contained"
                    color="new"
                    size="large"
                  />

                  <Button
                    variant="contained"
                    text="Reject"
                    size="medium"
                    color="warning"
                  />
                </>
              ) : order?.Status === "pending" ? (
                <>
                  <Button
                    text="Complete Order"
                    variant="contained"
                    color="success"
                    size="large"
                  />

                  <Button
                    variant="contained"
                    text="Reject"
                    size="medium"
                    color="warning"
                  />
                </>
              ) : order?.Status === "pending" ? (
                <>
                  <Button
                    text="Lock Order"
                    variant="contained"
                    color="secondary"
                    size="large"
                  />

                  <Button
                    variant="contained"
                    text="Reject"
                    size="medium"
                    color="warning"
                  />
                </>
              ) : (
                ""
              )}
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default DealershipInfo;
