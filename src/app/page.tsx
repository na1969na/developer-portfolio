"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HomeSection from "@/components/home/HomeSection";
import AboutSection from "@/components/about/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/contact/ContactSection";
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
    <div className="flex flex-col h-screen overflow-y-auto font-[family-name:var(--font-poppins)]">
      {/* Header with Navbar */}
      <header className="w-full container mx-auto flex justify-center">
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </header>

      {/* Main Content Area */}
      <motion.div
        className="w-full container mx-auto flex justify-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="py-8"
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
