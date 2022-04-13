import { Box } from "@mui/material";
import React from "react";
import theme from "../../theme";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const DataStatus = () => {
  return (
    <Box sx={{ display: "flex", marginRight: "100px" }}>
      <Box
        sx={{
          // backgroundColor: "whitesmoke",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon sx={{ color: theme.palette.error.main }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default DataStatus;
