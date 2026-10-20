---
name: ui-ux-pro-max
description: Build a cohesive design system and make intentional product, layout, typography, color, and interaction choices before coding.
---

Research starting point: UI UX Pro Max (MIT-licensed upstream):
https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

This is a project-local curated checklist, not a full vendored copy of the upstream catalog.

## Design system before components
Create a lightweight system rather than accumulating ad-hoc CSS:
- Color tokens by role: page, surface, text, muted text, border, primary action, success, warning, danger.
- Type roles: display, heading, body, small/meta. Set weights, line height, and responsive scales.
- Spacing scale: a 4px base with an intentional progression such as 4, 8, 12, 16, 24, 32, 48, 64.
- Shape rules: define radius and border treatments by hierarchy, not one radius for everything.
- Component states: default, hover, focus-visible, active/selected, disabled, loading, success, and error where relevant.
- Layout constraints: max-width, responsive gutters, column behavior, and mobile breakpoints.
- Motion rules: duration, easing, reduced-motion alternative, and which interactions need motion.

## UX hierarchy
1. Establish a clear primary task and an obvious next action.
2. Put the most important information first; don't force people to parse decorative metadata.
3. Prefer familiar controls when novelty adds no user value.
4. Show a concise summary before advanced details (progressive disclosure).
5. Keep navigation, primary actions, labels, and feedback consistent.
6. Provide empty, loading, success, and failure states for asynchronous features.
7. Don't invent functionality: every button must do something meaningful or be presented as non-interactive.
8. Use real content or label examples as illustrative concepts; never fabricate testimonials, customers, or measured outcomes.

## Visual review scorecard
Score 1–5 after implementation:
- Hierarchy and scanability
- Typography and line length
- Color contrast and restraint
- Spacing rhythm and alignment
- Layout distinctiveness and fit to content
- Interaction discoverability and feedback
- Responsive behavior
- Accessibility
- Content usefulness and trust

Anything under 4 gets a specific fix, not a vague note to “polish it.”

## Patterns to avoid
Avoid a wall of cards when editorial rows or a composed illustration would work; vague CTAs such as “Submit”; hidden keyboard focus; non-semantic clickable divs; hover-only interaction; layout shifts as content loads; animations competing with reading; low-contrast gray text on colors; and icon-only controls without accessible names.

## Completion note
Document visual direction, token choices, scorecard results, and unknowns. Don't report visual tests unless a human/browser inspection was actually completed.
