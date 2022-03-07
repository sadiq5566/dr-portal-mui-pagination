import { Typography, Theme, Divider, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import WestIcon from "@mui/icons-material/West";
import Button from "../Button/index";
import AttachmentDetils from "./AttachmentDetails";
import { Link } from "react-router-dom";
import { Order } from "../../Interfaces/orderInterface";
import StatusSvg from "../../Assets/svgs/StatusSvg/StatusSvg";

interface IProps {
  order: Order;
}

const useStyles = makeStyles((theme: Theme) => ({
  arrow: {
    display: "flex",
    alignItems: "center",
    paddingTop: "2rem",
    cursor: "pointer",
    paddingBottom: "25px"
  },
  back: {
    paddingLeft: "0.7rem"
  },
  order: {
    display: "flex",
    alignItems: "center",
    paddingTop: "2rem",
    paddingBottom: "2rem"
  },
  accepted: {
    backgroundColor: " #F9FBFD",
    color: " #383747",
    textTransform: "none",

    borderRadius: "7px",
    border: "1px solid #F2F1F6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "10px"
  },
  accept: {
    paddingLeft: "8px",
    fontWeight: "bold"
  }
}));

const Orders: React.FC<IProps> = ({ order }) => {
  const classes = useStyles();
  return (
    <>
      <Box pl={3}>
        <Link to="/" style={{ color: "#000000", textDecoration: "none" }}>
          <Box className={classes.arrow}>
            <WestIcon />
            <Typography variant="h6" className={classes.back}>
              Back
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box>
        <Divider />
      </Box>
      <Box px={3}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="body2" className={classes.order}>
              Order #: 124541
              <Box className={classes.accepted} ml={2} px={1}>
                {order.Status === "complete" && (
                  <>
                    <StatusSvg status="locked" />
                    <Typography className={classes.accept}>Locked</Typography>
                  </>
                )}
              </Box>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              {order?.Status === "complete" ? (
                <Button
                  text="Complete Order"
                  variant="contained"
                  color="success"
                  size="large"
                />
              ) : (
                <Button
                  text="Lock Order"
                  variant="contained"
                  color="secondary"
                  size="large"
                />
              )}
            </Box>
            <Box>
              <Button variant="contained" text="Reject" size="medium" color="warning" />
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box mt={4}>
          <AttachmentDetils order={order} />
        </Box>
      </Box>
    </>
  );
};

export default Orders;
