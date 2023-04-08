import { 
  Box,
  Container
} from "@mui/material"
import Head from "next/head"
import Layout from "@/components/layout"
import Script from "next/script"
import Subscribe from "@/components/blog/subscribe"
import PostIntro from "@/components/blog/intro"

export default function Post(props) {
  return (
    <>
      <Head>
        <title>{props.title+" | Noufal's Blog"}</title>
        <meta name="description" content={props.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.excerpt} />
        <meta property="og:image" content={props.feature_image || '/assets/blog.webp'} />
        <meta property="og:url" content={"https://noufal.engineer/blog/"+props.slug} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Noufal's Blog" />
      </Head>
      <Layout>
        <Box>
          <PostIntro {...props} />
          <Box sx={{ pt:10, bgcolor: 'rgb(10, 10, 10)', color: 'white' }}>
            <Container maxWidth="md" className="post">
              <div dangerouslySetInnerHTML={{__html: props.html}}></div>
            </Container>
            <Subscribe />
          </Box>
        </Box>
      </Layout>
      <Script src="/assets/prism.js" />
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