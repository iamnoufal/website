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
		`${process.env.GHOST_URI}/ghost/api/v3/content${endpoint}?key=${process.env.GHOST_CONTENT_API_KEY}&${params ? new URLSearchParams(params) : ""}`,
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
		`${process.env.GHOST_URI}/ghost/api/admin${endpoint}?key=${process.env.GHOST_ADMIN_API_KEY}&${params ? new URLSearchParams(params) : ""}`,
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
	if (data.errors) return null;
	return data;
};

const getPrimaryTag = (tags: PostSchema["tags"]) => {
	if (!tags || tags.length === 0) return null;
	const internalTags = ["featured", "roundup", "blog"];
	const primaryTag = tags.find(tag => !internalTags.includes(tag.name.toLowerCase()));
	return primaryTag ? primaryTag.name : tags[0].name;
};

const getPosts = async (): Promise<PostSchema[]> => {
	const data = await ghostContentAPI("/posts", {
		limit: "all",
		include: "tags,authors",
		filter: "tag:blog"
	});
	if (!data) return [];
	return data.posts as PostSchema[];
};

const getFeaturedPosts = async (): Promise<PostSchema[]> => {
	const data = await ghostContentAPI("/posts", {
		limit: "3",
		include: "tags,authors",
		filter: "featured:true",
	});
	if (!data) return [];
	return data.posts as PostSchema[];
}

const getPostBySlug = async (slug: string): Promise<PostSchema | null> => {
	const post = await ghostContentAPI(`/posts/slug/${slug}`, {
		include: "tags,authors"
	});
	return post ? post.posts[0] : null;
};

const subscribeMember = async (email: string, name: string) => {
	const resp = await ghostAdminAPI("/members", "POST", undefined, {
		members: [{ email, name }],
	});
	return resp;
};

export { getPostBySlug, getPosts, getFeaturedPosts, subscribeMember, getPrimaryTag };
