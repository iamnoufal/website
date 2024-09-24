import PortfolioLayout from "@/components/PortfolioLayout";
import { Box, Card, Container, Grid } from "@mui/material";
import Heading from "@/components/Heading";
import Emoji from "@/components/Emoji";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import about1Pic from "@/assets/images/about-1.webp";
import meImg from "@/assets/images/me-bitmoji.webp";
import { Metadata } from "next";
import SpotifyCurrentlyPlaying from "@/components/Spotify";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "About me | Noufal",
  description:
    "This text is meant for web crawlers. In case you're reading this, this is the about page.",
};

const RANDOM_FACTS = [
  {
    emoji: "🎉",
    icon: "featured_seasonal_and_gifts",
    text: "I love surprises!",
  },
  {
    emoji: "☕️",
    icon: "coffee",
    text: "I drink a lot of coffee",
  },
  {
    emoji: "🤚🏼",
    icon: "front_hand",
    text: "I got 1 extra here",
  },
  {
    emoji: "🗺️",
    icon: "map",
    text: "I love journies",
  },
  {
    emoji: "🍋",
    icon: "view_comfy_alt",
    text: "Design freak",
  },
  {
    emoji: "🎶",
    icon: "music_note",
    text: "Music soothes my heart",
  },
  {
    emoji: "📋",
    icon: "checklist",
    text: "I have a bucket list 😉",
  },
];

export default async function Home() {
  return (
    <Box component="main">
      <SpotifyCurrentlyPlaying />
      <Box
        style={{
          background: `
          linear-gradient(0deg, #0d283b, transparent 100%), 
          linear-gradient(150deg, #012e4f 5%, transparent 80%), 
          linear-gradient(300deg, #08083a, transparent 21%), 
          linear-gradient(198deg, rgba(255, 193, 7, 0.2) 11%, transparent 0%), 
          linear-gradient(50deg, #6610f2 10%, #6f42c1 20%, #d63384 35%, #dc3545 65%, #fd7e14 83%, #ffc107 91%)
        `,
        }}
      >
        <PortfolioLayout
          title="About me"
          subtitle="I just code in my free time 🙃"
        />
        <Container maxWidth="md" sx={{ p: 6, textAlign: "center" }}>
          <Box
            sx={{
              pt: 6,
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Heading variant="h6" component="h2" delay={0.4}>
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
              I just assumed, because you&apos;re here. Just in case if you
              didn&apos;t notice, I&apos;m Noufal Rahman <Emoji>👋</Emoji>
            </Paragraph>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="md" sx={{ p: 6, textAlign: "center" }}>
        <Image
          src={about1Pic}
          alt="Noufal Rahman | About 1 image vector"
          style={{ height: "auto", width: "100%" }}
        />
        <Box sx={{ py: 6 }}>
          <Heading variant="h6" component="h2">
            The joy of creating something....
          </Heading>
          <Paragraph delay={0.5}>...is what drives me to code.</Paragraph>
        </Box>
      </Container>
      <Box
        sx={{
          py: 10,
          background: `
            linear-gradient(#0d283b, transparent), 
            linear-gradient(transparent, #0d283b), 
            linear-gradient(130deg, #6610f2 10%, #6f42c1 20%, #d63384 35%, #dc3545 65%, #fd7e14 83%, #ff5607 96%)
          `,
        }}
      >
        <Container maxWidth="md">
          <Heading variant="h6" component="h2">
            Random facts
          </Heading>
          <Grid container sx={{ justifyContent: "center" }}>
            {RANDOM_FACTS.map((fact) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  sx={{ p: 1 }}
                  key={fact.icon}
                >
                  <Card sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", p: 3, height: "100%" }}>
                    <Emoji style={{ fontSize: "2rem" }}>{fact.emoji}</Emoji>
                    {/* <Icon name={fact.icon} /> */}
                    <Paragraph variant="body2" delay={0.5} sx={{ pt: 2 }}>{fact.text}</Paragraph>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
