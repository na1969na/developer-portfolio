"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const SnsList = () => {
  const snsLinks = [
    { id: "github", icon: <Github />, url: "https://github.com/na1969na" },
    {
      id: "linkedin",
      icon: <Linkedin />,
      url: "https://www.linkedin.com/in/nana-okamoto/",
    },
  ];

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
      {snsLinks.map((sns) => (
        <a
          key={sns.id}
          href={sns.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black bg-light-cream rounded-full p-3 transition-transform transform hover:scale-110"
        >
          {sns.icon}
        </a>
      ))}
    </motion.div>
  );
};

export default SnsList;
