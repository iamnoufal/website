"use client";

import Typography, { TypographyTypeMap } from "@mui/material/Typography";
import { lora, shadowsIntoLight } from "@/theme/fonts";
import { SxProps } from "@mui/material";
import { motion } from "framer-motion";
import Fade from "./Fade";

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
  <Fade delay={delay}>
    <Typography variant={variant} component={component} sx={{ mb: 3 }}>
      {children}
    </Typography>
  </Fade>
);

export default Heading;
