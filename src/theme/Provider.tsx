"use client";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
// {
//   palette: {
//     primary: {
//       main: '#012E4E',
//     },
//     secondary: {
//       main: '#08B3A0',
//     },
//     text: {
//       primary: '#5BFFB9',
//       secondary: '#FFFFFF'
//     },
//   },
// }

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default Theme;
