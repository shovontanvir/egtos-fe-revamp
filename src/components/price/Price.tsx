"use client";

import React, { useRef } from "react";
import Badge from "../Badge";
import Image from "next/image";
import { usePricingAnimation } from "@/hooks/usePricingAnimation";

type Plan = {
  id: string;
  name: string;
  tag: string;
  save: string;
  price: string;
  per: string;
  monthly: string;
  note: string;
  features: string[];
  tokenTitle: string;
  tokens: string;
  tokenWorth: string;
};

const PLANS: Plan[] = [
  {
    id: "executive",
    name: "Executive",
    tag: "Premium + Value • $3.49/token",
    save: "SAVE 70%",
    price: "$8,999",
    per: "/year",
    monthly: "$750/month",
    note: "Save $0 vs monthly billing",
    features: [
      "Company-to-company trading",
      "1,800 initial tokens (70% value)",
      "Premium onboarding experience",
      "7 Employee Seats",
      "Extra seats $149",
    ],
    tokenTitle: "Token Value Included",
    tokens: "1,800 tokens",
    tokenWorth: "Worth $6,282 • 70% of subscription cost",
  },
  {
    id: "corporate",
    name: "Corporate",
    tag: "Premium + Value • $3.49/token",
    save: "SAVE 83%",
    price: "$22,999",
    per: "/year",
    monthly: "$1,917/month",
    note: "Save $0 vs monthly billing",
    features: [
      "Everything in Executive",
      "Hire individual consultants",
      "5,500 initial tokens (83% value)",
      "18 Employee Seats",
      "Extra seats $249",
    ],
    tokenTitle: "Token Value Included",
    tokens: "5,500 tokens",
    tokenWorth: "Worth $19,195 • 83% of subscription cost",
  },
  {
    id: "global",
    name: "Global",
    tag: "Premium + Value • $3.49/token",
    save: "SAVE 85%",
    price: "$44,999",
    per: "/year",
    monthly: "$3,750/month",
    note: "Save $0 vs monthly billing",
    features: [
      "Everything in Corporate",
      "Hire from consulting firms",
      "11,000 initial tokens (85% value)",
      "35 Employee Seats",
      "Extra seats $349",
    ],
    tokenTitle: "Token Value Included",
    tokens: "11,000 tokens",
    tokenWorth: "Worth $38,390 • 85% of subscription cost",
  },
];

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-[12px] leading-relaxed text-white md:text-xs">
      <Image src="/whitetick.svg" alt="" width={24} height={24} />
      <span className="text-[14px] text-white ">{text}</span>
    </li>
  );
}

export default function Pricing() {
  const scope = useRef<HTMLElement | null>(null);
  usePricingAnimation(scope);

  return (
    <section ref={scope} className="relative w-full">
      <div className="relative w-full overflow-hidden bg-primary-900 p-6 md:p-10 lg:p-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-35 [background-size:48px_48px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]" />
          <div className="absolute inset-0 opacity-25 [background-size:120px_100%] [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
        </div>

        {/* header */}
        <div className="relative z-10">
          <div className="flex justify-center">
            <Badge
              classname="border-primary-800 bg-[linear-gradient(91deg,rgba(0,208,191,0.20)_0%,rgba(0,208,191,0)_100%),linear-gradient(90deg,rgba(0,0,0,0.24)_0%,rgba(0,0,0,0.08)_100%)] text-white mb-4"
              title="Pricing Plan"
              icon={
                <span className="relative inline-flex h-5 w-5 items-center justify-center">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-[#00D0BF]/35" />
                  <span className="absolute h-full w-full animate-pulse rounded-full bg-[#00D0BF]/20 blur-[1px]" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-[#00D0BF] shadow-[0_0_0_3px_rgba(0,208,191,0.18)]" />
                </span>
              }
            />
          </div>

          <div className="mx-auto mt-6 max-w-4xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[#EEFFFC] md:text-6xl">
              Pricing Built for <br className="hidden md:block" />
              Enterprise Collaboration
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[12px] text-[#C5D4DC] md:text-lg font-[400px]">
              Flexible pricing designed around private networks, secure engagement, and real business
              scale pay for value, not headcount.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div
                key={p.id}
                className="pricing-card rounded-3xl bg-linear-to-b from-primary-50 to-primary-900 p-0.5"
              >
                <div className="relative overflow-hidden rounded-[calc(var(--radius-3xl)-2px)] bg-[#003234]/90 backdrop-blur-xl p-6 md:p-7">

                <div className="absolute -right-15.5 top-6.5 rotate-45 bg-[#FFBF00] px-16 py-2 text-[18px] font-medium text-primary-900 shadow-md">
                  {p.save}
                </div>

                <div className="space-y-2">
                  <div className=" font-bold text-[#EEFFFC] text-3xl">{p.name}</div>
                  <div className="text-[16px] font-[400px] text-white/65">{p.tag}</div>
                </div>
                <div className="mt-5 h-[0.5px] w-full bg-primary-700/60"></div>

                <div className="mt-5">
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-semibold text-[#EEFFFC] md:text-heading-3">
                      {p.price}
                    </div>
                    <div className="pb-1 text-[18px]  text-white">
                      {p.per} <span className="text-white">{p.monthly}</span>
                    </div>
                  </div>
                  <div className="mt-1 text-[16px] font-light text-white">{p.note}</div>
                </div>

                <button className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A5753]">
                  Get started <span className="ml-2">→</span>
                </button>

                <div className="mt-3 text-center font-light text-[14px] text-[#C5FFF7]">
                  No setup fees • Cancel anytime • 100% satisfaction guarantee
                </div>

                <div className="mt-5 h-[0.5px] w-full bg-primary-700/60"></div>

                <div className="mt-6 rounded-2xl bg-primary-900 p-5 ring-1 ring-white/10">
                  <div className="text-[20px] font-bold  text-[#EEFFFC]">Feature</div>
                  <ul className="mt-4 space-y-3">
                    {p.features.map((f) => (
                      <CheckItem key={f} text={f} />
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-2xl bg-primary-900 p-5 ring-1 ring-white/10">
                  <div className="text-[20px] font-bold text-[#EEFFFC]">{p.tokenTitle}</div>
                  <div className="mt-2 font-bold text-[#EEFFFC] text-3xl">
                    {p.tokens}
                  </div>
                  <div className="mt-1 text-[14px] text-[#C5D4DC]">{p.tokenWorth}</div>
                </div>
                </div>
                {/* save ribbon */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
