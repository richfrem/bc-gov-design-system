# BC Government Design System Plugin

Provides BC Government Design System v0.7.0 tokens, component patterns, and usage rules
to any Claude Code session building BC Government digital services.

## What this plugin provides

- **`bc-gov-design-system` skill** — invokable skill with complete token reference,
  component HTML/CSS patterns, and non-negotiable design rules for BC Gov UI
- **Full color token reference** — all `--color-*` CSS variables with hex values and usage context
- **Typography system** — BC Sans font declarations, type scale (12px–48px), line heights, weights
- **Spacing & layout tokens** — 8px grid, border radius, shadows, focus ring spec
- **13 component patterns** — header, hero, buttons, forms, alerts, tags, cards, accordion,
  data table, dialog, progress bar, toggle, callout, breadcrumb, footer (with Indigenous acknowledgment)
- **WCAG 2.1 AA rules** — accessibility requirements enforced in all generated output

## Skills

| Skill | Trigger | Purpose |
|---|---|---|
| `bc-gov-design-system` | BC Gov branding, BC Sans, BC color palette, government forms | Build on-brand BC Government UI with correct tokens and components |

## Installation

```bash
uvx --from git+https://github.com/richfrem/agent-plugins-skills plugin-add
# Select: bc-gov-design-system
```

## Usage

In any Claude Code session:
```
Use the bc-gov-design-system skill to build a permit application form.
```

Or invoke directly:
```
/bc-gov-design-system
```

## Source design system

Tokens and component patterns sourced from the official BC Government Design System
(maintained by GCPE). Token source file: `skills/bc-gov-design-system/assets/colors_and_type.css`.

Contact: designsystem@gov.bc.ca