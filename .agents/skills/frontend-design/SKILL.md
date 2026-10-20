---
name: frontend-design
description: Plan and implement distinctive, art-directed frontend interfaces that do not default to generic AI template patterns.
---

Inspired by Anthropic's public frontend-design skill:
https://github.com/anthropics/skills/tree/main/skills/frontend-design

## When to use
Use for any new page, redesign, landing page, portfolio, product UI, or significant visual change.

## Process: brief → art direction → build → inspect → revise

### 1. Name the job before choosing the look
Write down:
- Who is the page for?
- What should they understand, feel, and do?
- What part of the product's subject matter can become a visual signature?
- Which constraints are real (brand, content, device, accessibility, time)?

If the brief is vague, propose one concrete direction and state assumptions in the plan rather than silently using a generic template.

### 2. Create a compact art direction
Before coding, define:
- Palette: 4–6 named colors with hex values and semantic roles.
- Typography: at most two display/body families plus an optional utility face. Define scale, weights, line heights, and where type contrast creates meaning.
- Composition: describe grid, alignment, width, whitespace, and how the first screen tells the story.
- Signature element: one bespoke illustration, interaction, composition, or typographic treatment tied to the subject.
- Motion: pick a few transitions that serve a purpose; explain what each communicates.
- Content voice: concise, specific, user-centered copy. No filler just to fill a card.

### 3. Reject unearned defaults
Do not reflexively use a centered title over a gradient blob, three identical rounded feature cards, the same shadow and radius everywhere, decorative all-caps labels above every heading, a random italic word as the only sign of personality, auto-animation on every section, generic promises, fake metrics, or made-up client logos. These patterns are not banned; they must earn their place for this brief.

### 4. Spend boldness deliberately
Choose one dominant memorable gesture. Keep supporting elements quiet and legible. Use hierarchy through size, alignment, contrast, and negative space before adding decoration. Every border, icon, label, and color should carry meaning or improve navigation.

### 5. Review the actual output
If browser screenshots or a preview server are available, inspect desktop and narrow mobile widths. Check the first screen, type wrapping, section transitions, imagery, empty/loading/error states, and footer. List three weak decisions and revise them. If rendered preview is unavailable, disclose that limit and do a code-level review instead.

## Definition of done
- Design choices feel specific to this brief.
- Content is readable and hierarchy is obvious.
- Layout has no horizontal overflow at mobile widths.
- Interactive states, focus, and reduced motion are considered.
- No broken links or placeholder claims are left unnoticed.
