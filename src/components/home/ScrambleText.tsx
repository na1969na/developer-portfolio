"use client";

import { useState, useEffect } from "react";

const ScrambleText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const finalText = text;

  useEffect(() => {
    let scrambleInterval: NodeJS.Timeout;
    let stopTimeout: NodeJS.Timeout;

    const startScramble = () => {
      scrambleInterval = setInterval(() => {
        if (currentIndex < finalText.length) {
          const scrambled = finalText
            .split("")
            .map((char, i) => {
              if (i < currentIndex) return char;
              if (i === currentIndex) {
                return randomChars[
                  Math.floor(Math.random() * randomChars.length)
                ];
              }
              return " ";
            })
            .join("");
          setDisplayText(scrambled);
        }
      }, 50);

      stopTimeout = setTimeout(() => {
        if (currentIndex < finalText.length) {
          setCurrentIndex((prev) => prev + 1);
        } else {
          setDisplayText(finalText);
          clearInterval(scrambleInterval);
        }
      }, 200);
    };

    startScramble();

    return () => {
      clearInterval(scrambleInterval);
      clearTimeout(stopTimeout);
    };
  }, [finalText, currentIndex]);

  return <span className={className}>{displayText}</span>;
};

export default ScrambleText;
