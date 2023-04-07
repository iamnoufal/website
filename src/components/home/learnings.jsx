import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import learningsData from '@/data/learnings';
import Tag from '../tag';
import Comment from '../comment';
import { motion } from 'framer-motion'
import { useMediaQuery } from "@mui/material";

const LearningsComponent = () => {
  const small = useMediaQuery('(max-width: 600px)');
  const cardWidth = small ? 130 : 160;
  return (
    <Box sx={{ p:4, background: "linear-gradient(180deg, #53245f 10%, transparent 40%), linear-gradient(0deg, #018891, transparent), linear-gradient(130deg, #b60909, transparent)" }} id='learnings'>
      <Tag>Learnings</Tag>
      <Comment>What we know is the least we can learn</Comment>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {learningsData.map((skill) => {
          const cardMargin = {
            true: skill.full===true ? 2 : 5,
            false: skill.full===true ? 4 : 5,
          }
          return (
            <motion.div 
              key={skill.abbr}
              style={{ width: Number(`${cardWidth}`), margin: "1vw", background: "white" }}
              initial={{ scale: 0, opacity: 0 }} 
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <Card sx={{ height: "100%", background: "transparent", display: 'flex', flexFlow: "column", justifyContent: 'space-between' }}>
                <Box sx={{ mx: Number(`${cardMargin[small]}`), height: '80%', display:'flex', mt: 4 }}>
                  <CardMedia
                    component='img'
                    src={skill.img}
                    alt={skill.abbr}
                    sx={{ my: 'auto'}}
                  />
                </Box>
                <CardContent>
                  <Typography variant='body2' textAlign='center' color="black" fontWeight="bold">{skill.name}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </Box>
    </Box>
  )
}

export default LearningsComponent;