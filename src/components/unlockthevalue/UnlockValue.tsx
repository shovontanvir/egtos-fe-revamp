"use client";

import React, { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import SplitText from "../SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CtaSection = () => {
  const container = useRef(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useGSAP(
    () => {
      const buttons = buttonRefs.current.filter((b) => b !== null);
      if (buttons.length === 0) return;

      gsap.fromTo(
        buttons,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 1, // Wait for text animation
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section className="relative w-full bg-white p-[2.5%]">
      <div className="relative w-full overflow-hidden rounded-3xl bg-primary-900 px-6 py-16 md:px-14 md:py-20 shadow-[0_30px_80px_rgba(2,6,23,0.18)]">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-size-[56px_56px] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]" />

          <div className="absolute left-1/2 top-[-15%] h-130 w-205 -translate-x-1/2 rounded-full bg-emerald-400/25 blur-3xl" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_70%,rgba(0,0,0,0.55)_100%)]" />

          <div className="absolute inset-0 opacity-50 bg-size-[14px_14px] bg-[radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)]" />
        </div>

        {/* Content */}
        <div
          ref={container}
          className="relative mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <SplitText
            tag="h2"
            className="text-4xl md:text-6xl font-semibold tracking-tight text-[#EEFFFC]"
          >
            Unlock the Value of Excess Capacity
          </SplitText>

          <SplitText
            tag="p"
            className="mt-5 max-w-2xl text-sm md:text-base text-white/70"
            delay={0.5}
            type="word"
          >
            Insights on capacity management, private networks, and enterprise
            collaboration delivered occasionally and thoughtfully.
          </SplitText>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <button
              ref={(el) => {
                buttonRefs.current[0] = el;
              }}
              className="cta-btn inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(16,185,129,0.25)] cursor-pointer hover:bg-primary-600 transition duration-300"
            >
              Request a Demo <ArrowRight size={18} />
            </button>

            <button
              ref={(el) => {
                buttonRefs.current[1] = el;
              }}
              className="cta-btn inline-flex items-center gap-2 rounded-full border border-primary-500 bg-white/0 px-6 py-3 text-sm font-medium text-primary-500 backdrop-blur-md cursor-pointer hover:bg-white/10 transition duration-300"
            >
              Talk to Our Team <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
