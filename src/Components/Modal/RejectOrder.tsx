import React, { useState, Dispatch, SetStateAction } from "react";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@mui/styles";
import Button from "../Button/index";
import { Typography, Box, Theme, Divider } from "@mui/material";
import CloseSvg from "../../Assets/svgs/CloseSvg/CloseSvg";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const style = {
  position: "absolute",
  top: "50%",
  width: 590,
  left: "52%",
  transform: "translate(-50%, -50%)",
  borderRadius: "8px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4
};

const useStyles = makeStyles((theme: Theme) => ({
  reject: {
    fontSize: "18px",
    fontWeight: "bold"
  },
  reason: {
    fontSize: "12px",
    fontWeight: 400,
    color: theme.palette.primary.dark
  },
  textArea: {
    borderColor: theme.palette.primary.contrastText
  }
}));

interface IProps {
  readonly setRejectModal: Dispatch<SetStateAction<boolean>>;
}

const RejectOrder: React.FC<IProps> = ({ setRejectModal }) => {
  const classes = useStyles();
  const [reject, setReject] = useState("");

  const RejectReason = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setReject(e.target.value);

    console.log(reject);
  };
  const confirmReject = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
  };
  return (
    <Modal open={true}>
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography pb={3} className={classes.reject}>
            Reject Order
          </Typography>
          <Box onClick={() => setRejectModal(false)}>
            <CloseSvg />
          </Box>
        </Box>
        <Divider />
        <Box mt={3}>
          <Typography className={classes.reason}>Reason:</Typography>
          <Box mt={1}>
            <TextareaAutosize
              minRows={3}
              style={{ width: "585px", height: "109px" }}
              className={classes.textArea}
              value={reject}
              onChange={RejectReason}
            />
          </Box>
        </Box>
        <Box mt={3}>
          <Divider />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }} mt={4}>
          <Box mr={2} onClick={() => setRejectModal(false)}>
            <Button variant="contained" text="cancel" color="Cancel" />
          </Box>
          <Box>
            <Button
              variant="contained"
              text="confirm"
              color="ActiveReject"
              onClick={confirmReject}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default RejectOrder;
