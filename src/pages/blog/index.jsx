import Head from 'next/head'
import Link from 'next/link'
import {
  Box, 
  Typography, 
  Container, 
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Chip,
  CircularProgress,
  Card,
  CardContent,
  CardMedia
} from '@mui/material'
import Layout from '@/components/layout'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from 'swiper'
import IntroImg from "@/assets/images/intro.webp"
import Comment from '@/components/comment';
import { motion } from 'framer-motion';
import IntroComponent from '@/components/intro';
import { useContext, useEffect, useState } from 'react';
import BlogContext from '@/contexts/blog';

export default function Home() {
  const { posts, setPosts } = useContext(BlogContext)
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    if (posts.blogs.length == 0) {
      fetch('/api/blog')
        .then(res => res.json())
        .then(data => setPosts({ ...posts, blogs: data.posts}))
    }
  }, [blogs])
  useEffect(() => setBlogs(posts.blogs), [blogs, posts])
  return (
    <>
      <Head>
        <title>Noufal&apos;s Blog</title>
        <meta name="description" content="Read, Inspire, Share" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Noufal's Blog" />
        <meta property="og:description" content="Read, Inspire, Learn from the posts written by Noufal Rahman. This blog features topics from tech to science, from ground to space and from you to me" />
        <meta property="og:image" content="/assets/images/logo.webp" />
        <meta property="og:url" content="https://blog.noufal.engineer" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Noufal's Blog" />
      </Head>
      <Layout>
        <Box sx={{ background: `url(${IntroImg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
          <IntroComponent title="Noufal's Blog" subtitle="read, inspire, learn" />
          <Box></Box>
          <Container maxWidth="md" sx={{py:5}}>
            <Box sx={{display: "flex"}}>
              <Box sx={{width: "100%"}}>
                {blogs.length===0 ? (
                  <Box sx={{display: "flex", justifyContent: "center", width: "100%", my: 20}}>
                    <CircularProgress className='text-blue' />
                  </Box>
                ) : (
                  <List>
                    {blogs.map((post, index) => {
                      return (
                        <motion.div
                          initial={{ y: 20, opacity: 0 }} 
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 1,
                            delay: 0.3 * index,
                            ease: [0, 0.71, 0.2, 1.01]
                          }}
                          key={post.id}
                        >
                          <Paper elevation={2} sx={{p:0, mb:2}}>
                            <ListItem disablePadding>
                              <Link href={"/blog/"+post.slug} style={{color:"inherit",textDecoration:"none"}}>
                                <ListItemButton sx={{color: "inherit", textDecoration: "none", px:2, flexDirection: "column", alignItems: 'start'}}>
                                  <ListItemText 
                                    primary={<Typography variant="h6" className="mw" sx={{mb:1}}>{post.title}</Typography>} 
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
        </Box>
      </Layout>
    </>
  )
}