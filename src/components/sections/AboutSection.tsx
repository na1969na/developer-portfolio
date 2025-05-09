"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "../ui/AnimatedHeading";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "GeneL Inc.",
    period: "12/2024 - Present",
    description:
      "Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices.",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Mitsui E&S Systems Research Inc.",
    period: "04/2021 - 07/2024",
    description:
      "Developed and maintained full-stack applications using React, Node.js, and MongoDB.",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
];

const AboutSection = () => {
  return (
    <motion.div
      className="text-3xl py-8 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full space-y-10">
        <div className="text-center">
          <AnimatedHeading text="About" />
          <AnimatedHeading text="Me" />
        </div>
        <div>
          <h1 className="text-9xl font-black">Nana</h1>
          <h1 className="text-9xl font-black">Okamoto</h1>
          <div className="space-y-2 max-w-4xl ml-auto">
            <p>I&apos;m a full-stack developer with over 4 years experience.</p>
            <p>
              Born and raised in Japan, currently living in Vancouver, BC. I
              worked as a full-stack developer for over 4 years in a company.
            </p>
            <p>
              I am always open to and enjoy communicating with people from
              different backgrounds and cultures.
            </p>
            <p>
              I enjoy learning new technologies and tools, writing articles.
            </p>
          </div>
        </div>
        {/* <div className="grid md:grid-cols-2 gap-5">
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div> */}
      </div>

      <div className="flex gap-10 mt-20">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-6xl font-bold mb-6">{exp.period}</h2>
                  <h3 className="text-4xl font-bold mb-2">{exp.title}</h3>
                  <div className="flex items-center mt-1">
                    {exp.company}
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed">{exp.description}</p>
              <div className="flex gap-4 mt-4">
                {exp.skills.map((skill) => (
                  <div key={skill.name} className="relative w-8 h-8">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
