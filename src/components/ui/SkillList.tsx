"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "Python", "Java", "Ruby", "C++"],
  },
  {
    title: "Technologies",
    skills: ["React", "Next.js", "Express", "Django", "Spring"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
];

const SkillList = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="space-y-5 w-full">
      <h2 className="text-3xl">Skills</h2>
      <div className="flex flex-col items-center w-full">
        {data.map((category, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="text-4xl relative group w-full"
          >
            <AnimatePresence>
              {hoveredIndex !== index && (
                <motion.h2
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer border-b p-4 w-full"
                >
                  {category.title}
                </motion.h2>
              )}

              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  {category.skills.join(" / ")}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillList;
