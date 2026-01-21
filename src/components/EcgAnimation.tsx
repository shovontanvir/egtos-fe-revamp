"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const EcgAnimation = () => {
  const container = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const bubbleRef = useRef<SVGCircleElement>(null);

  useGSAP(() => {
    const path = pathRef.current;
    const bubble = bubbleRef.current;
    
    if (!path || !bubble) return;

    // Reset path dash styles in case they were set previously or if we want to ensure it's solid
    gsap.set(path, {
      strokeDasharray: "none",
      strokeDashoffset: 0
    });

    // Animate bubble along the path
    gsap.to(bubble, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        start: 0,
        end: 1,
      },
      duration: 2, // Faster speed
      repeat: -1,
      ease: "linear",
    });
  }, { scope: container });

  return (
    <div ref={container} className="w-full h-[100px] bg-black bg-opacity-90 relative overflow-hidden">
      <svg viewBox="0 0 500 100" className="w-full h-full">
        <path
          ref={pathRef}
          d="M0,50 L200,50 L210,30 L220,70 L230,10 L240,90 L250,50 L500,50" // Single PQRS wave
          stroke="#444" // Grey
          strokeWidth="1" // Thinner
          fill="none"
          className="opacity-50" 
        />
        <circle 
          ref={bubbleRef}
          r="3" // Slightly smaller "lighter" bubble
          fill="#ef4444" // Red-500
          className="drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" // Red glow
        />
      </svg>
    </div>
  );
};

export default EcgAnimation;
