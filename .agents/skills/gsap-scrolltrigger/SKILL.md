---
name: gsap-scrolltrigger
description: Decide when GSAP and ScrollTrigger are appropriate for scroll-linked animation timelines.
---
References:
- https://gsap.com/docs/v3/
- https://github.com/discover-dmc/motionstack
- https://github.com/JustineBijuPaul/frontend-ai-skills

This is an original local summary, not a vendored copy.

Use GSAP + ScrollTrigger for choreographed sequences, pinned storytelling, SVG timeline animation, or multiple elements synchronized to scroll. For simple fades and progress indicators, prefer CSS or IntersectionObserver.

Load only what is needed. Prefer transform/opacity. Define clear start/end points; use gsap.matchMedia() for reduced motion and responsive layouts; revert triggers when components unmount or breakpoints change. Do not hijack native scrolling. Test resize, orientation, back/forward navigation, touch, and reduced-motion settings.
