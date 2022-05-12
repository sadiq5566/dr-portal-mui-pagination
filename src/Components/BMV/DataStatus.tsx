import { Box } from "@mui/material";
import React from "react";
import theme from "../../theme";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface Ipops {
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const DataStatus: React.FC<Ipops> = ({ setDeleteModal, setEditModal }) => {
  return (
    <Box sx={{ display: "flex", marginRight: "100px" }}>
      <Box
        sx={{
          
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <IconButton onClick={() => setEditModal(true)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => setDeleteModal(true)}>
          <DeleteIcon sx={{ color: theme.palette.error.main }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default DataStatus;
