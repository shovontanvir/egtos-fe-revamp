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

      const videoWrapper = section.querySelector(".video-wrapper") as HTMLElement | null;
      if (!videoWrapper) return;

      // Stable initial state (prevents flashes/gaps)
      gsap.set(videoWrapper, {
        width: "90vw",        // start width
        height: "70vh",       // keep height stable (optional)
        borderRadius: "2rem",
        willChange: "width,border-radius",
      });

      const pinDistance = () => window.innerHeight * 1.2;

      const tl = gsap.timeline({
        defaults: { ease: "none" },
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

      // Stretch sideways
      tl.to(videoWrapper, {
        width: "96vw",
        borderRadius: "1rem",
        duration: 1,
      }).to(videoWrapper, {
        width: "100vw",       // or "100%" if you prefer inside a full-width parent
        borderRadius: "0rem",
        duration: 1,
      });

      ScrollTrigger.refresh();
    },
    { scope }
  );
};
