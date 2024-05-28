"use client"

import Typography, { TypographyTypeMap } from "@mui/material/Typography";
import { lora, shadowsIntoLight } from "@/theme/fonts";
import { SxProps } from "@mui/material";
import { motion } from "framer-motion";

const Heading = ({
  children,
  variant,
  component = "div",
  delay = 0,
}: {
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
  delay?: number;
}) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.8,
      delay: delay,
      ease: [0, 0.71, 0.2, 1.01],
    }}
  >
    <Typography
      variant={variant}
      component={component}
      sx={{ mb: 3 }}
    >
      {children}
    </Typography>
  </motion.div>
);

export default Heading;
