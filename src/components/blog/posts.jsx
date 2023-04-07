import { 
  Container,
  Box,
  CircularProgress,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Chip
} from "@mui/material"
import { motion } from "framer-motion"
import Link from "next/link"

const PostList = ({ posts }) => {
  console.log(posts)
  return (
    <Container maxWidth="md" sx={{py:5}}>
      <Box sx={{display: "flex"}}>
        <Box sx={{width: "100%"}}>
          {posts.length===0 ? (
            <Box sx={{display: "flex", justifyContent: "center", width: "100%", my: 20}}>
              <CircularProgress className='text-blue' />
            </Box>
          ) : (
            <List>
              {posts.map(post => {
                return (
                  <motion.div
                    initial={{ y: 80, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                    key={post.id}
                  >
                    <Paper elevation={2} sx={{p:0, mb:2}}>
                      <ListItem disablePadding>
                        <Link href={"/blog/"+post.slug} style={{color:"inherit",textDecoration:"none", width: '100%'}}>
                          <ListItemButton sx={{color: "inherit", textDecoration: "none", px:2, flexDirection: "column", alignItems: 'start'}}>
                            <ListItemText 
                              primary={<Typography variant="h6" className="lora" sx={{mb:1}}>{post.title}</Typography>} 
                              secondary={<Typography variant='body2' className='ms'>{post.excerpt}</Typography>} 
                            />
                            <Box sx={{display: 'flex', justifyContent: 'start', my: 1}}>
                              {post.tags.map(tag => (tag.slug!=="blog" && <Chip label={tag.name} sx={{ height: 'auto', py: 0.5, mr:1 }} key={tag.name} variant="outlined" />))}
                            </Box>
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    </Paper>
                  </motion.div>
                )
              })}
            </List>
          )}
        </Box>
      </Box>
    </Container>
  )
}

export default PostList