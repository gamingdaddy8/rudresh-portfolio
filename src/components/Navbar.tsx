"use client";

import { motion } from "framer-motion";

const navItems = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-[#64ffda] font-mono text-lg">
          Rudresh
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-[#8892b0]">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#64ffda] relative after:absolute after:w-0 after:h-[1px] after:bg-[#64ffda] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}