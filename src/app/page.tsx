"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden font-[family-name:var(--font-poppins)]">
      {/* Header with Navbar */}
      <header className="w-full container mx-auto flex justify-center">
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </header>

      {/* Main Content Area */}
      <motion.div
        className="flex-1 overflow-y-auto p-6 lg:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-[calc(100vh-6rem)]"
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
