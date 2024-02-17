import { Box } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box sx={{width: 300}}>
        By the gods new and old, I swear on to thee. This is not 101, this is not 202. This is but the cruelest of all numbers. This is 404. 
        The page you&apos;re looking for cannot be found
      </Box>
    </Box>
  );
}
