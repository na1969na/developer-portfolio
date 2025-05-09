"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

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

const Explosion = ({ x, y, id }: { x: number; y: number; id: number }) => {
  const dots = Array.from({ length: 30 }, (_, i) => i);

  return (
    <div className="fixed pointer-events-none z-50" style={{ left: x, top: y }}>
      {dots.map((i) => {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 150 + Math.random() * 350;

        return (
          <motion.div
            key={`${id}-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              width: 30,
              height: 30,
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
              backgroundColor: "#dfdcff",
              boxShadow: "0 0 10px #dfdcff",
            }}
            initial={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            animate={{
              x: Math.cos(angle) * velocity,
              y: Math.sin(angle) * velocity,
              opacity: 0,
            }}
            transition={{
              duration: 1.2 + Math.random() * 0.8,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
};

const HomeSection = () => {
  const [explosions, setExplosions] = useState<
    { x: number; y: number; id: number }[]
  >([]);
  const [explosionId, setExplosionId] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isAnimating) return;

    setIsAnimating(true);
    const x = e.clientX;
    const y = e.clientY;

    setExplosions((prev) => [...prev, { x, y, id: explosionId }]);
    setExplosionId((prev) => prev + 1);

    setTimeout(() => {
      setExplosions((prev) => prev.filter((exp) => exp.id !== explosionId));
      setIsAnimating(false);
    }, 2500);
  };

  return (
    <motion.div className="flex flex-col items-center justify-center h-[calc(100vh-6rem)] py-6 gap-2">
      {explosions.map((explosion) => (
        <Explosion
          key={explosion.id}
          x={explosion.x}
          y={explosion.y}
          id={explosion.id}
        />
      ))}
      <motion.h1 className="text-8xl whitespace-nowrap font-black text-center tracking-tight">
        <span className="text-[#dfdcff] cursor-pointer" onClick={handleClick}>
          <ScrambleText text="FULL-STACK" />
        </span>{" "}
        <ScrambleText text="DEVELOPER" />
      </motion.h1>
      <Image
        id="scramble-cursor"
        src="https://assets.codepen.io/16327/scramble-cursor.png"
        alt=""
        width={120}
        height={120}
        unoptimized
      />
      <motion.div className="flex flex-col items-center">
        <motion.p className="text-8xl whitespace-nowrap font-black text-center">
          <ScrambleText text="CREATING" />{" "}
          <span
            className="text-[#dfdcff] tracking-tight cursor-pointer"
            onClick={handleClick}
          >
            <ScrambleText text="SEAMLESS" />
          </span>
        </motion.p>
        <motion.p className="text-8xl whitespace-nowrap font-black text-center tracking-tight">
          <ScrambleText text="DIGITAL" /> <ScrambleText text="SOLUTIONS" />
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default HomeSection;

// <p>FrontEnd</p>
{
  /* <p>
TypeScript / JavaScript / React.js / Next.js / Anuglar.js /
Chakra UI / Tailwind CSS / shadcn / HTML / CSS
</p>
</div>
<div className="skills">
<p>BackEnd</p>
<p>
Node.js / C# / Express.js / ASP.NET / ASP.NET Core /
PostgreSQL / Prisma / Oracle / MongoDB
</p>
</div>
<div className="skills">
<p>Tools</p>
<p>Git / GitHub / GitLab / AWS</p> */
}
