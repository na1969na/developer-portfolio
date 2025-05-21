"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const RevealLinks = () => {
  return (
    <motion.section
      className="grid w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FlipLink href="mailto:nanaokamoto.tech@gmail.com">Email</FlipLink>
      <div className="flex items-center gap-20">
        <FlipLink href="https://www.linkedin.com/in/nana-okamoto/">
          Linkedin
        </FlipLink>
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: -30,
          }}
          transition={{
            y: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Image src="/click.png" alt="click" height={80} width={80} />
        </motion.div>
      </div>
      <div className="flex flex-col items-end gap-4 mt-8">
        <p className="text-lg">Check out my technical articles and code.</p>
        <div className="flex gap-4">
          <Image src="/noodle_fan.svg" alt="click" height={200} width={200} />
          <div className="flex flex-col items-end gap-4">
            <FlipLink href="https://github.com/na1969na">Github</FlipLink>
            <FlipLink href="https://dev.to/na1969na">Dev.to</FlipLink>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: string;
  href: string;
}

const FlipLink = ({ children, href }: FlipLinkProps) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-9xl hover:text-lime-400"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default RevealLinks;
