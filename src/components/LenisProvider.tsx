"use client"

import { ReactLenis } from 'lenis/react'
import { ReactNode, useEffect } from 'react'

interface LenisProviderProps {
  children: ReactNode
}

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    // Disable native smooth scrolling to prevent conflicts
    document.documentElement.style.scrollBehavior = 'auto'
  }, [])

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      {children}
    </ReactLenis>
  )
}
