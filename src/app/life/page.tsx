import Library from "@/components/life/Library";
import PhotoGallery from "@/components/life/PhotoGallery";
import RandomFacts from "@/components/life/RandomFacts";
import RecentMovies from "@/components/life/RecentMovies";
import TravelLogs from "@/components/life/TravelLogs";
import { getLibrary, getRandomFacts, getRecentMovies, getTravelLogs } from "@/utils/sheets";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Life",
  description:
    "OfflineMode.exe — A glimpse into my world beyond code. Random facts, travel logs, reading list, and what I'm currently listening to.",
  openGraph: {
    title: "Life | Noufal Rahman",
    description:
      "A glimpse into my world beyond code. Random facts, travel logs, reading list, and what I'm currently listening to.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://noufal.dev"}/life`,
  },
};

// Lazy load SpotifyWidget to prevent server-side loading and reduce initial bundle
const SpotifyWidget = dynamic(() => import("@/components/life/SpotifyWidget"), {
  loading: () => null
})

export default async function LifePage() {
  const [
    { logs: travelLogs, currentLocation },
    movies,
    books,
    facts,
  ] = await Promise.all([
    getTravelLogs(),
    getRecentMovies(),
    getLibrary(),
    getRandomFacts(),
  ]);

  return (
    <div id="life-page-root" className="min-h-screen py-24 pb-40 md:pb-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl filter -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-40 right-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl filter translate-x-1/3" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* OfflineMode.exe Hero */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 py-32 border-b border-white/5">

          {/* Left: Title & Status */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Online but chilling</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-2 tracking-tight font-bold">
              OfflineMode<span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">.exe</span>
            </h1>
            <p className="text-xl text-text-muted max-w-xl leading-relaxed">
              System status: Operating normally. Creating memories, writing code, and enjoying the rhythm of life.
            </p>
          </div>

          {/* Right: Spotify Widget */}
          <div className="w-full lg:w-auto">
            <SpotifyWidget />
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-20 mb-32">
          <PhotoGallery />
        </div>

        {/* Random Facts Section */}
        <div className="mb-32">
          <RandomFacts facts={facts} />
        </div>

        {/* Travel Logs Section */}
        <div className="mb-32">
          <TravelLogs logs={travelLogs} currentLocation={currentLocation} />
        </div>

        {/* Recently Watched Section */}
        <div className="mb-32">
          <RecentMovies movies={movies} />
        </div>

        {/* Library Section */}
        <Library books={books} />

      </div>
    </div>
  );
}
