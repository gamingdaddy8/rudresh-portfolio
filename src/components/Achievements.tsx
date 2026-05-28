"use client";

import { motion } from "framer-motion";

const achievements = [
  "Reduced industrial monitoring effort by 70% during internship at Siemens Goa.",
  "Led development of AI-powered physiotherapy rehabilitation platform using MediaPipe and Gemini AI.",
  "Built scalable NLP-based complaint management system with automated sentiment analysis and ticket routing.",
  "Selected for DIPEX 2025 State-Level Exhibition after clearing district-level evaluation.",
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="max-w-5xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-16 flex items-center gap-4">
          <span className="text-[#64ffda] font-mono text-xl">05.</span>
          Key Achievements
        </h2>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-white/10 rounded-xl p-6 hover:border-[#64ffda]/30 transition-all duration-300"
            >
              <p className="text-[#8892b0] leading-relaxed">
                <span className="text-[#64ffda] mr-3">▹</span>
                {achievement}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}