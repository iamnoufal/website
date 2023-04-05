// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { post } = req.query
  const ghost_key = process.env.GHOST_CONTENT_API_KEY
  const ghost_url = process.env.GHOST_URL
  if (post.length == 1) {
    let includes = "tags"
    let tags = post[0]
    let resp = await fetch(`${ghost_url}/ghost/api/content/posts?key=${ghost_key}&include=${includes}&filter=tag:${tags}`)
    let data = await resp.json()
    return res.status(200).json(data)
  }
  let slug = post[1]
  let resp = await fetch(`${ghost_url}/ghost/api/content/posts/slug/${slug}?key=${ghost_key}`)
  let data = await resp.json()
  return res.status(200).json({ post: data.posts[0] })
}
