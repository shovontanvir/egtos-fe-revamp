"use client";

import React from "react";
import Image from "next/image";

export default function BringsTogather() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EBF1F4] py-20">
      <div className="pointer-events-none absolute inset-0">
        <Image
            src="/textbg.png"
            alt=""
            fill
            priority={false}
            className="object-cover"
            sizes="100vw"
        />
        <div className="absolute left-1/2 top-1/2 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00D0BF]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-5xl items-center justify-center">
        <p className="text-center text-[18px] font-extrabold uppercase leading-tight tracking-wide text-[#062A2B] md:text-[48px] md:leading-[1.2]">
          <span className="text-[#00D0BF] normal-case">egtos</span> BRINGS TOGETHER
          <br />
          PRIVATE NETWORKS, TOKENIZED
          <br />
          ENGAGEMENT MODELS, AND{" "} 
          <br />
          <span className="text-[#00D0BF]">INDEXSCORE®</span> SCREENING TO
          <br />
          SUPPORT{" "}
          <span className="text-[#00D0BF] italic">SECURE</span>
          <br />
          <span className="text-[#00D0BF] italic">COLLABORATION</span> WITH
          <br />
          EXTERNAL EXPERTS WITHOUT
          <br />
          SACRIFICING{" "}
          <span className="text-[#00D0BF] italic">ORGANIZATIONAL</span>
          <br />
          <span className="text-[#00D0BF] italic">CONTROL</span> OR COMPLIANCE
          <br />
          EXPECTATIONS.
        </p>
      </div>
    </section>
  );
}
