import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Typography } from "@mui/material";
import DataStatus from "./DataStatus";
import Button from "../Button/index";
import StatusSvg from "../../Assets/svgs/StatusSvg/StatusSvg";
import { makeStyles } from "@mui/styles";
import { OrderResponse } from "../../Interfaces/orderInterface";
import { dateFormat } from "../../Config/constant/contant";

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
      />
    </div>
  );
};

export default OrdersListing;
