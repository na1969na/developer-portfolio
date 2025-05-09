"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={cn("text-2xl", className)}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default ScrambleText;
