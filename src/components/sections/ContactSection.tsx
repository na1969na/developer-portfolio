"use client";

import { motion } from "framer-motion";
import RevealLinks from "../ui/RevealLinks";
import AnimatedHeading from "../ui/AnimatedHeading";
import Image from "next/image";

const ContactSection = () => {
  return (
    <motion.div
      className="space-y-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-3">
        <AnimatedHeading text="Contact" />
        <div>
          <p className="text-lg">
            I am always open to new opportunities and collaborations.
          </p>
          <p className="text-lg">
            Feel free to reach out through any of the channels below.
          </p>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <RevealLinks />
        <motion.div
          whileHover={{ scale: 1.1, rotate: -45 }}
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
          <Image
            src="/click.png"
            alt="Contact"
            height={100}
            width={100}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
