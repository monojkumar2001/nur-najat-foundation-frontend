"use client";

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

export function AosInit() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    AOS.init({
      duration: 1000,
      once: true,
      offset: 64,
      easing: "ease-out-cubic",
    });
    const t = window.setTimeout(() => {
      AOS.refresh();
    }, 200);
    return () => {
      window.clearTimeout(t);
    };
  }, []);

  return null;
}
