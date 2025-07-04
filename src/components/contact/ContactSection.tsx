"use client";

import { motion } from "framer-motion";
import FlipLink from "./RevealLinks";

const ContactSection = () => {
  return (
    <motion.div
      className="space-y-10 pt-10 px-4 md:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-3 pt-10 md:pt-16 lg:pt-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-center">
          CONTACT
        </h1>
        <div className="text-center">
          <p className="text-base md:text-lg">
            I am always open to new opportunities and collaborations. Feel free
            to reach out through any of the channels below.
          </p>
        </div>
      </div>
      <div className="text-center text-xl md:text-2xl lg:text-3xl">
        <hr />
        <div className="hidden md:block">
          <FlipLink
            href="mailto:nanaokamoto.tech@gmail.com"
            className="whitespace-normal break-all"
          >
            EMAIL
          </FlipLink>
        </div>
        <a
          href="mailto:nanaokamoto.tech@gmail.com"
          className="md:hidden block py-5 text-xl font-bold hover:text-[#0abfcb]"
        >
          EMAIL
        </a>
        <hr />
        <div className="hidden md:block">
          <FlipLink href="https://www.linkedin.com/in/nana-okamoto/">
            LINKEDIN
          </FlipLink>
        </div>
        <a
          href="https://www.linkedin.com/in/nana-okamoto/"
          className="md:hidden block py-5 text-xl font-bold hover:text-[#0abfcb]"
        >
          LINKEDIN
        </a>
        <hr />
        <div className="hidden md:block">
          <FlipLink href="https://github.com/na1969na">GITHUB</FlipLink>
        </div>
        <a
          href="https://github.com/na1969na"
          className="md:hidden block py-5 text-xl font-bold hover:text-[#0abfcb]"
        >
          GITHUB
        </a>
        <hr />
        <div className="hidden md:block">
          <FlipLink href="https://dev.to/na1969na">DEV.TO</FlipLink>
        </div>
        <a
          href="https://dev.to/na1969na"
          className="md:hidden block py-5 text-xl font-bold hover:text-[#0abfcb]"
        >
          DEV.TO
        </a>
        <hr />
      </div>
    </motion.div>
  );
};

export default ContactSection;
