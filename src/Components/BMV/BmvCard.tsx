import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "../../theme";
import { useLocation, Link } from "react-router-dom";
interface IProps {
  name: string;
  numbering: string;
  status?: boolean;
  id: string;
}
interface props {
  bmvdata: IProps;
  bmvStatus?: Boolean;
  divStatus?: Boolean;
}
const useStyles: any = makeStyles({
  bmvStatus: {
    display: "flex",
    justifyContent: "space-between",
    height: "40px",
    borderRadius: "5px",
    alignItems: "center",
    backgroundColor: theme.palette.success.light,
    color: theme.palette.primary.dark,

    "&:hover": {
      backgroundColor: theme.palette.warning.contrastText,
      color: theme.palette.success.light
    }
  },

  bmvData: {
    display: "flex",
    justifyContent: "space-between",
    height: "40px",
    alignItems: "center",
    backgroundColor: theme.palette.success.light,
    color: theme.palette.primary.dark
  },
  active: {
    backgroundColor: theme.palette.warning.contrastText,
    color: theme.palette.success.light
  },

  MiniText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  MiniTextColor: {
    color: theme.palette.success.dark
  },

  bmvStatusFont: {
    fontSize: theme.typography.subtitle1.fontSize
  },
  bmvStatusBox: {
    display: "flex",
    flexDirection: "column"
  }
});
const BmvCard: React.FC<props> = ({ bmvdata, bmvStatus }: props) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Link to={`/bmv/${bmvdata.name}`}>
            <Box
              className={
                location.pathname.toLowerCase() !==
                ("/bmv/owners" || "/bmv/managers" || "/bmv/employees" || "/bmv/locations")
                  ? location.pathname.toLowerCase() ==
                    `/bmv/${bmvdata.name}`.toLowerCase()
                    ? `${classes.bmvStatus} ${classes.active}`
                    : classes.bmvData
                  : "/bmv/owners" && bmvStatus
                  ? `${classes.bmvStatus} ${bmvdata?.status ? classes.active : ""}`
                  : classes.bmvData
              }
              px={2}
              sx={{ border: 1, borderColor: "grey.300", borderRadius: "5px" }}
            >
              <Box className={classes.bmvStatusBox}>
                <Typography variant="subtitle1">{bmvdata.name}</Typography>
                {/* <Typography variant="body4">{bmvdata.location}</Typography> */}
              </Box>
              <Box className={bmvdata.status ? classes.MiniTextColor : classes.MiniText}>
                <Typography variant="body3">{bmvdata?.numbering}</Typography>
              </Box>
            </Box>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default BmvCard;
