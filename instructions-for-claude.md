# PROMPT for CLAUDE CODE

I have a BC Government Design System exported from Claude Design. The repo contains:

- bc-design-system/
  - _usage/          (usage documentation)
  - assets/          (images, icons, logos)
  - fonts/           (BC Sans font files)
  - preview/         (preview screens)
  - ui_kits/         (component UI kits)
  - colors_and_type.css  (all color and typography tokens)
  - README.md

Your job is to generate TWO files:

---

## FILE 1: SKILL.md

Create a SKILL.md at the repo root following this exact structure:

```
---
name: bc-gov-design-system
description: "Use this skill when building any BC Government digital product. Triggers: BC Gov branding, government website, BC Sans font, BC color palette, government forms, or any project requiring WCAG 2.1 AA compliance with BC Government visual identity."
---

# BC Government Design System

## Color Tokens
[Extract ALL colors from colors_and_type.css - Brand/Primary, Neutrals, Semantic, Interactive. Include CSS variable name, hex value, and usage context for each]

## Typography
[Extract font families, the full type scale (sizes, weights, line heights) from colors_and_type.css and any font files present]

## Spacing & Layout
[Extract spacing scale, border radius values, shadow tokens]

## Components
For each component found in ui_kits/:
- Component name
- Variants/states available
- HTML structure pattern
- CSS class names or variable references
- Accessibility notes (aria labels, roles)

## Usage Rules
- Always use BC Sans as primary font (woff2 files in /fonts)
- Fall back to Noto Sans if BC Sans unavailable
- All interactive elements must meet WCAG 2.1 AA contrast ratios
- Use semantic color tokens (not raw hex) in component code
- Government forms must follow the input/alert component patterns exactly

## Do NOT
- Use colors outside the defined palette
- Deviate from the type scale
- Create custom components when a system component exists
```

---

## FILE 2: CLAUDE.md

Create a CLAUDE.md at the repo root (this is auto-read by Claude Code in any project):

```
# BC Government Design System - Project Context

This repo IS the BC Government design system exported from Claude Design.

## How to use this design system in a project
Reference this repo's SKILL.md for all design tokens and component patterns.

## Quick token reference
[Insert the 10 most-used color variables with their hex values]
[Insert base font-size, heading scale summary]

## Component inventory
[List all components with one-line descriptions]

## Integration instructions
1. Copy /fonts/ into your project's public/fonts directory
2. Import colors_and_type.css or copy its variables into your root CSS
3. Reference SKILL.md for component HTML/CSS patterns

## File structure
[Document what each folder contains]
```

---

## Instructions for generating these files:

1. Start by reading `colors_and_type.css` in full — this is the source of truth for tokens
2. List all files in `ui_kits/` and `_usage/` to inventory components  
3. Check `README.md` for any existing documentation to incorporate
4. Check `fonts/` directory for available font files
5. Generate SKILL.md first, then CLAUDE.md
6. The SKILL.md should be detailed enough that ANY Claude Code session can build on-brand BC Gov UI without access to the original files
7. The CLAUDE.md should be a quick-reference summary that fits in context efficiently

After generating both files, tell me what tokens and components you found, and flag anything that was missing or ambiguous.

Guidance:
1. When creating skill please also create a plugin for it using these two scaffolders 
a) create-skill
b) create-plugin
2. follow ADRs i've established in the repo for plugin and skill creation C:\Users\RICHFREM\source\repos\agent-plugins-skills\ADRs
3. create a marketplace for the plugin using manage-marketplace

IF you have an issue with any of the skills or sub-agents, commants used in .agents folder, make sure you modify those at the source and reinstall the plugin via uvx --from git+https://github.com/richfrem/agent-plugins-skills plugin-add C:\Users\RICHFREM\source\repos\agent-plugins-skills\plugins
