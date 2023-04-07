import Nav from "./nav"
import Footer from "./footer"
import Script from "next/script"

const Layout = ({ children }) => {
  return (
    <main>
      <Nav />
      {children}
      <Footer />
    </main>
  )
}

export default Layout