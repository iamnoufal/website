import { useState } from 'react'
import {
  TextField,
  Button,
  IconButton, 
  Alert,
  Collapse,
  Box,
  Container,
  Typography
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import Close from '@mui/icons-material/Close'

const Subscribe = () => {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const subscribe = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setLoading(true)
      setEmailError(false)
      fetch("/api/subscribe", {method: "POST", body: JSON.stringify({email: email})})
        .then(res => {
          if (res.status == 200) {
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
    <Container maxWidth="md" sx={{py:10}}>
      <Typography variant='h4' textAlign="center" className='text-white text-shadow lora'>Be the first to know.</Typography>
      <Box sx={{width:'100%',mt:3}}>
        <Box sx={{width:{xs:'100%',md:'50%'},mx:'auto'}}>
          <TextField 
            variant="filled"
            sx={{width:'100%'}}
            label="Email"
            InputProps={{
              endAdornment: loading ? (
                <LoadingButton loading className='text-teal'></LoadingButton>
              ) : (
                <Button className="text-teal" onClick={subscribe}>Subscribe</Button>
              )
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
                  onClick={() => setOpen(false)}
                >
                  <Close fontSize="inherit" />
                </IconButton>
              }
            >{message}</Alert>
          </Collapse>
        </Box>
      </Box>
    </Container>
  )
}

export default Subscribe