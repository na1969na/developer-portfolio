"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface SidebarMenuProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const SidebarMenu = ({ activeSection, setActiveSection }: SidebarMenuProps) => {
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
    { id: "resume", label: "Resume" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (isDesktop) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isDesktop]);

  const handleMenuClick = (section: string) => {
    setActiveSection(section);
    if (!isDesktop) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 right-4 z-30 lg:hidden">
        <button className="btn">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Sidebar menu */}
      <motion.div
        className={cn(
          "fixed top-0 right-0 h-full z-20 bg-card text-stone-500 transition-all",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        initial={{ x: isDesktop ? 0 : "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col h-full py-12 px-6 w-72">
          <nav className="flex-1 flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={cn(
                  "justify-start gap-3 py-6 text-lg transition-all",
                  activeSection === item.id
                    ? "text-stone-50"
                    : "hover:text-stone-50"
                )}
                onClick={() =>
                  item.id === "resume"
                    ? window.open("https://docs.google.com/document/d/1AH9bwtW-rc9bxj8FZGTRkB8fRxEiR_Rs_85mffp004A/edit?usp=sharing", "_blank")
                    : handleMenuClick(item.id)
                }
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default SidebarMenu;
