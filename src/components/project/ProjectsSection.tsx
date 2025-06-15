"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import ProjectCard from "./ProjectCard";
import BridgeDetail from "./BridgeDetail";
import { Project } from "@/types/type";

const projects: Project[] = [
  {
    id: "1",
    title: "BRIDGE",
    image: "bridge_image.svg",
  },
  // {
  //   id: "2",
  //   title: "Gatherly",
  //   image: "/project_4.svg",
  // },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const renderProjectDetail = () => {
    if (!selectedProject) return null;

    switch (selectedProject.id) {
      case "1":
        return (
          <BridgeDetail
            onClose={() => setSelectedProject(null)}
            id={selectedProject.id}
          />
        );
      case "2":
        return <div>App Detail Component</div>;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="text-xl md:text-2xl lg:text-3xl px-4 sm:px-6 md:px-8 lg:px-12 pt-6 md:pt-8 lg:pt-12 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <LayoutGroup>
        <div className="h-full flex flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mt-8 md:mt-12 lg:mt-16 mb-6 md:mb-8 lg:mb-10 px-2 sm:px-4">
            projects/
          </h1>

          <div className="flex gap-8 md:gap-12 lg:gap-18 flex-col px-2 sm:px-4">
            {projects.map((project) => (
              <div key={project.id}>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4">
                  {project.title}
                </h2>
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedProject && renderProjectDetail()}
        </AnimatePresence>
      </LayoutGroup>
    </motion.div>
  );
};

export default ProjectsSection;
