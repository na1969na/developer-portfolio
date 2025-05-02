// "use client";

// import Hero from "@/components/sections/HeroSection";
// import Menu from "@/components/ui/Menu";

// export default function Home() {
//   return (
//     <div className="flex items-center justify-items-center min-h-screen font-[family-name:var(--font-poppins)]">
//       <Hero />
//       <Menu />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import SidebarMenu from "@/components/ui/SidebarMenu";

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
    <div className="flex h-screen overflow-hidden font-[family-name:var(--font-poppins)]">
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

      {/* Right Sidebar */}
      <div className="w-64">
        <SidebarMenu
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </div>
  );
}
