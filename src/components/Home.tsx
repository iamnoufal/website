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
    <Box style={{
      background: `
        linear-gradient(0deg, #0d283b 2%, rgba(0, 0, 0, 0.5) 30%, transparent 60%), 
        linear-gradient(180deg, #012e4f 5%, transparent 80%), 
        linear-gradient(130deg, #6610f2 10%, #6f42c1 20%, #d63384 35%, #dc3545 65%, #fd7e14 83%, #ffc107 91%)
      `,
    }}>
      <PortfolioLayout
        title="I'm Noufal Rahman"
        subtitle={msg}
      />
      <Container maxWidth="md" sx={{ py: 8, px: 3, textAlign: "center" }}>
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
    </Box>
  );
}
