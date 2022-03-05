import React from "react";
import { Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InputField from "../TextField";
import NumberFormat from "react-number-format";

const useStyles = makeStyles((theme: Theme) => ({
  inputField: {
    width: "100%",
    background: "#ffffff"
  },
  label: {
    fontSize: "12px"
  }
}));

interface IProps {
  readonly type: string;
  readonly color?: "info" | "success" | "error";
  readonly name?: string;
  readonly autoComplete?: string;
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
const NumberFormatCustom: React.FC<IProps> = ({
  type,
  name,
  onClick,
  onChange,
  color,
  placeholder,
  size,
  value,
  autoComplete,
  variant,
  label
}) => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <NumberFormat
          className={classes.inputField}
          customInput={InputField}
          name={name}
          color={color}
          onClick={onClick}
          onChange={onChange}
          value={value}
          id="outlined-basic"
          label={label}
          autoComplete={color}
          placeholder={placeholder}
          size={size}
          variant={variant}
        />
      </Grid>
    </Grid>
  );
};

export default NumberFormatCustom;
