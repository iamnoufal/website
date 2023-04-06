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
    <Box sx={{ background: "#080808" }}>
      {/* <Subscribe />
      <Typography variant='h5' textAlign="center" className='text-darkblue mw'>Let others know about this blog</Typography>
      <ShareComponent /> */}
      <Container maxWidth="md" sx={{display:{xs:"block",md:"flex"}, pt: 2, px: '0 !important', justifyContent:'space-between', borderTop: '1px solid #f0f0f0'}}>
        <Box sx={{display: 'flex', justifyContent:{xs:"center",md:'flex-start'}, pb:2}}>
          <Link href="/" className='ms' sx={{color: "white",fontSize: 12, textDecoration: 'none'}}>Home</Link>
          <Link href="/blog" className='ms' sx={{color: "white",fontSize: 12, textDecoration: 'none', mx: 4}}>Blog</Link>
          <Link href="mailto:jnrahman12@gmail.com" className='ms' sx={{color: "white",fontSize: 12, textDecoration: 'none'}}>Mail</Link>
        </Box>
        <Typography fontSize={12} color="white" textAlign="center" className="ms">&copy; {new Date().getFullYear()} All rights reserved | v2.0</Typography>
      </Container>
    </Box>
  )
}

export default Footer