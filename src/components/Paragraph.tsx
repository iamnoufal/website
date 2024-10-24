"use client";

import { SxProps, Typography } from "@mui/material";
import Fade from "./Fade";
import { Variant } from "@mui/material/styles/createTypography";

const Paragraph = ({
  children,
  variant = "body1",
  delay = 0,
  sx
}: {
  children: React.ReactNode;
  variant?: Variant
  delay?: number;
  sx?: SxProps;
}) => (
  <Fade delay={delay}>
    <Typography sx={sx} variant={variant}>{children}</Typography>
  </Fade>
);

export default Paragraph;
