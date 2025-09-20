"use client"

import { SpotifyData } from "@/utils/types"
import { useEffect, useState } from "react"
import SpotifyWidget from "./SpotifyWidget"

export default function SpotifyWidgetWrapper() {
  const [initialData, setInitialData] = useState<SpotifyData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load Spotify data on client-side to prevent server-side API calls
    const fetchInitialData = async () => {
      try {
        const response = await fetch('/api/spotify', {
          next: { revalidate: 60 } // Cache for 60 seconds
        })
        
        if (response.ok) {
          const data = await response.json()
          setInitialData(data)
        }
      } catch (error) {
        console.error("Failed to fetch initial Spotify data:", error)
        setInitialData(null)
      } finally {
        setIsLoading(false)
      }
    }

    // Delay initial load slightly to prevent blocking page render
    const timeoutId = setTimeout(fetchInitialData, 100)
    
    return () => clearTimeout(timeoutId)
  }, [])

  // Don't render anything while loading to prevent layout shift
  if (isLoading) {
    return null
  }

  return <SpotifyWidget initialData={initialData} />
} 