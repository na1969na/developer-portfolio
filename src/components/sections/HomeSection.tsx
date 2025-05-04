"use client";

import { motion } from "framer-motion";
import ScrambleText from "../ui/ScrambleText";
import SplitTextAnimation from "../ui/SplitTextAnimation";
import DownloadButton from "../ui/DownloadButton";
import SnsList from "../ui/SnsList";

const HomeSection = () => {
  return (
    <motion.div
      className="flex flex-col justify-between h-[calc(100vh-6rem)] py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <SplitTextAnimation
          text="Full&#8205;-&#8205;stack&#8205; Developer&#8205;"
          className="text-8xl font-bold"
        />
      </div>
      <ScrambleText
        text="Hello, I am Nana Okamoto, a full-stack developer with over 4 years of experience. I specialize in building user-friendly web applications."
        className="text-3xl"
      />
      <div className="flex gap-6 items-center justify-center">
        <DownloadButton />
        <SnsList />
      </div>
    </motion.div>
  );
};

export default HomeSection;

// <p>FrontEnd</p>
{
  /* <p>
TypeScript / JavaScript / React.js / Next.js / Anuglar.js /
Chakra UI / Tailwind CSS / shadcn / HTML / CSS
</p>
</div>
<div className="skills">
<p>BackEnd</p>
<p>
Node.js / C# / Express.js / ASP.NET / ASP.NET Core /
PostgreSQL / Prisma / Oracle / MongoDB
</p>
</div>
<div className="skills">
<p>Tools</p>
<p>Git / GitHub / GitLab / AWS</p> */
}
