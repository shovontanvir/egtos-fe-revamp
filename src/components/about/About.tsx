"use client";

import React, { useRef } from "react";
import { useAboutAnimation } from "@/hooks/useAboutAnimation";
import Image from "next/image";

const bullets = [
  "Excess capacity during market fluctuations",
  "Rising costs of external consulting",
  "Slow access to specialized expertise",
];

const About = () => {
  const scope = useRef<HTMLElement>(null);

  useAboutAnimation(scope);

  return (
    <section
      ref={scope}
      className="relative w-full bg-white z-0"
      style={{ minHeight: "600vh", marginBottom: "-100vh" }}
    >
      <div className="video-wrapper sticky top-0 h-screen flex items-center justify-center z-0">
        <div className="relative w-[90vw] h-[90vh] rounded-[2rem] overflow-hidden">
          <video
            className="h-full w-full object-cover"
            src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>
      <div
        className="text-content relative z-10 pointer-events-none"
        style={{ marginTop: "100vh" }}
      >
        <div className="min-h-screen flex items-center justify-center p-8 md:p-12">
          <div className="pointer-events-auto text-white w-full max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="md:w-1/2">
                <div className="w-full max-w-2xl">
                  <div className="w-full bg-[#575757]/40 backdrop-blur-md rounded-2xl p-4 text-left">
                    <h1 className="text-3xl md:text-5xl font-bold">
                      The Problem We Solve
                    </h1>
                  </div>

                  <div className="w-full bg-[#575757]/40 backdrop-blur-md rounded-2xl px-4 py-2 mt-4 text-left">
                    <h3 className="text-2xl md:text-3xl font-medium mt-2">
                      Modern organizations face three structural challenges:
                    </h3>

                    <p className="my-4 text-sm md:text-base font-thin">
                      Traditional solutions layoffs, outsourcing, or rigid
                      vendor models create long-term risk, knowledge loss, and
                      inefficiency. <br />
                      <br />
                      egtos replaces these trade-offs with a smarter system.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 bg-[#575757]/40 backdrop-blur-md rounded-2xl px-4 py-3 text-left">
                <ul className="">
                  {bullets.map((text) => (
                    <li
                      key={text}
                      className="flex items-start gap-3 rounded-lg px-3 py-2"
                    >
                      <span className="shrink-0 mt-0.5">
                        <Image src="/tick.svg" alt="" width={20} height={20} />
                      </span>

                      <span className="font-thin text-sm md:text-base leading-snug">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
