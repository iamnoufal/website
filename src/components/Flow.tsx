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
import { FlowData } from "@/utils/types";

const TimeLineItemComponent = ({
  children,
  date,
  emoji,
  small,
}: {
  children: React.ReactNode;
  date: string;
  emoji: string;
  small: boolean;
}) => {
  return (
    <TimelineItem>
      {!small && (
        <TimelineOppositeContent>
          <Box>
            <Paragraph variant="caption">
              {date}
            </Paragraph>
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
          <Paragraph variant="caption">
            {date}
          </Paragraph>
        )}
        {children}
      </TimelineContent>
    </TimelineItem>
  );
};

const Flow = ({ data }: { data: FlowData[] }) => {
  const small = useMediaQuery("(max-width: 600px)");
  return (
    <Container maxWidth="md">
      <Timeline position="alternate">
        {data.map((flow: FlowData) => {
          return flow.single ? (
            <Box sx={{ textAlign: "center", p: 4 }} key={`flow-${flow.order}`}>
              <Paragraph variant="caption">{flow.time}</Paragraph>
              <Paragraph sx={{fontWeight: "bold"}}>{flow.title}</Paragraph>
              <Paragraph variant="body2">{flow.description}</Paragraph>
            </Box>
          ) : (
            <TimeLineItemComponent
              date={flow.time}
              emoji={flow.emoji}
              small={small}
              key={`flow-${flow.order}`}
            >
              <Box>
                <Paragraph sx={{fontWeight: "bold"}}>{flow.title}</Paragraph>
                <Paragraph variant="body2">{flow.description}</Paragraph>
                {flow.image && (
                  <img
                    src={flow.image.url}
                    alt={flow.image.alternativeText}
                    style={{
                      width: "100%",
                      height: "100%",
                      marginTop: "1rem",
                      borderRadius: "0.5vw",
                    }}
                  />
                )}
              </Box>
            </TimeLineItemComponent>
          );
        })}
      </Timeline>
    </Container>
  );
};

export default Flow;
