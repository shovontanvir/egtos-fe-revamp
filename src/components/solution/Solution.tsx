"use client";

import React from "react";
import Badge from "../Badge";
import Image from "next/image";

const IMAGES = {
  main: "/smaincard.svg",
  left: "/s1card.svg",
  right: "/s2card.svg",
  bottom: "/s3card.svg",
};


export default function SolutionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-40 [background-size:48px_48px] [background-image:linear-gradient(to_right,rgba(2,132,199,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,132,199,0.08)_1px,transparent_1px)]" />
        <div className="absolute inset-0 opacity-35 [background-size:120px_100%] [background-image:linear-gradient(to_right,rgba(2,132,199,0.06)_1px,transparent_1px)]" />
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto ">
        <div className="flex justify-center">
          <Badge
            classname="border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.18)_40%,rgba(255,255,255,0.08)_100%),rgba(244,247,249,0.22)] text-slate-700 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl ring-1 ring-white/30 mb-4"
            title="A Private Network for Trading Expertise and Capacity"
            icon={
              <span className="p-1.25 bg-primary-400 rounded-full animate-pingk">
                <span className="block w-1.5 h-1.5 rounded-full bg-primary-800 animate-ping" />
              </span>
            }
          />
        </div>
        
        <div className="mx-auto mt-6 max-w-3xl text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
            The egtos Solution
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-600">
            egtos enables companies to create and participate in private trading networks where
            excess capacity, skills, and expertise can be exchanged using tokens.
          </p>
        </div>

        <div className="relative mx-auto mt-14 h-[700px] w-full max-w-5xl">
          <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 md:w-[64%]">
            {/* MAIN IMAGE */}
            <div className="relative w-full">
              <div className="relative h-[280px] md:h-[350px] w-full overflow-hidden rounded-2xl">
                <Image src={IMAGES.main} alt="Solution visual" fill priority className="object-contain" />
              </div>
            </div>

            {/* LEFT IMAGE */}
            <div className="pointer-events-none absolute -left-10 top-[-100] hidden md:block">
              <div className="relative h-44 w-60 overflow-hidden rounded-2xl">
                <Image src={IMAGES.left} alt="Solution visual" fill className="object-contain" />
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="pointer-events-none absolute -right-28 top-14 hidden md:block">
              <div className="relative h-56 w-80 overflow-hidden rounded-2xl">
                <Image src={IMAGES.right} alt="Solution visual" fill className="object-contain" />
              </div>
            </div>

            {/* BOTTOM IMAGE */}
            <div className="pointer-events-none absolute -left-10 -bottom-32 hidden md:block">
              <div className="relative h-56 w-80 overflow-hidden rounded-2xl">
                <Image src={IMAGES.bottom} alt="Solution visual" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* LEFT CALLOUT GROUP */}
          <div className="absolute left-0 top-0 hidden md:block space-y-4">
            <Callout>Maintain governance, confidentiality, and compliance</Callout>
            <p className="text-sm font-light text-slate-600">
              Where collaboration comes first, <br />
              — not marketplace noise.
            </p>
          </div>

          {/* RIGHT TOP */}
          <div className="absolute right-10 top-24 hidden md:block">
            <Callout>Control who sees and accesses capacity</Callout>
          </div>

          {/* LEFT BOTTOM */}
          <div className="absolute left-[-80] bottom-60 hidden md:block">
            <Callout>Invite and accept trusted companies</Callout>
          </div>

          {/* RIGHT BOTTOM */}
          <div className="absolute right-30 bottom-20 hidden md:block">
            <Callout>Trade real expertise not generic resources</Callout>
          </div>

          {/* MOBILE CALLOUTS */}
          <div className="absolute left-0 right-0 bottom-0 md:hidden space-y-3">
            <Callout>Maintain governance, confidentiality, and compliance</Callout>
            <Callout>Control who sees and accesses capacity</Callout>
            <Callout>Invite and accept trusted companies</Callout>
            <Callout>Trade real expertise not generic resources</Callout>
          </div>
        </div>
      </div>
    </section>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-w-[340px] items-center gap-2 rounded-full border border-white/60 bg-white/60 px-3 py-2 text-xs text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.10)] backdrop-blur-xl">
      <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500/15">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
      </span>
      <span className="leading-snug">{children}</span>
    </div>
  );
}
