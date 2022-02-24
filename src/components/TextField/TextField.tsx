import React from "react";
import { Grid, Theme, TextField as Input } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
  readonly placeholder?: string;
  readonly label?: string;
  readonly size?: "small";
  readonly variant?: "filled" | "standard" | "outlined";
}
const TextField: React.FC<IProps> = ({ type, placeholder, size, variant, label }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Input
            className={classes.inputField}
            type={type}
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

export default TextField;
