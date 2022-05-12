import React, { FC } from "react";
import { Box } from "@mui/material";
import Header from "./header";
import BatchOrderData from "./BatchOrderData";
const BatchOrderStatus: FC = () => {
  return (
    <Box>
      <Header />
      <BatchOrderData />
    </Box>
  );
};
export default BatchOrderStatus;
