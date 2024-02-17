"use client"

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from './theme'
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

const Theme = ({ children } : { children: React.ReactNode}) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)

export default Theme;