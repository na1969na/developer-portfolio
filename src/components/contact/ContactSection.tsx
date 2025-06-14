"use client";

import { motion } from "framer-motion";
import FlipLink from "./RevealLinks";

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
        <h1 className="text-5xl font-black text-center">CONTACT</h1>
        <div className="text-center">
          <p className="text-lg">
            I am always open to new opportunities and collaborations. Feel free
            to reach out through any of the channels below.
          </p>
        </div>
      </div>
      <div className="text-center text-3xl">
        <hr />
        <h2 className="pt-5">EMAIL</h2>
        <FlipLink href="mailto:nanaokamoto.tech@gmail.com">
          nanaokamoto.tech@gmail.com
        </FlipLink>
        <hr />
        <h2 className="pt-5">LINKEDIN</h2>
        <FlipLink href="https://www.linkedin.com/in/nana-okamoto/">
          /nana-okamoto
        </FlipLink>
        <hr />
        <h2 className="pt-5">GITHUB</h2>
        <FlipLink href="https://github.com/na1969na">/na1969na</FlipLink>
        <hr />
        <h2 className="pt-5">DEV.TO</h2>
        <FlipLink href="https://dev.to/na1969na">/na1969na</FlipLink>
      </div>
    </motion.div>
  );
};

export default ContactSection;
