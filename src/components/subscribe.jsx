import { useState } from 'react'
import {
  TextField,
  Button,
  ThemeProvider,
  IconButton, 
  Alert,
  Collapse,
  createTheme,
  Box,
  Container,
  Typography
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Close } from '@mui/icons-material'

const Subscribe = () => {const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    }
  })
  const subscribe = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setLoading(true)
      setEmailError(false)
      fetch("/api/subscribe", {method: "POST", body: JSON.stringify({email: email})})
        .then(res => {
          if (res.status == 200) {
            console.log(res)
            res.text().then(res => console.log(res))
            setSuccess(true)
            setOpen(true)
            setLoading(false)
            setMessage("Thanks for subscribing to the newsletter. A verification email has been sent to your email")
            setOpen(true)
            setLoading(false)
          } else {
            throw res
          }
        })
        .catch(err => err.json().then(data => {
          setLoading(false)
          setSuccess(false)
          setMessage(data.context)
          setOpen(true)
        }))
    } else {
      setLoading(false)
      setEmailError(true)
    }
  }
  return (
    <Container maxWidth="md" sx={{py:5}}>
      <Typography variant='h5' textAlign="center" className='text-teal mw'>Interested to read more? Subscribe to the newsletter</Typography>
      <Box sx={{width:'100%',mt:3}}>
        <Box sx={{width:{xs:'100%',md:'50%'},mx:'auto'}}>
          <ThemeProvider theme={darkTheme}>
            <TextField 
              variant="filled"
              sx={{width:'100%'}}
              label="Email"InputProps={{
                endAdornment: loading ? (<LoadingButton loading className='text-teal'></LoadingButton>) : (<Button className="text-teal" onClick={subscribe}>Subscribe</Button>)
              }}
              onChange={(e) => setEmail(e.target.value)}
              helperText={emailError ? "Invalid Email" : ""}
              error={emailError}
            />
            <Collapse in={open}>
              <Alert
                severity={success ? "success" : "error"}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <Close fontSize="inherit" />
                  </IconButton>
                }
              >{message}</Alert>
            </Collapse>
          </ThemeProvider>
        </Box>
      </Box>
    </Container>
  )
}

export default Subscribe