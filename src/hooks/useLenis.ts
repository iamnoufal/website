"use client"

import { useLenis } from 'lenis/react';

export function useScrollTo() {
  const lenis = useLenis()

  const scrollTo = (target: string | number, options?: { offset?: number; duration?: number; easing?: (t: number) => number }) => {
    if (!lenis) return

    lenis.scrollTo(target, {
      offset: options?.offset || 0,
      duration: options?.duration || 1.2,
      easing: options?.easing || ((t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
    })
  }

  const scrollToTop = (options?: { duration?: number }) => {
    scrollTo(0, { duration: options?.duration || 1.2 })
  }

  const scrollToElement = (selector: string, options?: { offset?: number; duration?: number }) => {
    scrollTo(selector, options)
  }

  return {
    scrollTo,
    scrollToTop,
    scrollToElement,
    lenis,
  }
}

export { useLenis };

