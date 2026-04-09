"use client";

import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion";

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.page, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
