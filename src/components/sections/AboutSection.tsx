"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const AboutSection = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      description:
        "Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2020",
      description:
        "Developed and maintained full-stack applications using React, Node.js, and MongoDB.",
    },
    {
      title: "Junior Developer",
      company: "Web Creators",
      period: "2016 - 2018",
      description:
        "Collaborated on various web projects focusing on responsive design and frontend functionality.",
    },
  ];

  return (
    <motion.div
      className="space-y-8 pb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-4">
            <p className="text-lg">
              Born and raised in Japan, currently living in Vancouver, BC. I
              worked as a software engineer for over 4 years in a company.
            </p>
            <p className="text-lg">
              I am always open to and enjoy communicating with people from
              different backgrounds and cultures.
            </p>
            <p className="text-lg">
              I enjoy learning new technologies and tools, writing articles.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
              {/* <Image
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Profile"
                fill
                className="object-cover"
              /> */}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="card bg-base-200">
              <div className="card-body p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="card-title text-xl">{exp.title}</h3>
                    <div className="flex items-center text-sm opacity-70">
                      <BadgeCheck className="h-4 w-4 mr-1 text-primary" />
                      {exp.company}
                    </div>
                  </div>
                  <span className="badge badge-primary">{exp.period}</span>
                </div>
                <p className="mt-2 opacity-70">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
