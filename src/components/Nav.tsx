"use client"

import { 
  Avatar,
  Box, 
  Typography 
} from '@mui/material'
import { 
  Rotate as Hamburger 
} from 'hamburger-react'
import Link from 'next/link'
import { useState } from 'react'
import logo from "@/assets/images/logo.webp"
// import ShareComponent from './share'

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const NavItem = ({ to, label } : { to: string; label: string}) => {
    return (
      <Link href={to} style={{ textDecoration: 'none' }}>
        <Typography variant='h5' my={3} textAlign='center' className='text-white text-shadow lora'>{label}</Typography>
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
        <Link href='/'><Avatar src={logo.src} alt="logo" /></Link>
        <Hamburger direction='right' color='white' size={25} toggled={isNavOpen} toggle={setIsNavOpen} />
      </Box>
      <Box
        sx={{
          position: 'fixed',
          visibility: isNavOpen ? 'visible' : 'hidden',
          opacity: isNavOpen ? 1 : 0,
          height: '100vh',
          width: "100%",
          backdropFilter: isNavOpen ? 'blur(20px)' : '',
          zIndex: 5,
          transition: '0.6s',
          boxShadow: '2px 2px 16px inset black'
        }}
      >
        <Box sx={{height: '100%', width: '100%', display: 'flex', flexWrap: 'wrap', flexFlow: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Box sx={{height: '100%', width: '100%', position: 'fixed', display: 'flex', justifyContent: 'center', flexFlow: 'column'}}>
            <NavItem to="/" label="Home" />
            <NavItem to="/blog" label="Blog" />
          </Box>
          <Box sx={{height: '80%'}}></Box>
          {/* <ShareComponent sx={{ py: 10, width: {xs:'80%', md: '40%'} }} /> */}
        </Box>
      </Box>
    </>
  )
}

export default Nav