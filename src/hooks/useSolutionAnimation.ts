import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useSolutionAnimation = (scope: RefObject<HTMLElement | null>) => {
  useGSAP(
    () => {
      const section = scope.current;
      if (!section) return;

      const pinDistance = () => window.innerHeight * 2;

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${pinDistance()}`,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    },
    { scope },
  );
};
