import {
  Box, 
  Typography, 
  Container,
  Link
} from '@mui/material'
import ShareComponent from './share'
import Subscribe from './subscribe'
import footerImg from '../assets/images/footer.webp'

const Footer = () => {
  return (
    <Box sx={{ pb:2, backgroundImage: `url("${footerImg.src}")`, backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
      {/* <Typography variant='h5' textAlign="center" className='text-darkblue mw'>Let others know about this blog</Typography> */}
      <ShareComponent />
      <Container maxWidth="md" sx={{display:{xs:"block",md:"flex"}, justifyContent:'space-between'}}>
        <Box sx={{display: 'flex', justifyContent:{xs:"center",md:'flex-start'}, pb:2}}>
          <Link href="/" className='ms' sx={{color: "black",fontSize: 12, mx: 2}}>Home</Link><Link href="/blog" className='ms' sx={{color: "black",fontSize: 12, mx: 2}}>Blog</Link><Link href="mailto:jnrahman12@gmail.com" className='ms' sx={{color: "black",fontSize: 12, mx: 2}}>Mail</Link>
        </Box>
        <Typography fontSize={12} color="black" textAlign="center" className="ms">&copy; {new Date().getFullYear()} All rights reserved</Typography>
      </Container>
    </Box>
  )
}

export default Footer