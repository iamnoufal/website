import { useState } from 'react';
import { 
  Avatar, 
  Button, 
  Box, 
  Dialog, 
  DialogTitle, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Typography 
} from '@mui/material';
import timelineData from '@/data/timeline';
import { motion } from 'framer-motion';

const TimelineComponent = () => {
  const [open, setOpen] = useState(false);
  const handleTimelineOpen = () => setOpen(true);
  const handleTimelineClose = (a) => {
    setOpen(false);
    window.scrollTo(0, document.getElementById(a).offsetTop);
  }
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Button variant='contained' className='button' onClick={handleTimelineOpen} sx={{px: 5}} size="large">my timeline</Button>
      </motion.div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          <Typography variant='body1' sx={{display: 'flex', alignItems: 'center', mx: 10}}>
            My Timeline
          </Typography>
        </DialogTitle>
        <List sx={{px: 2}}>
          {timelineData.map((list) => {
            return (
              <ListItem button onClick={() => handleTimelineClose(`${list.param}`)} key={list.name}>
                <ListItemAvatar>
                  <Avatar className='bg-darkblue'>
                    {list.icon}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={list.name} secondary={list.year} />
              </ListItem>
            )
          })}
        </List>
      </Dialog>
    </Box>
  )
}

export default TimelineComponent;