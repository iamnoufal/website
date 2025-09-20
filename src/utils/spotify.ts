import { SpotifyData } from "./types";

const getAccessToken = async (): Promise<string> => {
  try {
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
    
    if (!response.ok) {
      throw new Error(`Spotify token request failed: ${response.status}`);
    }
    
    const data = await response.json();
    return data.access_token as string;
  } catch (error) {
    console.error("Failed to get Spotify access token:", error);
    throw error;
  }
}

const getLastPlayed = async (token: string): Promise<SpotifyData> => {
  try {
    const response = await fetch("https://api.spotify.com/v1/me/player/recently-played", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store"
    });
    
    if (response.status !== 200) {
      return { is_playing: null } as SpotifyData;
    }
    
    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      return { is_playing: null } as SpotifyData;
    }
    
    const track = data.items[0].track;
    return {
      duration: track.duration_ms,
      is_playing: false,
      title: track.name,
      artist: track.artists.map((artist: { name: string }) => artist.name).join(", "),
      album: track.album.name,
      album_art: track.album.images[0]?.url || "",
      url: track.external_urls.spotify,
      preview: track.preview_url
    };
  } catch (error) {
    console.error("Failed to get last played track:", error);
    return { is_playing: null } as SpotifyData;
  }
}

// Separate function to get top track for homepage
const getTopTrack = async (): Promise<{ title: string; artist: string } | null> => {
  try {
    // Check if required environment variables are set
    if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET || !process.env.SPOTIFY_REFRESH_TOKEN) {
      console.warn("Spotify environment variables not configured");
      return null;
    }

    const accessToken = await getAccessToken();
    const response = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=1&time_range=short_term", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store"
    });
    
    if (response.status !== 200) {
      return null;
    }
    
    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      return null;
    }
    
    const track = data.items[0];
    return {
      title: track.name,
      artist: track.artists.map((artist: { name: string }) => artist.name).join(", ")
    };
  } catch (error) {
    console.error("Failed to get top track:", error);
    return null;
  }
}

const getCurrentlyPlaying = async (): Promise<SpotifyData> => {
  try {
    // Check if required environment variables are set
    if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET || !process.env.SPOTIFY_REFRESH_TOKEN) {
      console.warn("Spotify environment variables not configured");
      return { is_playing: null } as SpotifyData;
    }

    const accessToken = await getAccessToken();
    const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store"
    });
    
    if (response.status === 401) {
      // Token expired, try to get a new one
      return await getCurrentlyPlaying();
    }
    
    if (response.status === 204) {
      // No content - nothing currently playing
      return await getLastPlayed(accessToken);
    }
    
    if (response.status !== 200) {
      return await getLastPlayed(accessToken);
    }
    
    const data = await response.json();
    
    if (!data.item) {
      return await getLastPlayed(accessToken);
    }
    
    return {
      current_time: data.progress_ms,
      duration: data.item.duration_ms,
      is_playing: data.is_playing,
      title: data.item.name,
      artist: data.item.artists.map((artist: { name: string }) => artist.name).join(", "),
      album: data.item.album.name,
      album_art: data.item.album.images[0]?.url || "",
      url: data.item.external_urls.spotify,
      preview: data.item.preview_url
    };
  } catch (error) {
    console.error("Failed to get currently playing track:", error);
    return { is_playing: null } as SpotifyData;
  }
}

export { getCurrentlyPlaying, getTopTrack };
