import Nav from "./nav"
import Footer from "./footer"
import Head from 'next/head'
import { useEffect } from "react"
// import { createTheme, ThemeProvider } from "@mui/material"

const Layout = ({ children }) => {
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: 'dark'
  //   }
  // })
  useEffect(() => {
    function removeGhostPowered() {
      let portal = document.getElementById("ghost-portal-root");
      try {
        let frame = portal.querySelector('[title="portal-popup"]');
        if (frame !== null) {
          const styleElement = document.createElement("style");
          if (styleElement != null || styleElement != undefined) {
            styleElement.innerHTML = `.gh-portal-powered { display: none; } .gh-portal-closeicon {color: rgba(0, 0, 0, 0.8)}`;
            frame.contentDocument.head.appendChild(styleElement);
          }
        } else {
          frame = null
        }
        removeGhostPowered()
      } catch(e) {
        removeGhostPowered()
      }
    }
  })
  return (
    // <ThemeProvider theme={darkTheme}>
    <>
      <Head>
        <script defer="" src="https://cdn.jsdelivr.net/ghost/portal@~2.25/umd/portal.min.js" data-ghost="https://noufal.digitalpress.blog/" data-key="a9c30dd93d7e07c6577e0430ba" data-api="https://noufal.digitalpress.blog/ghost/api/content/" crossOrigin="anonymous"></script>
      </Head>
      <Nav />
      {children}
      <div id="ghost-portal-root"></div>
      <Footer />
    </>
    // </ThemeProvider>
  )
}

export default Layout