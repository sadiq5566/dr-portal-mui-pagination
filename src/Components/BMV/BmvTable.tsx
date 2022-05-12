import React, { useState, useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { makeStyles } from "@mui/styles";
import { Typography, Box, Grid, Avatar } from "@mui/material";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import DataStatus from "./DataStatus";
import { useLocation } from "react-router-dom";
import {
  BmvOwnersData,
  BmvManagersData,
  BmvEmployeesData,
  BmvLocationsData
} from "../data/BmvTableData";
import {
  BmvOwner,
  BmvEmployee,
  BmvManager,
  BmvLocation
} from "../../Interfaces/bmvInterface";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import DeleteBmv from "../Modal/DeleteBmv";
import DetailBmv from "../Modal/DetailBmv";
import DisableBmv from "../Modal/DisableBmv";
import EditBmv from "../Modal/EditBmv";

const useStyles = makeStyles({
  dataListing: {
    padding: "5px 32px 0px 32px !important"
  }
});
const switchBox = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "105px"
};

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 35,
  height: 20,
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
    width: 16,
    height: 17
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
function getNumberOfPages(rowCount: any, count: any) {
  return Math.ceil(rowCount / Number(count));
}

type BmvArrType = BmvOwner | BmvEmployee | BmvManager | BmvLocation;
const BmvTable: React.FC = () => {
  const location = useLocation();
  const urlSplit = location.pathname.split("/", 3);
  const title = capitalize(urlSplit[2]);
  const [dataTables, setDataTables] = useState<BmvArrType[]>(BmvOwnersData);
  const [detailModal, setDetailModal] = React.useState<boolean>(false);
  const [deleteModal, setDeleteModal] = React.useState<boolean>(false);
  const [editModal, setEditModal] = React.useState<boolean>(false);
  const [disableModal, setDisableModal] = React.useState<boolean>(false);

  const [rowsPerPage, setRowsPerPage] = React.useState("10");
  const [page, setPage] = React.useState(1);

  const [pages, setPages] = React.useState(
    getNumberOfPages(dataTables.length, rowsPerPage)
  );

  const ownerFunc = () => {
    setDataTables(
      BmvOwnersData.slice(
        (page - 1) * Number(rowsPerPage),
        (page - 1) * Number(rowsPerPage) + Number(rowsPerPage)
      )
    );
    setPages(getNumberOfPages(BmvOwnersData.length, rowsPerPage));
  };

  const managerFunc = () => {
    setDataTables(
      BmvManagersData.slice(
        (page - 1) * Number(rowsPerPage),
        (page - 1) * Number(rowsPerPage) + Number(rowsPerPage)
      )
    );
    setPages(getNumberOfPages(BmvManagersData.length, rowsPerPage));
  };

  const employeeFunc = () => {
    setDataTables(
      BmvEmployeesData.slice(
        (page - 1) * Number(rowsPerPage),
        (page - 1) * Number(rowsPerPage) + Number(rowsPerPage)
      )
    );
    setPages(getNumberOfPages(BmvEmployeesData.length, rowsPerPage));
  };

  const locationFunc = () => {
    setDataTables(
      BmvLocationsData.slice(
        (page - 1) * Number(rowsPerPage),
        (page - 1) * Number(rowsPerPage) + Number(rowsPerPage)
      )
    );
    setPages(getNumberOfPages(BmvLocationsData.length, rowsPerPage));
  };

  useEffect(() => {
    title === "Owners"
      ? ownerFunc()
      : title === "Managers"
      ? managerFunc()
      : title === "Employees"
      ? employeeFunc()
      : title === "Locations"
      ? locationFunc()
      : ownerFunc();
  }, [title, rowsPerPage, page]);

  const handleChange = (event: SelectChangeEvent) => {
    setRowsPerPage(event.target.value);
    setPage(1);
  };

  const columns: TableColumn<BmvArrType>[] = [
    {
      name: "",
      cell: (dataTable) => (
        <Avatar
          alt="Remy Sharp"
          variant="square"
          src={dataTable.image}
          sx={{ width: 30, height: 32, borderRadius: 1, cursor: "pointer" }}
          onClick={() => setDetailModal(true)}
        />
      ),
      width: "40px"
    },
    {
      name: <Typography variant="typo1">Full Name</Typography>,
      cell: (dataTable) => <Typography variant="typo2">{dataTable.name}</Typography>
    },
    ...(title !== "Locations"
      ? [
          {
            name: <Typography variant="typo1">BMV</Typography>,
            cell: (dataTable: any) => (
              <Typography variant="typo3">{dataTable.BMV}</Typography>
            )
          }
        ]
      : []),
    ...(title === "Employees"
      ? [
          {
            name: <Typography variant="typo1">Designation</Typography>,
            cell: (dataTable: any) => (
              <Typography variant="typo2">{dataTable.Designation}</Typography>
            )
          }
        ]
      : []),

    {
      name: <Typography variant="typo1">Phone Number</Typography>,

      cell: (dataTable) => <Typography variant="typo2">{dataTable.phone}</Typography>
    },
    {
      name: <Typography variant="typo1">Email </Typography>,

      cell: (dataTable) => <Typography variant="typo2">{dataTable.email}</Typography>
    },
    ...(title === "Locations"
      ? [
          {
            name: <Typography variant="typo1">Stripe Account</Typography>,
            cell: (dataTable: any) => (
              <Typography variant="typo3">{dataTable.StripeAccount}</Typography>
            )
          }
        ]
      : []),
    ...(title === "Locations"
      ? [
          {
            name: <Typography variant="typo1">Physical Address</Typography>,
            cell: (dataTable: any) => (
              <Typography variant="typo3">{dataTable.PhysicalAddress}</Typography>
            )
          }
        ]
      : []),
    {
      name: <Typography variant="typo1">Status</Typography>,
      cell: (dataTable) => (
        <Box sx={switchBox}>
          <Typography variant="typo2">{dataTable.status}</Typography>
          <IOSSwitch
            sx={{ m: 1 }}
            checked={dataTable.status === "Active" ? true : false}
            onClick={() => setDisableModal(true)}
          />
        </Box>
      )
    },
    {
      cell: (dataTable) => (
        <DataStatus setEditModal={setEditModal} setDeleteModal={setDeleteModal} />
      )
    }
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "80px",
        minWidth: "80vw"
      }
    }
  };

  const classes = useStyles();
  const BootyPagination = () => {
    const handlePageNumber = (event: unknown, newPage: number) => {
      setPage(newPage);
    };

    return (
      <Box
        sx={{
          display: "inline-flex",
          justifyContent: "space-between",
          width: "100%",
          mt: 2,
          mb: 3
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Typography variant="typo3">Rows per Page: </Typography>

          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              value={rowsPerPage}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={10}>10 per page</MenuItem>
              <MenuItem value={20}>20 per page</MenuItem>
              <MenuItem value={30}>30 per page</MenuItem>
              <MenuItem value={50}>50 per page</MenuItem>
              <MenuItem value={100}>100 per page</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Stack spacing={2}>
          <Pagination
            count={pages}
            page={page}
            showFirstButton
            showLastButton
            variant="outlined"
            shape="rounded"
            color="primary"
            onChange={handlePageNumber}
          />
        </Stack>
      </Box>
    );
  };

  return (
    <Grid item xs={12} className={classes.dataListing}>
      <DataTable
        fixedHeaderScrollHeight="50vh"
        fixedHeader
        customStyles={customStyles}
        columns={columns}
        data={dataTables}
        pagination
        paginationComponent={BootyPagination}
        // paginationPerPage={Number(count)}
        // paginationRowsPerPageOptions={[10, 20, 30, 50, 100]}
      />
      {detailModal && <DetailBmv setModal={setDetailModal} />}
      {deleteModal && <DeleteBmv setModal={setDeleteModal} />}
      {disableModal && <DisableBmv setModal={setDisableModal} />}
      {editModal && <EditBmv setModal={setEditModal} />}
    </Grid>
  );
};

export default BmvTable;
