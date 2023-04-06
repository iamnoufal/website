import { 
  Box, 
  Typography 
} from '@mui/material';
import Comment from './comment';
import { motion } from 'framer-motion'

const IntroComponent = ({ title, subtitle, style, children }) => {
  return (
    <Box sx={{ height: '100vh', width: '100%', backgroundPosition: 'center', ...style }} id='intro'>
      <Box sx={{ display: 'flex', alignItems: 'center', height: children ? '80vh' : "100vh", justifyContent: 'center', flexFlow: 'column', textAlign: 'center' }}>
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <Typography variant='h3' component='div' fontWeight={500} className="text-white text-shadow lora" mb={2}>{title}</Typography>
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
          <Comment>{subtitle}</Comment>
        </motion.div>
      </Box>
      {children}
    </Box>
  )
}

export default IntroComponent;