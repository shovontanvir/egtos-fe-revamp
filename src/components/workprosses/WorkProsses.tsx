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
      if (!sectionEl) return;

      const panels = gsap.utils.toArray<HTMLElement>(".wp-panel", sectionEl);
      if (panels.length === 0) return;

      const total = panels.length;
      const maxIndex = total - 1;

      // Calculate total scroll distance (each slide gets its own viewport height)
      const slideHeight = window.innerHeight * 0.95; // approximate height per slide
      const totalScrollDistance = slideHeight * (total - 1);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top top",
          end: () => `+=${totalScrollDistance}`,
          scrub: 1.5,
          pin: true,
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

      // Animate first panel with scale and position on entry
      const firstPanel = panels[0];
      if (firstPanel) {
        tl.fromTo(
          firstPanel,
          {
            scale: 0.5,
            x: 0,
            y: 0,
            transformOrigin: "top left",
          },
          {
            scale: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          0,
        );
      }

      // Animate each panel to slide from right to left (stacking)
      panels.forEach((panel, idx) => {
        if (idx === 0) return; // First panel already animated above

        tl.fromTo(
          panel,
          { x: window.innerWidth },
          { x: 0, duration: 1, ease: "power2.inOut" },
          idx * 0.8, // Stagger timing
        );
      });

      // After the last slide is fully positioned, shrink it to bottom-right
      const lastPanel = panels[panels.length - 1];
      if (lastPanel) {
        const otherPanels = panels.slice(0, -1);
        tl.addLabel("shrinkLast");
        // Hide pagination bullets at the end
        tl.to(
          ".wp-pagination",
          { autoAlpha: 0, duration: 0.2, ease: "none" },
          "shrinkLast",
        );
        // Hide all other panels so the uncovered area is white
        if (otherPanels.length) {
          tl.to(
            otherPanels,
            { autoAlpha: 0, duration: 0.2, ease: "none" },
            "shrinkLast",
          );
        }
        // Shrink and move last panel to bottom-right
        tl.to(
          lastPanel,
          {
            transformOrigin: "top left",
            scale: 0.5,
            x: () => {
              const parent = (lastPanel as HTMLElement)
                .parentElement as HTMLElement | null;
              const w = parent?.clientWidth ?? window.innerWidth;
              return w * 0.5;
            },
            y: () => {
              const parent = (lastPanel as HTMLElement)
                .parentElement as HTMLElement | null;
              const h = parent?.clientHeight ?? window.innerHeight;
              return h * 0.5;
            },
            duration: 1,
            ease: "power2.inOut",
          },
          "shrinkLast",
        );
      }

      const handleResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        stRef.current = null;
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: sectionRef, dependencies: [WorkProssesData.length] },
  );

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full h-screen bg-white p-[2.5%]"
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        {/* Stack of slides */}
        <div className="relative w-full h-full">
          {WorkProssesData.map((s, idx) => (
            <div
              key={s.id}
              className="wp-panel absolute inset-0 w-full h-full rounded-2xl bg-primary-900 overflow-hidden"
            >
              {/* Grid background */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 opacity-35 bg-size-[48px_48px] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]" />
                <div className="absolute inset-0 opacity-25 bg-size-[120px_100%] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
              </div>

              {/* Content */}
              <div className="relative h-full w-full px-6 py-10 md:px-12 md:py-12 flex flex-col">
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
                <div className="mx-auto mt-10 grid max-w-6xl items-center gap-10 md:mt-12 md:grid-cols-12 flex-1">
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
                    <div className="relative mx-auto w-full max-w-155">
                      <div className="relative h-70 w-full md:h-90">
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

          {/* Fixed pagination */}
          <div className="wp-pagination absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
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
