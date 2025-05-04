"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/utils";

gsap.registerPlugin(SplitText);

const SplitTextAnimation: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textContainerRef.current) {
      const split = new SplitText(textContainerRef.current, {
        type: "chars",
        charsClass: "char",
      });

      gsap.from(split.chars, {
        y: -100,
        opacity: 0,
        rotation: "random(-80, 80)",
        stagger: 0.1,
        duration: 1,
        ease: "back",
      });

      return () => {
        split.revert();
      };
    }
  }, []);

  return (
    <div
      ref={textContainerRef}
      className={cn("overflow-hidden", className)}
      style={{ whiteSpace: "nowrap" }}
    >
      {text}
    </div>
  );
};

export default SplitTextAnimation;
