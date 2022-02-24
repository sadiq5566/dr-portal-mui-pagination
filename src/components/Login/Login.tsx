import { Grid, Theme, Box, Typography } from "@mui/material";
import loginone from "../../Assets/images/loginone.png";
import { makeStyles } from "@mui/styles";
import Logo from "../../Assets/svgs/DrSvg/LogoSvg";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import TextField from "../TextField/TextField";

const useStyles = makeStyles((theme: Theme) => ({
  img: {
    maxWidth: "100%",
    height: "100vh",
    objectFit: "fill"
  },
  logo: {
    display: "flex",
    marginTop: "5rem",
    alignItems: "center",
    justifyContent: "center"
  },
  loginbtn: {
    background: theme.palette.primary.main,
    marginTop: "5rem",
    borderRadius: "10px"
  }
}));

const Login = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} sm={10} md={8} lg={6}>
        <img src={loginone} alt="loginone" className={classes.img} />
      </Grid>
      <Grid item xs={10} sm={10} md={7} lg={6}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={12} lg={12}>
            <Box className={classes.logo}>
              <Logo />
              <Typography variant="h1">DR Porter</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="subtitle2">Log in</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={10} sm={10} md={10} lg={6}>
            <Box mt={4}>
              <TextField
                type="text"
                placeholder="lan@gmail.com"
                variant="outlined"
                label="Email"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={10} sm={10} md={10} lg={6}>
            <Box mt={2}>
              <TextField type="password" variant="outlined" label="Password" />
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={10} sm={10} md={10} lg={6}>
            <Box className={classes.loginbtn}>
              <Button size="small" variant="contained" text="Log in" color="primary" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
