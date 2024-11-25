import { PostSchema } from "./types";
import jwt from "jsonwebtoken";

const getSignedGhostAdminToken = () => {
  const [id, secret] = process.env.GHOST_ADMIN_API_KEY?.split(":") || ["", ""];
  return jwt.sign({}, Buffer.from(secret, "hex"), {
    keyid: id,
    algorithm: "HS256",
    expiresIn: "5m",
    audience: `/admin/`,
  });
};

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
  if (data.errors) return null;
  return data;
};

const ghostAdminAPI = async (
  endpoint: string,
  method: string,
  params?: Record<string, string>,
  body?: Object
) => {
  const res = await fetch(
    `${process.env.GHOST_URI}/ghost/api/admin${endpoint}?${
      params ? new URLSearchParams(params) : ""
    }`,
    {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Ghost ${getSignedGhostAdminToken()}`,
      },
      body: method === "POST" ? JSON.stringify(body) : undefined,
    }
  );
  const data = await res.json();
  console.log(data);
  if (data.errors) return null;
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

const subscribeMember = async (email: string, name: string) => {
  const resp = await ghostAdminAPI("/members", "POST", undefined, {
    members: [{ email, name }],
  });
  console.log(resp);
  return resp;
};

export { getPostBySlug, getPosts, subscribeMember };
