import { Container, Box, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: { xs: "block", md: "flex" },
        justifyContent: "space-between",
        mt: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" },
          pb: 2,
        }}
      >
        <Link style={{ textDecoration: "none" }} href="/">
          <Typography className="ms" sx={{ fontSize: 12 }}>
            Home
          </Typography>
        </Link>
        <Link style={{ textDecoration: "none" }} href="/blog">
          <Typography className="ms" sx={{ fontSize: 12, mx: 2 }}>
            Blog
          </Typography>
        </Link>
        <Link style={{ textDecoration: "none" }} href="mailto:iam@noufal.dev">
          <Typography className="ms" sx={{ fontSize: 12 }}>
            Mail
          </Typography>
        </Link>
      </Box>
      <Typography fontSize={12} textAlign="center" className="ms" pb={2}>
        &copy; {new Date().getFullYear()} All rights reserved | v3.0
      </Typography>
    </Container>
  );
};

export default Footer;
