import React, { useState, useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { SelectChangeEvent } from "@mui/material/Select";
import {
  Typography,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@mui/material";
import DataStatus from "./DataStatus";
import { BatchOrderInterface } from "../../Interfaces/batchOrderInterface";
import { Order } from "../../Interfaces/orderInterface";
import BatchOrderData from "../data/BatchOrderData";
import TableMockData from "../data/TableMockData";
import NumberFormatCustom from "../TextField/NumberFormatCustom";
import { makeStyles } from "@mui/styles";
import BatchButtons from "./BatchButtons";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const switchBox = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "105px"
};

function getNumberOfPages(rowCount: any, count: any) {
  return Math.ceil(rowCount / Number(count));
}

interface IProp {
  title: string;
  param: string;
  // CustomMaterialPagination: any;
}
const useStyles = makeStyles({
  inputBox: {
    display: "flex",
    justifyContent: "space-evenly",
    minWidth: "100"
  }
});
export type BatchPage = BatchOrderInterface | Order;
const BatchOrderTable: React.FC<IProp> = ({ title, param }) => {
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = React.useState("10");
  const [page, setPage] = React.useState(1);

  const [user, setUser] = useState({});
  let name, value;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const [dataTables, setDataTables] = useState<BatchPage[]>(BatchOrderData);
  const [pages, setPages] = React.useState(
    getNumberOfPages(BatchOrderData.length, rowsPerPage)
  );
  useEffect(() => {
    title === "batchorderdetails"
      ? setDataTables(TableMockData as Order[])
      : setDataTables(BatchOrderData as BatchOrderInterface[]);
  }, [title]);

  useEffect(() => {
    setDataTables(
      BatchOrderData.slice(
        (page - 1) * Number(rowsPerPage),
        (page - 1) * Number(rowsPerPage) + Number(rowsPerPage)
      )
    );
    setPages(getNumberOfPages(BatchOrderData.length, rowsPerPage));
  }, [rowsPerPage, page]);

  const handleChange = (event: SelectChangeEvent) => {
    setRowsPerPage(event.target.value);
    setPage(1);
  };

  const columns: TableColumn<BatchPage>[] =
    title === "batchorderdetails"
      ? [
          {
            name: <Typography variant="typo2">Order Number (VIN)</Typography>,
            width: "180px",

            cell: (TableMockData) => {
              if ("name" in TableMockData) {
                return (
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h3">{TableMockData.name}</Typography>
                    <Typography variant="typo4">
                      VIN:{TableMockData.summaryInfo.s_Vin}
                    </Typography>
                  </Box>
                );
              }
            }
          },
          {
            name: <Typography variant="typo2">Date Created</Typography>,
            width: "150px",
            cell: (TableMockData) => {
              if ("dateCreated" in TableMockData) {
                return (
                  <Typography variant="typo2">{TableMockData.dateCreated}</Typography>
                );
              }
            },
            sortable: true
          },
          {
            name: <Typography variant="typo2">Reciept Number</Typography>,
            width: "360px",
            cell: (TableMockData) => {
              if ("id" in TableMockData) {
                return (
                  <>
                    <NumberFormatCustom
                      type="text"
                      name={"reciept_number" + TableMockData.id}
                      size="small"
                      autoComplete="off"
                      clsName="batchInput"
                      color={
                        !user["reciept_number" + TableMockData.id] &&
                        !user["confirm_number" + TableMockData.id]
                          ? "info"
                          : user["reciept_number" + TableMockData.id] ===
                            user["confirm_number" + TableMockData.id]
                          ? "success"
                          : "error"
                      }
                      value={user["reciept_number" + TableMockData.id]}
                      onChange={handleInput}
                    />
                    <NumberFormatCustom
                      type="text"
                      name={"confirm_number" + TableMockData.id}
                      size="small"
                      autoComplete="off"
                      color={
                        !user["confirm_number" + TableMockData.id] &&
                        !user["reciept_number" + TableMockData.id]
                          ? "info"
                          : user["confirm_number" + TableMockData.id] ===
                            user["reciept_number" + TableMockData.id]
                          ? "success"
                          : "error"
                      }
                      clsName="batchInput"
                      value={user["confirm_number" + TableMockData.id]}
                      onChange={handleInput}
                    />
                  </>
                );
              }
            }
          },
          {
            name: <Typography variant="typo2">Amount Due</Typography>,
            width: "360px",

            cell: (TableMockData) => {
              if ("id" in TableMockData) {
                return (
                  <Box className={classes.inputBox}>
                    <NumberFormatCustom
                      type="text"
                      name={"total_amount" + TableMockData.id}
                      size="small"
                      autoComplete="off"
                      color={
                        !user["total_amount" + TableMockData.id] &&
                        !user["confirm_amount" + TableMockData.id]
                          ? "info"
                          : user["total_amount" + TableMockData.id] ===
                            user["confirm_amount" + TableMockData.id]
                          ? "success"
                          : "error"
                      }
                      clsName="batchInput"
                      value={user["total_amount" + TableMockData.id]}
                      onChange={handleInput}
                    />
                    <NumberFormatCustom
                      type="text"
                      name={"confirm_amount" + TableMockData.id}
                      size="small"
                      autoComplete="off"
                      color={
                        !user["confirm_amount" + TableMockData.id] &&
                        !user["total_amount" + TableMockData.id]
                          ? "info"
                          : user["confirm_amount" + TableMockData.id] ===
                            user["total_amount" + TableMockData.id]
                          ? "success"
                          : "error"
                      }
                      clsName="batchInput"
                      value={user["confirm_amount" + TableMockData.id]}
                      onChange={handleInput}
                    />
                  </Box>
                );
              }
            }
          },

          {
            width: "280px",

            cell: (TableMockData) => {
              if ("id" in TableMockData) {
                return <BatchButtons user={user} dataId={TableMockData.id} />;
              }
            }
          }
        ]
      : [
          {
            name: <Typography variant="typo2">Batch Order Number</Typography>,
            width: "155px",
            cell: (TableMockData) => {
              if ("BONumber" in TableMockData) {
                return <Typography variant="typo2">{TableMockData.BONumber}</Typography>;
              }
            }
          },
          {
            name: <Typography variant="typo2">Date Created</Typography>,
            width: "130px",
            cell: (TableMockData) => {
              if ("dateCreated" in TableMockData) {
                return (
                  <Typography variant="typo3">{TableMockData.dateCreated}</Typography>
                );
              }
            },
            sortable: true
          },
          {
            name: <Typography variant="typo2">Created By</Typography>,
            width: "110px",
            cell: (TableMockData) => {
              if ("createdBy" in TableMockData) {
                return <Typography variant="typo2">{TableMockData.createdBy}</Typography>;
              }
            }
          },
          {
            name: <Typography variant="typo2">Total Order</Typography>,
            width: "100px",
            cell: (TableMockData) => {
              if ("totalOrder" in TableMockData) {
                return (
                  <Typography variant="typo2">{TableMockData.totalOrder}</Typography>
                );
              }
            }
          },
          {
            name: <Typography variant="typo2">Unique Customers</Typography>,
            width: "145px",
            cell: (TableMockData) => {
              if ("uniqueCustomer" in TableMockData) {
                return (
                  <Typography variant="body3">{TableMockData.uniqueCustomer}</Typography>
                );
              }
            }
          },
          {
            name: <Typography variant="typo2">Unique Dealerships</Typography>,
            width: "150px",
            cell: (TableMockData) => {
              if ("uniqueDealerships" in TableMockData) {
                return (
                  <Typography variant="typo2">
                    {TableMockData.uniqueDealerships}
                  </Typography>
                );
              }
            }
          },
          {
            name: <Typography variant="typo2">Completed Orders</Typography>,
            width: "145px",
            cell: (TableMockData) => {
              if ("completedOrders" in TableMockData) {
                return (
                  <Typography variant="typo2">{TableMockData.completedOrders}</Typography>
                );
              }
            }
          },
          {
            name: <Typography variant="typo2">Rejected Orders</Typography>,
            width: "145px",
            cell: (TableMockData) => {
              if ("rejectedOrders" in TableMockData) {
                return (
                  <Typography variant="typo2">{TableMockData.rejectedOrders}</Typography>
                );
              }
            }
          },
          {
            width: "160px",
            cell: (TableMockData) => {
              if ("id" in TableMockData) {
                return <DataStatus>{TableMockData.id}</DataStatus>;
              }
            }
          }
        ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "90px"
      }
    }
  };

  const BootyPagination = () => {
    // setPages(getNumberOfPages(rowCount, rowsPerPage));
    // const pageItems = toPages(pages);

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
    <div>
      <DataTable
        fixedHeaderScrollHeight="50vh"
        fixedHeader
        customStyles={customStyles}
        columns={columns}
        data={dataTables}
        selectableRows={title === "batchorderdetails" ? true : false}
        pagination
        paginationComponent={BootyPagination}
      />
    </div>
  );
};
export default BatchOrderTable;
