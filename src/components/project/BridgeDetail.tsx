"use client";

import { motion } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Check,
  UserRound,
  CalendarFold,
  MessageCircleWarning,
} from "lucide-react";
import Link from "next/link";
import KeyFeature from "./KeyFeature";
import Image from "next/image";

const technologies = [
  "React",
  "Node.js",
  "Express.js",
  "TypeScript",
  "MongoDB",
];

const BridgeDetail = ({ onClose, id }: { onClose: () => void; id: string }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 text-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        layoutId={`project-${id}`}
        className="relative w-[90%] max-w-full h-[90vh] bg-black rounded-2xl overflow-hidden border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 p-4 md:p-8 lg:p-12 flex flex-col overflow-y-auto">
          <motion.h2
            layoutId={`title-${id}`}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold"
          >
            BRIDGE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-2 md:mt-4 max-w-3xl flex flex-col text-sm md:text-base"
          >
            <span>Prevent Lonely Deaths - Stay Connected Daily.</span>
            <span>
              An app that promotes well-being through daily check-ins.
            </span>
            <span>Alerts emergency contacts when needed.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-4"
          >
            <div className="flex flex-wrap gap-2 md:gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 md:px-4 py-1 md:py-2 text-sm md:text-base bg-light-cream text-black font-semibold rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href="https://github.com/na1969na/bridge-app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight size={24} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center mt-8 rounded-lg"
          >
            <Image
              src="/bridge_1.png"
              alt="bridge"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
            <h3 className="text-2xl md:text-3xl font-semibold mt-8 mb-4">
              Story
            </h3>
            <div className="space-y-4 text-center max-w-3xl flex flex-col text-base md:text-lg">
              <span>
                In Japan, the rise in lonely deaths highlights the urgent need
                for stronger human connection. To address this, I developed
                Bridge, an app that ensures well-being through daily check-ins.
              </span>
              <span>
                By fostering a routine of engagement, Bridge helps users stay
                connected. If someone misses a check-in, the app alerts their
                emergency contacts, providing timely support.
              </span>
              <span>
                This app is especially helpful for elderly individuals living
                alone, busy professionals, and anyone at risk of isolation.
                Bridge is more than an app—it&apos;s a lifeline for those who
                need it most.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-semibold mb-16 text-center">
              Key Features
            </h3>
            <div className="mt-8 mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <KeyFeature
                icon={Check}
                title="Daily Check-in"
                description="Users check in once a day by clicking a button in the app, and the information is stored on the server."
                bgColor="bg-orange-300"
              />
              <KeyFeature
                icon={UserRound}
                title="User Information Management"
                description="Users can manage their personal details and emergency contacts information and set up notification preferences."
                bgColor="bg-blue-300"
              />
              <KeyFeature
                icon={CalendarFold}
                title="Calendar Visualization"
                description="Check-in dates are displayed on a calendar for easy tracking."
                bgColor="bg-purple-300"
              />
              <KeyFeature
                icon={MessageCircleWarning}
                title="Emergency Contact Alert"
                description="If someone misses a check-in, the app alerts their emergency contacts, providing timely support."
                bgColor="bg-red-300"
              />
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            onClick={onClose}
            className="absolute top-2 md:top-4 lg:top-8 right-2 md:right-4 lg:right-8 p-2 flex items-center gap-1 cursor-pointer hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} className="md:w-6 md:h-6" />
            <span className="text-base md:text-xl font-semibold underline">
              Close
            </span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BridgeDetail;
