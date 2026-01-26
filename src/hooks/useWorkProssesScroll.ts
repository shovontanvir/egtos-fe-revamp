"use client";

import { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type UseWorkProssesScrollArgs = {
  scopeRef: RefObject<HTMLElement | null>;     // section
  pinRef: RefObject<HTMLElement | null>;       // pinned panel inside section
  trackRef: RefObject<HTMLDivElement | null>;  // moving track
  slideCount: number;
  onActiveChange?: (index: number) => void;
  startOffsetPx?: number;
  perSlideScreens?: number;
};

export function useWorkProssesScroll({
  scopeRef,
  pinRef,
  trackRef,
  slideCount,
  onActiveChange,
  startOffsetPx = 120,
  perSlideScreens = 1,
}: UseWorkProssesScrollArgs) {
  useGSAP(
    () => {
      const scopeEl = scopeRef.current;
      const pinEl = pinRef.current;
      const trackEl = trackRef.current;

      if (!scopeEl || !pinEl || !trackEl || slideCount <= 0) return;

      const panels = gsap.utils.toArray<HTMLElement>(".wp-panel", scopeEl);
      if (panels.length === 0) return;

      gsap.set(trackEl, { yPercent: 0 });

      const total = panels.length;
      const maxIndex = total - 1;

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: scopeEl,
          start: `top top+=${startOffsetPx}`, 
          end: () => `+=${maxIndex * window.innerHeight * perSlideScreens}`,
          scrub: 0.8,

          pin: pinEl,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            const idx = Math.round(self.progress * maxIndex);
            onActiveChange?.(idx);
          },
        },
      });

      tl.to(trackEl, { yPercent: -100 * maxIndex, duration: 1 });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    {
      scope: scopeRef,
      dependencies: [slideCount, startOffsetPx, perSlideScreens],
    }
  );
}
