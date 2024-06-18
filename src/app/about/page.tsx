import PortfolioLayout from "@/components/PortfolioLayout";
import { Box, Container } from "@mui/material";
import Heading from "@/components/Heading";
import Emoji from "@/components/Emoji";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import about1Pic from "@/assets/images/about-1.webp";
import about2Pic from "@/assets/images/about-2.webp";
import meImg from "@/assets/images/me-bitmoji.webp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me | Noufal",
  description: "This text is meant for web crawlers. In case you're reading this, this is the about page.",
};

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
        <Box sx={{ px: { xs: 5, sm: 15, md: 30, xl: 40 } }}>
          <Image
            src={meImg}
            alt="Noufal Rahman"
            style={{ height: "auto", width: "100%", opacity: 1 }}
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
          src={about1Pic}
          alt="Noufal Rahman | About 1 image vector"
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
        <Box sx={{ position: "relative"}}>
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              width: "100%",
              background: "linear-gradient(to top, transparent 90%, black 100%)",
              zIndex: 4
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              width: "100%",
              background: "linear-gradient(to bottom, transparent 90%, black 100%)",
              zIndex: 4
            }}
          ></Box>
          <Image
            src={about2Pic}
            alt="Noufal Rahman"
            style={{ height: "auto", width: "100%", opacity: 1 }}
          />
        </Box>
        <Box sx={{ py: 6 }}>
          <Heading variant="h6" component="h2">
            Questions I hear often..
          </Heading>
          <Paragraph delay={0.5}>
            ...are &ldquo;How many fingers do you see 🖐🏽&rdquo; and &ldquo;Do you use your sixth finger to type?&rdquo;.
          </Paragraph>
        </Box>
        <Box sx={{ pt: 6, height: "100vh", display: "flex", alignItems: 'center', justifyContent: "center" }}>
          <Heading variant="h6" component="h2">
            Yes I have 6 fingers. SURPRISE
          </Heading>
        </Box>
        <Box sx={{ py: 6 }}>
          <Heading variant="h6" component="h2">
            My GitHub Contributions
          </Heading>
          <img style={{ width: "100%", height: "auto" }} src="https://raw.githubusercontent.com/iamnoufal/iamnoufal/output/github-contribution-grid-snake-dark.svg" alt="GitHub contributions of Noufal Rahman" />
        </Box>
      </Container>
    </main>
  );
}
