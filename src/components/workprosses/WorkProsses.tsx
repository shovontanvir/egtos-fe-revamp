"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Badge from "../Badge";
import WorkProssesData from "../../dummydata/WorkProgressData";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkProsses() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const stRef = useRef<ScrollTrigger | null>(null);
  const lastActive = useRef(0);

  const [active, setActive] = useState(0);

  const goToSlide = useCallback((index: number) => {
    const st = stRef.current;
    if (!st) return;

    const total = WorkProssesData.length;
    if (total <= 1) return;

    const clamped = Math.max(0, Math.min(index, total - 1));
    const progress = clamped / (total - 1);
    const targetScroll = st.start + (st.end - st.start) * progress;

    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  }, []);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      const pinEl = pinRef.current;
      const trackEl = trackRef.current;

      if (!sectionEl || !pinEl || !trackEl) return;

      const panels = gsap.utils.toArray<HTMLElement>(".wp-panel", sectionEl);
      if (panels.length === 0) return;

      gsap.set(trackEl, { x: 0 });

      const total = panels.length;
      const maxIndex = total - 1;

      const getScrollDistance = () => {
        const trackWidth = trackEl.scrollWidth;
        const visibleWidth = pinEl.clientWidth;
        return Math.max(0, trackWidth - visibleWidth);
      };

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionEl,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          scrub: 0.9,

          pin: pinEl,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            const idx = Math.round(self.progress * maxIndex);
            if (idx !== lastActive.current) {
              lastActive.current = idx;
              setActive(idx);
            }
          },

          onRefresh: (self) => {
            stRef.current = self;
          },
        },
      });

      stRef.current = tl.scrollTrigger ?? null;

      tl.to(trackEl, { x: () => -getScrollDistance(), duration: 1 });

      const handleResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        stRef.current = null;
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: sectionRef, dependencies: [WorkProssesData.length] }
  );

  return (
    <section ref={sectionRef} className="relative w-full bg-white p-[2.5%]">
      <div
        ref={pinRef}
        className="relative w-full overflow-hidden rounded-2xl bg-[#002425]"
      >
        {/* Grid-only background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-35 [background-size:48px_48px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]" />
          <div className="absolute inset-0 opacity-25 [background-size:120px_100%] [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
        </div>

        {/* Viewport */}
        <div className="relative h-[calc(100vh-5vw)] min-h-[720px]">
          {/* Track */}
          <div
            ref={trackRef}
            className="absolute inset-0 flex h-full w-max flex-row"
          >
            {WorkProssesData.map((s, idx) => (
              <div
                key={s.id}
                className="wp-panel relative h-full w-screen shrink-0"
              >
                <div className="relative h-full w-full px-6 py-10 md:px-12 md:py-12">
                  {/* Top center */}
                  <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                    <Badge
                      classname="border-primary-800 bg-[linear-gradient(91deg,rgba(0,208,191,0.20)_0%,rgba(0,208,191,0)_100%),linear-gradient(90deg,rgba(0,0,0,0.24)_0%,rgba(0,0,0,0.08)_100%)] text-white mb-4"
                      title={s.topBadge}
                      icon={
                        <span className="relative inline-flex h-5 w-5 items-center justify-center">
                          <span className="absolute h-full w-full animate-ping rounded-full bg-[#00D0BF]/35" />
                          <span className="absolute h-full w-full animate-pulse rounded-full bg-[#00D0BF]/20 blur-[1px]" />
                          <span className="relative h-2.5 w-2.5 rounded-full bg-[#00D0BF] shadow-[0_0_0_3px_rgba(0,208,191,0.18)]" />
                        </span>
                      }
                    />

                    <h2 className="whitespace-pre-line text-3xl font-semibold tracking-tight text-[#EEFFFC] md:text-5xl">
                      {s.heading}
                    </h2>

                    <p className="mt-4 max-w-2xl text-xs text-white/60 md:text-sm">
                      {s.subheading}
                    </p>
                  </div>

                  {/* Content row */}
                  <div className="mx-auto mt-10 grid max-w-6xl items-center gap-10 md:mt-12 md:grid-cols-12">
                    {/* Left */}
                    <div className="md:col-span-5">
                      <div className="text-5xl font-semibold text-[#00D0BF]/20 md:text-6xl">
                        {s.stepNo}
                      </div>

                      <h3 className="mt-4 whitespace-pre-line text-2xl font-semibold leading-tight text-[#EEFFFC] md:text-3xl">
                        {s.title}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
                        {s.description}
                      </p>
                    </div>

                    {/* Right */}
                    <div className="md:col-span-7">
                      <div className="relative mx-auto w-full max-w-[620px]">
                        <div className="relative h-[280px] w-full md:h-[360px]">
                          <Image
                            src={s.imgSrc}
                            alt={s.imgAlt || "How it works"}
                            fill
                            priority={idx === 0}
                            className="object-contain"
                            sizes="(min-width: 768px) 50vw, 90vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fixed pagination (inside pinned panel) */}
          <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
            {WorkProssesData.map((_, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={[
                    "h-2.5 w-2.5 rounded-full transition-all duration-200",
                    isActive ? "bg-[#00D0BF]" : "bg-white/25 hover:bg-white/40",
                  ].join(" ")}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
