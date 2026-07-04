"use client";

import { useEffect, useRef } from "react";
import renderMathInElement from "katex/contrib/auto-render";
import "katex/dist/katex.min.css";

const KATEX_OPTIONS = {
  delimiters: [
    { left: "$$", right: "$$", display: true },
    { left: "\\[", right: "\\]", display: true },
    { left: "$", right: "$", display: false },
    { left: "\\(", right: "\\)", display: false }
  ],
  throwOnError: false,
  errorColor: "#cc0000",
  ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
  strict: "warn",
  macros: { "\\E": "\\mathbb{E}" },
};

export default function LatexRenderer({ html }: { html: string }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      renderMathInElement(ref.current, KATEX_OPTIONS as any);
    }
  }, [html]);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
}