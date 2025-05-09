"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";

const DownloadButton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex gap-4"
    >
      <button className="bg-pink-200 rounded-full p-7 text-xl flex gap-2 text-black font-semibold transition-transform transform hover:scale-105 hover:shadow-lg">
        <a href="/files/Resume_NanaOkamoto.pdf" download>
          Download Resume
        </a>
        <ArrowDownToLine />
      </button>
    </motion.div>
  );
};

export default DownloadButton;
