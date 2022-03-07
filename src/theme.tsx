import * as React from "react";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle4: true;
    body3: true;
    body4: true;
    typo1: true;
    typo2: true;
    typo3: true;
    typo4: true;
  }
}
interface ExtendedTypographyOptions extends TypographyOptions {
  subtitle4?: React.CSSProperties;
  body3?: React.CSSProperties;
  body4?: React.CSSProperties;
  typo1?: React.CSSProperties;
  typo2?: React.CSSProperties;
  typo3?: React.CSSProperties;
  typo4?: React.CSSProperties;
}
const blue = "#4363EA";
const blackIcon = "#585F67";
const yellow = "#F7CB68";
const newText = "#383747";
const searchIcon = "#24BD86";
const ButtonNumberText = "#D5D9DE";
const white = "#FFFFFF";
const secondaryDark = "#17202C";
const secondaryMain = "#3C4046";
const theme = createTheme({
  palette: {
    primary: {
      light: `${white}`,
      main: `${blue}`,
      dark: `${blackIcon}`
    },
    secondary: {
      main: `${secondaryMain}`,
      dark: `${secondaryDark}`
    },
    warning: {
      main: `${yellow}`,
      dark: `${newText}`
    },
    success: {
      main: `${searchIcon}`,
      dark: `${ButtonNumberText}`
    }
  },
  typography: {
    subtitle1: {
      fontSize: 12
    },
    subtitle4: {
      fontSize: 14
    },
    body3: {
      fontSize: 11
    },
    body4: {
      fontSize: 10
    },
    h1: {
      fontSize: "40px",
      fontWeight: 700,
      textTransform: "capitalize",
      paddingLeft: "2rem",
      textAlign: "center"
    },
    subtitle2: {
      fontSize: "22px",
      fontWeight: 700,
      color: "#000000",
      marginTop: "3rem",
      textAlign: "center"
    },
    body2: {
      fontSize: "21px",
      fontWeight: 600,
      color: "#000000"
    },
    h4: {
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: "18.75px",
      color: "#17202C"
    },
    h5: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "18.75px",
      color: "#585F67"
    },
    h3: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "16.81px",
      color: "#17202C"
    },

    typo1: { fontSize: "15px", color: "#17202C" },
    typo2: { fontSize: "13px", color: " #3C4046 " },
    typo3: { fontSize: "14px", color: "#17202C" },
    typo4: { fontSize: "11px", color: "#585F67" }
  } as ExtendedTypographyOptions
} as ThemeOptions);
export default theme;
