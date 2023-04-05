import { 
  Box,
  Container,
  Typography,
  Link
} from "@mui/material"
import { WhatsApp, LinkedIn, Twitter, FacebookOutlined, Share } from '@mui/icons-material'
import Head from "next/head"
import Layout from "@/components/layout"

export default function Post(props) {
  const blogShare = {
    title: props.title,
    text: props.excerpt,
    url: "https://blog.noufal.engineer/"+props.slug
  }
  return (
    <>
      <Head>
        <title>{props.title+" | Noufal's Blog"}</title>
        <meta name="description" content={props.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.excerpt} />
        <meta property="og:image" content={props.feature_image} />
        <meta property="og:url" content={"https://blog.noufal.engineer/"+props.slug} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Noufal's Blog" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/themes/prism-tomorrow.min.css" integrity="sha512-vswe+cgvic/XBoF1OcM/TeJ2FW0OofqAVdCZiEYkd6dwGXthvkSFWOoGGJgS2CW70VK5dQM5Oh+7ne47s74VTg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/components/prism-core.min.js" integrity="sha512-9khQRAUBYEJDCDVP2yw3LRUQvjJ0Pjx0EShmaQjcHa6AXiOv6qHQu9lCAIR8O+/D8FtaCoJ2c0Tf9Xo7hYH01Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/plugins/autoloader/prism-autoloader.min.js" integrity="sha512-fTl/qcO1VgvKtOMApX2PdZzkziyr2stM65GYPLGuYMnuMm1z2JLJG6XVU7C/mR+E7xBUqCivykuhlzfqxXBXbg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      </Head>
      <Layout>
        <Box>
          <Box
            sx={{
              minHeight: '100vh', 
              width: '100%', 
              backgroundImage: `url(${props.feature_image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
            }}
            className="bg-blue"
          >
            <Box 
              sx={{
                minHeight: '100vh', 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'end',
                p: {xs:2,md:4,lg:8},
                pt: {xs:8,lg:0},
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1))'
              }}
            >
              <Typography variant='h3' component="h1" sx={{mb:2}} className='text-white mw text-blue'>{props.title}</Typography>
              <Typography variant='h6' component="h4" className='ms' sx={{color:'rgba(255,255,255,0.8)'}}>{props.excerpt}</Typography>
              <Typography variant='body2' sx={{mt:1}} className='text-white ms'>{props.reading_time} mins read • {(new Date(props.published_at).toDateString())}</Typography>
              <Box sx={{display: 'flex', mt:2}}>
                <Link sx={{mr:2}} target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?text=${blogShare.title.replaceAll(" ", "+")}%0A${blogShare.text.replaceAll(" ", "+")}%0A${blogShare.url}`}>
                  <Typography color="white"><WhatsApp /></Typography>
                </Link>
                <Link sx={{mr:2}} target="_blank" rel="noreferrer" href={`http://www.facebook.com/sharer.php?u=${blogShare.url}`}>
                  <Typography color="white"><FacebookOutlined /></Typography>
                </Link>
                <Link sx={{mr:2}} target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=${blogShare.url}&text=${blogShare.title.replaceAll(" ", "+")}%0A${blogShare.text.replaceAll(" ", "+")}%0A`}>
                  <Typography color="white"><Twitter /></Typography>
                </Link>
                <Link sx={{mr:2}} target="_blank" rel="noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${blogShare.url}`}>
                  <Typography color="white"><LinkedIn /></Typography>
                </Link>
                <Link sx={{cursor:"pointer"}} onClick={() => navigator.share(blogShare)}>
                  <Typography color="white"><Share /></Typography>
                </Link>
              </Box>
            </Box>
          </Box>
          <Container maxWidth="md" className="post" sx={{py:2}}>
            <div dangerouslySetInnerHTML={{__html: props.html}}></div>
          </Container>
        </Box>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params }) {
  const post_slug = params.slug
  const ghost_key = process.env.GHOST_CONTENT_API_KEY
  const ghost_url = process.env.GHOST_URL
  const res = await fetch(`${ghost_url}/ghost/api/content/posts/slug/${post_slug}?key=${ghost_key}`)
  const data = await res.json()
  return {props: data.posts[0]}
}

export async function getStaticPaths() {
  const ghost_key = process.env.GHOST_CONTENT_API_KEY
  const ghost_url = process.env.GHOST_URL
  const res = await fetch(`${ghost_url}/ghost/api/content/posts?key=${ghost_key}`)
  const data = await res.json()
  return {
    paths: data.posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }), 
    fallback: false
  }
}