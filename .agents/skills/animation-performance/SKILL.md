---
name: animation-performance
description: Keep animated and 3D websites responsive on mobile and low-power devices.
---
References:
- https://github.com/JustineBijuPaul/frontend-ai-skills
- https://github.com/vercel-labs/web-interface-guidelines
- https://www.w3.org/TR/WCAG22/

Establish a baseline before optimizing. Animate transforms and opacity where possible; avoid repeated layout changes. Limit will-change layers. Pause loops when offscreen or when the tab is hidden. Use passive scroll listeners and requestAnimationFrame for visual updates. For WebGL, cap pixel ratio, reuse and dispose resources, and reduce particles/post-processing on mobile. Avoid heavy 3D assets or libraries on the critical path. Provide a graceful fallback. Never claim performance measurements without measurements.
