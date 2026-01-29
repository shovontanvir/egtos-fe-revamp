"use client";

import React from "react";

export default function BringsTogather() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6FBFB] py-20">
      {/* soft grid + vertical bands */}
      <div className="pointer-events-none absolute inset-0">
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-35 [background-size:48px_48px] [background-image:linear-gradient(to_right,rgba(0,97,92,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,97,92,0.10)_1px,transparent_1px)]" />
        {/* vertical bands */}
        <div className="absolute inset-0 opacity-25 [background-size:120px_100%] [background-image:linear-gradient(to_right,rgba(0,208,191,0.10)_1px,transparent_1px)]" />
        {/* soft wash */}
        <div className="absolute left-1/2 top-1/2 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00D0BF]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-5xl items-center justify-center px-4 md:px-8">
        <p className="text-center text-[18px] font-extrabold uppercase leading-[1.25] tracking-wide text-[#062A2B] md:text-[28px] md:leading-[1.2]">
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
