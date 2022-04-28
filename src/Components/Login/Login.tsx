import React, { useCallback, useContext, useEffect } from "react";
import { Grid, Theme, Typography, Box } from "@mui/material";
import login from "../../Assets/images/login.png";
import { makeStyles } from "@mui/styles";
import Logo from "../../Assets/svgs/DrSvg/Logo";
import Button from "../Button";
import InputField from "../TextField";
// import { AuthContext } from "../../Context/AuthContext/authContext";
import { useAuth0 } from "@auth0/auth0-react";
// import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  img: {
    maxWidth: "100%",
    height: "100%",
    position: "fixed"
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

  const { loginWithRedirect, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  // const context = useContext(AuthContext);

  const loginRequest = useCallback(async () => {
    const datas = await getAccessTokenSilently();

    console.log(datas);
  }, [isAuthenticated]);

  useEffect(() => {
    loginRequest();
  }, [loginRequest]);

  if (isAuthenticated) {
    // return <Redirect to="/new-orders" />;
  }

  if (isLoading) {
    // return <LoadingComponent />;
  }

  return (
    <Grid container justifyContent="center">
      <Grid item lg={6}>
        <Box>
          <img src={login} alt="login" className={classes.img} />
        </Box>
      </Grid>
      <Grid item lg={6}>
        <Box className={classes.logo}>
          <Logo />
          <Typography variant="h1">DR Porter</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">Log in</Typography>
        </Box>
        <Grid
          container
          justifyContent="center"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Grid item lg={6} sx={{ width: "100%" }}>
            <Box mt={4}>
              <InputField
                type="text"
                placeholder="lan@gmail.com"
                variant="outlined"
                label="Email"
              />
            </Box>
          </Grid>

          <Grid item lg={6} sx={{ width: "100%" }}>
            <Box mt={2}>
              <InputField type="password" variant="outlined" label="Password" />
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item lg={6}>
            <Box className={classes.loginbtn}>
              <Button
                size="small"
                onClick={() => loginWithRedirect()}
                variant="contained"
                text="Log in"
                color="primary"
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
