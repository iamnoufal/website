"use client";

import { useEffect } from "react";
import Prism from "prismjs";

// Prevent Prism from automatically highlighting on DOMContentLoaded
Prism.manual = true;

// Theme
import "prismjs/themes/prism-tomorrow.css";

// Languages
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-sql";

export default function PrismLoader() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return null;
}
