---
name: accessibility-review
description: Audit web UI for keyboard access, semantics, visible focus, contrast, responsive behavior, and motion preferences.
---

Reference: W3C Web Content Accessibility Guidelines (WCAG) 2.2:
https://www.w3.org/TR/WCAG22/

This practical checklist is not a formal WCAG conformance certification.

## Required checks
- Keyboard: all interactive elements work without a pointer; tab order follows reading order; no keyboard traps.
- Focus: visible focus styling is present and not hidden behind sticky UI.
- Semantics: landmarks, one clear page-level heading, correct heading nesting, native buttons and links, labels, meaningful link names.
- Contrast: body text and control states remain readable against actual backgrounds; don't rely on color alone to show state.
- Motion: honor reduced-motion preferences, avoid flashing, and provide a way to stop non-essential continuous animation.
- Responsive: content reflows at narrow widths and high zoom without horizontal scrolling except where essential.
- Touch: controls have adequate hit area and enough separation to avoid accidental activation.
- Dynamic feedback: announce relevant status changes with an accessible live region; don't move focus unexpectedly.
- Images: informative images have appropriate alt text; decorative art is hidden from assistive technology.
- Forms: fields have programmatic labels, instructions, and actionable error descriptions.

## Report format
For each issue, record severity, location, impact, proposed fix, and verification. Distinguish verified failures from issues that could not be tested.
