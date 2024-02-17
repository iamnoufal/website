"use client"

import { Box, Avatar, Container, Divider } from "@mui/material";
import Link from "next/link";
import Footer from "./footer";
import Nav from "./nav";
import logo from "@/assets/images/logo.webp";

const View = ({ children } : { children: React.ReactNode}) => {
  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 4,
          py: 3,
        }}
      >
        <Link href="/">
          <Avatar src={logo.src} alt="logo" />
        </Link>
        {/* <Hamburger direction='right' color='white' size={25} toggled={isNavOpen} toggle={setIsNavOpen} /> */}
      </Box>
      <Container maxWidth="lg" sx={{ minHeight: "100vh", width: "100%" }}>
        {children}
        <Nav />
      </Container>
      <Container maxWidth="lg">
        <Divider sx={{ mt: 5 }} variant="inset" light={false} />
      </Container>
      <Footer />
    </Box>
  );
};

export default View;