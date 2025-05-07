"use client";

import { motion } from "framer-motion";

const RevealLinks = () => {
  return (
    <motion.section
      className="grid gap-6 md:gap-8 max-w-3xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FlipLink href="mailto:nanaokamoto.tech@gmail.com">Email</FlipLink>
      <FlipLink href="https://www.linkedin.com/in/nana-okamoto/">
        Linkedin
      </FlipLink>
      <FlipLink href="https://github.com/na1969na">Github</FlipLink>
      <FlipLink href="https://dev.to/na1969na">Dev.to</FlipLink>
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
