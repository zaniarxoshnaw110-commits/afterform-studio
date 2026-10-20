---
name: animation-motion-design
description: Design purposeful web motion, scroll reveals, staggered entrances, and micro-interactions.
---
Research starting points:
- https://github.com/JustineBijuPaul/frontend-ai-skills
- https://github.com/discover-dmc/motionstack
- https://gsap.com/docs/v3/
- https://www.w3.org/TR/WCAG22/

This is an original summary, not copied upstream skill text.

## Motion brief
Specify whether motion communicates orientation, hierarchy, cause and effect, spatial continuity, or material. If movement is merely decorative, reduce or remove it.

## Tool choice
- CSS transitions/keyframes for simple effects.
- Web Animations API for small browser-native sequences.
- GSAP + ScrollTrigger for complex timelines, pinned storytelling, or synchronized scroll/SVG work.
- Motion for React when a React app benefits from component-state animation.
- Lottie for authored vector animation, not ordinary UI controls.
- Three.js / React Three Fiber for actual 3D scenes, not ordinary hover transitions.
Avoid adding multiple animation libraries without a clear need.

## Craft and accessibility
Prefer transform and opacity; use coherent easing; stagger only a few related items; do not make people wait for content. Honor reduced motion, offer pause/resume for nonessential continuous motion, avoid flashing, and keep hover content available to keyboard/touch. Content must remain visible if animation APIs fail.
