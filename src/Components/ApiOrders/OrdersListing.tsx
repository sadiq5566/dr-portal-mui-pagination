import React from "react";
import DataTable from "react-data-table-component";
import { Typography } from "@mui/material";
import DataStatus from "./DataStatus";
import Button from "../Button/index";
import StatusSvg from "../../Assets/svgs/StatusSvg/StatusSvg";
import { makeStyles } from "@mui/styles";
import { OrderResponse } from "../../Interfaces/orderInterface";
import { dateFormat } from "../../Config/constant/contant";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, MenuItem, FormControl, Select } from "@mui/material";
interface IProps {
  orders: OrderResponse | undefined | any;
}

const useStyles = makeStyles({
  RegularFont: {
    fontFamily: "regular-400 !important"
  }
});
const OrdersListing: React.FC<IProps> = ({ orders }: IProps) => {
  const classes = useStyles();
  const [count, setCount] = React.useState("10");
  const columns = [
    {
      name: (
        <Typography variant="typo1" className={classes.RegularFont}>
          Order Number
        </Typography>
      ),
      selector: (orderCell) => orderCell.id,
      cell: (orderCell) => (
        <Typography variant="typo2" className={classes.RegularFont}>
          {orderCell.id}
        </Typography>
      )
    },
    {
      name: (
        <Typography variant="typo1" className={classes.RegularFont}>
          VIN
        </Typography>
      ),

      selector: (TableMockData) => TableMockData.VIN,
      cell: (TableMockData) => (
        <Typography variant="typo3" className={classes.RegularFont}>
          {TableMockData.attributes.vehicle.vin}
        </Typography>
      )
    },
    {
      name: (
        <Typography variant="typo1" className={classes.RegularFont}>
          Date Created
        </Typography>
      ),
      selector: (order) => dateFormat(order.attributes.date_created),
      cell: (order) => (
        <Typography variant="typo2" className={classes.RegularFont}>
          {order.attributes.date_created}
        </Typography>
      )
    },
    {
      name: (
        <Typography variant="typo1" className={classes.RegularFont}>
          Customer Name
        </Typography>
      ),
      selector: (TableMockData) => TableMockData.customerName,
      cell: (TableMockData) => (
        <Typography variant="typo2" className={classes.RegularFont}>
          {TableMockData.customerName}
        </Typography>
      )
    },
    {
      name: (
        <Typography variant="typo1" className={classes.RegularFont}>
          Dealership
        </Typography>
      ),
      selector: (TableMockData) => TableMockData.dealership,
      cell: (TableMockData) => (
        <Typography variant="typo2" className={classes.RegularFont}>
          {TableMockData.dealership}
          <Typography variant="body3" className={classes.RegularFont}>
            {TableMockData.dealershipText}
          </Typography>
        </Typography>
      )
    },
    {
      name: <Typography variant="typo1">Registration Type</Typography>,
      cell: (TableMockData) => (
        <Typography variant="typo2" className={classes.RegularFont}>
          {TableMockData.attributes.registration_type}
        </Typography>
      )
    },
    {
      name: (
        <Typography variant="typo1" className={classes.RegularFont}>
          Status
        </Typography>
      ),
      selector: (order) => order.Status,
      cell: (order) => (
        <Button
          variant="outlined"
          text={order.status}
          color="chooseStatus"
          startIcon={<StatusSvg status={order.status} />}
        />
      )
    },
    {
      cell: (order) => <DataStatus order={order} />
    }
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "90px"
      }
    }
  };
  const handleChange = (event) => {
    setCount(event.target.value);
  };

  function getNumberOfPages(rowCount: any, count: any) {
    return Math.ceil(rowCount / Number(count));
  }

  const BootyPagination = ({
    rowCount,
    onChangePage,
    currentPage
  }: {
    rowCount: any;
    onChangePage: any;
    currentPage: any;
  }) => {
    const pages = getNumberOfPages(rowCount, count);

    const handlePageNumber = (e: any) => {
      onChangePage(Number(e.target.value));
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
              value={count}
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
        sortIcon={<StatusSvg status="sort" />}
        data={orders}
        selectableRows
        pagination
        paginationComponent={BootyPagination}
      />
    </div>
  );
};

export default OrdersListing;
