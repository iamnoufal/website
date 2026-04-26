"use client";

import { motion } from "framer-motion";
import { Clapperboard, Play } from "lucide-react";
import Image from "next/image";

interface RecentMoviesProps {
  movies: Movie[];
}

export default function RecentMovies({ movies }: RecentMoviesProps) {
  if (!movies.length) return null;

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
          <Clapperboard className="text-primary h-6 w-6" />
        </div>
        <div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Recently Watched
          </h2>
          <p className="text-xs font-sans text-text-muted mt-1">
            tail -n {movies.length} watch_history.log
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie, index) => (
          <motion.div
            key={movie.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <a
              href={`https://www.youtube.com/watch?v=${movie.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden bg-surface/50 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-video relative">
                <Image
                  src={`https://img.youtube.com/vi/${movie.youtubeId}/hqdefault.jpg`}
                  alt={`${movie.title} Trailer`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/80 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-white font-bold text-xs leading-tight group-hover:text-primary transition-colors">
                  {movie.title}
                </h3>
                <p className="text-text-muted text-[11px] mt-1">{movie.year}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
