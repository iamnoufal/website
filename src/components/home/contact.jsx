import { Avatar, Box, Container, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Tag from '../tag';
import contactData from '@/data/contact';
import Comment from '../comment';
import { motion } from 'framer-motion'
import { useMediaQuery } from '@mui/material';
import Link from 'next/link';

const ContactComponent = () => {
  const small = useMediaQuery('(max-width: 600px)');
  const cardWidth = small ? 300 : 250;
  const cardMargin = small ? 8 : 4
  return (
    <Box sx={{ width: '100%', backgroundPosition: 'top center' }} id='contact'>
      <Container maxWidth='md' sx={{mt: 4}}>
        <Typography variant='h4' className='text-darkblue lora' textAlign='center' sx={{mb: 3}}><Tag>Contact</Tag></Typography>
        <Comment>Lemme know what you think</Comment>
        <Box sx={{px: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          {contactData.map((list) => {
            return (
              <motion.div key={list.name}>
                <ListItem button onClick={() => window.open(`${list.link}`, '_blank')} sx={{mx: 'auto', my: 1, px: Number(`${cardMargin}`), width: Number(`${cardWidth}`)}}>
                  <ListItemAvatar>
                    <Avatar className='bg-darkblue'>
                      {list.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={list.name} secondary={list.text} />
                </ListItem>
              </motion.div>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}

export default ContactComponent;