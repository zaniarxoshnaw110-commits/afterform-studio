---
name: ui-design-principles
description: Keep interfaces consistent, low-friction, responsive, and clear through spatial rules, progressive disclosure, and feedback.
---

Reference: Bisq's public UI design principles skill:
https://github.com/bisq-network/bisq2/tree/main/.agents/skills/ui-design-principles

## Reduce interaction cost
- Make common actions easy to reach and rare actions secondary.
- Remove decoration that competes with content.
- Avoid confirmation prompts for reversible, low-risk actions; explain irreversible actions clearly.
- Don't show every advanced option at once.

## Maintain spatial consistency
- Define a spacing scale and reuse it.
- Keep primary actions in predictable places.
- Avoid content jumping when state changes; reserve space where possible.
- Align related elements and use a grid consistently across sections.

## Use progressive disclosure
- Show only the information needed for the current decision.
- Reveal detail in context with expand/collapse controls rather than requiring navigation to another screen.
- Keep secondary actions discoverable without crowding every list.

## Give immediate feedback
- Acknowledge an action promptly.
- Make loading, success, and failure states distinguishable.
- Keep transitions modest and never delay the user's next action for decoration.
- If an optimistic update fails, restore the prior state and explain why.

## Review questions
- Can one step be removed from the primary task?
- Is the next action visible without reading every label?
- Do similar components behave and look alike?
- Does spacing communicate grouping?
- Does the interface communicate when an action succeeded or failed?
