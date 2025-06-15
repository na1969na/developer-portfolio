"use client";

import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;
interface FlipLinkProps {
  children: string;
  href: string;
  className?: string;
}

const FlipLink = ({ children, href, className = "" }: FlipLinkProps) => {
  return (
    <div className="py-5">
      <motion.a
        initial="initial"
        whileHover="hovered"
        href={href}
        className={`relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-5xl md:text-6xl hover:text-[#0abfcb] ${className}`}
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
    </div>
  );
};

export default FlipLink;
