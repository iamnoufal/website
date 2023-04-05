import { Box, Typography, Button } from "@mui/material"
import { WhatsApp, LinkedIn, Twitter, FacebookOutlined, Share } from '@mui/icons-material'

const ShareComponent = () => {
  const shareData = {
    title: "Noufal's Blog",
    text: "Read, Inspire, Learn from the posts written by Noufal Rahman. This blog features topics from tech to science, from ground to space and from you to me",
    url: "https://blog.noufal.engineer/"
  }
  return (
    <Box sx={{py:3}}>
      <Box sx={{display: 'flex', justifyContent: 'space-evenly', width: {xs:'100%', md: '40%'}, mx: 'auto'}}>
        <Button component="a" target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?text=${shareData.title.replaceAll(" ", "+")}%0A${shareData.text.replaceAll(" ", "+")}%0A${shareData.url}`}>
          <Typography className="text-darkblue"><WhatsApp /></Typography>
        </Button>
        <Button component="a" target="_blank" rel="noreferrer" href={`http://www.facebook.com/sharer.php?u=${shareData.url}`}>
          <Typography className="text-darkblue"><FacebookOutlined /></Typography>
        </Button>
        <Button component="a" target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.title.replaceAll(" ", "+")}%0A${shareData.text.replaceAll(" ", "+")}%0A`}>
          <Typography className="text-darkblue"><Twitter /></Typography>
        </Button>
        <Button component="a" target="_blank" rel="noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareData.url}`}>
          <Typography className="text-darkblue"><LinkedIn /></Typography>
        </Button>
        <Button onClick={() => navigator.share(shareData)}>
          <Typography className="text-darkblue"><Share /></Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default ShareComponent