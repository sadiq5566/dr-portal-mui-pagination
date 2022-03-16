import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Button as Buttons } from "@mui/material";
import { useTheme } from "@emotion/react";

const useStyles = makeStyles((theme: Theme) => ({
  primary: {
    background: theme.palette.primary.main,
    width: "100%",
    height: "100%",

    padding: "0.7rem !important",
    color: theme.palette.primary.light,
    fontWeight: "bold !important"
  },
  secondary: {
    background: `${theme.palette.warning.light} !important`,
    color: `${theme.palette.primary.light} !important`,
    borderRadius: "5px",
    fontWeight: 500,
    marginLeft: "0.5rem"
  },
  warning: {
    color: `${theme.palette.secondary.light} !important`,
    background: `${theme.palette.primary.light} !important`,
    border: `1px solid ${theme.palette.secondary.contrastText} !important`,
    borderRadius: "5px",
    marginLeft: "1rem !important"
  },
  success: {
    background: `${theme.palette.success.main} !important`,
    color: `${theme.palette.primary.light} !important`,
    borderRadius: "5px"
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
    marginRight: "1rem"
  },
  info: {
    color: theme.palette.primary.main,
    borderRadius: "5px",
    background: `${theme.palette.primary.light} !important`,
    marginRight: "1rem !important"
  },
  AccLock: {
    whiteSpace: "nowrap"
  },
  chooseStatus: {
    borderRadius: "7px !important",
    textTransform: "none",
    border: `1px solid ${theme.palette.info.main}`,
    borderColor: `${theme.palette.success.contrastText} !important`,
    color: theme.palette.primary.dark,
    whiteSpace: "nowrap",
    height: "28px"
  },
  ActiveButtonStatus: {
    backgroundColor: `${theme.palette.warning.main} !important`,
    whiteSpace: "nowrap",
    height: "28px",
    borderRadius: "7px !important",
    textTransform: "none",
    border: "1px solid !important",
    borderColor: `${theme.palette.success.contrastText}  !important`,
    color: `${theme.palette.success.light}  !important`
  },
  ActiveAccept: {
    backgroundColor: `${theme.palette.primary.main} !important`,
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
  ActiveReject: {
    backgroundColor: `${theme.palette.secondary.light} !important`,
    color: `${theme.palette.success.light}  !important`,
    borderRadius: "7px !important",
    border: "1px solid !important",
    borderColor: `${theme.palette.success.contrastText}  !important`,
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
  const theme = useTheme();
  console.log(theme);
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
