# Afterform® — Make the next thing real

An expressive, responsive portfolio website for a fictional independent creative-technology office. This project is also a testbed for an AI coding workflow with explicit frontend design, UX, and accessibility skills.

**Stack:** semantic HTML, CSS, and vanilla JavaScript. No bundler, dependencies, or API keys.

## Run locally

Open index.html in a browser, or start a simple static server with Python:

    python -m http.server 8000

Then visit http://localhost:8000.

## Included interactions

- Responsive navigation with keyboard Escape support
- Filterable concept-work gallery
- Motion pause/resume control, with reduced-motion preference honored
- Visible keyboard focus and a skip link
- Dynamic footer year
- All portfolio pieces are labeled concept studies—not claimed client work

## Before using this as a real business website

- Replace the prototype contact address hello@afterform.studio with an address you control.
- Replace the fictional studio description and self-initiated concepts with real offerings and work.
- Review domain, privacy, legal, and analytics requirements before connecting additional services.

## Project design system

- Paper: #F2F0E8
- Ink: #22231F
- Coral: #F45B3E
- Blue: #3757F0
- Lime: #D9EE73
- Typography: DM Sans + Instrument Serif + DM Mono, with local fallbacks
- Layout: editorial asymmetric grids, generous whitespace, quiet metadata, custom SVG and art-directed CSS illustrations
- Motion: one slow orbital motif and one marquee, with a user-controlled pause and reduced-motion handling

## Agent skill kit

The project includes local skill instructions under .agents/skills/ (Codex/agent-compatible layout) and matching loader files under .claude/skills/ (Claude Code). Read the root AGENTS.md first. These are curated project skills inspired by public upstream guidance; each skill links to its source. They are not claims that full upstream projects were installed globally on your machine.

Sources:
- Anthropic frontend-design: https://github.com/anthropics/skills/tree/main/skills/frontend-design
- Vercel web-interface-guidelines: https://github.com/vercel-labs/web-interface-guidelines
- UI UX Pro Max: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Bisq UI design principles: https://github.com/bisq-network/bisq2/tree/main/.agents/skills/ui-design-principles
- W3C WCAG 2.2: https://www.w3.org/TR/WCAG22/
