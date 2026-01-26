import React from "react";
import Image from "next/image";
import Badge from "../Badge";

type BenefitCardProps = {
  pill: string;
  title: string; 
  bullets: string[];
  imgSrc: string;
  imgAlt?: string;
};

export default function BenefitCard({
  pill,
  title,
  bullets,
  imgSrc,
  imgAlt = "",
}: BenefitCardProps) {
  return (
    <div className="relative w-full rounded-3xl bg-[#003234] backdrop-blur-md border border-white/10 p-6 md:p-7">
        <div className="pointer-events-none absolute inset-0">
    <div className="absolute inset-0 opacity-40 [background-size:48px_48px] [background-image:linear-gradient(to_right,rgba(2,132,199,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,132,199,0.08)_1px,transparent_1px)]" />
    <div className="absolute inset-0 opacity-35 [background-size:120px_100%] [background-image:linear-gradient(to_right,rgba(2,132,199,0.06)_1px,transparent_1px)]" />
  </div>
      
      <Badge
        classname="border-primary-800 bg-[linear-gradient(91deg,rgba(0,208,191,0.20)_0%,rgba(0,208,191,0)_100%),linear-gradient(90deg,rgba(0,0,0,0.24)_0%,rgba(0,0,0,0.08)_100%)] text-white/90"
        title={pill}
        icon={
            <span className="relative inline-flex h-5 w-5 items-center justify-center">
            <span className="absolute h-full w-full animate-ping rounded-full bg-[#00D0BF]/35" />
            <span className="absolute h-full w-full animate-pulse rounded-full bg-[#00D0BF]/20 blur-[1px]" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-[#00D0BF] shadow-[0_0_0_3px_rgba(0,208,191,0.18)]" />
            </span>
        }
      />


      {/* title */}
      <h3 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight text-[#EEFFFC] whitespace-pre-line">
        {title}
      </h3>

      {/* bullets */}
      <ul className="mt-4 space-y-2">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-white/75">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-400/80" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* bottom image */}
      <div className="mt-6 overflow-hidden rounded-2xl">
        <div className="relative h-[170px] md:h-[260px]  w-full">
          <Image src={imgSrc} alt={imgAlt} fill className="object-fill" />
        </div>
      </div>
    </div>
  );
}
