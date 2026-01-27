import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useBenefitAnimation = (scope: RefObject<HTMLElement | null>) => {
  useGSAP(
    () => {
      const section = scope.current;
      if (!section) return;

      const cards = gsap.utils.toArray<HTMLElement>(".benefit-card", section);
      if (cards.length === 0) return;

      // Set initial state - all cards off screen to the right
      gsap.set(cards, {
        x: window.innerWidth,
        opacity: 0,
      });

      // Create a timeline for all cards
      const numCards = cards.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${numCards * 80}`,
          scrub: 1.5,
          markers: false,
        },
      });

      // Animate each card with staggered timing
      cards.forEach((card, idx) => {
        tl.to(
          card,
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          idx * 0.5, // Stagger by 0.5s (in timeline time, not real time)
        );
      });
    },
    { scope },
  );
};
