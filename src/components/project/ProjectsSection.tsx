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
      className="text-3xl pt-12 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <LayoutGroup>
        <div className="h-full flex flex-col">
          <h1 className="text-5xl font-black mb-10">projects/</h1>

          <div className="flex gap-18 flex-col">
            {projects.map((project) => (
              <div key={project.id}>
                <h2 className="text-7xl font-bold mb-4">{project.title}</h2>
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
