"use client";

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
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Heading variant="h1" component="h1">
            {title}
          </Heading>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Heading variant="h6" component="h2">{subtitle}</Heading>
        </motion.div>
      </Box>
      {children}
    </Box>
  );
};

export default PortfolioLayout;