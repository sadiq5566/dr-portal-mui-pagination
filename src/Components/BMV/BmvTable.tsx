import React, { useState, useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { makeStyles } from "@mui/styles";
import { Typography, Box, Grid } from "@mui/material";
import DataStatus from "./DataStatus";
import { useLocation, Link } from "react-router-dom";
// import { BmvTableData } from "../data/BmvTableData";
import {
  BmvOwnersData,
  BmvManagersData,
  BmvEmployeesData,
  BmvLocationsData
} from "../data/BmvTableData";
import Button from "../Button/index";
import StatusSvg from "../../Assets/svgs/StatusSvg/StatusSvg";
import {
  BmvOwner,
  BmvEmployee,
  BmvManager,
  BmvLocation
} from "../../Interfaces/bmvInterface";
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
function capitalize(s: string): string {
  return s[0].toUpperCase() + s.slice(1);
}
type BmvArrType = BmvOwner | BmvEmployee | BmvManager | BmvLocation;
const BmvTable: React.FC = () => {
  const location = useLocation();
  const urlSplit = location.pathname.split("/", 3);
  const title = capitalize(urlSplit[2]);
  const [dataTables, setDataTables] = useState<BmvArrType[]>(BmvOwnersData);
  useEffect(() => {
    console.log("here");
    title === "Owners"
      ? setDataTables(BmvOwnersData)
      : title === "Managers"
      ? setDataTables(BmvManagersData)
      : title === "Employees"
      ? setDataTables(BmvEmployeesData)
      : title === "Locations"
      ? setDataTables(BmvLocationsData)
      : setDataTables(BmvOwnersData);
  }, [title]);

  // const columns: TableColumn<BmvOwner | BmvEmployee | BmvManager | BmvLocation>[] = [
  const columns: TableColumn<BmvArrType>[] = [
    {
      name: <Typography variant="typo1">Full Name</Typography>,
      selector: (dataTable) => dataTable.name,
      cell: (dataTable) => <Typography variant="typo2">{dataTable.name}</Typography>
    },
    {
      name: <Typography variant="typo1">BMV</Typography>,

      selector: (dataTable) => dataTable.name,
      cell: (dataTable) => <Typography variant="typo3">{dataTable.BMV}</Typography>
    },

    {
      name: <Typography variant="typo1">Phone Number</Typography>,
      selector: (dataTable) => dataTable.phone,
      cell: (dataTable) => <Typography variant="typo2">{dataTable.phone}</Typography>
    },
    {
      name: <Typography variant="typo1">Email </Typography>,
      selector: (dataTable) => dataTable.email,
      cell: (dataTable) => <Typography variant="typo2">{dataTable.email}</Typography>
    },

    {
      name: <Typography variant="typo1">Status</Typography>,
      selector: (dataTable) => dataTable.status,
      cell: (dataTable) => (
        <Box>
          <Typography variant="typo2">{dataTable.status}</Typography>
          <IOSSwitch sx={{ m: 1 }} defaultChecked />
        </Box>
      )
    },
    {
      selector: (dataTable) => dataTable.button,
      cell: (dataTable) => <DataStatus />
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
  console.log("data", dataTables);
  return (
    <Grid item xs={12} className={classes.dataListing}>
      <DataTable
        fixedHeaderScrollHeight="350px"
        fixedHeader
        customStyles={customStyles}
        columns={columns}
        data={dataTables}
        selectableRows
        pagination
      />
    </Grid>
  );
};

export default BmvTable;
