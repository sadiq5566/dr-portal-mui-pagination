import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Typography } from "@mui/material";
import DataStatus from "./DataStatus";
import Button from "../Button/index";
import StatusSvg from "../../Assets/svgs/StatusSvg/StatusSvg";
import { makeStyles } from "@mui/styles";

interface IProps {
  data: any;
}

const useStyles = makeStyles({
  RegularFont: {
    fontFamily: "regular-400 !important"
  }
});
const OrdersListing = ({ data }) => {
  const classes = useStyles();
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
      selector: (TableMockData) => TableMockData.attributes.date_created,
      cell: (TableMockData) => (
        <Typography variant="typo2" className={classes.RegularFont}>
          {TableMockData.attributes.date_created}
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
      selector: (TableMockData) => TableMockData.Status,
      cell: (TableMockData) => (
        <Button
          variant="outlined"
          text={TableMockData?.attributes?.status}
          color="chooseStatus"
          startIcon={<StatusSvg status={TableMockData?.attributes?.status} />}
        />
      )
    },
    {
      selector: (TableMockData) => TableMockData.button,
      cell: (TableMockData) => <DataStatus TableMockData={TableMockData} />
    }
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "90px"
      }
    }
  };
  return (
    <div>
      <DataTable
        fixedHeaderScrollHeight="350px"
        fixedHeader
        customStyles={customStyles}
        columns={columns}
        data={data}
        selectableRows
        pagination
      />
    </div>
  );
};

export default OrdersListing;
