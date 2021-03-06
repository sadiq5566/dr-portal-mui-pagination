import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Button as Buttons } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  primary: {
    background: `${theme.palette.primary.main} !important`,
    color: `${theme.palette.primary.light} !important`,
    fontSize: "14px !important",
    width: "100%",
    height: "100%",
    padding: "0.7rem !important",
    fontWeight: "bold !important",
    "&:hover": {
      background: `${theme.palette.error.light} !important`
    }
  },
  new: {
    background: `${theme.palette.warning.main} !important`,
    color: `${theme.palette.primary.light} !important`,
    borderRadius: "5px",
    marginRight: "0.6rem !important",
    height: "34px !important",
    fontSize: "12px !important"
  },
  New: {
    background: `${theme.palette.warning.contrastText} !important`,
    color: `${theme.palette.primary.light} !important`,
    borderRadius: "6px !important",
    border: "1px solid !important",
    fontSize: "12px !important",
    borderColor: `${theme.palette.success.contrastText}  !important`,
    marginLeft: "0.6rem !important",
    height: "28px"
  },
  pending: {
    backgroundColor: `${theme.palette.warning.main} !important`,
    color: `${theme.palette.success.light}  !important`,
    borderRadius: "6px !important",
    border: "1px solid !important",
    fontSize: "12px !important",
    borderColor: `${theme.palette.success.contrastText}  !important`,
    marginLeft: "0.6rem !important",
    height: "28px"
  },
  delete: {
    color: theme.palette.primary.light,
    borderRadius: "5px",
    background: `${theme.palette.error.main} !important`,
    marginRight: "1rem"
  },
  actAccept: {
    backgroundColor: `${theme.palette.success.main} !important`,
    color: `${theme.palette.success.light}  !important`,
    borderRadius: "6px !important",
    border: "1px solid !important",
    fontSize: "12px !important",
    borderColor: `${theme.palette.success.contrastText}  !important`,
    marginLeft: "0.6rem !important",
    height: "28px"
  },
  secondary: {
    background: `${theme.palette.warning.light} !important`,
    color: `${theme.palette.primary.light} !important`,
    borderRadius: "5px",
    fontWeight: 500,
    height: "34px !important",
    fontSize: "12px !important",
    marginRight: "0.6rem !important"
  },
  warning: {
    color: `${theme.palette.secondary.light} !important`,
    background: `${theme.palette.primary.light} !important`,
    fontSize: "12px !important",
    height: "34px !important",
    border: `1px solid ${theme.palette.secondary.contrastText} !important`,
    borderRadius: "5px"
  },
  success: {
    background: `${theme.palette.success.main} !important`,
    color: `${theme.palette.primary.light} !important`,
    borderRadius: "5px",
    fontSize: "12px !important",
    height: "34px !important",
    marginRight: "0.6rem !important",
    "&:hover": {
      background: `${theme.palette.error.dark} !important`
    }
  },
  disable: {
    background: theme.palette.primary.contrastText,
    color: `${theme.palette.primary.light} !important`,
    borderRadius: "5px"
  },
  danger: {
    color: theme.palette.primary.light,
    borderRadius: "5px",
    background: theme.palette.secondary.light,
    marginRight: "1rem !important"
  },
  info: {
    color: theme.palette.primary.main,
    borderRadius: "5px",
    background: `${theme.palette.primary.light} !important`,
    marginRight: "1rem !important"
  },
  Batchorder: {
    whiteSpace: "nowrap",
    fontFamily: "interMedium-500 !important",
    fontSize: "12px !important"
  },
  View: {
    height: "31px",
    border: 1,
    borderColor: "#E5E6E8 !important",
    fontFamily: "medium-500 !important",
    fontSize: "12px !important"
  },
  chooseStatus: {
    borderRadius: "7px !important",
    textTransform: "none",
    border: `1px solid ${theme.palette.info.main}`,
    borderColor: `${theme.palette.success.contrastText} !important`,
    color: `${theme.palette.primary.dark} !important`,
    whiteSpace: "nowrap",
    height: "28px",
    fontFamily: "medium-500 !important",
    fontSize: "10px !important"
  },
  ActiveButtonStatus: {
    backgroundColor: `${theme.palette.warning.contrastText} !important`,
    whiteSpace: "nowrap",
    height: "28px",
    borderRadius: "7px !important",
    textTransform: "none",
    border: "1px solid !important",
    borderColor: `${theme.palette.success.contrastText}  !important`,
    color: `${theme.palette.success.light}  !important`
  },
  ActivePending: {
    backgroundColor: `${theme.palette.warning.main} !important`,
    color: `${theme.palette.success.light}  !important`,
    borderRadius: "7px !important",
    border: "1px solid !important",
    borderColor: `${theme.palette.success.contrastText}  !important`,
    height: "28px"
  },
  ActiveLock: {
    backgroundColor: `${theme.palette.warning.light} !important`,
    color: `${theme.palette.success.light}  !important`,
    borderRadius: "7px !important",
    border: "1px solid !important",
    borderColor: `${theme.palette.success.contrastText}  !important`,
    height: "28px"
  },
  ActiveComp: {
    backgroundColor: `${theme.palette.success.main} !important`,
    color: `${theme.palette.success.light}  !important`,
    borderRadius: "7px !important",
    border: "1px solid !important",
    borderColor: `${theme.palette.success.contrastText}  !important`,
    height: "28px"
  },
  Cancel: {
    backgroundColor: `${theme.palette.primary.light} !important`,
    color: `${theme.palette.warning.contrastText}  !important`,
    borderRadius: "7px !important",
    border: `${theme.palette.primary.contrastText} !important`,
    borderColor: `${theme.palette.success.contrastText}  !important`
  },
  ActiveReject: {
    backgroundColor: `${theme.palette.secondary.light} !important`,
    color: `${theme.palette.success.light}  !important`,
    height: "28px !important",
    borderRadius: "7px !important",
    borderColor: `${theme.palette.success.contrastText}  !important`,
    "&:hover": {
      background: `${theme.palette.error.contrastText} !important`,
      color: `${theme.palette.primary.light} !important`
    }
  },
  confirm: {
    backgroundColor: `${theme.palette.secondary.light} !important`,
    color: `${theme.palette.success.light}  !important`,
    borderRadius: "7px !important",
    borderColor: `${theme.palette.success.contrastText}  !important`,
    "&:hover": {
      background: `${theme.palette.error.contrastText} !important`,
      color: `${theme.palette.primary.light} !important`
    }
  },
  ActReject: {
    backgroundColor: `${theme.palette.secondary.light} !important`,
    color: `${theme.palette.success.light}  !important`,
    borderRadius: "6px !important",
    border: "1px solid !important",
    fontSize: "12px !important",
    borderColor: `${theme.palette.success.contrastText}  !important`,
    marginLeft: "0.6rem !important",
    height: "28px"
  },
  profileButton: {
    background: "blue",
    color: "white",
    borderRadius: "5px",
    height: "33px",
    textTransform: "none",
    width: "4 rem",
    whiteSpace: "nowrap"
  },
  batchOrderComplete: {
    color: `${theme.palette.success.main}  !important`,
    borderRadius: "6px !important",
    border: "1px solid !important",
    fontSize: "12px !important",
    borderColor: `${theme.palette.success.main}  !important`,
    marginRight: "0.6rem !important",
    height: "33px"
  },
  batchOrderReject: {
    // backgroundColor: `${theme.palette.secondary.light} !important`,
    color: `${theme.palette.secondary.light}  !important`,
    borderRadius: "6px !important",
    border: "1px solid !important",
    fontSize: "12px !important",
    borderColor: `${theme.palette.secondary.light}  !important`,
    marginRight: "0.6rem !important",
    height: "33px"
  },
  batchReject: {
    backgroundColor: `${theme.palette.secondary.light} !important`,
    color: `${theme.palette.success.light}  !important`,
    borderRadius: "5px",
    fontSize: "12px !important",
    height: "34px !important",
    borderColor: `${theme.palette.success.contrastText}  !important`,
    "&:hover": {
      background: `${theme.palette.error.contrastText} !important`,
      color: `${theme.palette.primary.light} !important`
    }
  },

  batchDisable: {
    background: theme.palette.primary.contrastText,
    color: `${theme.palette.primary.light} !important`,
    borderRadius: "5px",
    fontSize: "12px !important",
    marginRight: "0.6rem !important",
    height: "34px"
  }
}));
interface IProps {
  readonly size?: "medium" | "small" | "large";
  readonly primary?: string;
  readonly disabled?: boolean;
  readonly text?: string;
  readonly startIcon?: React.ReactNode;
  readonly onClick?: (e: any) => void;
  readonly color?:
    | "secondary"
    | "primary"
    | "new"
    | "pending"
    | "actAccept"
    | "ActReject"
    | "New"
    | "confirm"
    | "info"
    | "Cancel"
    | "success"
    | "danger"
    | "disable"
    | "delete"
    | "warning"
    | "Batchorder"
    | "View"
    | "chooseStatus"
    | "ActiveButtonStatus"
    | "ActivePending"
    | "ActiveLock"
    | "ActiveComp"
    | "ActiveReject"
    | "profileButton"
    | "batchReject"
    | "batchOrderComplete"
    | "batchOrderReject"
    | "batchDisable";
  readonly warning?: string;
  readonly info?: string;
  readonly variant?: "text" | "outlined" | "contained";
}
const Button: React.FC<IProps> = ({
  startIcon,
  variant,
  size,
  info,
  text,
  color,
  disabled,
  primary,
  warning,
  onClick
}) => {
  const classes = useStyles();
  return (
    <Buttons
      className={color ? classes[color] : ""}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      startIcon={startIcon}
      size={size}
      style={{ textTransform: "capitalize" }}
    >
      {text}
    </Buttons>
  );
};
export default Button;
