"use client";

import type { AnchorHTMLAttributes } from "react";
import { usePageTransition } from "./TransitionProvider";

interface TransitionLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function TransitionLink({
  href,
  onClick,
  children,
  ...props
}: TransitionLinkProps) {
  const { navigateTo } = usePageTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow modifier-key clicks (open in new tab)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    // Allow external links and anchors to behave normally
    if (href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:")) return;

    e.preventDefault();

    // Call any existing onClick handler
    onClick?.(e);

    // Pass click coordinates for the animation origin
    navigateTo(href, e.clientX, e.clientY);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
