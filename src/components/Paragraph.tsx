import { montserrat } from "@/theme/fonts";
import { Typography } from "@mui/material";

const Paragraph = ({ children } : { children: React.ReactNode}) => <Typography variant="body1" sx={{ mt: 3, fontFamily: montserrat.style }}>{children}</Typography>

export default Paragraph