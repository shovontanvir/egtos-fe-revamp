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

      const pinDistance = () => window.innerHeight * 1.5;

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "bottom bottom",
          end: () => `+=${pinDistance()}`,
          pin: true,
          pinSpacing: false,
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
