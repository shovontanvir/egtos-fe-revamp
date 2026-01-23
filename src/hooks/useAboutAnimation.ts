import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

export const useAboutAnimation = (
  scope: RefObject<HTMLElement | null>,
) => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const videoWrapper = scope.current?.querySelector(".video-wrapper");

      if (!videoWrapper) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          pin: true,
          scrub: 0.5,
          start: "top top",
          end: "+=1000",
        },
        defaults: { ease: "none" },
      });

      tl.fromTo(
        videoWrapper,
        {
          height: "70vh",
          borderRadius: "2rem",
        },
        {
          height: "90vh",
          borderRadius: "1rem",
          duration: 1,
        },
      ).to(videoWrapper, {
        height: "100vh",
        borderRadius: "0rem",
        duration: 1,
      });
    },
    { scope: scope, dependencies: [scope.current] },
  );
};
