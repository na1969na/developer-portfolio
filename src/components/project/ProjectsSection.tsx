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
    image: "",
  },
  {
    id: "2",
    title: "App",
    image: "",
  },
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
      className="text-3xl pt-12 w-full relative h-[calc(100vh-6rem)] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <LayoutGroup>
        <div className="h-full flex flex-col">
          <div className="space-y-1 mb-4">
            <h1 className="text-4xl">Projects</h1>
            <p className="text-xl">
              Here are some of the projects I have worked on.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
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
