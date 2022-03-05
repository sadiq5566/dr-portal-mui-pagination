import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@mui/styles";
import Button from "../Button/index";
import { Typography, Box, Stack, Theme, Divider } from "@mui/material";
import CloseSvg from "../../Assets/svgs/CloseSvg/CloseSvg";
import NumberFormatCustom from "../TextField/NumberFormatCustom";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "52%",
  transform: "translate(-50%, -50%)",
  borderRadius: "8px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4
};

const useStyles = makeStyles((theme: Theme) => ({
  complete: {
    fontSize: "18px",
    fontWeight: "bold"
  }
}));

interface IProps {
  readonly setModal: Dispatch<SetStateAction<boolean>>;
}

const CompleteOrder: React.FC<IProps> = ({ setModal }) => {
  const classes = useStyles();
  const [user, setUser] = useState({
    reciept_number: "",
    confirm_number: "",
    total_amount: "",
    confirm_amount: ""
  });
  let name, value;
  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const submit = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    console.log(user, "this is form");
  };

  let disable =
    !user.reciept_number &&
    !user.confirm_number &&
    user.reciept_number === user.confirm_number
      ? false
      : true;
  return (
    <Modal open={true}>
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography pb={3} className={classes.complete}>
            Complete Orders
          </Typography>
          <Box onClick={() => setModal(false)}>
            <CloseSvg />
          </Box>
        </Box>
        <Divider />

        <Stack direction="row" sx={{ display: "flex" }} spacing={4} mt={3}>
          <Box sx={{ minWidth: 280 }}>
            <Typography pb={1} variant="h5">
              Reciept Number:
            </Typography>

            <NumberFormatCustom
              type="text"
              name="reciept_number"
              size="small"
              autoComplete="off"
              color={
                !user.reciept_number && !user.confirm_number
                  ? "info"
                  : user.reciept_number === user.confirm_number
                  ? "success"
                  : "error"
              }
              value={user.reciept_number}
              onChange={handleInput}
            />
          </Box>
          <Box sx={{ minWidth: 280 }}>
            <Typography pb={1} variant="h5">
              Confirm Reciept Number:
            </Typography>
            <NumberFormatCustom
              type="text"
              name="confirm_number"
              size="small"
              autoComplete="off"
              color={
                !user.confirm_number && !user.reciept_number
                  ? "info"
                  : user.confirm_number === user.reciept_number
                  ? "success"
                  : "error"
              }
              value={user.confirm_number}
              onChange={handleInput}
            />
          </Box>
        </Stack>
        <Stack direction="row" sx={{ display: "flex" }} spacing={4} mt={3}>
          <Box sx={{ minWidth: 280 }}>
            <Typography pb={1} variant="h5">
              Total Amount Due:
            </Typography>
            <NumberFormatCustom
              type="text"
              name="total_amount"
              size="small"
              autoComplete="off"
              color={
                !user.total_amount && !user.confirm_amount
                  ? "info"
                  : user.total_amount === user.confirm_amount
                  ? "success"
                  : "error"
              }
              value={user.total_amount}
              onChange={handleInput}
            />
          </Box>
          <Box sx={{ minWidth: 280 }} pb={3}>
            <Typography pb={1} variant="h5">
              Confirm Total Amount Due:
            </Typography>
            <NumberFormatCustom
              type="text"
              name="confirm_amount"
              size="small"
              autoComplete="off"
              color={
                !user.confirm_amount && !user.total_amount
                  ? "info"
                  : user.confirm_amount === user.total_amount
                  ? "success"
                  : "error"
              }
              value={user.confirm_amount}
              onChange={handleInput}
            />
          </Box>
        </Stack>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }} mt={4}>
          <Box mr={2} onClick={() => setModal(false)}>
            <Button variant="contained" text="Cancel" size="medium" color="warning" />
          </Box>
          <Box>
            <Button
              text="Confirm"
              variant="contained"
              color={disable ? "disable" : "success"}
              disabled={disable}
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

export default CompleteOrder;
