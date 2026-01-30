"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Collaboration = () => {
  return (
    <section className="relative w-full bg-white p-[4%]">
      <div className="relative w-full overflow-hidden rounded-3xl bg-[#002425] px-6 py-16 md:px-14 md:py-20 shadow-[0_30px_80px_rgba(2,6,23,0.18)]">
        <div className="pointer-events-none absolute inset-0 opacity-60">
        
          <Image
            src="/white-grid.png"
            alt=""
            fill
            priority={false}
            className="object-cover"
            sizes="100vw"
          />
          
          <div className="absolute left-1/2 top-[-15%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-emerald-400/25 blur-3xl" />
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_70%,rgba(0,0,0,0.55)_100%)]" />
          
          <div className="absolute inset-0 opacity-50 [background-size:14px_14px] [background-image:radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)]" />
        </div>

        {/* Content */}
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#EEFFFC]">
            The Future of Capacity Is <br />Collaborative 
          </h2>

          <p className="mt-5 max-w-2xl text-sm md:text-base text-white/70">
            Excess capacity is not a liability. It’s an untapped asset. <br />
            egtos helps you unlock it securely, intelligently, and together. 
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <button className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(16,185,129,0.25)]">
              Request a Demo <ArrowRight size={18} />
            </button>

            <button className="inline-flex items-center gap-2 rounded-full border border-primary-500 bg-white/0 px-6 py-3 text-sm font-medium text-primary-500 backdrop-blur-md cu">
              Talk to Our Team <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
