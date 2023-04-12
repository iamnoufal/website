import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material'
import darkTheme from '@/themes/dark'
import "swiper/css";
import "swiper/css/pagination";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}