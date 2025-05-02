"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";

const HomeSection = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-between h-[calc(100vh-6rem)] py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1 className="text-8xl font-bold tracking-tight">
          Full-stack Developer
        </h1>
      </div>
      <div className="space-y-6">
        <p className="text-3xl">
          Hello, I am Nana, a full-stack developer passionate about building
          intuitive and impactful applications.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <motion.button
            className="border-1 border-pink-200 rounded-2xl p-5 text-xl flex gap-2 hover:bg-pink-200 hover:text-black"
            whileTap={{ scale: 0.9, rotate: 3 }}
          >
            <a href="/files/Resume_NanaOkamoto.pdf" download>
              Download Resume
            </a>
            <ArrowDownToLine />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeSection;
