import { motion } from "framer-motion";

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <>
      {Array.from(text).map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
};

export default AnimatedText;
