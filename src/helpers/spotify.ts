import { url } from "inspector";

const getAccessToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN || "",
    }),
  });
  const data = await response.json();
  return data.access_token;
}

const getCurrentlyPlaying = async () => {
  const accessToken = await getAccessToken();
  const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store"
  });
  if (response.status !== 200) return {is_playing: false};
  const data = await response.json();
  return {
    current_time: data.progress_ms,
    duration: data.item.duration_ms,
    is_playing: data.is_playing,
    title: data.item.name,
    artist: data.item.artists.map((artist: { name: string }) => artist.name).join(", "),
    album: data.item.album.name,
    album_art: data.item.album.images[0].url,
    url: data.item.external_urls.spotify,
  };
}

export default getCurrentlyPlaying;