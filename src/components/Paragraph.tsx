"use client";

import { SxProps, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Paragraph = ({
  children,
  variant = "body1",
  delay = 0,
  sx
}: {
  children: React.ReactNode;
  variant?: "body1" | "body2"
  delay?: number;
  sx?: SxProps;
}) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      delay: delay,
      ease: [0, 0.71, 0.2, 1.01],
    }}
  >
    <Typography sx={sx} variant={variant}>{children}</Typography>
  </motion.div>
);

export default Paragraph;
