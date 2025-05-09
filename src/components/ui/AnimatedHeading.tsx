"use client";

import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  text: string;
}

const AnimatedHeading = ({ text }: AnimatedHeadingProps) => {
  return (
    <motion.h1 initial="hidden" animate="visible">
      <div>
        <motion.span
          variants={{
            hidden: { opacity: 0, x: 0 },
            visible: {
              opacity: 1,
              x: -16,
              transition: { staggerChildren: 0.075, delayChildren: 0.25 },
            },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="text-4xl"
        >
          {text.split("").map((l, i) => (
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -16 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
      </div>
    </motion.h1>
  );
};

export default AnimatedHeading;
