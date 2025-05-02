"use client";

import { motion } from "framer-motion";
import ScrambleText from "../ui/ScrambleText";
import DownloadButton from "../ui/DownloadButton";

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
        <ScrambleText
          text="Full-stack Developer"
          className="text-8xl font-bold"
        />
      </div>
      <ScrambleText
        text="Hello, I am Nana, a full-stack developer passionate about building
          intuitive and impactful applications."
        className="text-3xl"
      />
      <div className="pt-4 flex flex-col sm:flex-row gap-4">
        <DownloadButton />
      </div>
    </motion.div>
  );
};

export default HomeSection;
