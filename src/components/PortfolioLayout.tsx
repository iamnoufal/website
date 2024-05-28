import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Heading from "./Heading";

const PortfolioLayout = ({
  title,
  subtitle,
  style,
  children,
}: {
  title: string;
  subtitle: string;
  style: Object;
  children?: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundPosition: "center",
        ...style,
      }}
      id="intro"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: children ? "80vh" : "100vh",
          justifyContent: "center",
          flexFlow: "column",
          textAlign: "center",
        }}
      >
        <Heading variant="h1" component="h1">
          {title}
        </Heading>
        <Heading variant="h6" component="h2" delay={0.5}>
          {subtitle}
        </Heading>
      </Box>
      {children}
    </Box>
  );
};

export default PortfolioLayout;
