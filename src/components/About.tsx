"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12 flex items-center gap-4">
          <span className="text-[#64ffda] font-mono text-xl">01.</span>
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-[#8892b0] leading-relaxed">
            <p>
              Information Technology graduate specializing in building production-ready
                AI systems focused on GenAI, computer vision, intelligent automation,
                and full stack AI applications.
            </p>

            <p>
              My work focuses on AI/ML, GenAI systems, computer vision,
              industrial automation, and full stack AI applications.
            </p>

            <p>
              During my internship at Siemens Goa, I worked on real-time
              industrial monitoring dashboards and data processing systems
              used in manufacturing environments.
            </p>

            <p>
              I enjoy designing scalable AI systems that combine intelligent
              automation, modern UI/UX, and production-level backend engineering.
            </p>
          </div>

          <div className="border border-white/10 rounded-xl p-6 bg-[#111111] hover:border-[#64ffda]/40 transition-all duration-300">
            <h3 className="text-[#ccd6f6] text-xl font-semibold mb-5">
              Technologies I Work With
            </h3>

            <div className="grid grid-cols-2 gap-3 text-[#8892b0] font-mono text-sm">
              <p>▹ Python</p>
              <p>▹ FastAPI</p>
              <p>▹ PyTorch</p>
              <p>▹ React.js</p>
              <p>▹ Next.js</p>
              <p>▹ Flutter</p>
              <p>▹ OpenCV</p>
              <p>▹ MediaPipe</p>
              <p>▹ HuggingFace</p>
              <p>▹ Supabase</p>
              <p>▹ Streamlit</p>
              <p>▹ SQLite</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}