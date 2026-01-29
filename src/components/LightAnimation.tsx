"use client";
import React, { useRef, useState, useEffect } from "react";
import { useBannerAnimation } from "@/hooks/useBannerAnimation";
import Image from "next/image";
import Badge from "./Badge";
import { ArrowRight, Circle, CircleArrowRight } from "lucide-react";

const LightAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = "/banner-bg.svg";
    img.onload = () => setIsLoaded(true);
  }, []);

  useBannerAnimation(containerRef, isLoaded);
  return (
    <section
      ref={containerRef}
      className="relative w-full h-[50vh] md:h-screen xl:h-[140vh] bg-primary-900 overflow-hidden px-48 py-24"
    >
      <Image
        src="/bg-grid.png"
        alt="grid bg"
        className="absolute w-1/2 h-1/2 left-0 top-0"
        width={560}
        height={560}
      />

      {/* text content section */}
      <div className="w-3/4 pr-20">
        <Badge
          classname="border-white/30 bg-[linear-gradient(91deg,rgba(0,208,191,0.2)_0%,rgba(0,208,191,0)_100%),linear-gradient(90deg,rgba(0,0,0,0.24)_0%,rgba(0,0,0,0.08)_100%)] text-white mb-4"
          title="Reduce risk. Unlock value. Replace inefficiency with collaboration "
          icon={
            <span className="p-1.25 bg-primary-400 rounded-full animate-pingk">
              <span className="block w-1.5 h-1.5 rounded-full bg-primary-800 animate-ping"></span>
            </span>
          }
        />
        <h1 className="text-white">
          Turn Excess Capacity <br /> Into Strategic Advantage 
        </h1>
        <p className="text-gray-300 mt-4">
          egtos is a Swiss SaaS platform that enables companies to trade excess
          capacity, access real expertise, and build on-demand teams within
          trusted private networks.
        </p>

        <div className="flex items-center gap-1 my-4 font-inter">
          <button className="px-6 py-3.5 inline-flex items-center text-white font-medium gap-2 bg-primary-500 rounded-full">
            <CircleArrowRight size={20} />
            <span>Get Started</span>
          </button>
          <button className="px-6 py-3.5 inline-flex items-center text-primary-400 font-medium gap-2">
            <span>Request A Demo</span>
            <ArrowRight />
          </button>
        </div>
      </div>
      {/* animation trajectory */}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1278 700"
          className="relative w-full h-full overflow-visible z-10"
          preserveAspectRatio="xMidYMid slice"
        >
          <image
            href="/banner-bg.svg"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
          {/* Defining paths as elements allows GSAP to 'align' to them perfectly */}
          <path id="entry-path" d="M870,-200 L870,320" fill="none" />
          <path id="left-path" d="M870,320 L290,320 L280,700" fill="none" />
          <path
            id="right-path"
            d="M870,330 L985,330 L990, 400 L1000,700"
            fill="none"
          />

          {/* Moving flame images */}
          <image
            className="bubble bubble-l"
            href="/flame.svg"
            width="200"
            height="200"
            x="-15"
            y="-15"
          />
          <image
            className="bubble bubble-r"
            href="/flame.svg"
            width="200"
            height="200"
            x="-15"
            y="-15"
          />
        </svg>
      </div>
    </section>
  );
};

export default LightAnimation;
