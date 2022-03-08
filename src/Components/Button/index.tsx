import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Button as Buttons } from "@mui/material";
const useStyles = makeStyles((theme: Theme) => ({
  primary: {
    background: "#4362EA !important",
    width: "100%",
    height: "100%",
    padding: "0.7rem !important",
    color: "#FFFFFF",
    fontWeight: "bold !important"
  },
  secondary: {
    background: "#BF43EA !important",
    color: "#FFFFFF",
    borderRadius: "5px",
    fontWeight: 500,
    marginLeft: "0.5rem"
  },
  warning: {
    color: "#D75041 !important",
    background: "#FFFFFF !important",
    border: "1px solid #E7E7E9 !important",
    borderRadius: "5px",
    marginLeft: "1rem !important"
  },
  success: {
    background: "#24BD86 !important",
    color: "#FFFFFF",
    borderRadius: "5px"
  },
  disable: {
    background: "#E5E6E8 !important",
    color: "#FFFFFF",
    borderRadius: "5px"
  },
  danger: {
    color: "#FFFFFF",
    borderRadius: "5px",
    background: "#D75041 !important",
    marginRight: "1rem"
  },
  info: {
    color: "#4362EA !important",
    borderRadius: "5px",
    background: "#FFFFFF",
    marginRight: "1rem"
  },
  AccLock: {
    whiteSpace: "nowrap"
  },
  chooseStatus: {
    borderRadius: "7px !important",
    textTransform: "none",
    border: "1px solid !important",
    borderColor: "#F2F1F6 !important",
    color: "#585F67 !important",
    whiteSpace: "nowrap",
    height: "28px"
  },
  ActiveButtonStatus: {
    backgroundColor: "#F7CB68 !important",
    whiteSpace: "nowrap",
    height: "28px",
    borderRadius: "7px !important",
    textTransform: "none",
    border: "1px solid !important",
    borderColor: "#F2F1F6 !important",
    color: "#fff !important"
  },
  ActiveAccept: {
    backgroundColor: "#4362EA !important",
    color: "#fff !important",
    borderRadius: "7px !important",
    border: "1px solid !important",
    borderColor: "#F2F1F6 !important",
    height: "28px"
  },
  ActiveLock: {
    backgroundColor: "#BF43EA !important",
    color: "#fff !important",
    borderRadius: "7px !important",
    border: "1px solid !important",
    borderColor: "#F2F1F6 !important",
    height: "28px"
  },
  ActiveComp: {
    backgroundColor: "#24BD86 !important",
    color: "#fff !important",
    borderRadius: "7px !important",
    border: "1px solid !important",
    borderColor: "#F2F1F6 !important",
    height: "28px"
  },
  ActiveReject: {
    backgroundColor: "#D75041 !important",
    color: "#fff !important",
    borderRadius: "7px !important",
    border: "1px solid !important",
    borderColor: "#F2F1F6 !important",
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
    | "info"
    | "success"
    | "danger"
    | "disable"
    | "warning"
    | "AccLock"
    | "chooseStatus"
    | "ActiveButtonStatus"
    | "ActiveAccept"
    | "ActiveLock"
    | "ActiveComp"
    | "ActiveReject"
    | "profileButton";
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
