"use client";

import React from "react";
import Badge from "../Badge";
import Image from "next/image";

export default function WhyDifferentSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-40 bg-size-[48px_48px] bg-[linear-gradient(to_right,rgba(2,132,199,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,132,199,0.08)_1px,transparent_1px)]" />
        <div className="absolute inset-0 opacity-35 [background-size:120px_100%] [background-image:linear-gradient(to_right,rgba(2,132,199,0.06)_1px,transparent_1px)]" />
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
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
            Why egtos Is Different
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-600">

            egtos enables companies to create and participate in private trading networks where
            excess capacity, skills, and expertise can be exchanged using tokens.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-12">
           <div className="md:col-span-8">
            <div className="relative h-[320px] md:h-[360px] w-full overflow-hidden rounded-3xl bg-white/35 ring-1 ring-white/50 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <Image
                src="/wdmaincard.png"
                alt="Why different main"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="relative h-[320px] md:h-[360px] w-full overflow-hidden rounded-3xl bg-white/35 ring-1 ring-white/50 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <Image
                src="/wd1card.png"
                alt="Why different card"
                fill
                className="object-cover"
              />
            </div>
          </div>

          
          <div className="md:col-span-4">
            <div className="relative h-[320px] md:h-[360px] w-full overflow-hidden rounded-3xl bg-white/35 ring-1 ring-white/50 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <Image
                src="/wd2card.png"
                alt="Why different card"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="relative h-[320px] md:h-[360px] w-full overflow-hidden rounded-3xl bg-white/35 ring-1 ring-white/50 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <Image
                src="/wd3card.png"
                alt="Why different card"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="relative h-[320px] md:h-[360px] w-full overflow-hidden rounded-3xl bg-white/35 ring-1 ring-white/50 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
                <Image  
                  src="/wd4card.png"
                  alt="Why different card"
                  fill
                  className="object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
