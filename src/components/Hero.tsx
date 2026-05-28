"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto w-full">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#64ffda] font-mono mb-5"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-[#ccd6f6]"
        >
          Rudresh Gawas.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-[#8892b0] mt-2"
        >
          I build AI-powered systems.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-3xl mt-6 text-[#8892b0] text-lg leading-relaxed"
        >
          Final-year Information Technology engineering student specializing in AI/ML,
          GenAI systems, Computer Vision, and Full Stack AI applications.
          Experienced in building healthcare AI platforms, industrial monitoring systems,
          and intelligent automation solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#projects"
            className="border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded hover:bg-[#64ffda]/10 transition-all duration-300"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="border border-white/10 text-[#ccd6f6] px-6 py-3 rounded hover:border-[#64ffda] hover:text-[#64ffda] transition-all duration-300"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}