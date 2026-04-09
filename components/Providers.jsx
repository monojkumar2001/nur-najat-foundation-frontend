"use client";

import { MotionConfig } from "framer-motion";

export function Providers({ children }) {
  return (
    <MotionConfig reducedMotion="user">{children}</MotionConfig>
  );
}
