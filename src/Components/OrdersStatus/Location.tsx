import React from "react";
import { Grid } from "@mui/material";
import LocationSvg from "../../Assets/svgs/LocationSvg";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import theme from "../../theme";

const Location = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <Grid container>
      <Grid item lg={2}>
        <LocationSvg />
      </Grid>
      <Grid item lg={10}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
          <InputLabel sx={{ fontSize: "14px", color: theme.palette.primary.dark }}>
            Current Location Name
          </InputLabel>
          <Select disableUnderline value={age} onChange={handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Location;
