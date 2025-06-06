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
      className="relative cursor-pointer h-[calc(100vh-20rem)] group transition-all duration-300"
      onClick={onClick}
    >
      <div className="relative overflow-hidden backdrop-blur-sm h-full">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url('${project.image}')` }}
        />
        <div className="absolute inset-0" />
        <div className="absolute inset-0 flex items-end justify-center"></div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
