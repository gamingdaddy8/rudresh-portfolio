"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI / ML",
    skills: [
      "PyTorch",
      "Transformers",
      "OpenCV",
      "MediaPipe",
      "HuggingFace",
      "GenAI",
      "NLP",
      "Computer Vision",
      "LLMs",
      "Prompt Engineering",
      "Embeddings",
      "RAG",
      "Vector Databases",
      "AI Agents",
      "Agentic AI",
    ],
  },

  {
    title: "Agentic AI & GenAI",
    skills: [
      "LangChain",
      "LlamaIndex",
      "AI Workflows",
      "Multi-Agent Systems",
      "Function Calling",
      "Tool Calling",
      "Context Management",
      "AI Orchestration",
      "Inference APIs",
      "Gemini API",
      "OpenAI APIs",
      "AI Automation",
      "Semantic Search",
      "Retrieval Pipelines",
    ],
  },

  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Flutter",
      "Tailwind CSS",
      "Streamlit",
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Responsive UI",
    ],
  },

  {
    title: "Backend & Databases",
    skills: [
      "FastAPI",
      "Node.js",
      "REST APIs",
      "SQLite",
      "Supabase",
      "MySQL",
      "PostgreSQL",
      "Authentication",
      "JWT",
      "API Integration",
      "Database Design",
      "Pandas",
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Vercel",
      "Render",
      "Linux",
      "Docker",
      "Google Colab",
      "Jupyter Notebook",
      "npm",
      "GitHub Actions",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-20 flex items-center gap-4">
          <span className="text-[#64ffda] font-mono text-xl">04.</span>
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-[#64ffda]/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#ccd6f6] mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-black border border-white/10 text-[#64ffda] text-sm font-mono hover:border-[#64ffda]/40 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}