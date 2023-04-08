import { 
  Box, 
  Typography, 
  Button, 
  Avatar,
  Link
} from "@mui/material"
import { 
  WhatsApp, 
  LinkedIn, 
  Twitter, 
  FacebookOutlined, 
  Share 
} from '@mui/icons-material'

const ShareComponent = ({ sx }) => {
  const shareData = {
    title: "Noufal's Portfolio",
    text: "Noufal Rahman is an aspiring full stack engineer who wishes to build high end solutions that could possibly help the people to boost their productivity.",
    url: "https://noufal.engineer"
  }
  const ShareButton = ({ to="#", icon, onclick=()=>{} }) => {
    return (
      <Link target="_blank" rel="noreferrer" href={to} onClick={onclick}>
        <Avatar sx={{ background: "linear-gradient(50deg, #6610f2 10%, #6f42c1 20%, #d63384 35%, #dc3545 65%, #fd7e14 83%, #ffc107 91%)", color: "white" }}>
          {icon}
        </Avatar>
      </Link>
    )
  }
  return (
    <Box {...sx}>
      <Box sx={{display: 'flex', width: '100%', justifyContent: 'space-evenly', mx: 'auto'}}>
        <ShareButton icon={<WhatsApp />} to={`https://api.whatsapp.com/send?text=${shareData.title.replaceAll(" ", "+")}%0A${shareData.text.replaceAll(" ", "+")}%0A${shareData.url}`} />
        <ShareButton icon={<FacebookOutlined />} to={`http://www.facebook.com/sharer.php?u=${shareData.url}`} />
        <ShareButton icon={<Twitter />} to={`https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.title.replaceAll(" ", "+")}%0A${shareData.text.replaceAll(" ", "+")}%0A`} />
        <ShareButton icon={<LinkedIn />} to={`https://www.linkedin.com/sharing/share-offsite/?url=${shareData.url}`} />
        <ShareButton icon={<Share />} onclick={() => navigator.share(shareData)} />
      </Box>
    </Box>
  )
}

export default ShareComponent