"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SplitTextAnimation: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  return (
    <div
      className={cn("overflow-hidden perspective-1000", className)}
      style={{
        perspective: "1000px",
        whiteSpace: "nowrap",
      }}
    >
      <motion.div
        initial={{
          scale: 2,
          opacity: 0,
          z: 100,
          rotateX: 45,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          z: 0,
          rotateX: 0,
        }}
        transition={{
          duration: 1.2,
          type: "spring",
          stiffness: 50,
          damping: 20,
          mass: 1.5,
        }}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default SplitTextAnimation;
