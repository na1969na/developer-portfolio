"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const menuItems = [
    { id: "home", label: "home." },
    { id: "about", label: "about." },
    { id: "projects", label: "projects." },
    { id: "contact", label: "contact." },
    { id: "resume", label: "resume." },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  const handleMenuClick = (section: string) => {
    if (section === "resume") {
      window.open("/files/Resume_NanaOkamoto.pdf", "_blank");
      return;
    }

    setActiveSection(section);

    if (!isDesktop) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed z-30 lg:hidden">
        <button className="pt-3" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="h-15 w-15" />
          ) : (
            <AlignJustify className="h-15 w-15" />
          )}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed z-20 bg-card/80 backdrop-blur-sm px-6 py-4 w-full justify-center">
        <div className="flex items-center gap-12">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              className={cn(
                "text-lg font-medium transition-colors relative group overflow-hidden h-8",
                activeSection === item.id
                  ? "text-stone-50"
                  : "text-stone-500 hover:text-stone-50"
              )}
              onClick={() =>
                item.id === "resume"
                  ? handleMenuClick(item.id)
                  : handleMenuClick(item.id)
              }
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="relative h-full"
                variants={{
                  initial: { y: 0 },
                  hover: { y: -30 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {item.label}
              </motion.div>
              <motion.div
                className="absolute top-0 left-0 h-full"
                variants={{
                  initial: { y: 30 },
                  hover: { y: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {item.label}
              </motion.div>
              {activeSection === item.id && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        className={cn(
          "fixed top-0 left-0 right-0 z-20 bg-black",
          isOpen ? "translate-y-0" : "translate-y-[-100%]"
        )}
        initial={{ y: "-100%" }}
        animate={{ y: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col min-h-screen min-w-screen py-12 px-6 w-64">
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                className={cn(
                  "text-xl font-medium transition-all relative group overflow-hidden h-12",
                  activeSection === item.id
                    ? "text-stone-50"
                    : "text-stone-500 hover:text-stone-50"
                )}
                onClick={() =>
                  item.id === "resume"
                    ? window.open(
                        "https://docs.google.com/document/d/1AH9bwtW-rc9bxj8FZGTRkB8fRxEiR_Rs_85mffp004A/edit?usp=sharing",
                        "_blank"
                      )
                    : handleMenuClick(item.id)
                }
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
