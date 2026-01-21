# GSAP & Motion Standards

## Core Philosophy
- Always prioritize "Motion as Meaning." Animations should feel fluid, high-end, and performant.
- Use GSAP for all complex transforms and SVG path follows.
- Use Tailwind CSS for static layout; GSAP for everything that moves.

## Technical Implementation
- **React Integration:** Use the `@gsap/react` hook exclusively. Wrap all animations in `useGSAP(() => { ... }, { scope: containerRef })`.
- **Cleanup:** Never manually kill tweens; let `useGSAP` handle the lifecycle and memory management.
- **SVG Motion:** When animating along a path, use `MotionPathPlugin`. If the path isn't in the DOM, define the coordinates as a string in the gsap logic.
- **Performance:** - Use `will-change: transform` on elements being animated.
  - Prefer `x`, `y`, and `scale` over `top`, `left`, `width`, or `height` to avoid layout thrashing.
  - Use `force3D: true` for hardware acceleration.

## Physics & Easing
- **Entry Animations:** Use `power2.in` or `power3.in`.
- **Loops/Borders:** Use `ease: "none"` for constant speed, or `power1.inOut` for organic movement.
- **Split Logic:** Sync symmetrical animations using a single Timeline with the same start time `0` or labels.

## Responsive Design
- Check `gsap.matchMedia()` for mobile-specific animation speeds or to disable heavy animations on low-power devices.