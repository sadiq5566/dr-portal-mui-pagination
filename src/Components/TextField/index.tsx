import React from "react";
import { Grid, Theme, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  inputField: {
    width: "100%",
    background: "#ffffff"
  },
  info: {
    border: "2px solid #E5E6E8 !important",
    "& .MuiInput-underline:after": {
      border: "#E5E6E8"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "#E5E6E8"
      },
      "&:hover fieldset": {
        border: "#E5E6E8"
      },
      "&.Mui-focused fieldset": {
        border: "#E5E6E8"
      }
    }
  },
  success: {
    border: "2px solid #24BD86 !important",
    "& .MuiInput-underline:after": {
      border: "#E5E6E8"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "#E5E6E8"
      },
      "&:hover fieldset": {
        border: "#E5E6E8"
      },
      "&.Mui-focused fieldset": {
        border: "#E5E6E8"
      }
    }
  },
  error: {
    border: "2px solid #D75041 !important",
    "& .MuiInput-underline:after": {
      border: "#E5E6E8"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "#E5E6E8"
      },
      "&:hover fieldset": {
        border: "#E5E6E8"
      },
      "&.Mui-focused fieldset": {
        border: "#E5E6E8"
      }
    }
  },

  label: {
    fontSize: "12px"
  }
}));

interface IProps {
  readonly type: string;

  readonly color?: "info" | "success" | "error";
  readonly name?: string;
  readonly success?: string;
  readonly error?: string;
  readonly info?: string;
  readonly placeholder?: string;
  readonly value?: string | number;
  readonly label?: string;
  readonly onClick?: (e: any) => void;
  readonly size?: "small";
  readonly variant?: "filled" | "standard" | "outlined";
  readonly onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const InputField: React.FC<IProps> = ({
  type,
  name,
  error,
  success,
  info,
  onClick,
  onChange,
  color,
  placeholder,
  size,
  value,
  variant,
  label
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextField
            className={`${classes.inputField} ${color ? classes[color] : ""}`}
            type={type}
            name={name}
            color={color}
            onClick={onClick}
            onChange={onChange}
            value={value}
            id="outlined-basic"
            label={label}
            placeholder={placeholder}
            size={size}
            variant={variant}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default InputField;
