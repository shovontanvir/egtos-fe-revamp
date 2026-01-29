import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export const useBannerAnimation = (
  scope: React.RefObject<HTMLDivElement | null>,
  shouldStart: boolean = true,
) => {
  gsap.registerPlugin(MotionPathPlugin);

  useGSAP(
    () => {
      if (!shouldStart) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isMobile: "(max-width: 1023px)",
        },
        (context) => {
          const isDesktop = !!context.conditions?.isDesktop;

          const tl = gsap.timeline({ repeat: -1 });

          tl.set(".bubble-r", { autoAlpha: 0 });

          tl.to(".bubble-l", {
            duration: isDesktop ? 1.2 : 0.8,
            motionPath: {
              path: "#entry-path",
              align: "#entry-path",
              alignOrigin: [0.5, 0.5],
            },
            ease: "easeInOut",
          })
            .addLabel("split")
            .set(".bubble-l", { rotation: 90 }, "split")
            .set(".bubble-r", { autoAlpha: 1, rotation: -90 }, "split");

          // 2. The Split Paths

          tl.to(
            ".bubble-l",
            {
              duration: isDesktop ? 3 : 2,
              motionPath: {
                path: "#left-path",
                align: "#left-path",
                alignOrigin: [0.5, 0.5],
              },
              rotation: 0,
              ease: "power1.inOut",
            },
            "split",
          )
            .to(
              ".bubble-r",
              {
                duration: isDesktop ? 3 : 2,
                motionPath: {
                  path: "#right-path",
                  align: "#right-path",
                  alignOrigin: [0.5, 0.5],
                },
                rotation: 0,
                ease: "power1.inOut",
              },
              "split",
            )

            .to(".bubble", { autoAlpha: 0, duration: 0.5 });

          return () => {};
        },
      );
    },
    { scope: scope, dependencies: [shouldStart] },
  );
};
