import { PostSchema } from "./types";

const ghostContentAPI = async (
  endpoint: string,
  params?: Record<string, string>
) => {
  const res = await fetch(
    `${process.env.GHOST_URI}/ghost/api/v3/content${endpoint}?key=${
      process.env.GHOST_CONTENT_API_KEY
    }&${params ? new URLSearchParams(params) : ""}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  if (data.errors) {
    return null;
  }
  return data;
};

const getPosts = async (): Promise<PostSchema[]> => {
  const { posts } = await ghostContentAPI("/posts", {
    limit: "all",
    include: "tags,authors",
  });
  return posts as PostSchema[];
};

const getPostBySlug = async (slug: string): Promise<PostSchema> => {
  const post = await ghostContentAPI(`/posts/slug/${slug}`);
  return post ? post.posts[0] : null;
};

// const subscribeMember = async (email) => {
//   const resp = await ghostAdmin.members.add(
//     { email: body.email },
//     { send_email: true, email_type: "subscribe" }
//   );
//   return resp;
// };

export { getPostBySlug, getPosts };
