import { ThemeOptions, createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import { lora, montserrat, shadowsIntoLight } from "./fonts";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      default: "#000"
    }
    // primary: {
    //   main: '#012E4E',
    // },
    // secondary: {
    //   main: '#08B3A0',
    // },
    // background: {
    //   default: '#012E4E',
    // },
    // text: {
    //   primary: 'rgba(255,255,255,0.87)',
    //   secondary: 'rgba(255,255,255,0.6)',
    //   disabled: 'rgba(255,255,255,0.38)',
    // },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontFamily: lora.style.fontFamily,
      fontSize: "3rem",
    },
    h2: {
      fontFamily: lora.style.fontFamily,
    },
    h3: {
      fontFamily: lora.style.fontFamily,
    },
    h6: {
      fontFamily: shadowsIntoLight.style.fontFamily,
      letterSpacing: "0.2rem",
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1.125rem",
      lineHeight: 1.8,
      wordSpacing: "0.1rem",
    },
    body2: {
      fontSize: "1rem",
    },
  },
};

const theme = createTheme(deepmerge(themeOptions, themeOptions));

export default theme;