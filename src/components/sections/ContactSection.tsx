"use client";

import { motion } from "framer-motion";
import RevealLinks from "../ui/RevealLinks";
import AnimatedHeading from "../ui/AnimatedHeading";
import Image from "next/image";

const ContactSection = () => {
  return (
    <motion.div
      className="space-y-10 pt-10"
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
      <div className="flex items-center gap-16">
        <RevealLinks />
        <motion.div
          initial={{ rotate: 0 }}
          whileInView={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          viewport={{ once: false }}
        >
          <Image src="/moon.svg" alt="Contact" height={400} width={400} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
