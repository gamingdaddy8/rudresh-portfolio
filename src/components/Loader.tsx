"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-[9999] pointer-events-none"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-[#64ffda] text-5xl font-bold font-mono"
      >
        RG
      </motion.h1>
    </motion.div>
  );
}