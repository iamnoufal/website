import { Metadata } from "next";
import HomeContent from "@/components/Home";
import Heading from "@/components/Heading";
import Routes from "@/components/Routes";
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "Noufal's Portfolio",
  description: "A well crafted portfolio of Noufal Rahman",
};

export default function Home() {
  return (
    <main>
      <HomeContent />
      <Container
        maxWidth="md"
        sx={{
          my: 4,
          py: 6,
          px: 6,
          boxShadow: "inset 0 0 20px 3px rgba(255, 255, 255, 0.3)",
          borderRadius: "20px",
        }}
      >
        <Heading variant="h6">You could click one of these..</Heading>
        <Routes />
      </Container>
    </main>
  );
}
