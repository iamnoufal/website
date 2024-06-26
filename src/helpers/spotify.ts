export interface SpotifyData {
  current_time: number;
  duration: number;
  is_playing: boolean;
  title: string;
  artist: string;
  album: string;
  album_art: string;
  url: string;
  preview: string;
}

const getAccessToken = async () : Promise<string> => {
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
    next: {
      revalidate: 3600,
    }
  });
  const data = await response.json();
  return data.access_token as string;
}

const getCurrentlyPlaying = async () : Promise<SpotifyData> => {
  const accessToken = await getAccessToken();
  const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store"
  });
  if (response.status !== 200) return {is_playing: false} as SpotifyData;
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
    preview: data.item.preview_url
  };
}

export default getCurrentlyPlaying;