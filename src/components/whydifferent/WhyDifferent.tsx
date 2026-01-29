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
                <span className="block h-1.5 w-1.5 rounded-full bg-primary-800 animate-ping" />
              </span>
            }
          />
        </div>

        <div className="mx-auto mt-6 max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
            Why egtos Is Different
          </h2>
          <p className="mt-4 text-sm text-slate-600 md:text-base">
            egtos enables companies to create and participate in private trading networks where excess
            capacity, skills, and expertise can be exchanged using tokens.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-12">
          {/* MAIN */}
          <div className="md:col-span-8">
            <div className="relative h-[320px] w-full overflow-hidden rounded-3xl bg-white/35 ring-1 ring-white/50 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:h-[360px]">
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
            <div className="h-[320px] md:h-[360px] w-full overflow-hidden rounded-3xl bg-white/35 ring-1 ring-white/50 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <div className="relative h-[70%] w-full">
                <Image
                  src="/wd1card.png"
                  alt="Card 1"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              <div className="h-[30%] px-6 py-5">
                <h3 className="text-lg font-semibold text-black md:text-xl">
                  Human-Centric Resilience
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/85">
                  Reduce the need for mass layoffs by redeploying talent where it’s needed most.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="md:col-span-4">
            <div className="h-[320px] md:h-[360px] w-full overflow-hidden rounded-3xl bg-white/35 ring-1 ring-white/50 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <div className="relative h-[70%] w-full">
                <Image
                  src="/wd2card.png"
                  alt="Card 2"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              <div className="h-[30%] px-6 py-5 flex flex-col justify-end">
                <h3 className="text-lg font-semibold text-black md:text-xl">
                  Trusted Networks
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/85">
                  Operate inside pre-cleared private networks designed for control, compliance, and quality.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="md:col-span-4">
            <div className="h-[320px] md:h-[360px] w-full overflow-hidden rounded-3xl bg-white/35 ring-1 ring-white/50 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <div className="relative h-[70%] w-full">
                <Image
                  src="/wd3card.png"
                  alt="Card 3"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              <div className="h-[30%] px-6 py-5 flex flex-col justify-end">
                <h3 className="text-lg font-semibold text-black md:text-xl">
                  Tokenized Collaboration
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/85">
                  Exchange skills and capacity using tokens—making internal redeployment measurable and efficient.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="md:col-span-4">
            <div className="h-[320px] md:h-[360px] w-full overflow-hidden rounded-3xl bg-white/35 ring-1 ring-white/50 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <div className="relative h-[70%] w-full">
                <Image
                  src="/wd4card.png"
                  alt="Card 4"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              <div className="h-[30%] px-6 py-5 flex flex-col justify-end">
                <h3 className="text-lg font-semibold text-black md:text-xl">
                  Enterprise-Grade Assurance
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/85">
                  Built-in screening and governance so you can scale expertise without sacrificing standards.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
