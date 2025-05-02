"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ArrowDownToLine } from "lucide-react";

const DownloadButton: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 1 },
        {
          scale: 1.2,
          duration: 0.2,
          ease: "power1.out",
          yoyo: true,
          repeat: 1,
        }
      );
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="bg-pink-200 rounded-full p-7 text-xl flex gap-2 text-black font-semibold"
    >
      <a href="/files/Resume_NanaOkamoto.pdf" download>
        Download Resume
      </a>
      <ArrowDownToLine />
    </button>
  );
};

export default DownloadButton;
