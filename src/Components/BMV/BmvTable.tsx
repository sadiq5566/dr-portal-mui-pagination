import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { makeStyles } from "@mui/styles";
import { Typography, Box, Grid } from "@mui/material";
import DataStatus from "./DataStatus";
import { Link } from "react-router-dom";
import BmvTableData from "../data/BmvTableData";
import Button from "../Button/index";
import StatusSvg from "../../Assets/svgs/StatusSvg/StatusSvg";
import { Bmv } from "../../Interfaces/bmvInterface";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
const useStyles = makeStyles({
  dataListing: {
    padding: "5px 32px 0px 32px !important"
  }
});

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 38,
  height: 22,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5
      }
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff"
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600]
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3
    }
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 18,
    height: 18
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500
    })
  }
}));

const BmvTable = () => {
  const columns: TableColumn<Bmv>[] = [
    {
      name: <Typography variant="typo1">Full Name</Typography>,
      selector: (BmvTableData) => BmvTableData.name,
      cell: (BmvTableData) => <Typography variant="typo2">{BmvTableData.name}</Typography>
    },
    {
      name: <Typography variant="typo1">BMV</Typography>,

      selector: (BmvTableData) => BmvTableData.BMV,
      cell: (BmvTableData) => (
        // <Link style={{ textDecoration: "none" }} to={`/orderdetails/${BmvTableData.id}`}>
        <Typography variant="typo3">{BmvTableData.BMV}</Typography>
        // </Link>
      )
    },
    {
      name: <Typography variant="typo1">Phone Number</Typography>,
      selector: (BmvTableData) => BmvTableData.phone,
      cell: (BmvTableData) => (
        <Typography variant="typo2">{BmvTableData.phone}</Typography>
      )
    },
    {
      name: <Typography variant="typo1">Email </Typography>,
      selector: (BmvTableData) => BmvTableData.email,
      cell: (BmvTableData) => (
        <Typography variant="typo2">{BmvTableData.email}</Typography>
      )
    },

    {
      name: <Typography variant="typo1">Status</Typography>,
      selector: (BmvTableData) => BmvTableData.status,
      cell: (BmvTableData) => (
        <Box>
          <Typography variant="typo2">{BmvTableData.status}</Typography>
          <IOSSwitch sx={{ m: 1 }} defaultChecked />
        </Box>
      )
    },
    {
      selector: (BmvTableData) => BmvTableData.button,
      cell: (BmvTableData) => <DataStatus />
    }
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "80px"
      }
    }
  };

  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.dataListing}>
      <DataTable
        fixedHeaderScrollHeight="350px"
        fixedHeader
        customStyles={customStyles}
        columns={columns}
        data={BmvTableData}
        selectableRows
        pagination
      />
    </Grid>
  );
};

export default BmvTable;
