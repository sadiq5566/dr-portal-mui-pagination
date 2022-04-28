import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import { providerConfig } from "./Config/Auth0 Authentication/Auth0Provider";
import { Auth0Provider } from "@auth0/auth0-react";
// import { BrowserRouter as Router, Route, Routes as Switch } f/rom "react-router-dom";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Auth0Provider {...providerConfig}>
    

      <App />
   
    </Auth0Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
