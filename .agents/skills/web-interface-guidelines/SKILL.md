---
name: web-interface-guidelines
description: Review browser, interaction, responsive, performance, and content choices for web interfaces.
---

Upstream reference: Vercel Labs web-interface-guidelines:
https://github.com/vercel-labs/web-interface-guidelines

The source is a living list; consult upstream when a current edge case matters. This project skill is a summary, not a replacement for the full source.

## Structure and semantics
- Use native elements that match the job: links navigate, buttons act, inputs collect.
- Every page has a meaningful title, one clear main heading, landmarks, and logical heading levels.
- Provide a skip link for keyboard users and accessible names for controls.
- Avoid clickable divs when a button or link can do the job.

## Interaction
- Acknowledge an action promptly and clearly.
- Preserve state and prevent duplicate submissions while requests are pending.
- Error messages say what happened and how to recover; empty states explain the next useful action.
- Don't make essential information appear only on hover.
- Keep primary actions and navigation in predictable places.
- Ensure Escape closes transient menus when expected; manage focus if a dialog is introduced.

## Responsive behavior
- Check the smallest practical viewport and then larger breakpoints.
- Never depend on desktop-only hover effects.
- Keep touch targets comfortable; long text, buttons, and navigation must wrap without clipping.
- Reserve media space to avoid layout shift. Test 320–390px, tablet, and wide desktop.
- Check actual content lengths, not only placeholder content.

## Performance and finish
- Avoid unnecessary dependencies for static pages.
- Use responsive images and explicit image sizing when using raster images.
- Honor reduced-motion preferences; don't animate every element by default.
- Give links and buttons visible hover and keyboard focus states.
- Test essential no-JavaScript behavior where possible, JS interactions, and the browser console.
