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
import Subscribe from '@/components/blog/subscribe';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Noufal&apos;s Blog</title>
        <meta name="description" content="Read, Inspire, Learn" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Noufal's Blog" />
        <meta property="og:description" content="Read, Inspire, Learn from the posts written by Noufal Rahman. This blog features topics from tech to science, from ground to space and from you to me" />
        <meta property="og:image" content="/assets/logo.webp" />
        <meta property="og:url" content="https://noufal.engineer/blog" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Noufal's Blog" />
      </Head>
      <Layout>
        <IntroComponent 
          title="Noufal's Blog" 
          subtitle="read, inspire, learn" 
          style={{
            background: `linear-gradient(0deg, #018891, transparent 70%),linear-gradient(150deg, rgb(254, 92, 131, 0.8) 10%, transparent 30%),linear-gradient(200deg, rgb(78, 133, 187), rgb(133, 65, 133), #861d1d, rgb(221 86 1), rgb(255 246 0))`
          }}
        />
        <Box sx={{background: 'linear-gradient(0deg, #080808 5%, transparent 40%), linear-gradient(180deg, #018891, transparent), linear-gradient(130deg, #6610f2 10%, #6f42c1 20%, #d63384 35%, #dc3545 65%, #fd7e14 83%, #ffc107 91%)'}}>
          <Container maxWidth="md" sx={{py:5}}>
            <Box sx={{display: "flex"}}>
              <Box sx={{width: "100%"}}>
                {props.posts.length===0 ? (
                  <Box sx={{display: "flex", justifyContent: "center", width: "100%", my: 20}}>
                    <CircularProgress className='text-blue' />
                  </Box>
                ) : (
                  <List>
                    {props.posts.map(post => {
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
          <Subscribe />
        </Box>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const ghost_key=process.env.GHOST_CONTENT_API_KEY  
  const ghost_url = process.env.GHOST_URL
  let includes = "tags"
  let tags = "blog"
  const res = await fetch(`${ghost_url}/ghost/api/content/posts?key=${ghost_key}&include=${includes}&filter=tag:${tags}`)
  var data = await res.json()
  return {props: data}
}