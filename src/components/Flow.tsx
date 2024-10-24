"use client";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Container, useMediaQuery } from "@mui/material";
import Emoji from "./Emoji";
import Paragraph from "./Paragraph";
import beAdmissionLetter from "@/assets/images/be-admission-letter.webp"
import bscAdmissionLetter from "@/assets/images/bsc-admission-letter.webp"
import bscCertificate from "@/assets/images/bsc-cert.webp"
import Image from "next/image";

const DummyConnector = ({ small }: { small: boolean }) => (
  <TimelineItem>
    {!small && <TimelineOppositeContent></TimelineOppositeContent>}
    {small && <TimelineOppositeContent sx={{ display: "none" }} />}
    <TimelineSeparator>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent></TimelineContent>
  </TimelineItem>
);

const TimeLineItemComponent = ({
  children,
  date,
  emoji,
  small,
}: {
  children: React.ReactNode;
  date: Date;
  emoji: string;
  small: boolean;
}) => {
  return (
    <TimelineItem>
      {!small && (
        <TimelineOppositeContent>
          <Box>
            <Paragraph variant="caption">{date.toDateString().slice(4)}</Paragraph>
          </Box>
        </TimelineOppositeContent>
      )}
      {small && <TimelineOppositeContent sx={{ display: "none" }} />}
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot sx={{ background: "transparent" }}>
          <Emoji style={{ fontSize: "1.5rem" }}>{emoji}</Emoji>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        {small && (
          <Paragraph variant="caption">{date.toDateString().slice(4)}</Paragraph>
        )}
        {children}
      </TimelineContent>
    </TimelineItem>
  );
};

const Flow = () => {
  const small = useMediaQuery("(max-width: 600px)");
  return (
    <Container maxWidth="md">
      <Timeline position="alternate">
        <TimeLineItemComponent
          date={new Date(2002, 11, 13)}
          emoji="👶🏻"
          small={small}
        >
          <Box>
            <Paragraph>The world heard me cry for the first time..</Paragraph>
            <Paragraph>And it should&apos;ve been awesome</Paragraph>
          </Box>
        </TimeLineItemComponent>
        <TimeLineItemComponent
          date={new Date(2006, 5, 14)}
          emoji="👦🏻"
          small={small}
        >
          <Box>
            <Paragraph>Started going to school</Paragraph>
            <Paragraph>They said I didn&apos;t cry 🤪</Paragraph>
          </Box>
        </TimeLineItemComponent>
        <Box sx={{ textAlign: "center", p: 4 }}>
          <Paragraph variant="caption">2006 to 2020</Paragraph>
          <Paragraph>I have no idea how this part went by</Paragraph>
          <Paragraph variant="caption">Might fill this part later 😉</Paragraph>
        </Box>
        <TimeLineItemComponent
          date={new Date(2020, 2, 24)}
          emoji="📚"
          small={small}
        >
          <Box>
            <Paragraph>The last day I opened a school book</Paragraph>
            <Paragraph>Perhaps the last day I opened any book 😂</Paragraph>
          </Box>
        </TimeLineItemComponent>
        <TimeLineItemComponent
          date={new Date(2020, 2, 24)}
          emoji="🦠"
          small={small}
        >
          <Box>
            <Paragraph>This guy made us stay home</Paragraph>
            <Paragraph variant="caption">iykyk</Paragraph>
          </Box>
        </TimeLineItemComponent>
        <TimeLineItemComponent
          date={new Date(2020, 8, 15)}
          emoji="📋"
          small={small}
        >
          <Box>
            <Paragraph>Joined IIT Madras</Paragraph>
            <Paragraph>BS Data Science and Applications</Paragraph>
            <Image src={bscAdmissionLetter} alt="BSc Admission Letter" style={{ width: "100%", height: "100%", marginTop: "1rem", borderRadius: "1vw" }} />
          </Box>
        </TimeLineItemComponent>
        <TimeLineItemComponent
          date={new Date(2020, 10, 11)}
          emoji="📋"
          small={small}
        >
          <Box>
            <Paragraph>Joined GCE Salem</Paragraph>
            <Paragraph>BE Computer Science and Engineering</Paragraph>
            <Image src={beAdmissionLetter} alt="BE Admission Letter" style={{ width: "100%", height: "100%", marginTop: "1rem", borderRadius: "1vw" }} />
          </Box>
        </TimeLineItemComponent>
        <TimeLineItemComponent
          date={new Date(2020, 10, 11)}
          emoji="📖"
          small={small}
        >
          <Box>
            <Paragraph>First offline class at college</Paragraph>
          </Box>
        </TimeLineItemComponent>
        <TimeLineItemComponent
          date={new Date(2020, 10, 11)}
          emoji="🛌"
          small={small}
        >
          <Box>
            <Paragraph>Another lockdown</Paragraph>
          </Box>
        </TimeLineItemComponent>
        <TimeLineItemComponent
          date={new Date(2021, 10, 11)}
          emoji="🏃🏻"
          small={small}
        >
          <Box>
            <Paragraph>Got transferred to GCT Coimbatore</Paragraph>
          </Box>
        </TimeLineItemComponent>
        <TimeLineItemComponent
          date={new Date(2022, 6, 18)}
          emoji="💻"
          small={small}
        >
          <Box>
            <Paragraph>My first internship</Paragraph>
            <Paragraph variant="body2">@ RM8</Paragraph>
          </Box>
        </TimeLineItemComponent>
        <TimeLineItemComponent
          date={new Date(2024, 8, 15)}
          emoji="👨🏻‍🎓"
          small={small}
        >
          <Box>
            <Paragraph>Completed BSc Programming and Data Science from IIT Madras</Paragraph>
            <Image src={bscCertificate} alt="BSc Certificate" style={{ width: "100%", height: "100%", marginTop: "1rem", borderRadius: "1vw" }} />
          </Box>
        </TimeLineItemComponent>
      </Timeline>
    </Container>
  );
};

export default Flow;
