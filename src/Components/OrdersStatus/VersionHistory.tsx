import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Collapse,
  Typography,
  Stack,
  Divider,
  styled
} from "@mui/material";
import Location from "./Location";
import { makeStyles } from "@mui/styles";
import { Scrollbars } from "react-custom-scrollbars-2";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import historyData from "../data/HistoryData";
import ExpandSvg from "../../Assets/svgs/ExpandSvg/ExpandSvg";
import { Link } from "react-router-dom";
import StatusSvg from "../../Assets/svgs/StatusSvg/StatusSvg";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
  orderNo: string;
  name: string;
  time: string;
  orderStatus: string;
  status: string;
  theme: any;
}
const useStyles: any = makeStyles({
  cardActions: {
    paddingBottom: "6px !important",
    paddingTop: "4px !important"
  },
  expandMore: {
    paddingTop: "10px"
  },
  typo: {
    paddingTop: "3px"
  },
  cardContent: {
    padding: "0 !important",
    paddingTop: "8px !important"
  },
  stackContent: {
    paddingLeft: "19px ",
    paddingRight: "13px ",
    "&:hover": {
      backgroundColor: "#4363EA "
    },
    "&:active": {
      background: "#4363EA "
    }
  }
});
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(90deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));
const VersionHistory = () => {
  const [active, setActive] = React.useState<string | null>(null);

  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Stack
          spacing={2}
          pt={1}
          sx={{
            backgroundColor: "#F6F6F7",
            border: 1,
            borderColor: "#E5E5E5"
          }}
        >
          <Box px={2}>
            <Location />
          </Box>
          <Divider />

          <Scrollbars
            style={{
              width: "100%",
              height: 525
            }}
            autoHide
          >
            <Box px={2} pt={1}>
              <Typography variant="h4" mb={1}>
                Version History
              </Typography>
              <Typography variant="body4" color="#585F67">
                Nov 11, 2021
              </Typography>

              {historyData?.map((historydata) => {
                return (
                  <>
                    <Card
                      className={classes.card}
                      key={historydata?.id}
                      sx={{
                        border: 1,
                        borderColor: "grey.300",
                        borderRadius: "6px",
                        boxShadow: "none",
                        marginBottom: "7px",
                        marginTop: "7px",
                        cursor: "pointer"
                      }}
                    >
                      <CardActions className={classes.cardActions}>
                        <Stack direction="row">
                          <ExpandMore
                            className={classes.expandMore}
                            expand={
                              Number(active) === Number(historydata.id) ? true : false
                            }
                            onClick={() =>
                              setActive(active !== historydata.id ? historydata.id : null)
                            }
                            orderNo={""}
                            name={""}
                            time={""}
                            orderStatus={""}
                            status={""}
                            theme={undefined}
                          >
                            <ExpandSvg />
                          </ExpandMore>
                          <Stack direction="row" alignItems="center">
                            <Typography
                              variant="subtitle1"
                              color={theme.palette.secondary.dark}
                              className={classes.typo}
                            >
                              {historydata.orderNo}
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardActions>
                      {<Divider />}

                      <Collapse
                        in={Number(active) === Number(historydata.id) ? true : false}
                        timeout="auto"
                        unmountOnExit
                      >
                        <CardContent className={classes.cardContent}>
                          <Link to={`/index/${historydata.id}`}>
                            <Stack pb={1} className={`${classes.stackContent}`}>
                              <Stack
                                direction="row"
                                alignItems="center"
                                pl={2}
                                justifyContent="space-between"
                              >
                                <Typography
                                  variant="subtitle1"
                                  color={theme.palette.secondary.dark}
                                >
                                  {historydata.name}
                                </Typography>
                                <Typography
                                  variant="body3"
                                  color={theme.palette.primary.dark}
                                >
                                  {historydata.time}
                                </Typography>
                              </Stack>
                              <Stack direction="row" alignItems="center" pl={2}>
                                <StatusSvg status={historydata.status} stroke />
                                <Typography
                                  variant="body4"
                                  color={theme.palette.primary.dark}
                                  pl={1}
                                >
                                  {historydata.orderStatus}
                                </Typography>
                              </Stack>
                            </Stack>
                          </Link>
                          <Divider />
                          <Stack py={1} className={classes.stackContent}>
                            <Stack
                              direction="row"
                              alignItems="center"
                              pl={2}
                              justifyContent="space-between"
                            >
                              <Typography
                                variant="subtitle1"
                                color={theme.palette.secondary.dark}
                              >
                                {historydata.name}
                              </Typography>
                              <Typography
                                variant="body3"
                                color={theme.palette.primary.dark}
                              >
                                {historydata.time}
                              </Typography>
                            </Stack>

                            <Stack direction="row" alignItems="center" pl={2}>
                              <StatusSvg status={historydata.status} stroke />
                              <Typography
                                variant="body4"
                                color={theme.palette.primary.dark}
                                pl={1}
                              >
                                {historydata.orderStatus}
                              </Typography>
                            </Stack>
                          </Stack>
                          <Divider />
                          <Stack py={1} className={classes.stackContent}>
                            <Stack
                              direction="row"
                              alignItems="center"
                              pl={2}
                              justifyContent="space-between"
                            >
                              <Typography
                                variant="subtitle1"
                                color={theme.palette.secondary.dark}
                              >
                                {historydata.name}
                              </Typography>
                              <Typography
                                variant="body3"
                                color={theme.palette.primary.dark}
                              >
                                {historydata.time}
                              </Typography>
                            </Stack>

                            <Stack direction="row" alignItems="center" pl={2}>
                              <StatusSvg status={historydata.status} stroke />
                              <Typography
                                variant="body4"
                                color={theme.palette.primary.dark}
                                pl={1}
                              >
                                {historydata.orderStatus}
                              </Typography>
                            </Stack>
                          </Stack>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </>
                );
              })}
            </Box>
          </Scrollbars>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default VersionHistory;
