const strapiAPI = async (endpoint: string, params?: Record<string, string>) => {
  const res = await fetch(`${process.env.STRAPI_URI}/api${endpoint}?${params ? new URLSearchParams(params) : ""}`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  });
  const { data, error } = await res.json();
  console.log(data)
  if (error) {
    return null;
  }
  return data;
};

const getFlow = async () => {
  const data = await strapiAPI("/flows", {"populate[0]": "image", "sort": "order"});
  return data;
}

export { getFlow }