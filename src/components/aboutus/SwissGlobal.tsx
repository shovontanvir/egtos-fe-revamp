"use client";

import React from "react";
import Image from "next/image";

const bullets = ["Trust", "Precision", "Neutrality", "Long-term thinking"];

const IMAGES = {
  tick: "/tick.svg",
  swissflag: "/swissflag.png",
  lock: "/lock.png",
};


function Pill({
  icon,
  title,
  subtitle,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div
      className={[
        "inline-flex items-center gap-3 rounded-xl",
        "bg-black/40 backdrop-blur-xl ring-1 ring-white/15",
        "px-10 py-2 shadow-[0_18px_50px_rgba(0,0,0,0.35)]",
        "text-left",
        className,
      ].join(" ")}
    >
      {/* icon */}
      <div className="shrink-0 flex items-center justify-center">
        {icon}
      </div>

      {/* text */}
      <div className="min-w-0 leading-tight text-left">
        <div className="text-xl font-semibold text-white">{title}</div>
        <div className="text-[14px] text-white/70">{subtitle}</div>
      </div>
    </div>
  );
}

export default function SwissPrecisionSection() {
  return (
    <section className="relative w-full bg-[#F6F9FB] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-12">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="order-1 md:order-2 md:col-span-7 md:flex md:justify-end">
            <div className="">
              <div className="relative overflow-hidden rounded-3xl bg-black/10
                shadow-[0_30px_80px_rgba(2,6,23,0.18)] ring-1 ring-black/5
                w-full aspect-square
                md:w-[80vh] md:h-[80vh] md:aspect-auto">
                <video
                  className="h-full w-full object-cover"
                  src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-black/20" />

              </div>
              <div className="pointer-events-none absolute inset-0">
                {/* top-left */}
                <div className="absolute left-4 top-10 md:left-[46%] md:top-28">
                    <Pill
                    title="Built in Switzerland"
                    subtitle="Designed for global enterprises"
                    icon={
                        <Image
                        src={IMAGES.swissflag}
                        alt="Swiss Flag"
                        width={32}
                        height={32}
                        className="block"
                        />
                    }
                    />
                </div>

                {/* mid-right */}
                <div className="absolute right-4 top-[48%] -translate-y-1/2 md:right-32 md:top-[70%]">
                    <Pill
                    title="Private Network"
                    subtitle="Invitation-only collaboration"
                    icon={
                        <Image
                        src={IMAGES.lock}
                        alt="Lock Icon"
                        width={32}
                        height={32}
                        className="block"
                        />
                    }
                    />
                </div>

                {/* bottom-left (like figma) */}
                <div className="absolute bottom-[56%] left-4 md:bottom-28 md:left-[47%]">
                    <Pill
                    title="IndexScore"
                    subtitle="Standardized trust framework"
                    icon={
                        <Image
                        src={IMAGES.tick}
                        alt="Tick Icon"
                        width={32}
                        height={32}
                        className="block"
                        />
                    }
                    />
                </div>
                </div>
            </div>
          </div>

          {/* LEFT (TEXT) */}
          <div className="order-2 md:order-1 md:col-span-5">
            <h2 className="text-4xl font-semibold tracking-tight text-[#002425] md:text-5xl">
              Swiss Precision.
              <br />
              Global Reach.
            </h2>

            <p className="mt-4 max-w-md text- leading-relaxed text-slate-600 md:text-base">
              Built in Switzerland, egtos reflects Swiss values that guide how global collaboration should work.
            </p>

            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[16px] text-slate-700">
                    <Image src={IMAGES.tick} alt="Tick" width={20} height={20} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-md text-sm text-slate-600 md:text-base">
              We believe collaboration — not redundancy <br /> 
              — is the future of work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
