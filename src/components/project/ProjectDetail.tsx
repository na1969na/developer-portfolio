"use client";

import { motion } from "framer-motion";
import { GithubIcon, X } from "lucide-react";

const ProjectDetail = ({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      onClick={onClose}
    >
      <motion.div
        layoutId={`project-${project.id}`}
        className="relative w-full h-full bg-black/20 backdrop-blur-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 p-12 flex flex-col">
          <motion.h2
            layoutId={`title-${project.id}`}
            className="text-6xl font-bold"
          >
            {project.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl mt-8 max-w-3xl"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-xl bg-green-500/20 text-green-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-8 p-8 rounded-lg"
            style={{
              background:
                "radial-gradient(129% 99% at 112% 85%, rgb(180, 255, 183) 20%, rgb(108, 255, 116) 90%)",
            }}
          >
            <p className="text-black text-2xl">{project.story}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-6 mt-auto"
          >
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xl"
            >
              <GithubIcon size={24} />
              <span>GitHub</span>
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            onClick={onClose}
            className="absolute top-8 right-8 p-2"
          >
            <X size={32} />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;