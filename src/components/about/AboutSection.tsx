"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "@/types/type";
import AnimatedText from "./AnimatedText";

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
    <div className="text-3xl pt-20 w-full relative">
      <div className="w-full">
        <h1 className="text-5xl font-black">about.</h1>
        <div className="flex gap-8 mb-15">
          <motion.h1 className="font-black flex flex-col justify-end pt-40 pb-20">
            <div className="text-[10rem] -mb-12 flex">
              <AnimatedText text="NANA" />
            </div>
            <div className="flex items-center gap-8">
              <div className="text-[10rem]">
                <AnimatedText text="OKAMOTO" />
              </div>
              <motion.div
                className="w-48 h-48 overflow-hidden"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: "easeOut",
                }}
              >
                <Image
                  src="/profile_image.png"
                  alt="Nana Okamoto"
                  width={250}
                  height={390}
                  className="object-cover object-top w-full h-full"
                  priority
                />
              </motion.div>
            </div>
          </motion.h1>
        </div>
        <div className="text-5xl space-y-2 w-full mt-15">
          <p className="tracking-wider leading-tight">
            <span className="text-pastel-blue">Full-stack developer</span> with{" "}
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
                  stroke="#c3ffe2"
                  strokeWidth="3"
                />
              </svg>
            </span>{" "}
            of experience in enterprise application development.
          </p>
          <p className="tracking-wider leading-tight">
            Based in{" "}
            <span className="bg-pastel-blue text-black px-4 py-1 rounded-full inline-block font-semibold">
              Vancouver, BC
            </span>
            , focusing on building scalable and efficient solutions.
          </p>
          <p className="tracking-wider leading-tight">
            Passionate about{" "}
            <span className="text-pastel-blue">
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
            <span className="text-pastel-blue whitespace-nowrap">
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

      <hr className="my-16" />

      <div>
        <h2 className="my-16 text-5xl font-black">experience.</h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: false }}
              className="flex flex-col gap-4 text-3xl p-6 border border-light-cream rounded-2xl"
            >
              <h3 className="font-semibold">
                {exp.title} | {exp.company}
              </h3>
              <p className="text-xl opacity-70">{exp.period}</p>
              <ul className="text-xl opacity-70 list-disc pl-6">
                {exp.description.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.3,
                      ease: "easeOut",
                    }}
                    viewport={{ once: false }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + 0.5,
                      ease: "easeOut",
                    }}
                    viewport={{ once: false }}
                    className="bg-pastel-blue text-xl px-3 py-2 rounded-full text-black font-semibold"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
