---
name: bc-gov-design-system
description: >
  Use when building any B.C. Government digital product, UI, or deck with the official
  design system (tokens v5, components v0.7). Triggers: BC Gov branding, government website,
  BC Sans font, BC color palette, government forms, WCAG 2.1 AA government UI, Indigenous
  acknowledgment footer, @bcgov/design-system-react-components, BC Gov React or Next.js app,
  BC Gov Blazor or Razor component, BC Gov PowerPoint or slide deck, BC design system PPTX,
  BC Gov SharePoint Online page or intranet styling.
  Not for non-BC or generic UI work.
user-invocable: true
allowed-tools: Bash, Read, Write
---

# BC Government Design System

One skill, five modes. Pick the mode from the target technology, then read that mode file before writing any code.

## Contents

- [Modes](#modes) • [Constraints](#constraints) • [Quick start](#quick-start) • [Workflow](#workflow) • [Verification](#verification) • [References](#references)

## Modes

| Mode | Use when | Read |
|---|---|---|
| `core` | Static HTML/CSS, any web page, tokens, headers, footers, forms, alerts, accessibility rules | [modes/core.md](references/modes/core.md) |
| `react` | React or Next.js with `@bcgov/design-system-react-components` | [modes/react.md](references/modes/react.md) |
| `blazor` | Blazor Server or WASM, Razor components | [modes/blazor.md](references/modes/blazor.md) |
| `pptx` | PowerPoint decks and slide templates | [modes/pptx.md](references/modes/pptx.md) |
| `sharepoint` | SharePoint Online pages, text web parts, static HTML in document libraries, shared font/CSS assets | [modes/sharepoint.md](references/modes/sharepoint.md) |

If the target is unclear, ask which technology; if it is plain HTML or unspecified web UI, use `core`.

## Constraints

1. BC Sans only. Never substitute Inter, Roboto or system fonts.
2. Use design tokens (`--color-*`, `--text-*`) from `assets/colors_and_type.css`, not raw hex, except in `pptx` where hex without `#` is required.
3. Primary navy `#013366`; focus ring 2px `#2E5DD7` with 4px offset, always visible.
4. WCAG 2.1 AA: no text contrast below 4.5:1.
5. Sentence case for buttons, headings and nav. No emoji, gradients or heavy shadows.
6. Full-page layouts include the Indigenous acknowledgment footer band.
7. Logo is PNG only (`assets/icons/bc-logo.png`, up to 166×64px) with `alt="Government of British Columbia"`.

## Quick start

1. Choose the mode from the table above (ask if the technology is unclear; default `core`).
2. Copy `assets/colors_and_type.css`, the fonts and the logo into the project, keeping the `fonts/` and `icons/` layout.
3. Read the mode file, then build from its patterns.

## Workflow

1. Read `references/modes/<mode>.md`; `core`, `blazor` and `pptx` also use [core-reference.md](references/core-reference.md), `react` uses [react-reference.md](references/react-reference.md). For voice, layout, states and motion rules read [brand-foundations.md](references/brand-foundations.md).
2. Build using tokens, not raw hex. For hosts that strip `<style>` blocks use [inline-style-hosts.md](references/inline-style-hosts.md).
3. Check the output against the mode's acceptance file, then report.

## Bundled files

- `assets/colors_and_type.css`: canonical token file (copy into the project; use absolute font URLs).
- `assets/fonts/`: BC Sans `.woff2`/`.woff` and `LICENSE`.
- `assets/icons/bc-logo.png`: official wordmark.
- `assets/generate.js`: reference PPTX generator (`pptx` mode).
- `assets/examples/ui-kit/index.html` ([README](assets/examples/ui-kit/README.md)) and `assets/examples/preview/*.html`: working HTML component references (open in a browser).

## Verification

Check the output against the mode's acceptance file before reporting done: [design-system](references/acceptance-design-system.md) (`core`), [react](references/acceptance-react.md), [blazor](references/acceptance-blazor.md), [pptx](references/acceptance-pptx.md), [sharepoint](references/acceptance-sharepoint.md). Trigger evals are in `evals/evals.json`.

## References

- Modes: [core](references/modes/core.md) • [react](references/modes/react.md) • [blazor](references/modes/blazor.md) • [pptx](references/modes/pptx.md) • [sharepoint](references/modes/sharepoint.md)
- Detail: [core-reference.md](references/core-reference.md) • [react-reference.md](references/react-reference.md) • [brand-foundations.md](references/brand-foundations.md) • [inline-style-hosts.md](references/inline-style-hosts.md)

Upstream: <https://github.com/bcgov/design-system>. BC Sans is © Province of British Columbia (see `assets/fonts/LICENSE`).
