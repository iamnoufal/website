import { ThemeOptions, createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#012E4E',
    },
    secondary: {
      main: '#08B3A0',
    },
    background: {
      default: '#012E4E',
      paper: '#104362',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: 'rgba(255,255,255,0.6)',
      disabled: 'rgba(255,255,255,0.38)',
    },
  },
};

const theme = createTheme(deepmerge(themeOptions, themeOptions));

export default theme;