import Heading from "@/components/Heading";
import { Box } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noufal's Portfolio",
  description: "A well crafted portfolio of Noufal Rahman",
};

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `
          linear-gradient(180deg, transparent, black),
          linear-gradient(rgb(37 36 36), transparent), 
          linear-gradient(transparent, rgb(37 36 36)), 
          linear-gradient(130deg, #6610f2 10%, #6f42c1 20%, #d63384 35%, #dc3545 65%, #fd7e14 83%, #ff5607 96%)
        `,
      }}
    >
      <Box>
        <Heading variant={"h1"}>Seems you&apos;re lost!!</Heading>
        <Heading variant="h6">
          Don&apos;t worry, I won&apos;t tell anyone
        </Heading>
      </Box>
    </Box>
  );
}
