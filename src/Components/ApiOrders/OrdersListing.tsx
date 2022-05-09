import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Typography } from "@mui/material";
import DataStatus from "./DataStatus";
import Button from "../Button/index";
import StatusSvg from "../../Assets/svgs/StatusSvg/StatusSvg";
import { OrderResponse } from "../../Interfaces/orderInterface";

interface IProps {
  orders: OrderResponse | undefined | any;
}

const OrdersListing: React.FC<IProps> = ({ orders }: IProps) => {
  const columns: TableColumn<OrderResponse>[] = [
    {
      name: <Typography variant="typo1">Order Number</Typography>,
      selector: (order) => order?.id,
      cell: (order) => <Typography variant="typo2">{order?.id}</Typography>
    },
    {
      name: <Typography variant="typo1">VIN</Typography>,

      selector: (order) => order?.attributes.vehicle.vin,
      cell: (order) => (
        <Typography variant="typo3"> {order?.attributes.vehicle.vin}</Typography>
      )
    },
    {
      name: <Typography variant="typo1">Date Created</Typography>,
      selector: (order) => order?.attributes.date_created,
      cell: (order) => (
        <Typography variant="typo2">{order?.attributes.date_created}</Typography>
      )
    },
    {
      name: <Typography variant="typo1">Customer Name</Typography>,
      selector: (order) => order?.attributes.submitter.name,
      cell: (order) => (
        <Typography variant="typo2">{order?.attributes.submitter.name}</Typography>
      )
    },
    {
      name: <Typography variant="typo1">Dealership</Typography>,
      selector: (order) => "Dealership",
      cell: (order) => (
        <Typography variant="typo2">
          {"Dealership"}
          <Typography variant="body3">{"Dealership"}</Typography>
        </Typography>
      )
    },
    {
      name: <Typography variant="typo1">Registration Type</Typography>,
      selector: (order) => order?.attributes.registration_type,
      cell: (order) => (
        <Typography variant="typo2">{order?.attributes.registration_type}</Typography>
      )
    },
    {
      name: <Typography variant="typo1">Status</Typography>,
      selector: (order) => order?.status,
      cell: (order) => (
        <Button
          size="small"
          variant="outlined"
          text={order?.attributes?.status}
          color="chooseStatus"
          startIcon={<StatusSvg status={order?.attributes?.status} />}
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
        fixedHeaderScrollHeight="350px"
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
