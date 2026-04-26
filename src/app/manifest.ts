import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Noufal Rahman",
    short_name: "Noufal",
    description:
      "Full Stack Developer & Creative Thinker. Building stuff that matters.",
    start_url: "/",
    display: "standalone",
    background_color: "#052640",
    theme_color: "#4FFFB0",
  };
}
