import { Typography } from "@mui/material";
const Tag = ({ children }) => <Typography variant='h4' component='div' className="text-white text-shadow lora" textAlign={'center'} sx={{my:2}}>{"<"}{children}{">"}</Typography>
export default Tag;