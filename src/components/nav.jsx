import { 
  Avatar,
  Box, 
  List,
  ListItem, 
  Typography 
} from '@mui/material'
import { 
  Rotate as Hamburger 
} from 'hamburger-react'
import Link from 'next/link'
import { useState } from 'react'
import ShareComponent from './share'

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const NavItem = ({ to, label }) => {
    return (
      <Link href={to} style={{ textDecoration: 'none' }}>
        <Box 
          sx={{
            height: 150,
            width: 150,
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '6px 6px 50px inset black',
            background: 'linear-gradient(50deg, #10f2b3 10%, #4294c1 20%, #336fd6 35%, #dc35aa 65%, #fd7e14 83%, #ffc107 91%)',
            transition: '0.5s',
            borderRadius: '50%',
            m: 4,
            ":hover": {
              transition: '0.5s',
              boxShadow: '2px 3px 10px inset black',
              borderRadius: 10,
            }
          }}
        >
          <Typography variant='h5' className='text-white text-shadow lora'>{label}</Typography>
        </Box>
      </Link>
    )
  }
  return (
    <>
      <Box 
        sx={{
          position: 'fixed', 
          top: 0, 
          width: '100%', 
          zIndex: 10, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          px: 4,
          py: 3
        }}
      >
        <Link href='/'><Avatar src="/assets/logo.webp" alt="logo" /></Link>
        <Hamburger direction='right' color='white' size={25} toggled={isNavOpen} toggle={setIsNavOpen} />
      </Box>
      <Box
        sx={{
          position: 'fixed',
          visibility: isNavOpen ? 'visible' : 'hidden',
          opacity: isNavOpen ? 1 : 0,
          height: '100vh',
          width: "100%",
          backdropFilter: isNavOpen ? 'blur(10px)' : '',
          zIndex: 5,
          transition: '0.6s',
          boxShadow: '2px 2px 16px inset black'
        }}
      >
        <Box sx={{height: '100%', width: '100%', display: 'flex', flexWrap: 'wrap', flexFlow: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
            <NavItem to="/" label="Home" />
            <NavItem to="/blog" label="Blog" />
          </Box>
          <ShareComponent sx={{ py: 10, width: {xs:'80%', md: '40%'} }} />
        </Box>
      </Box>
    </>
  )
}

export default Nav