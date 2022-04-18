import React, { Dispatch, SetStateAction } from "react";
import Modal from "@mui/material/Modal";
import Button from "../Button/index";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@mui/material";
import CloseSvg from "../../Assets/svgs/CloseSvg/CloseSvg";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import theme from "../../theme";
import Avatar from "@mui/material/Avatar";

import "./modal.css";

const style = {
  maxWidth: "350px",
  position: "absolute",
  top: "50%",
  left: "52%",
  transform: "translate(-50%, -50%)",
  borderRadius: "8px",
  bgcolor: "background.paper",
  p: 3
};
const iconBox = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "90px",
  p: 3
};
const iconDiv = {
  height: "60px",
  width: "60px",
  borderRadius: "50%",
  bgcolor: theme.palette.common.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

interface IProps {
  readonly setModal: Dispatch<SetStateAction<boolean>>;
}

const DeleteBmv: React.FC<IProps> = ({ setModal }) => {
  const submit = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
  };

  return (
    <Modal open={true}>
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box onClick={() => setModal(false)}>
            <CloseSvg />
          </Box>
        </Box>
        <Box sx={iconBox}>
          <Box sx={iconDiv}>
            <DeleteForeverIcon
              sx={{ color: theme.palette.error.main, fontSize: "40px" }}
            />
          </Box>
          <Box>
            <Typography variant="h4">Delete Owner?</Typography>
          </Box>
        </Box>
        <Box>
          <List
            sx={{ width: "100%", maxWidth: 350, bgcolor: theme.palette.common.white }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  variant="square"
                  sx={{ width: 30, height: 32, borderRadius: 1, cursor: "pointer" }}
                />
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
          </List>
        </Box>
        <Box>
          <Typography variant="h5" align="center" style={{ wordWrap: "break-word" }}>
            Some text here on two lines. Some text here on two lines. Some text here on
            two lines
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }} mt={4}>
          <Box mr={2} onClick={() => setModal(false)}>
            <Button variant="contained" text="Cancel" size="medium" color="warning" />
          </Box>
          <Box>
            <Button
              text="Confirm"
              variant="contained"
              color="delete"
              //   color={disable ? "disable" : "success"}
              //   disabled={disable}
              onClick={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                submit(e)
              }
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteBmv;
