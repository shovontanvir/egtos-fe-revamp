import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useAboutAnimation = (scope: RefObject<HTMLElement | null>) => {
  useGSAP(() => {
    const section = scope.current;
    if (!section) return;

    const videoWrapper = section.querySelector(".video-wrapper") as HTMLElement | null;
    if (!videoWrapper) return;

    gsap.set(videoWrapper, {
      width: "86vw",
      borderRadius: "2rem",
      willChange: "width,border-radius",
    });

    const pinDistance = () => window.innerHeight * 1.1;

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

    tl.to(videoWrapper, { width: "94vw", borderRadius: "1.25rem", duration: 1 }).to(videoWrapper, {
      width: "100vw",
      borderRadius: "0rem",
      duration: 1,
    });

    ScrollTrigger.refresh();
  }, { scope });
};
