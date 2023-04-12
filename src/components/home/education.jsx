import { 
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from "@mui/lab";
import { Card, CardContent, CardMedia, Typography, useMediaQuery, Box } from "@mui/material";
import { useRef } from "react";
import Tag from "../tag";
import Comment from "../comment";
import { motion } from "framer-motion";
import educationData from "@/data/education";

const EducationComponent = () => {
  const edu = useRef(null);
  const small = useMediaQuery('(max-width: 600px)');
  const medium = useMediaQuery('(max-width: 950px)');
  return (
    <Box sx={{py: 10, background: "linear-gradient(10deg, #53245f 0%, transparent 15%), linear-gradient(350deg, #53245f 0%, transparent 45%), linear-gradient(0deg, transparent, #061622), linear-gradient(150deg, yellow, transparent), linear-gradient(300deg, #012d4e, #063a50)" }} id='edu'>
      <Timeline position={`${small ? 'right' : 'alternate'}`} ref={edu}>
        <Tag>Education</Tag>
        <Comment>Purpose of education is to replace an empty mind with an open one</Comment>
        {educationData.map((edu, index) => {
          return (
            <TimelineItem key={edu.bgColor}>
              {!small && <TimelineOppositeContent className="text-white">{edu.year}</TimelineOppositeContent>}
              {small && <TimelineOppositeContent sx={{display:'none'}} />}
              <TimelineSeparator>
                <TimelineDot className="bg-darkblue" />
                <TimelineConnector className="bg-darkblue" />
              </TimelineSeparator>
              <TimelineContent>
                {small && <Typography variant='caption' className="text-white">{edu.year}</Typography>}
                <motion.div
                  initial={{ y: 70, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                >
                  <Card sx={{ background: `${edu.bgColor}`, mb: 3, mt: 1, display: `${medium ? 'block' : 'flex'}`, flexDirection: `${educationData.indexOf(edu)%2!==0 ? "row-reverse" : "row"}`, alignItems: "center" }}>
                    <CardMedia 
                      component='img' 
                      image={edu.img}
                      sx={{width: `${medium ? "100%": "40%"}`}}
                    />
                    <CardContent>
                      <Typography variant='h6' className="text-blue">{edu.name}</Typography>
                      <Typography variant='caption' component="div" color="black" sx={{my:1}}>{edu.degree}</Typography>
                      <Typography variant='body2' color="black">{edu.caption}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </Box>
  )
}

export default EducationComponent;