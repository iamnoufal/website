import PortfolioLayout from "@/components/PortfolioLayout";
import { Box, Container } from "@mui/material";
import Heading from "@/components/Heading";
import Emoji from "@/components/Emoji";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import aboutBg from "@/assets/images/about-bg.webp";
import meImg from "@/assets/images/me-color.webp";

export default async function Home() {
  return (
    <main>
      <PortfolioLayout
        title="About me"
        subtitle="I just code in my free time 🙃"
        style={{
          background: `
            linear-gradient(0deg, black, transparent 100%), 
            linear-gradient(300deg, #08083a, transparent 21%), 
            linear-gradient(198deg, rgba(255, 193, 7, 0.2) 11%, transparent 0%), 
            linear-gradient(50deg, #6610f2 10%, #6f42c1 20%, #d63384 35%, #dc3545 65%, #fd7e14 83%, #ffc107 91%)
          `,
        }}
      />
      <Container maxWidth="md" sx={{ p: 6, textAlign: "center" }}>
        <Box sx={{ pt: 6, height: "80vh", display: "flex", alignItems: 'center', justifyContent: "center" }}>
          <Heading variant="h6" component="h2">
            I&apos;m just kidding. I code almost all the time
          </Heading>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              width: "100%",
              background: "linear-gradient(to bottom, transparent, black)",
              zIndex: 4
            }}
          ></Box>
          <Image
            src={meImg}
            alt="Noufal Rahman"
            style={{ height: "auto", width: "100%", opacity: 0.7 }}
          />
        </Box>
        <Box sx={{ py: 6 }}>
          <Heading variant="h6" component="h2">
            You should&apos;ve known my name <Emoji>😉</Emoji>
          </Heading>
          <Paragraph delay={0.5}>
            I just assumed, because you&apos;re here. Just in case if you didn&apos;t notice, I&apos;m Noufal Rahman <Emoji>👋</Emoji>
          </Paragraph>
        </Box>
        <Image
          src={aboutBg}
          alt="Noufal Rahman | About image vector"
          style={{ height: "auto", width: "100%", opacity: 0.4 }}
        />
        <Box sx={{ py: 6 }}>
          <Heading variant="h6" component="h2">
            The joy of creating something....
          </Heading>
          <Paragraph delay={0.5}>
            ...is what drives me to code.
          </Paragraph>
        </Box>
        <Box sx={{ py: 6 }}>
          <Heading variant="h6" component="h2">
            Questions I hear often..
          </Heading>
          <Paragraph delay={0.5}>
            ...are "How many fingers do you see 🖐🏽" and "Can you use your sixth finger?".
          </Paragraph>
        </Box>
        <Box sx={{ pt: 6, height: "80vh", display: "flex", alignItems: 'center', justifyContent: "center" }}>
          <Heading variant="h6" component="h2">
            Yes I have 6 fingers. SURPRISE
          </Heading>
        </Box>
      </Container>
    </main>
  );
}
