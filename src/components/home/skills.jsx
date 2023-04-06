import { Box, Container, Paper, Typography } from "@mui/material";
import Tag from "../tag";
import skillsData from "@/data/skills";
import { motion } from "framer-motion";

const SkillsComponent = () => {
  return (
    <Box sx={{ background: '#018891' }}>
      <Container maxWidth="md" sx={{py:4}} id="skills">
        <Tag>Skills</Tag>
        <Paper sx={{my: 3}} elevation={24}>
          <Paper sx={{ width: "100%", m: "auto", py: 2, background: "linear-gradient(to left, rgba(1, 136, 145, 0.50) 25%, rgba(1, 136, 145, 0.65) 25%, rgba(1, 136, 145, 0.65) 50%, rgba(1, 136, 145, 0.80) 50%, rgba(1, 136, 145, 0.80) 75%, rgba(1, 136, 145, 1) 75%, rgba(1, 136, 145, 1) 100%)" }}>
            {skillsData.map((skill) => <motion.div key={skill.name} initial={{width: 0}} whileInView={{width:`${skill.level}`}} style={{padding: '0.5vw 0', margin: '2vw 0'}} transition={{duration: 0.6}} className="bg-lightblue"><Typography variant="body2" fontWeight={"bold"} color="black" ml={2}>{skill.name}</Typography></motion.div>)}
            <Box sx={{ display: "flex", justifyContent: "space-evenly"}}>
              <Typography color={"white"} textAlign="center" variant="h6" sx={{ width: "25%" }}>Rookie</Typography>
              <Typography color={"white"} textAlign="center" variant="h6" sx={{ width: "25%" }}>Geek</Typography>
              <Typography color={"white"} textAlign="center" variant="h6" sx={{ width: "25%" }}>Ninja</Typography>
              <Typography color={"white"} textAlign="center" variant="h6" sx={{ width: "25%" }}>Jedi</Typography>
            </Box>
          </Paper>
        </Paper>
      </Container>
    </Box>
  )
}

export default SkillsComponent;