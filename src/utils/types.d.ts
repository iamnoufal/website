export interface PostSchema {
  title: string;
  slug: string;
  html: string;
  published_at: string;
  feature_image: string;
  excerpt: string;
  tags: Array<String>;
  authors: Array<String>;
  reading_time: number;
}