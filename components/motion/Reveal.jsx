"use client";

import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion";

export function Reveal({
  children,
  className = "",
  delay = 0,
  amount = 0.12,
  y = 24,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: DURATION.section,
        delay,
        ease: EASE,
      }}
    >
      {children}
    </motion.div>
  );
}
