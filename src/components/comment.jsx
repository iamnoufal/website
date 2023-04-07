import Typography from "@mui/material/Typography";
const Comment = ({ children }) => <Typography variant="h5" component="div" className="text-white text-shadow grandhotel" textAlign={"center"} sx={{ mb:2, wordSpacing: '5px', letterSpacing: '1px' }} fontStyle="italic">{"<!--"} {children} {"-->"}</Typography>
export default Comment;