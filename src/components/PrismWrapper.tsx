"use client"
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";

const PrismWrapper = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return null;
}

export default PrismWrapper;