import React from "react";
import { Grid, Box, Paper, Typography, InputBase, IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";
import SearchSvg from "../../Assets/svgs/SearchSvg/SearchSvg";
import DropDownSvg from "../../Assets/svgs/DropDownSvg/DropDownSvg";
import theme from "../../theme";
import TableMockData from "../data/TableMockData";
import Button from "../Button/index";
const useStyles = makeStyles({
  mainHeading: {
    fontSize: "21px !important",
    fontWeight: "700 !important",
    paddingTop: "35.5px"
  },
  SearchDiv: {
    background: theme.palette.success.main,
    height: "40px",
    width: "40px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px"
  },
  MainBox: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "5px"
  },
  mainBox: {
    display: "flex",
    justifyContent: "space-between",
    // padding: "0px 32px 0px 16px"
    padding: "5px 32px 0px 32px !important"
  }
});
interface IProp {
  title: string;
  param: string;
}
const BatchOrderHeader: React.FC<IProp> = ({ title, param }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} pt={2} px={2}>
        <Typography className={classes.mainHeading} px={3}>
          BATCH Orders {title === "batchorderdetails" ? `#: ${param}` : ""}
        </Typography>
        <Divider sx={{ marginTop: "22px" }} />
      </Grid>
      <Grid item xs={12} pt={2} px={4}>
        <Box p={2} my={3} className={classes.MainBox}>
          <Box sx={{ display: "flex" }}>
            <Box>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 256
                }}
              >
                <IconButton sx={{ p: "10px" }} aria-label="menu">
                  <SearchSvg />
                </IconButton>
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
                <Typography variant="body3" color={theme.palette.primary.dark}>
                  VIN
                </Typography>
                <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
                  <DropDownSvg />
                </IconButton>
              </Paper>
            </Box>
            <Box className={classes.SearchDiv}>
              <SearchSvg color="whiteColor" />
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid container spacing={2}>
        {title === "batchorderdetails" ? (
          <Grid item xs={12}>
            <Box className={classes.mainBox}>
              <Typography variant="h4">{TableMockData.length} Orders</Typography>
              <Box>
                <Button
                  variant="outlined"
                  size="small"
                  color="batchOrderComplete"
                  text="Complete"
                />
                <Button
                  variant="outlined"
                  size="small"
                  color="batchOrderReject"
                  text="Reject"
                />
                <Button
                  variant="outlined"
                  size="small"
                  color="profileButton"
                  text="Print"
                />
              </Box>
            </Box>
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
};
export default BatchOrderHeader;
