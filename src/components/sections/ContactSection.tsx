"use client";

import { motion } from "framer-motion";
import RevealLinks from "../ui/RevealLinks";

const ContactSection = () => {
  return (
    <div className="mb-12 md:mb-16 max-w-3xl">
      <motion.h1
        className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Let&apos;s Connect
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I am always open to new opportunities and collaborations. Feel free to
        reach out through any of the channels below.
      </motion.p>
      <RevealLinks />
    </div>
  );
};

export default ContactSection;
