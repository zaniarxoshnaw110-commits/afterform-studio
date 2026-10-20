---
name: apple-inspired-web-design
description: Build refined web experiences inspired by Apple's Human Interface Guidelines and Apple.com marketing pages without copying Apple branding or proprietary assets. Use for color systems, typography, layout, materials, motion, responsive polish, and accessibility audits.
---

# Apple-inspired web design

Use Apple’s public Human Interface Guidelines as a quality reference, not as permission to clone Apple’s product UI. Translate the principles into the project’s own identity.

## Design mindset
- Start with the content and one clear idea per section. Remove decoration that does not improve meaning, hierarchy, or delight.
- Use generous, consistent spacing and typography-led hierarchy instead of surrounding everything with cards. Keep reading widths comfortable.
- Create a small, semantic color system: page/surface, elevated surface, primary text, secondary text, divider, brand accent, and status colors. Accent color should signal action or meaning, not decorate every element.
- Design both light and dark sections intentionally. Maintain WCAG AA contrast targets: 4.5:1 for normal text and 3:1 for large text and essential UI graphics. Never communicate status through color alone.
- Use the platform system font stack where it fits; otherwise choose one well-crafted sans family and at most one expressive display face. Tune line-height and tracking by size; avoid ultra-light small text.
- Use translucency only where it clarifies layers (for example, floating navigation), not as a generic treatment for every content card. Prefer soft material separation over stacked hard shadows.
- Motion should respond to input, reveal hierarchy, or communicate state. Keep it interruptible and brief; support `prefers-reduced-motion`, avoid scroll hijacking, and ensure content is visible without animation.
- Interactive targets should be comfortably tappable (aim for 44×44 CSS px), have visible keyboard focus, and work with keyboard, touch, and pointer.
- Design mobile intentionally: reflow content, preserve readable type, keep filters usable, prevent horizontal overflow, and do not rely on hover.

## Workflow
1. Read the existing page, styles, scripts, and project skill instructions before changing code.
2. Identify the site’s purpose and existing visual signature; do not replace its identity with a generic template.
3. Define design tokens before styling components. Use named variables for palette, spacing, radii, typography, shadows, and easing.
4. Improve the highest-impact hierarchy first: page background, navigation, hero, type scale, section rhythm, project artwork, calls to action, then micro-interactions.
5. Reuse existing semantic HTML and vanilla JS when practical. Avoid adding dependencies solely for cosmetic effects.
6. Test at narrow and wide viewports, keyboard focus, touch behavior, reduced motion, contrast, console errors, and all in-page links.
7. Report what was tested and what remains unverified. Never claim browser testing unless it actually happened.

## Afterform-specific direction
- Preserve the editorial creative-studio character and the Afterform wordmark.
- Core palette: porcelain `#F7F6F2`, ink `#17191F`, restrained coral `#F05B46`, cobalt `#4F63F5`, and acid-lime `#D9F56B`. Use cobalt and lime sparingly to create memorable moments.
- Keep concept work clearly labelled as concept studies. Do not invent clients, testimonials, awards, or outcomes.
- Prefer tactile CSS art, quiet gradients, restrained glass on navigation, optical type, precise alignment, and purposeful motion.

## Reference sources
- Apple Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines/
- Apple design principles: https://developer.apple.com/design/human-interface-guidelines/design-principles/
- GitHub skill reference reviewed: https://github.com/SudewaJay/apple-design-skill
- GitHub skill reference reviewed: https://github.com/sankalpaacharya/apple-human-interface-skills
- GitHub skill reference reviewed: https://github.com/ihlamury/design-skills/blob/main/skills/apple/SKILL.md
