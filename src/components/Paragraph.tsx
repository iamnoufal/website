"use client";

import { montserrat } from "@/theme/fonts";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const Paragraph = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
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
    <Typography variant="body1">{children}</Typography>
  </motion.div>
);

export default Paragraph;
