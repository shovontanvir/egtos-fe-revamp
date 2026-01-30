"use client";

import React from "react";
import Badge from "../Badge";

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
    <li className="flex items-start gap-3 text-[12px] leading-relaxed text-white/75 md:text-xs">
      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
        <span className="h-2.5 w-2.5 rounded-full bg-[#00D0BF]" />
      </span>
      <span>{text}</span>
    </li>
  );
}

export default function Pricing() {
  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden bg-[#002425] p-6 md:p-10 lg:p-14">
        {/* grid background */}
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
            <h2 className="text-4xl font-semibold tracking-tight text-[#EEFFFC] md:text-6xl">
              Pricing Built for <br className="hidden md:block" />
              Enterprise Collaboration
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/65 md:text-base">
              Flexible pricing designed around private networks, secure engagement, and real business
              scale pay for value, not headcount.
            </p>
          </div>

          {/* cards */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div
                key={p.id}
                className="relative overflow-hidden rounded-3xl bg-[#003234] p-6 ring-1 ring-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.25)] md:p-7"
              >
                {/* save ribbon */}
                <div className="absolute right-[-62px] top-[26px] rotate-45 bg-[#F5C400] px-16 py-2 text-[11px] font-semibold text-[#002425] shadow-md">
                  {p.save}
                </div>

                <div className="space-y-2">
                  <div className="text-lg font-semibold text-[#EEFFFC] md:text-xl">{p.name}</div>
                  <div className="text-[12px] text-white/65">{p.tag}</div>
                </div>

                <div className="mt-5">
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-semibold text-[#EEFFFC] md:text-4xl">
                      {p.price}
                    </div>
                    <div className="pb-1 text-xs text-white/70">
                      {p.per} <span className="text-white/55">{p.monthly}</span>
                    </div>
                  </div>
                  <div className="mt-1 text-[11px] text-white/55">{p.note}</div>
                </div>

                <button className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#002425]">
                  Get started <span className="ml-2">→</span>
                </button>

                <div className="mt-3 text-center text-[10.5px] text-white/45">
                  No setup fees • Cancel anytime • 100% satisfaction guarantee
                </div>

                {/* Feature box */}
                <div className="mt-6 rounded-2xl bg-[#00292A] p-5 ring-1 ring-white/10">
                  <div className="text-[12px] font-semibold text-[#EEFFFC]">Feature</div>
                  <ul className="mt-4 space-y-3">
                    {p.features.map((f) => (
                      <CheckItem key={f} text={f} />
                    ))}
                  </ul>
                </div>

                {/* Token included box */}
                <div className="mt-5 rounded-2xl bg-[#00292A] p-5 ring-1 ring-white/10">
                  <div className="text-[12px] font-semibold text-[#EEFFFC]">{p.tokenTitle}</div>
                  <div className="mt-2 text-xl font-semibold text-[#EEFFFC] md:text-2xl">
                    {p.tokens}
                  </div>
                  <div className="mt-1 text-[11px] text-white/55">{p.tokenWorth}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
