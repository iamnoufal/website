import Head from 'next/head'
import Box from '@mui/material/Box'
import Layout from '@/components/layout'
import IntroComponent from '@/components/intro';
import Subscribe from '@/components/blog/subscribe';
import PostList from '@/components/blog/posts';

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
        <meta property="og:image" content='https://noufal.engineer/assets/blog.webp' />
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
          <PostList {...props} />
          <Subscribe />
        </Box>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const ghost_key = process.env.GHOST_CONTENT_API_KEY  
  const ghost_url = process.env.GHOST_URL
  let includes = "tags"
  let tags = "blog"
  const res = await fetch(`${ghost_url}/ghost/api/content/posts?key=${ghost_key}&include=${includes}&filter=tag:${tags}`)
  var data = await res.json()
  return {props: data}
}