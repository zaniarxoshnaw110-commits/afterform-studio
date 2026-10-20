---
name: threejs-web-experience
description: Plan accessible interactive 3D websites using CSS 3D, Three.js, WebGL, and React Three Fiber.
---
Research starting points:
- https://github.com/discover-dmc/motionstack
- https://github.com/sickn33/agentic-awesome-skills
- https://github.com/adamperlis/awwwards-motion

This is a curated local skill, not a copy of those repositories.

## Choose the lightest suitable 3D
1. CSS 3D for cards, simple product turns, perspective, layered illustrations, and small decorative objects.
2. Three.js for custom geometry, lighting, raycasting, shaders, particles, and a full WebGL scene.
3. React Three Fiber when the app already uses React or benefits from React scene composition.
4. Do not add a large engine just to make a page say 3D. State trade-offs and ensure the scene adds meaning.

## Art direction
Define subject, camera, lighting, materials, palette, and how interaction changes the scene. Keep one hero moment dominant and text/navigation readable. Use perspective, occlusion, shadows, highlights, and different motion rates. Pointer motion must be subtle, bounded, and disabled where it adds little value on touch devices.

## Implementation
- Use semantic HTML for content and native controls for actions.
- For WebGL, handle unsupported contexts, context loss, initialization failure, and resize.
- Defer heavy work; avoid blocking first paint.
- Use compressed glTF assets only when justified and document asset licenses.
- Cap device pixel ratio and particle counts; avoid unnecessary post-processing.
- Keep a static or CSS fallback for low-power devices and failed imports.
- Respect reduced motion and never trap keyboard focus in a scene.
- Never hide core navigation, product information, or primary CTA inside a canvas.

## Review
Test desktop/mobile, pointer/touch, reduced motion, keyboard navigation, and WebGL failure if applicable. Report what was actually tested.
