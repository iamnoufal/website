"use client"

import { getCurrentlyPlaying } from "@/utils/spotify"
import { motion } from "framer-motion"
import { ExternalLink, Music } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function SpotifyWidget() {
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [lastFetchTime, setLastFetchTime] = useState<number>(Date.now())
  const [isLoading, setIsLoading] = useState(true)

  // Use a single timer for all updates to reduce memory overhead
  const masterTimerRef = useRef<NodeJS.Timeout | null>(null)
  const isComponentMounted = useRef(true)

  // Calculate real-time progress
  const calculateCurrentTime = useCallback(() => {
    if (!spotifyData?.is_playing || !spotifyData.current_time) return spotifyData?.current_time || 0

    const timeSinceLastFetch = Date.now() - lastFetchTime
    return (spotifyData.current_time || 0) + timeSinceLastFetch
  }, [spotifyData, lastFetchTime])

  // Refresh data from API with error handling
  const refreshData = useCallback(async () => {
    try {
      const data = await getCurrentlyPlaying()
      setSpotifyData(data)
      if (data) {
        setCurrentTime(data.current_time || 0)
        setLastFetchTime(Date.now())
      }
    } catch (error) {
      console.error("Failed to refresh Spotify data:", error)
    }
  }, [])

  // Fetch initial data on mount
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const data = await getCurrentlyPlaying()
        setSpotifyData(data)
      } catch (error) {
        console.error("Failed to fetch initial Spotify data:", error)
        setSpotifyData(null)
      } finally {
        setIsLoading(false)
      }
    }

    const timeoutId = setTimeout(fetchInitialData, 100)
    return () => clearTimeout(timeoutId)
  }, [])

  // Single master timer - only runs when song is actually playing
  useEffect(() => {
    if (masterTimerRef.current) {
      clearInterval(masterTimerRef.current)
    }

    if (spotifyData?.is_playing) {
      masterTimerRef.current = setInterval(() => {
        const newCurrentTime = calculateCurrentTime()
        setCurrentTime(newCurrentTime)

        if (newCurrentTime >= (spotifyData.duration || 0)) {
          refreshData()
        }
      }, 1000)
    }

    return () => {
      if (masterTimerRef.current) {
        clearInterval(masterTimerRef.current)
        masterTimerRef.current = null
      }
    }
  }, [spotifyData?.is_playing, spotifyData?.duration, calculateCurrentTime, refreshData])

  // Initialize current time
  useEffect(() => {
    if (spotifyData?.current_time) {
      setCurrentTime(spotifyData.current_time)
      setLastFetchTime(Date.now())
    }
  }, [spotifyData?.current_time])

  // Component unmount cleanup
  useEffect(() => {
    return () => {
      isComponentMounted.current = false
      if (masterTimerRef.current) {
        clearInterval(masterTimerRef.current)
      }
    }
  }, [])

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  // Loading state
  if (isLoading) {
    return null
  }

  // No data / Error state
  if (!spotifyData || spotifyData.is_playing === null) {
    return (
      <div className="flex items-center gap-4 p-5 rounded-3xl bg-surface/50 border border-border backdrop-blur-md w-full max-w-sm">
        <div className="h-16 w-16 rounded-2xl bg-surface flex items-center justify-center text-text-muted shadow-inner shrink-0">
          <Music size={24} />
        </div>
        <div>
          <p className="text-text-main font-bold font-heading text-lg">Spotify Offline</p>
          <p className="text-sm text-text-muted">Unable to fetch status</p>
        </div>
      </div>
    );
  }

  const statusText = spotifyData.is_playing ? "Now Playing" : "Last Played"
  const displayCurrentTime = spotifyData.is_playing ? currentTime : (spotifyData.current_time || 0)
  const progressPercentage = spotifyData.duration ? Math.min((displayCurrentTime / spotifyData.duration) * 100, 100) : 0

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative w-[320px] bg-surface/80 backdrop-blur-xl border border-border rounded-3xl p-4 shadow-2xl transition-all hover:border-primary/30 hover:shadow-[0_0_30px_rgba(79,255,176,0.15)] group"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-primary">{statusText}</span>
        </div>
        <Music size={14} className="text-text-muted/50" />
      </div>

      <div className="flex gap-3">
        {/* Album Art */}
        <div className="relative h-16 w-16 shrink-0">
          <div className="relative h-full w-full rounded-xl overflow-hidden shadow-lg border border-white/5 z-10">
            {spotifyData.album_art ? (
              <Image
                src={spotifyData.album_art}
                alt={spotifyData.album || "Album Art"}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-surface flex items-center justify-center">
                <Music className="text-text-muted" size={20} />
              </div>
            )}
          </div>

          {/* Spinning Ring */}
          {spotifyData.is_playing && (
            <motion.div
              className="absolute -inset-2 border border-primary/30 rounded-[20px] pointer-events-none z-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <Link
            href={spotifyData.url || "#"}
            target="_blank"
            className="group/text"
          >
            <h3 className="text-base font-bold font-heading text-text-main truncate mb-0.5 group-hover/text:text-primary transition-colors">
              {spotifyData.title}
            </h3>
          </Link>
          <p className="text-xs text-text-muted truncate mb-0.5">{spotifyData.artist}</p>
          <p className="text-[10px] text-text-muted/60 truncate">{spotifyData.album}</p>
        </div>

        <Link
          href={spotifyData.url || "#"}
          target="_blank"
          className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-text-main transition-colors self-center shrink-0"
        >
          <ExternalLink size={14} />
        </Link>
      </div>

      {/* Progress */}
      <div className="mt-3">
        <div className="w-full bg-white/5 rounded-full h-1 overflow-hidden mb-1.5">
          <motion.div
            className="bg-primary h-full rounded-full shadow-[0_0_10px_rgba(79,255,176,0.5)]"
            style={{ width: `${progressPercentage}%` }}
            layoutId="progress"
          />
        </div>
        <div className="flex justify-between text-[10px] font-medium text-text-muted font-sans">
          <span>{formatTime(displayCurrentTime)}</span>
          <span>{formatTime(spotifyData.duration || 0)}</span>
        </div>
      </div>
    </motion.div>
  )
}