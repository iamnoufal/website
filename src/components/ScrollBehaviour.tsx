"use client";

import ReactLenis, { useLenis } from "lenis/react";

export default function ScrollBehaviour ({ children }: { children: React.ReactNode }) {
  const lenis = useLenis();
  return <ReactLenis root>{children}</ReactLenis>;
};