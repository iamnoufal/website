import '@/styles/globals.css'
import BlogContext from '@/contexts/blog'
import { ThemeProvider } from '@mui/material'
import darkTheme from '@/themes/dark'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [posts, setPosts] = useState({
    blogs: [],
    blogPosts: {},
    docs: [],
    docPosts: {}
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <BlogContext.Provider value={{ posts, setPosts }}>
        <Component {...pageProps} />
      </BlogContext.Provider>
    </ThemeProvider>
  )
}