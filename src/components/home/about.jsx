import { Button, Container, Paper, Stack, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const AboutComponent = () => {
  return (
    <Box style={{ background: "linear-gradient(0deg, #061622 50%, black 50%)" }} id='about'>
      <Container maxWidth='md' sx={{ py: 5 }}>
        <motion.div
          initial={{ y: 150, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <Paper w='100' sx={{ px: 6, py: 3 }} elevation={20}>
            <Typography variant="h4" className="lora text-white text-shadow" sx={{ my: 2 }}>About Me</Typography>
            <Typography variant='body1' component='div' sx={{ mb: 2 }}>It&apos;s 2002 since I started feeling the Sun. From then, a little kid has grown up facsinating on how the internet and the web works.</Typography>
            <Typography variant="body1" component='div' sx={{ mb: 2 }}>It&apos;s at my age 16 when I developed a conscience about the future of web development and technologies. Back then, I started learning HTML which is my first step towards my passion. I learnt CSS and JS on the go. Once I had completed high school, I got plenty of time (thanks to covid) I learnt them much deeper, the best practices for development and tried out my so far knowledge in development.</Typography>
            <Typography variant="body1" component='div' sx={{ mb: 2 }}>Today with all the things I need in my hand, I&apos;m efficiently learning and researching much more on the effective working of websites and servers. I believe together we can make the internet a safer place for everyone.</Typography>
            <Typography variant="body1" component='div' sx={{ mb: 2 }}></Typography>
            <Stack spacing={2} direction='row'>
              <Button variant='contained' className='button' href="mailto:iam@noufal.me" target="_blank">hire me</Button>
              <Button variant='contained' className='button' href="tel:+918610023136" target="_blank">get me on call</Button>
            </Stack>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}

export default AboutComponent;