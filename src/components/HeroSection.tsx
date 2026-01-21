"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);

  useGSAP(
    () => {
      // Intro Animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(textRef.current!.children, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      })
        .from(
          svgRef.current,
          {
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.5"
        )
        .from(
          ".scroll-indicator",
          {
            y: -20,
            opacity: 0,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          },
          "-=0.5"
        );

      // Scroll Animation (Parallax Text)
      gsap.to(textRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

        // Background SVG Animation (floating effect)
       gsap.to(svgRef.current, {
        y: 20,
        rotation: 5,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
       });

       // Motion Path Animation
       gsap.to(circleRef.current, {
         motionPath: {
           path: pathRef.current!,
           align: pathRef.current!,
           alignOrigin: [0.5, 0.5],
           autoRotate: true,
         },
         duration: 8,
         repeat: -1,
         ease: "power1.inOut",
         yoyo: true,
       });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white px-4 text-black dark:bg-black dark:text-white"
    >
      {/* Background SVG */}
      <svg
        ref={svgRef}
        className="absolute left-1/2 top-1/2 -z-10 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 opacity-20 dark:opacity-10"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path
          ref={pathRef}
          d="M20,50 Q50,20 80,50 T140,50"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          className="animate-pulse"
        />
        <circle
          ref={circleRef}
          cx="0"
          cy="0"
          r="3"
          fill="currentColor"
          className="text-blue-500 dark:text-blue-400"
        />
      </svg>

      {/* Hero Content */}
      <div ref={textRef} className="z-10 flex flex-col items-center text-center">
        <h1 className="overflow-hidden text-6xl font-bold tracking-tighter sm:text-8xl md:text-9xl">
          <span className="inline-block">Elevate</span> <br className="sm:hidden" />
          <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
            Digital
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg font-medium text-gray-600 dark:text-gray-400 sm:text-xl">
          Crafting high-performance digital experiences with precision and motion.
        </p>
        
        <div className="mt-10 flex gap-4">
             <button className="rounded-full bg-black px-8 py-3 text-white transition-transform hover:scale-105 dark:bg-white dark:text-black">
                Get Started
             </button>
              <button className="rounded-full border border-gray-200 px-8 py-3 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-900">
                Learn More
             </button>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs font-semibold uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </div>
    </section>
  );
}
