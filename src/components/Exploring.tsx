"use client";

import { motion } from "framer-motion";

const topics = [
  "Agentic AI",
  "LangChain",
  "RAG Systems",
  "Multi-Agent Workflows",
  "AI Orchestration",
  "LLM Tool Calling",
];

export default function Exploring() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-14 flex items-center gap-4">
          <span className="text-[#64ffda] font-mono text-xl">06.</span>
          Currently Exploring
        </h2>

        <div className="flex flex-wrap gap-4">
          {topics.map((topic) => (
            <div
              key={topic}
              className="px-5 py-3 rounded-full border border-[#64ffda]/30 bg-[#111111] text-[#64ffda] font-mono text-sm hover:bg-[#64ffda]/10 transition-all duration-300"
            >
              {topic}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}