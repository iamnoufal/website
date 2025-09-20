"use client"

import { SpotifyData } from "@/utils/types"
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { ChevronDown, ChevronUp, ExternalLink, Music } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

interface SpotifyWidgetClientProps {
  initialData: SpotifyData | null
}

export default function SpotifyWidget({ initialData }: SpotifyWidgetClientProps) {
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(initialData)
  const [isHovered, setIsHovered] = useState(false)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [lastFetchTime, setLastFetchTime] = useState<number>(Date.now())
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  
  // Use a single timer for all updates to reduce memory overhead
  const masterTimerRef = useRef<NodeJS.Timeout | null>(null)
  const lastScrollY = useRef(0)
  const isComponentMounted = useRef(true) // Initialize as true
  const isExpandedRef = useRef(false) // Track expanded state for scroll handler

  // Update ref when expanded state changes
  useEffect(() => {
    isExpandedRef.current = isExpanded
  }, [isExpanded])

  // Check if mobile and set initial state
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      
      // Set initial state: 
      // - Mobile: always collapsed
      // - Desktop: expanded only if playing, collapsed if not playing
      if (mobile) {
        setIsExpanded(false)
      } else {
        setIsExpanded(spotifyData?.is_playing || false)
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [spotifyData?.is_playing]) // Add is_playing to dependencies

  // Scroll detection with auto-collapse only (no auto-expand)
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const pageHeight = window.innerHeight
          const scrolledDown = currentScrollY > pageHeight // Auto-collapse after scrolling 1 full page
          const currentExpanded = isExpandedRef.current
          
          setIsScrolled(scrolledDown)
          
          // Auto-collapse only on desktop after scrolling 1 full page
          if (!isMobile && scrolledDown && currentExpanded) {
            setIsExpanded(false) // Auto-collapse on scroll down, then stay collapsed
          }
          
          lastScrollY.current = currentScrollY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobile]) // Removed isExpanded from dependencies to prevent constant re-setup

  // Calculate real-time progress
  const calculateCurrentTime = useCallback(() => {
    if (!spotifyData?.is_playing || !spotifyData.current_time) return spotifyData?.current_time || 0
    
    const timeSinceLastFetch = Date.now() - lastFetchTime
    return (spotifyData.current_time || 0) + timeSinceLastFetch
  }, [spotifyData, lastFetchTime])

  // Refresh data from API with error handling
  const refreshData = useCallback(async () => {
    try {
      console.log("Refreshing Spotify data")
      const response = await fetch('/api/spotify')
      if (response.ok) {
        const data = await response.json()
        setSpotifyData(data)
        setCurrentTime(data.current_time || 0)
        setLastFetchTime(Date.now())
      }
    } catch (error) {
      console.error("Failed to refresh Spotify data:", error)
    }
  }, [])

  // Single master timer - only runs when song is actually playing
  useEffect(() => {
    if (masterTimerRef.current) {
      clearInterval(masterTimerRef.current)
    }

    // Only start timer when song is actively playing (mute timer when not playing)
    if (spotifyData?.is_playing) {
      masterTimerRef.current = setInterval(() => {        
        const newCurrentTime = calculateCurrentTime()
        setCurrentTime(newCurrentTime)

        // If song should be finished, refresh data
        if (newCurrentTime >= (spotifyData.duration || 0)) {
          refreshData()
        }
      }, 1000) // Update every 2 seconds when playing
    }
    // No timer for non-playing states - timer is muted

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

  const handleManualClose = () => {
    setIsAnimating(true)
    setIsExpanded(false)
    
    // Reduced timeout to minimize memory usage
    setTimeout(() => {
      setIsAnimating(false)
    }, 400) // Reduced from 600ms
  }

  const handleExpand = () => {
    setIsExpanded(true)
  }

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  if (!spotifyData || spotifyData.is_playing === null) {
    return null
  }

  const statusText = spotifyData.is_playing ? "Now Playing" : "Last Played"
  const statusColor = spotifyData.is_playing ? "text-green-400" : "text-gray-400"
  const displayCurrentTime = spotifyData.is_playing ? currentTime : (spotifyData.current_time || 0)
  const progressPercentage = spotifyData.duration ? Math.min((displayCurrentTime / spotifyData.duration) * 100, 100) : 0

  // Show compact based on expanded state and auto-collapse conditions
  const shouldShowCompact = !isExpanded

  const handleContainerClick = (e: React.MouseEvent) => {
    if (shouldShowCompact && !isAnimating) {
      e.stopPropagation()
      handleExpand()
    }
  }

  return (
    <LayoutGroup>
      <motion.div
        layout
        className={`fixed z-50 ${
          shouldShowCompact
            ? isMobile ? 'bottom-20 right-4' : 'bottom-8 right-8'
            : isMobile ? 'bottom-16 left-4 right-4' : 'bottom-8 right-8'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.6
        }}
      >
        {/* Single container that morphs instead of switching components */}
        <motion.div
          layoutId="spotify-container"
          className={`bg-black/90 backdrop-blur-xl border border-white/20 shadow-2xl group overflow-hidden ${
            shouldShowCompact || isAnimating
              ? 'rounded-full p-3 cursor-pointer' 
              : 'rounded-2xl p-4'
          } ${
            shouldShowCompact || isAnimating 
              ? 'w-auto' 
              : isMobile ? 'w-full' : 'w-80'
          }`}
          onClick={handleContainerClick}
          whileHover={{ scale: shouldShowCompact && !isAnimating ? 1.05 : (isMobile ? 1 : 1.02) }}
          whileTap={{ scale: shouldShowCompact && !isAnimating ? 0.95 : 1 }}
          animate={shouldShowCompact && spotifyData?.is_playing ? {
            scale: [1, 1.02, 1],
            boxShadow: [
              "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              "0 25px 50px -12px rgba(34, 197, 94, 0.3)",
              "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            ]
          } : {}}
          transition={{
            layout: {
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.6
            },
            scale: {
              type: "spring",
              stiffness: 400,
              damping: 25
            },
            animate: {
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }
          }}
        >
          {/* Content that adapts based on state */}
          {shouldShowCompact || isAnimating ? (
            // Compact content
            <div className="flex items-center gap-2">
              {/* Album Art - Center position in compact */}
              <motion.div 
                layoutId="album-art-container"
                className="relative"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.6
                }}
              >
                <motion.div 
                  layoutId="album-art"
                  className="w-8 h-8 rounded-full overflow-hidden bg-gray-800 flex-shrink-0"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.6
                  }}
                >
                  {spotifyData.album_art ? (
                    <Image
                      src={spotifyData.album_art}
                      alt={`${spotifyData.title} album art`}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Music size={16} className="text-gray-600" />
                    </div>
                  )}
                </motion.div>
                
                {/* Animated ring for playing */}
                {spotifyData.is_playing && (
                  <motion.div
                    layoutId="playing-ring"
                    className="absolute -inset-0.5 border border-green-400/60 rounded-full"
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity },
                      layout: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.6
                      }
                    }}
                  />
                )}
              </motion.div>
              
              {/* Compact icons - only show when not animating */}
              <AnimatePresence>
                {!isAnimating && (isMobile || isHovered) && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.4
                    }}
                    className="flex items-center gap-1 overflow-hidden"
                  >
                    <Music size={14} className={statusColor} />
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronUp size={14} className="text-gray-400" />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            // Expanded content
            <>
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Music size={16} className={statusColor} />
                    {spotifyData.is_playing && (
                      <motion.div
                        className="absolute -inset-1 bg-green-400/30 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                  <span className={`text-sm font-medium ${statusColor}`}>
                    {statusText}
                  </span>
                </div>
                <motion.button
                  onClick={handleManualClose}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  className="p-1 rounded-full hover:bg-white/10 transition-colors"
                >
                  <ChevronDown size={16} className="text-gray-400" />
                </motion.button>
              </div>

              <div className="flex items-center gap-4">
                {/* Album Art - Left position in expanded */}
                <motion.div 
                  layoutId="album-art-container"
                  className="relative flex-shrink-0"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.6
                  }}
                >
                  <motion.div 
                    layoutId="album-art"
                    className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} rounded-lg overflow-hidden bg-gray-800`}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.6
                    }}
                  >
                    {spotifyData.album_art ? (
                      <Image
                        src={spotifyData.album_art}
                        alt={`${spotifyData.title} album art`}
                        width={isMobile ? 48 : 64}
                        height={isMobile ? 48 : 64}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Music size={isMobile ? 20 : 24} className="text-gray-600" />
                      </div>
                    )}
                  </motion.div>
                  
                  {/* Rotating Ring */}
                  {spotifyData.is_playing && (
                    <motion.div
                      layoutId="playing-ring"
                      className="absolute -inset-1 border-2 border-green-400/50 rounded-lg"
                      animate={{ rotate: 360 }}
                      transition={{ 
                        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                        layout: {
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                          duration: 0.6
                        }
                      }}
                    />
                  )}
                </motion.div>

                {/* Track Info */}
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-white ${isMobile ? 'text-xs' : 'text-sm'} truncate mb-1`}>
                    {spotifyData.title}
                  </h3>
                  <p className={`text-gray-400 ${isMobile ? 'text-xs' : 'text-xs'} truncate mb-2`}>
                    {spotifyData.artist}
                  </p>
                  <p className={`text-gray-500 ${isMobile ? 'text-xs' : 'text-xs'} truncate`}>
                    {spotifyData.album}
                  </p>
                </div>

                {/* External Link */}
                <div className="flex-shrink-0">
                  <Link
                    href={spotifyData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink size={isMobile ? 14 : 16} className="text-white" />
                    </motion.div>
                  </Link>
                </div>
              </div>

              {/* Progress Bar - only show when playing */}
              {spotifyData.is_playing && (
                <div className="mt-3">
                  <div className="w-full bg-gray-700 rounded-full h-1 overflow-hidden">
                    <motion.div
                      className="bg-green-400 h-1 rounded-full"
                      style={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                  <div className={`flex justify-between ${isMobile ? 'text-xs' : 'text-xs'} text-gray-400 mt-1`}>
                    <span>{formatTime(displayCurrentTime)}</span>
                    <span>{formatTime(spotifyData.duration)}</span>
                  </div>
                </div>
              )}
            </>
          )}
        </motion.div>
      </motion.div>
    </LayoutGroup>
  )
} 