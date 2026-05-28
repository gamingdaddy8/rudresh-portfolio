"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function AIAssistant() {

  const [isOpen, setIsOpen] = useState(false);

  const [message, setMessage] = useState(
    "Hi — I can guide you through the portfolio. What would you like to explore?"
  );

  
  useEffect(() => {

    const timeout = setTimeout(() => {

      const sections = [
        {
          id: "projects",
          message: "These are my flagship AI and GenAI systems.",
        },

        {
          id: "experience",
          message: "This section covers my internship experience at Siemens Goa.",
        },

        {
          id: "skills",
          message: "These are the technologies I use to build AI systems.",
        },

        {
          id: "contact",
          message: "Feel free to connect for AI and GenAI opportunities.",
        },
      ];

      const observer = new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              const matchedSection = sections.find(
                (section) => section.id === entry.target.id
              );

              if (matchedSection) {
                setMessage(matchedSection.message);
              }

            }

          });

        },
        {
          threshold: 0.2,
        }
      );

      sections.forEach((section) => {

        const element = document.getElementById(section.id);

        if (element) {
          observer.observe(element);
        }

      });

    }, 500);

    return () => clearTimeout(timeout);

  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[9999]">

      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="relative"
      >

        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="mb-4 w-[300px] rounded-2xl border border-[#64ffda]/20 bg-black/70 backdrop-blur-xl p-5 shadow-2xl"
            >

              <p className="text-[#64ffda] font-mono text-sm mb-3">
                AI Portfolio Assistant
              </p>

              <p className="text-[#ccd6f6] text-sm leading-relaxed mb-5 transition-all duration-300">
                {message}
              </p>

              
              <div className="flex flex-col gap-3">

                <button
                  onClick={() => {

                    setMessage("Showing featured AI systems...");

                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });

                  }}
                  className="text-left px-4 py-3 rounded-xl bg-[#111111] border border-white/10 hover:border-[#64ffda]/40 hover:text-[#64ffda] transition-all duration-300 text-sm"
                >
                  Explore AI Projects
                </button>

                <button
                  onClick={() => {

                    setMessage("Opening internship experience section...");

                    document
                      .getElementById("experience")
                      ?.scrollIntoView({ behavior: "smooth" });

                  }}
                  className="text-left px-4 py-3 rounded-xl bg-[#111111] border border-white/10 hover:border-[#64ffda]/40 hover:text-[#64ffda] transition-all duration-300 text-sm"
                >
                  View Internship Experience
                </button>

                <button
                  onClick={() => {

                    setMessage("Loading technical stack...");

                    document
                      .getElementById("skills")
                      ?.scrollIntoView({ behavior: "smooth" });

                  }}
                  className="text-left px-4 py-3 rounded-xl bg-[#111111] border border-white/10 hover:border-[#64ffda]/40 hover:text-[#64ffda] transition-all duration-300 text-sm"
                >
                  See Technical Skills
                </button>

                <button
                  onClick={() => {

                    setMessage("Opening resume...");

                    window.open("/resume.pdf");

                  }}
                  className="text-left px-4 py-3 rounded-xl bg-[#111111] border border-white/10 hover:border-[#64ffda]/40 hover:text-[#64ffda] transition-all duration-300 text-sm"
                >
                  Download Resume
                </button>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className="relative cursor-pointer"
        >

          
          <div className="absolute inset-0 bg-[#64ffda]/20 blur-2xl rounded-full"></div>

          
          <div className="relative w-24 h-24 rounded-full border border-[#64ffda]/30 bg-[#111111] flex items-center justify-center shadow-2xl">

            <motion.div
              animate={{
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="text-4xl"
            >
              🧑‍💻
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}