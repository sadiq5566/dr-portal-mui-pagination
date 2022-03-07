import Layout from "../Layout";
import VersionHistory from "./VersionHistory";
import { Divider, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainHeading: {
    fontSize: "21px !important",
    fontWeight: "700 !important",
    paddingTop: "35.5px"
  }
});
const OrderVersionPage = () => {
  const classes = useStyles();
  return (
    <Layout sideContent={<VersionHistory />}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.mainHeading} px={2}>
            API Orders
          </Typography>
          <Divider sx={{ marginTop: "22px" }} />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Layout>
  );
};

export default OrderVersionPage;
