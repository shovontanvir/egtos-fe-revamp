"use client";

import React from "react";
import Badge from "../Badge";
import BenefitCard from "./BenefitCard";
import BenefitData from "../../dummydata/BenefitsData";

const Benefit = () => {
  return (
    <section className="relative w-full bg-white p-[2.5%]">
      <div className="w-full rounded-2xl bg-[#002425] p-6 md:p-10 lg:p-14">
        {/* Header */}
        <div className="flex justify-center">
          <Badge
            classname="border-white/30 bg-[linear-gradient(91deg,rgba(0,208,191,0.2)_0%,rgba(0,208,191,0)_100%),linear-gradient(90deg,rgba(0,0,0,0.24)_0%,rgba(0,0,0,0.08)_100%)] text-white mb-4"
            title="Key benefits of the egtos platform"
            icon={
              <span className="relative inline-flex h-5 w-5 items-center justify-center">
                <span className="absolute h-full w-full animate-ping rounded-full bg-[#00D0BF]/35" />
                <span className="absolute h-full w-full animate-pulse rounded-full bg-[#00D0BF]/20 blur-[1px]" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-[#00D0BF] shadow-[0_0_0_3px_rgba(0,208,191,0.18)]" />
              </span>
            }
          />
        </div>

        <div className="mx-auto mt-6 max-w-3xl text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#EEFFFC]">
            Core Benefits <br /> You’ll Gain
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/75">
            Discover how the platform creates value for enterprises, consulting firms, and independent
            specialists by turning expertise and unused capacity into real business outcomes.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BenefitData.map((item) => (
            <BenefitCard
              key={item.id}
              pill={item.pill}
              title={item.title}
              bullets={item.bullets}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;
