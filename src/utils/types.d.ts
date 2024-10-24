export interface PostSchema {
  id: string,
  title: string;
  slug: string;
  html: string;
  published_at: string;
  feature_image: string;
  excerpt: string;
  tags: Array<{
    id: string,
    name: string
  }>;
  authors: Array<String>;
  reading_time: number;
  featured: true;
}

export interface SpotifyData {
  current_time?: number;
  duration: number;
  is_playing: boolean | null;
  title: string;
  artist: string;
  album: string;
  album_art: string;
  url: string;
  preview: string;
}