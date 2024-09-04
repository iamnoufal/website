import Heading from "@/components/Heading";
import { Box } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noufal's Portfolio",
  description: "A well crafted portfolio of Noufal Rahman",
};

export default function NotFoundPage() {
  return (
    <Box sx={{height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems:"center"}}>
      <Box>
        <Heading variant={"h1"}>Seems you&apos;re lost!!</Heading>
        <Heading variant="h6">Don&apos;t worry, I won&apos;t tell anyone</Heading>
      </Box>
    </Box>
  );
}