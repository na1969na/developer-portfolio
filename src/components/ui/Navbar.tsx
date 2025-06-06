"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
        <button className="btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
          "fixed top-0 right-0 h-full z-20 bg-card/95 backdrop-blur-sm",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col h-full py-12 px-6 w-64">
          <nav className="flex-1 flex flex-col gap-2">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                className={cn(
                  "justify-start gap-3 py-3 text-base transition-all relative group overflow-hidden h-12",
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
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-purple-500"
                    layoutId="activeSectionMobile"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
