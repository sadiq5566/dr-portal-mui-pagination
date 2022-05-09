import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Typography } from "@mui/material";
import DataStatus from "./DataStatus";
import Button from "../Button/index";
import StatusSvg from "../../Assets/svgs/StatusSvg/StatusSvg";
import { OrderResponse } from "../../Interfaces/orderInterface";
import { dateFormat } from "../../Config/constant/contant";

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
      cell: (order) => (
        <Typography variant="typo3"> {order?.attributes.vehicle.vin}</Typography>
      )
    },
    {
      name: <Typography variant="typo1">Date Created</Typography>,
      selector: (order) => dateFormat(order?.attributes.date_created)
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
      // selector: (order) => "Dealership",
      cell: (order) => <Typography variant="typo2">{"Dealership"}</Typography>
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
