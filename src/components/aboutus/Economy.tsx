"use client";

import React, { useRef } from "react";
import { useAboutAnimation } from "@/hooks/useAboutAnimation";
import Image from "next/image";

const designedFor = [
  "Corporates and multinational enterprises",
  "Consulting and professional service firms",
  "Innovation, transformation, and project-based organizations",
];

export default function About() {
  const scope = useRef<HTMLElement | null>(null);
  useAboutAnimation(scope);

  return (
    <section ref={scope} className="relative h-screen w-full overflow-hidden bg-white">
      <div className="video-wrapper absolute left-1/2 top-1/2 h-[72vh] w-[86vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem]">
        <video
          className="h-full w-full object-cover"
          src="/videos/About us_Built for the real economy.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          controls={false}
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 p-6 md:p-10">
          <div className="relative grid h-full grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="max-w-md space-y-4">
                <div className="rounded-2xl bg-white/20 p-4 text-white backdrop-blur-xl ring-1 ring-white/25">
                  <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
                    Built for the <br /> Real Economy
                  </h2>
                </div>

                <div className="rounded-2xl bg-white/15 px-4 py-3 text-white/80 backdrop-blur-xl ring-1 ring-white/20">
                  <p className="text-xs leading-relaxed md:text-sm">
                    From strategy and transformation to IT, operations, and niche
                    expertise egtos adapts to your ecosystem.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 md:flex md:items-end md:justify-end">
              <div className="w-full max-w-md rounded-2xl bg-white/15 p-5 text-white backdrop-blur-xl ring-1 ring-white/20">
                <div className=" font-semibold text-2xl text-white/90">
                  egtos is designed for:
                </div>

                <ul className="mt-4 text-white/75 md:text-sm">
                    {designedFor.map((text) => (
                    <li
                        key={text}
                        className="flex items-start gap-3 rounded-lg py-1"
                    >
                        <span className="shrink-0">
                            <Image src="/tick.svg" alt="" width={20} height={20} />
                        </span>

                        <span className="font-thin text-xs md:text-base leading-snug">
                            {text}
                        </span>
                    </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
