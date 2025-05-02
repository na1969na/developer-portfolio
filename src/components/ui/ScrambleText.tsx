"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { cn } from "@/lib/utils";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

gsap.registerPlugin(ScrambleTextPlugin);

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { textContent: "" },
        {
          textContent: text,
          duration: 5,
          scrambleText: {
            text: text,
            chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            speed: 0.6,
          },
          ease: "power2.inOut",
        }
      );
    }
  }, [text]);

  return (
    <div
      ref={textRef}
      className={cn("text-2xl", className)}
    ></div>
  );
};

export default ScrambleText;
