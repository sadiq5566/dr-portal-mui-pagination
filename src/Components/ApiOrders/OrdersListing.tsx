import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Typography } from "@mui/material";
import DataStatus from "./DataStatus";
import Button from "../Button/index";
import StatusSvg from "../../Assets/svgs/StatusSvg/StatusSvg";
import { Order } from "../../Interfaces/orderInterface";

interface IProps {
  data: any;
}

const OrdersListing: React.FC<IProps> = ({ data }) => {
  const columns: TableColumn<Order>[] = [
    {
      name: <Typography variant="typo1">Order Number</Typography>,
      selector: (TableMockData) => TableMockData.name,
      cell: (TableMockData) => (
        <Typography variant="typo2">{TableMockData.name}</Typography>
      )
    },
    {
      name: <Typography variant="typo1">VIN</Typography>,

      selector: (TableMockData) => TableMockData.VIN,
      cell: (TableMockData) => (
        <Typography variant="typo3">{TableMockData.VIN}</Typography>
      )
    },
    {
      name: <Typography variant="typo1">Date Created</Typography>,
      selector: (TableMockData) => TableMockData.dateCreated,
      cell: (TableMockData) => (
        <Typography variant="typo2">{TableMockData.dateCreated}</Typography>
      )
    },
    {
      name: <Typography variant="typo1">Customer Name</Typography>,
      selector: (TableMockData) => TableMockData.customerName,
      cell: (TableMockData) => (
        <Typography variant="typo2">{TableMockData.customerName}</Typography>
      )
    },
    {
      name: <Typography variant="typo1">Dealership</Typography>,
      selector: (TableMockData) => TableMockData.dealership,
      cell: (TableMockData) => (
        <Typography variant="typo2">
          {TableMockData.dealership}
          <Typography variant="body3">{TableMockData.dealershipText}</Typography>
        </Typography>
      )
    },
    {
      name: <Typography variant="typo1">Registration Type</Typography>,
      selector: (TableMockData) => TableMockData.registrationType,
      cell: (TableMockData) => (
        <Typography variant="typo2">{TableMockData.registrationType}</Typography>
      )
    },
    {
      name: <Typography variant="typo1">Status</Typography>,
      selector: (TableMockData) => TableMockData.Status,
      cell: (TableMockData) => (
        <Button
          size="small"
          variant="outlined"
          text={TableMockData.Status}
          color="chooseStatus"
          startIcon={<StatusSvg status={TableMockData.Status} />}
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
