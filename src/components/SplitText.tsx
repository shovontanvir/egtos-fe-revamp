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
  type?: "letter" | "word" | "line";
}

const SplitText: React.FC<SplitTextProps> = ({
  children,
  className = "",
  delay = 0,
  tag: Tag = "div",
  type = "letter",
}) => {
  const comp = useRef<HTMLDivElement>(null); // Reference to the container element
  const elementsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const elements = elementsRef.current.filter((l) => l !== null);
      if (elements.length === 0) return;

      if (type === "line") {
        // Group elements by their offsetTop to identify lines
        const lines: HTMLSpanElement[][] = [];
        let currentLine: HTMLSpanElement[] = [];
        let currentTop = -1;

        // Ensure elements are sorted by DOM order (should be by default from map)
        elements.forEach((el) => {
          if (el.offsetTop !== currentTop) {
            if (currentLine.length > 0) {
              lines.push(currentLine);
            }
            currentLine = [el];
            currentTop = el.offsetTop;
          } else {
            currentLine.push(el);
          }
        });
        if (currentLine.length > 0) lines.push(currentLine);

        // Animate each line as a group
        lines.forEach((line, index) => {
          gsap.fromTo(
            line,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: delay + index * 0.1, // Stagger lines
              ease: "power2.out",
              scrollTrigger: {
                trigger: comp.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
        return;
      }

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: type === "word" ? 0.05 : 0.02,
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
    { scope: comp, dependencies: [children, type] },
  );

  const words = children.split(" ");
  let elementIndex = 0;

  return (
    <Tag ref={comp} className={className}>
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap"
          style={
            type === "word" || type === "line"
              ? { opacity: 0 } // Hide initially to prevent FOUC
              : undefined
          }
          ref={
            type === "word" || type === "line"
              ? (el) => {
                  elementsRef.current[wordIndex] = el;
                }
              : undefined
          }
        >
          {word.split("").map((char, charIndex) => {
            if (type === "word" || type === "line") {
              return (
                <span key={charIndex} className="inline-block">
                  {char}
                </span>
              );
            }
            const currentIdx = elementIndex++;
            return (
              <span
                key={charIndex}
                ref={(el) => {
                  elementsRef.current[currentIdx] = el;
                }}
                className="letter inline-block"
                style={{ opacity: 0 }} // Hide initially to prevent FOUC
              >
                {char}
              </span>
            );
          })}
          {/* Add space after word unless it's the last word */}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
