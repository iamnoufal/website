"use client"

import { useScrollTo } from "@/hooks/useLenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollToTop = () => {
  const pathname = usePathname();
  const { scrollToTop } = useScrollTo();
  
  useEffect(() => {
    // Small delay to ensure the page has rendered
    const timer = setTimeout(() => {
      scrollToTop({ duration: 0.8 });
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, scrollToTop])
  
  return null;
}

export default ScrollToTop;