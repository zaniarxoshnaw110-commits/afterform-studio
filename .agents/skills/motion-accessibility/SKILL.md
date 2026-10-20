---
name: motion-accessibility
description: Audit animation for reduced motion, user control, keyboard usability, and understandable content.
---
Reference: https://www.w3.org/TR/WCAG22/

Honor prefers-reduced-motion in CSS and JavaScript. Offer a visible pause control for nonessential continuous motion where appropriate. Remove parallax, scroll movement, and loops when reduced motion is requested. Keep content visible if reveal observers fail. Avoid flashing and rapid zoom. Pointer motion must have a static equivalent. Controls remain semantic and keyboard accessible; never communicate state only through color or movement. Re-test keyboard focus after animation changes.
