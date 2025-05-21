"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { GithubIcon, X } from "lucide-react";
import AnimatedHeading from "../ui/AnimatedHeading";

const projects = [
  {
    id: 1,
    title: "BRIDGE",
    description:
      "A full-featured e-commerce platform with user authentication, product management, and payment processing.",
    story:
      "Bridge is an app designed to prevent lonely deaths and ensure the well-being of individuals through daily check-ins. The app helps users stay connected and alerts emergency contacts if necessary.",
    image: "",
    githubLink: "https://github.com/na1969na/bridge-app",
    technologies: ["React", "Node.js", "Express.js", "TypeScript", "MongoDB"],
  },
  {
    id: 2,
    title: "App",
    description:
      "A collaborative task management application with real-time updates and team workspace.",
    image: "",
    githubLink: "#",
    technologies: ["React", "Firebase", "Redux", "Tailwind CSS"],
  },
];

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

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

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
            <AnimatedHeading text="Projects" />
            <p className="text-base">
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
          {selectedProject && (
            <ProjectDetail
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </motion.div>
  );
};

export default ProjectsSection;
