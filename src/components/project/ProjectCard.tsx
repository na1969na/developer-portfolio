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
      className="relative cursor-pointer h-[300px] md:h-[400px] lg:h-[calc(100vh-20rem)] group transition-all duration-300"
      onClick={onClick}
    >
      <div className="relative overflow-hidden backdrop-blur-sm h-full">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url('${project.image}')` }}
        />
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30" />
        <div className="absolute inset-0 flex items-end justify-center p-4 md:p-6">
          <h3 className="text-white text-lg md:text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
