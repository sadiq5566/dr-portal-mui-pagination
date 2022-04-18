import * as React from "react";
import Modal from "@mui/material/Modal";
import {
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
  Tooltip,
  Divider
} from "@mui/material";
import Button from "../Button/index";
import ProfileImg from "../../Assets/images/ProfileImg.png";
import { makeStyles } from "@mui/styles";
import ProfileSvg from "../../Assets/svgs/ProfileSvg/ProfileSvg";
import LogoutSvg from "../../Assets/svgs/LogoutSvg/LogoutSvg";
import CloseSvg from "../../Assets/svgs/CloseSvg/CloseSvg";
import theme from "../../theme";
import "./modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 480,
  height: 400,
  bgcolor: "background.paper",
  p: 2,
  borderRadius: "10px"
  // root: {
  //   background: 'rgba(4, 5, 24, 0.85)'
  // },
};

const useStyles = makeStyles({
  profileContent: {
    marginLeft: "6px !important",
    borderRadius: "3px!important",
    marginRight: "6px !important"
  },
  profileBg: {},
  profileTextColor: {
    color: theme.palette.success.light
  },
  profileHeading: {
    fontSize: "18px !important",
    fontWeight: "600 !important"
  },
  profileSubHeading: {
    fontWeight: "600 !important ",
    color: theme.palette.secondary.dark,
    fontSize: "16px !important"
  },
  profileTitle: {
    color: theme.palette.primary.dark
  },
  profileDetails: {
    fontSize: "14px !important",
    color: theme.palette.secondary.dark
  }
});

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const [tinyModal, setTinyModal] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const openTinyModal = () => {
    setTinyModal(true);
  };
  const closeTinyModal = () => {
    setTinyModal(false);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <div>
        <Box>
          <Tooltip title="Profile setting">
            <IconButton
              onClick={openTinyModal}
              size="small"
              sx={{
                padding: "0px"
              }}
            >
              <Avatar src={ProfileImg} />
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          open={tinyModal}
          onClose={closeTinyModal}
          PaperProps={{
            elevation: 0,
            sx: {
              backgroundColor: theme.palette.primary.dark,
              overflow: "visible",
              top: "486px !important",
              left: "15px !important",
              "&:after": {
                content: '""',
                display: "block",
                position: "absolute",
                width: 0,
                height: 0,
                borderLeft: "17px solid transparent",
                borderRight: "17px solid transparent",
                borderTop: `26px solid ${theme.palette.primary.dark}`,
                top: "58px",
                left: "11px",
                padding: "0",
                boxShadow: 24
              }
            }
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem
            onClick={handleOpen}
            className={`${classes.profileBg} ${classes.profileTextColor} ${classes.profileContent}`}
          >
            <ListItemIcon>
              <ProfileSvg />
            </ListItemIcon>
            <Typography variant="body4">Profile Settings</Typography>
          </MenuItem>

          <MenuItem className={`${classes.profileTextColor} ${classes.profileContent}`}>
            <ListItemIcon>
              <LogoutSvg />
            </ListItemIcon>
            <Typography variant="body4"> Logout</Typography>
          </MenuItem>
        </Menu>
      </div>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }} py={1}>
            <Typography className={classes.profileHeading} pb={2}>
              Profile Settings
            </Typography>
            <div onClick={handleClose}>
              <CloseSvg />
            </div>
          </Box>
          <Divider />

          <Box>
            <Typography className={classes.profileSubHeading} py={2}>
              Profile Name
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }} pb={3}>
              <Box sx={{ display: "flex" }}>
                <Box>
                  <Typography variant="subtitle1" className={classes.profileTitle}>
                    First Name:
                  </Typography>
                  <Typography className={classes.profileDetails}>Amanda</Typography>
                </Box>
                <Box px={8}>
                  <Typography variant="subtitle1" className={classes.profileTitle}>
                    Middle Name:
                  </Typography>
                  <Typography className={classes.profileDetails}>G</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" className={classes.profileTitle}>
                    Last Name:
                  </Typography>
                  <Typography className={classes.profileDetails}>Barras</Typography>
                </Box>
              </Box>

              <Button variant="contained" size="small" color="AccLock" text="Edit Name" />
            </Box>
            <Divider />
          </Box>

          <Box>
            <Typography className={classes.profileSubHeading} py={2}>
              Password
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }} pb={3}>
              <Box sx={{ display: "flex" }}>
                <Box>
                  <Typography variant="subtitle1" className={classes.profileTitle}>
                    Last Changed:
                  </Typography>
                  <Typography className={classes.profileDetails}>9/16/2021</Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                size="small"
                color="AccLock"
                text="Change Password"
              />
            </Box>
            <Divider />
          </Box>

          <Box>
            <Typography className={classes.profileSubHeading} py={2}>
              Email Address
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }} pb={3}>
              <Box sx={{ display: "flex" }}>
                <Box>
                  <Typography variant="subtitle1" className={classes.profileTitle}>
                    Email:
                  </Typography>
                  <Typography className={classes.profileDetails}>
                    amandag@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                size="small"
                color="AccLock"
                text="Request Change"
              />
            </Box>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
