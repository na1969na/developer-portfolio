"use client";

import { motion } from "framer-motion";

const ProjectCard = ({
  project,
  onClick,
}: {
  project: (typeof projects)[0];
  onClick: () => void;
}) => {
  return (
    <motion.div
      layoutId={`project-${project.id}`}
      className="relative cursor-pointer h-[calc(100vh-20rem)]"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg bg-pink-500/20 backdrop-blur-sm h-full">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-8 h-8" />
          <div className="absolute top-0 right-0 w-8 h-8" />
          <div className="absolute bottom-0 left-0 w-8 h-8" />
          <div className="absolute bottom-0 right-0 w-8 h-8" />
        </div>

        <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
          <motion.h3
            layoutId={`title-${project.id}`}
            className="text-8xl font-bold text-center text-light-cream"
          >
            {project.title}
          </motion.h3>
          <div className="flex flex-wrap gap-3 mt-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-xl bg-red-500/20 text-red-300 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
