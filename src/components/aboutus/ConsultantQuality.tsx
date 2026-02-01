"use client";

import React from "react";
import Image from "next/image";
import Badge from "../Badge";

const ASSETS = {
  floatingProfile: "/cq1card.png", 
  indexScore: "/index.png",            
};

export default function ConsultantQuality() {
  return (
    <section className="relative w-full bg-[#F4F7F9]">
      <div className="">
        {/* <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-35 [background-size:48px_48px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]" />
          <div className="absolute inset-0 opacity-25 [background-size:120px_100%] [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
        </div> */}

        <div className="relative px-6 py-10 md:px-12 md:py-12">
          <div className="grid items-start gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="px-5 md:pl-20">
                <Badge
                classname="border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.18)_40%,rgba(255,255,255,0.08)_100%),rgba(244,247,249,0.22)] text-slate-700 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl ring-1 ring-white/30 mb-4 text-black mb-5"
                title="A Private Network for Trading Expertise and Capacity"
                icon={
                  <span className="relative inline-flex h-5 w-5 items-center justify-center">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-[#00D0BF]/35" />
                    <span className="absolute h-full w-full animate-pulse rounded-full bg-[#00D0BF]/20 blur-[1px]" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-[#00D0BF] shadow-[0_0_0_3px_rgba(0,208,191,0.18)]" />
                  </span>
                }
              />
              </div>

              <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-black md:text-5xl md:pl-20 md:text-left">
                Independent Consultant <br className="hidden md:block" />
                Screening &amp; Quality Assurance
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#4D5662] md:text-base md:pl-20">
                egtos applies a structured screening and clearance process for all independent consultants
                participating on the platform. As part of this process, egtos uses IndexScore®, a
                comprehensive candidate assessment score designed to support enterprise-grade quality,
                risk mitigation, and delivery confidence.
              </p>

              <div className="relative mt-8 px-1 md:pl-[26%]">
                <div
                  className="
                    relative overflow-hidden bg-white/5 ring-1 ring-white/10
                    rounded-[11.69px]
                    w-[380px] h-[242.67px]
                    md:w-[684px] md:h-[480px]
                  "
                >
                  <video
                    className="h-full w-full object-cover"
                    src="/videos/About us_independent consultant screening & quality assurance.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls={false}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div
                  className="
                    absolute -left-10 -top-16
                    w-[180px] h-[250px]
                    md:-left-10 md:-top-12
                    md:w-[450px] md:h-[350px]
                  "
                >
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image
                      src={ASSETS.floatingProfile}
                      alt="Consultant profile card"
                      fill
                      className="object-contain"
                      sizes="(min-width: 768px) 320px, 150px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="md:pt-100">
                <div className="w-full max-w-sm items-start text-left">
                  <div className="mb-5 overflow-hidden rounded-2xl">
                    <div className="relative h-62.5 w-full">
                      <Image
                        src={ASSETS.indexScore}
                        alt="Your Index Score"
                        fill
                        className="object-contain object-left"
                        sizes="(min-width: 768px) 320px, 90vw"
                      />
                    </div>
                  </div>

                  <p className="text-left text-sm leading-relaxed text-[#4D5662]">
                    IndexScore provides a standardized evaluation framework that goes beyond traditional
                    CV-based vetting, enabling organizations to engage external specialists with greater
                    assurance.
                  </p>

                  <button className="mt-5 inline-flex items-center justify-start rounded-full bg-[#00D0BF] px-5 py-2.5 text-sm font-semibold text-white">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* subtle inner highlight (like figma depth) */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
      </div>
    </section>
  );
}
