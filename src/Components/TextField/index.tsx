import React from "react";
import { Grid, Theme, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  inputField: {
    width: "100%",
    background: theme.palette.primary.light,
    borderRadius: "10px"
  },
  info: {
    border: `2px solid ${theme.palette.primary.contrastText} !important`,
    "& .MuiInput-underline:after": {
      border: `${theme.palette.primary.contrastText} `
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: `${theme.palette.primary.contrastText} `
      },
      "&:hover fieldset": {
        border: `${theme.palette.primary.contrastText} `
      },
      "&.Mui-focused fieldset": {
        border: `${theme.palette.primary.contrastText}`
      }
    }
  },
  success: {
    border: `2px solid ${theme.palette.success.main}  !important`,
    "& .MuiInput-underline:after": {
      border: ` ${theme.palette.primary.contrastText}`
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: ` ${theme.palette.primary.contrastText}`
      },
      "&:hover fieldset": {
        border: ` ${theme.palette.primary.contrastText}`
      },
      "&.Mui-focused fieldset": {
        border: ` ${theme.palette.primary.contrastText}`
      }
    }
  },
  error: {
    border: `2px solid ${theme.palette.secondary.light}  !important`,
    "& .MuiInput-underline:after": {
      border: ` ${theme.palette.primary.contrastText} `
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: ` ${theme.palette.primary.contrastText} `
      },
      "&:hover fieldset": {
        border: ` ${theme.palette.primary.contrastText} `
      },
      "&.Mui-focused fieldset": {
        border: ` ${theme.palette.primary.contrastText} `
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
  readonly autoComplete?: string;
  readonly size?: "small" | "medium";
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
  onChange,
  color,
  autoComplete,
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
            onChange={onChange}
            autoComplete={autoComplete}
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
