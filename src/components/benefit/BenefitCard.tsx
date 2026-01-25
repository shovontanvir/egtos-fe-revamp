import React from "react";
import Image from "next/image";

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
    <div className="relative w-full rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-7">
      {/* top pill */}
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span>{pill}</span>
      </div>

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
