"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/type";

const ProjectCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => {
  return (
    <motion.div
      layoutId={`project-${project.id}`}
      className="relative cursor-pointer h-[calc(100vh-20rem)]"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg backdrop-blur-sm h-full bg-[url('/project_1.svg')] bg-cover bg-center transition-all duration-200 hover:brightness-125">
        <motion.div
          className="absolute inset-0"
          whileHover={{ opacity: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute top-0 left-0 w-8 h-8" />
          <div className="absolute top-0 right-0 w-8 h-8" />
          <div className="absolute bottom-0 left-0 w-8 h-8" />
          <div className="absolute bottom-0 right-0 w-8 h-8" />
        </motion.div>

        <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
          <motion.h3
            layoutId={`title-${project.id}`}
            className="text-8xl text-center text-light-cream scale-x-110"
          >
            {project.title}
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
