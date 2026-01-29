import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useAboutAnimation = (scope: RefObject<HTMLElement | null>) => {
  useGSAP(
    () => {
      const section = scope.current;
      if (!section) return;

      const videoWrapper = section.querySelector(
        ".video-wrapper > div",
      ) as HTMLElement;
      if (!videoWrapper) return;

      // Animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          markers: false,
        },
      });

      // Video stays at 90% while text scrolls through
      tl.to(
        videoWrapper,
        {
          width: "90vw",
          height: "90vh",
          duration: 4,
          ease: "none",
        },
        0,
      );

      // After text passes, video expands to 100%
      tl.to(
        videoWrapper,
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0rem",
          duration: 2,
          ease: "power2.inOut",
        },
        4,
      );

      // Hold at 100% for next section parallax
      tl.to(
        videoWrapper,
        {
          width: "100vw",
          height: "100vh",
          duration: 4,
          ease: "none",
        },
        6,
      );
    },
    { scope },
  );
};
