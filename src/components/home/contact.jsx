import { Avatar, Box, Container, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Tag from '../tag';
import contactData from '@/data/contact';
import Comment from '../comment';
import { useMediaQuery } from '@mui/material';

const ContactComponent = () => {
  const small = useMediaQuery('(max-width: 600px)');
  const cardWidth = small ? 300 : 250;
  return (
    <Box sx={{ mt: 10 }} id='contact'>
      <Container maxWidth='md' sx={{py: 4}}>
        <Typography variant='h4' className='text-darkblue lora' textAlign='center' sx={{mb: 3}}><Tag>Contact</Tag></Typography>
        <Comment>Lemme know what you think</Comment>
        <Box sx={{px: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          {contactData.map((list) => {
            return (
              <ListItem key={list.name} button onClick={() => window.open(`${list.link}`, '_blank')} sx={{mx: 'auto', my: 1, width: Number(`${cardWidth}`)}}>
                <ListItemAvatar>
                  <Avatar sx={{ background: "linear-gradient(50deg, #6610f2 10%, #6f42c1 20%, #d63384 35%, #dc3545 65%, #fd7e14 83%, #ffc107 91%)", color: "white" }}>
                    {list.icon}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={<Typography className="text-white">{list.name}</Typography>} secondary={list.text} />
              </ListItem>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}

export default ContactComponent;