"use client";

import { Fragment, useState } from "react";
import PortfolioLayout from "@/components/PortfolioLayout";
import { Box, Button, Container } from "@mui/material";
import Heading from "@/components/Heading";
import Fade from "./Fade";

export default function HomeContent() {
  const [msg, setMsg] = useState<string>(
    "01101000 01100101 01101100 01101100 01101111 00100000 11110000 10011111 10010001 10001011"
  );
  const [translated, setTranslated] = useState<boolean>(false);

  function iterateChangeText() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const randomText = "abcdefghijklmnopqrstuvwxyz^*?<>";
    let text = msg;
    let i = 0;
    const bitChangeInterval = setInterval(() => {
      text = text
        .split("")
        .map((char) =>
          Math.random() > 0.5
            ? char === "0"
              ? "1"
              : char === "1"
              ? "0"
              : " "
            : char
        )
        .join("")
        .slice(1, -1);
      setMsg(text);
      i++;
      if (i >= 10) {
        const letterChangeInterval = setInterval(() => {
          text = text
            .split("")
            .map(
              (char) =>
                randomText[Math.floor(Math.random() * randomText.length)]
            )
            .join("")
            .slice(1, -1);
          setMsg(text);
          i++;
          if (i >= 41) {
            clearInterval(letterChangeInterval);
            setMsg("hello 👋🏻");
            setTranslated(true);
          }
        }, 50);
        clearInterval(bitChangeInterval);
      }
    }, 50);
  }

  return (
    <Fragment>
      <PortfolioLayout
        title="I'm Noufal Rahman"
        subtitle={msg}
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
        {!translated ? (
          <Box
            sx={{
              pt: 6,
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Heading variant="h6" component="h2" delay={0.5}>
              You couldn&apos;t read binary, could ya?
            </Heading>
            <Fade delay={0.7}>
              <Button
                onClick={iterateChangeText}
                variant="contained"
                sx={{ mt: 4 }}
              >
                Let&apos;s translate
              </Button>
            </Fade>
          </Box>
        ) : (
          <Box
            sx={{
              pt: 6,
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Heading variant="h6" component="h2" delay={0.5}>
              Enough of this game, let&apos;s get to the real stuff.
            </Heading>
          </Box>
        )}
      </Container>
    </Fragment>
  );
}
