"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "@/types/type";

const experiences: Experience[] = [
  {
    title: "Full-stack developer",
    company: "GeneL Inc.",
    period: "December 2024 - Present",
    description: [
      "Developed and maintained both frontend and backend functionalities using Ruby on Rails and JavaScript for a leading Conversion Rate Optimization (CRO) tool.",
      "Designed user interfaces and implemented interactive features to enhance usability and user engagement.",
      "Utilized test-driven development (TDD) to create reliable and maintainable codebases.",
    ],
    skills: ["Ruby on Rails", "JavaScript", "MySQL"],
  },
  {
    title: "Full-stack developer",
    company: "Mitsui E&S Systems Research Inc.",
    period: "April 2021 - July 2024",
    description: [
      "Designed and implemented a scalable and adaptable application architecture that supported multiple business units without requiring system changes.",
      "Improved code quality and developer efficiency by conducting thorough code reviews, documenting standards, and adopting TypeScript for enhanced type safety.",
      "Optimized system performance and reliability through efficient API integration, database query tuning, modular development, and comprehensive testing with 95% coverage.",
    ],
    skills: [
      "React",
      "Next.js",
      "Angular.js",
      "TypeScript",
      ".NET",
      "C#",
      "PostgreSQL",
      "MongoDB",
    ],
  },
];

const AboutSection = () => {
  return (
    <div className="text-3xl pt-20 w-full relative min-h-screen overflow-y-auto">
      <div className="w-full space-y-10">
        <h1 className="text-center">About Me</h1>

        <div className="flex justify-center my-15">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-64 h-64 overflow-hidden"
          >
            <Image
              src="/profile_image.png"
              alt="Nana Okamoto"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        <div className="flex flex-col items-center mt-20">
          <motion.h1
            className="font-black whitespace-nowrap"
            initial={{ y: 100, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              scale: {
                duration: 0.8,
                ease: "easeOut",
              },
            }}
            style={{ fontSize: "8rem" }}
          >
            Nana Okamoto
          </motion.h1>

          <div className="text-5xl space-y-2 w-full mt-15">
            <p className="tracking-wider leading-tight">
              <span className="text-light-pink">Full-stack developer</span> with{" "}
              <span className="relative">
                4+ years
                <svg
                  viewBox="0 0 286 73"
                  fill="none"
                  className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{
                      duration: 1.25,
                      ease: "easeInOut",
                    }}
                    d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                    stroke="#fec5fb"
                    strokeWidth="3"
                  />
                </svg>
              </span>{" "}
              of experience in enterprise application development.
            </p>
            <p className="tracking-wider leading-tight">
              Based in{" "}
              <span className="bg-light-pink text-black px-4 py-1 rounded-full inline-block font-semibold">
                Vancouver, BC
              </span>
              , focusing on building scalable and efficient solutions.
            </p>
            <p className="tracking-wider leading-tight">
              Passionate about{" "}
              <span className="text-light-blue">
                {"{"}
                {"continuous learning".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20, rotate: -10 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    viewport={{ once: false }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                {"}"}
              </span>{" "}
              and{" "}
              <span className="text-light-blue whitespace-nowrap">
                {"{"}
                {"collaborating with teams".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20, rotate: -10 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05 + 1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: false }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                {"}"}
              </span>{" "}
              to drive impactful results.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <motion.div
          initial={{ y: 0 }}
          whileInView={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          viewport={{ once: false }}
        >
          <Image src="/block.svg" alt="Asterisk" width={200} height={200} />
        </motion.div>
      </div>

      <div>
        <h2 className="mb-5">Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 text-3xl p-6 border border-light-cream rounded-2xl"
            >
              <h3 className="font-semibold">
                {exp.title} | {exp.company}
              </h3>
              <p className="text-xl opacity-70">{exp.period}</p>
              <ul className="text-xl opacity-70 list-disc pl-6">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-light-pink text-xl px-3 py-2 rounded-full text-black font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
