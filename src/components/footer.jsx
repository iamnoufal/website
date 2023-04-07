import {
  Box, 
  Typography, 
  Container,
} from '@mui/material'
import Link from 'next/link'

const Footer = () => {
  return (
    <Box sx={{ background: "#080808" }}>
      <Container maxWidth="md" sx={{display:{xs:"block",md:"flex"}, pt: 2, px: '0 !important', justifyContent:'space-between', borderTop: '1px solid #f0f0f0'}}>
        <Box sx={{display: 'flex', justifyContent:{xs:"center",md:'flex-start'}, pb:2}}>
          <Link style={{textDecoration: 'none'}} href="/"><Typography className='ms' sx={{color: "white",fontSize: 12}}>Home</Typography></Link>
          <Link style={{textDecoration: 'none'}} href="/blog"><Typography className='ms' sx={{color: "white",fontSize: 12, mx: 2}}>Blog</Typography></Link>
          <Link style={{textDecoration: 'none'}} href="mailto:jnrahman12@gmail.com"><Typography className='ms' sx={{color: "white",fontSize: 12}}>Mail</Typography></Link>
        </Box>
        <Typography fontSize={12} color="white" textAlign="center" className="ms">&copy; {new Date().getFullYear()} All rights reserved | v2.0</Typography>
      </Container>
    </Box>
  )
}

export default Footer