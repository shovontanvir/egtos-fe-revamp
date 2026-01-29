"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
}

const SplitText: React.FC<SplitTextProps> = ({
  children,
  className = "",
  delay = 0,
  tag: Tag = "div",
}) => {
  const comp = useRef<HTMLDivElement>(null); // Reference to the container element
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const letters = lettersRef.current.filter((l) => l !== null);
      if (letters.length === 0) return;

      gsap.fromTo(
        letters,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.02,
          delay: delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: comp.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: comp, dependencies: [children] },
  );

  const words = children.split(" ");
  let letterIndex = 0;

  return (
    <Tag ref={comp} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIndex) => {
            const currentLetterIdx = letterIndex++;
            return (
              <span
                key={charIndex}
                ref={(el) => {
                  lettersRef.current[currentLetterIdx] = el;
                }}
                className="letter inline-block"
              >
                {char}
              </span>
            );
          })}
          {/* Add space after word unless it's the last word */}
          {wordIndex < words.length - 1 && (
            <span className="letter inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
