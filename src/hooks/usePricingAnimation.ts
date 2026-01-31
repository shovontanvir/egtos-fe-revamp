"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const usePricingAnimation = (scope: RefObject<HTMLElement | null>) => {
  useGSAP(
    () => {
      const section = scope.current;
      if (!section) return;

      const cards = gsap.utils.toArray<HTMLElement>(".pricing-card", section);
      if (cards.length === 0) return;

      // initial: off-screen right
      gsap.set(cards, {
        x: () => window.innerWidth,
        opacity: 0,
        willChange: "transform,opacity",
      });

      const numCards = cards.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${numCards * 80}`,
          scrub: 1.5,
          markers: false,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, idx) => {
        tl.to(
          card,
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          idx * 0.5,
        );
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope },
  );
};
