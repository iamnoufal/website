import { 
  Box, 
  Typography 
} from '@mui/material';
import Fade from './fade';
import Comment from './comment';
import { motion } from 'framer-motion'

const IntroComponent = ({ title, subtitle }) => {
  return (
    // <Box sx={{ background: `url(${IntroImg})`, height: '100vh', width: '100%', backgroundPosition: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', height: '80vh', justifyContent: 'center', flexFlow: 'column', textAlign: 'center' }} id='intro'>
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <Typography variant='h3' component='div' fontWeight={500} className="text-darkblue lora" mb={2}>{title}</Typography>
        </motion.div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <Typography  variant='h4' component='div' fontStyle={'italic'} className='grandhotel'><Comment>{subtitle}</Comment></Typography>
        </motion.div>
      </Box>
    // </Box>
  )
}

export default IntroComponent;