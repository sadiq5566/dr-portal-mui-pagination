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
declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    lightGray: Palette["primary"];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    lightGray?: PaletteOptions["primary"];
  }
}
const blue = "#4362EA";
const blackIcon = "#585F67 ";
const yellow = "#F7CB68 ";
const docbg = "#F6F6F7 ";
const accept = "#F9FBFD ";
const complete = "#F1FFFA ";
const borderclr = "#F1FFFA ";
const commonBlack = "#000000 ";
const back = "#17202C ";
const bluebg = "#4363EA ";
const newText = "#383747 ";
const searchIcon = "#24BD86";
const purple = "#BF43EA";
const orange = "#D75041";
const borderColor = "#E7E7E9";
const ButtonNumberText = "#D5D9DE ";
const white = "#FFFFFF";
const textColor = "#fff ";
const chooseStatus = "#F2F1F6 ";
const disablebg = "#E5E6E8";
const secondaryDark = "#17202C ";
const secondaryMain = "#3C4046 ";
const offWhite = "#E3E5E9";
const lGray = "#E5E5E5";
const theme = createTheme({
  palette: {
    primary: {
      light: `${white}`,
      main: `${blue}`,
      dark: `${blackIcon}`,
      contrastText: `${disablebg}`
    },
    neutral: {
      main: `${offWhite}`
    },
    lightGray: {
      light: `${lGray}`
    },
    common: {
      white: `${docbg}`,
      black: `${commonBlack}`
    },
    secondary: {
      main: `${secondaryMain}`,
      dark: `${secondaryDark}`,
      light: `${orange}`,
      contrastText: `${borderColor}`
    },
    warning: {
      main: `${yellow}`,
      dark: `${newText}`,
      light: `${purple}`,
      contrastText: `${bluebg}`
    },
    success: {
      main: `${searchIcon}`,
      dark: `${ButtonNumberText}`,
      light: `${textColor}`,
      contrastText: `${chooseStatus}`
    },
    info: {
      main: `${accept}`,
      light: `${complete}`,
      contrastText: `${borderclr}`,
      dark: `${back}`
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
      color: "#000000 !important",
      marginTop: "3rem",
      textAlign: "center"
    },
    body2: {
      fontSize: "21px",
      fontWeight: 600,
      color: "#000000 !important"
    },
    h4: {
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: "18.75px",
      color: "#17202C !important"
    },
    h5: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "18.75px",
      color: "#585F67 !important"
    },
    h3: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "16.81px",
      color: "#17202C"
    },
    typo1: { fontSize: "15px", color: "#17202C !important" },
    typo2: { fontSize: "13px", color: " #3C4046 !important" },
    typo3: { fontSize: "14px", color: "#17202C !important" },
    typo4: { fontSize: "11px", color: "#585F67 !important" }
  } as ExtendedTypographyOptions
} as ThemeOptions);
export default theme;
