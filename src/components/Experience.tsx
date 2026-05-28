"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-16 flex items-center gap-4">
          <span className="text-[#64ffda] font-mono text-xl">02.</span>
          Experience
        </h2>

        <div className="border-l border-white/10 pl-8 relative">
          <div className="absolute w-3 h-3 bg-[#64ffda] rounded-full -left-[6px] top-2"></div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-[#ccd6f6]">
              Software Developer Intern
            </h3>

            <p className="text-[#64ffda] mt-1">
              Siemens Goa
            </p>

            <p className="text-sm text-[#8892b0] mt-1 mb-6">
              July 2025 — August 2025
            </p>

            <div className="space-y-4 text-[#8892b0] leading-relaxed">
                <p>
                    ▹ Designed and deployed a real-time industrial production monitoring dashboard
                    integrating live server log data from 3 machine categories (AOI SAKI, MEK,
                    SPI SAKI), reducing manual monitoring effort by nearly 70%.
                </p>

                <p>
                    ▹ Engineered scalable Python-based data pipelines processing thousands of
                    machine-generated log files daily to surface live production status,
                    machine health analytics, FPY metrics, and model insights for shop-floor managers.
                </p>

                <p>
                    ▹ Developed a centralized monitoring interface enabling real-time tracking
                    across multiple production lines, improving operational visibility and
                    reducing response delays during production anomalies.
                </p>

                <p>
                    ▹ Built an internal web-based Component Lookup Tool used by manufacturing
                    teams to instantly retrieve component information via product IDs,
                    significantly reducing manual lookup time for time-sensitive components
                    with strict post-exposure handling windows.
                </p>

                <p>
                    ▹ Collaborated within industrial manufacturing environments to understand
                    production workflows, machine communication systems, and real-world
                    automation requirements in high-throughput PCB assembly operations.
                </p>

                <p>
                    ▹ Worked extensively with Python, Streamlit, SQLite, Pandas,
                    JavaScript, HTML, CSS, and real-time industrial data systems in
                    production-oriented engineering workflows.
                </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}