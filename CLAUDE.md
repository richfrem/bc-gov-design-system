# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repository Is

This is the **B.C. Government Design System** — an official design system for British Columbia government digital services. It provides:

- **Design tokens** (CSS custom properties for colors, typography, spacing, shadows, focus states)
- **Component library** (HTML/CSS patterns for buttons, forms, alerts, headers, footers, etc.)
- **Brand guidelines** (tone, visual foundations, accessibility requirements)
- **Reusable assets** (BC Sans fonts, BC government logo, Font Awesome Pro icons)

**Version:** v0.7.0 (Component Library) / v3.2.0 (Design Tokens)  
**Maintained by:** Government Communications & Public Engagement (GCPE)  
**Contact:** designsystem@gov.bc.ca

## File Structure & Purpose

```
bc-design-system/
├── README.md                    ← Full brand guidelines, visual foundations, content tone
├── SKILL.md                     ← Skill definition for Claude Code (use this to design BC Gov UI)
├── colors_and_type.css          ← ALL CSS variables — import this or copy its tokens
├── fonts/
│   ├── BCSans-Regular.woff2     ← Mandatory BC Sans typeface (5 weights: Regular, Bold, Light + Italics)
│   └── ...
├── assets/
│   └── bc-logo.png              ← Official BC government wordmark (166×64px)
├── ui_kits/
│   └── bc-gov-website/
│       ├── index.html           ← Full interactive UI kit (home page, form, data table, all components)
│       └── README.md            ← UI kit documentation
├── preview/                     ← Individual component preview cards
│   ├── colors-brand.html
│   ├── colors-semantic.html
│   ├── type-scale.html
│   ├── components-buttons.html
│   ├── components-inputs.html
│   ├── components-alerts.html
│   └── ...
└── _usage/                      ← Usage documentation (governance, adoption guides)
```

## Key Design Tokens Quick Reference

### Primary Colors
- **Primary:** `#013366` (navy) — buttons, headers, primary actions
- **Primary hover:** `#1E5189` (lighter navy)
- **Primary pressed:** `#01264C` (darker navy)
- **Focus ring:** `#2E5DD7` (bright blue) — always visible, 2px outline, 4px offset

### Typography
- **Primary font:** BC Sans (woff2 files in `fonts/`). **Never substitute** with Inter, Roboto, or system fonts.
- **Type scale:** 12px (label) → 14px (body-sm) → 16px (body) → 18px (body-lg) → 20-48px (headings/display)
- **CSS variables:** `--font-primary`, `--text-h1`, `--text-body`, `--lh-body`, etc. (see `colors_and_type.css` line 75-101)

### Semantic Colors
- **Danger:** `#CE3E39` (red) / bg `#F4E1E2`
- **Success:** `#42814A` (green) / bg `#F6FFF8`
- **Warning:** `#F8BB47` (amber) / bg `#FEF1D8`
- **Info:** `#2E5DD7` (blue) / bg `#D8EAFD`

### Spacing & Radius
- **Base unit:** 8px grid — use `--space-1` through `--space-10` (4px → 96px)
- **Border radius:** 4px (buttons, inputs, cards), 24px (doc frames), 999px (pills/tags)
- **Borders:** `1px solid #D8D8D8` (standard), `1px solid #FBD389` (Indigenous acknowledgment accent)

### Text Colors
- **Primary text:** `#2D2D2D` (near-black)
- **Secondary text:** `#474543` (dark gray)
- **Disabled/placeholder:** `#9F9D9C` (light gray)
- **Links:** `#255A90` (navy blue, underlined)

## How to Use This Design System

### For HTML/CSS Prototypes
1. Open `bc-design-system/ui_kits/bc-gov-website/index.html` in a browser to see the interactive UI kit
2. Open `bc-design-system/preview/*.html` files to see individual component examples
3. Copy the relevant HTML structure and CSS patterns into your project
4. Import `colors_and_type.css` or copy its CSS variables into your root stylesheet
5. Copy `fonts/` directory into your project's public assets
6. Declare BC Sans via `@font-face` (see `colors_and_type.css` lines 20-67 for font-face declarations)

### For Integration into React / Next.js / Other Frameworks
1. Copy `fonts/` into `public/fonts/` (or equivalent asset directory)
2. Add BC Sans font-face declarations to your global CSS
3. Use token values from `colors_and_type.css` as design tokens in your component library:
   - Extract CSS variable values and map to Tailwind config, styled-components, CSS-in-JS, or component theme files
   - Reference `README.md` for visual rules (no gradients, 4px radius, sentence case, etc.)
4. Reference `bc-design-system/ui_kits/bc-gov-website/index.html` for component patterns
5. Invoke the **bc-design** skill (`bc-design-system/SKILL.md`) for detailed guidance on recreating components

## Core Design Rules (Always Apply)

- **Font:** BC Sans (primary), Roboto (fallback for labels/small text). Never substitute without approval.
- **Colors:** Use semantic color tokens, never raw hex unless building a color utility library.
- **No gradients.** Flat, clean government aesthetic.
- **No emoji.** Government interfaces use text and Font Awesome 6 Pro icons only.
- **No decorative shadows.** Subtle elevation only: `0 1px 4px rgba(0,0,0,0.13), 0 1px 2px rgba(0,0,0,0.1)`
- **Focus states:** ALWAYS visible — `2px solid #2E5DD7` outline with `4px` offset.
- **Accessibility:** WCAG 2.1 AA minimum, focus rings on all interactive elements, contrast ratios verified.
- **Tone:** Plain English, sentence case (not Title Case), no exclamation marks, no jargon.
- **Footer:** If building a full-page layout, include Indigenous land acknowledgment band (`#252423` bg, `#FBD389` top border).

## When Building BC Government UI

1. **Reference the SKILL.md first:** `bc-design-system/SKILL.md` contains detailed patterns and rules
2. **Read README.md for visual foundations:** `bc-design-system/README.md` documents tone, voice, colors, typography, and layout
3. **Copy patterns from the UI kit:** `bc-design-system/ui_kits/bc-gov-website/index.html` shows real component implementations
4. **Check preview cards:** `bc-design-system/preview/` has individual component examples
5. **Import colors_and_type.css:** Use it as the source of truth for all token values

## No Build Process Required

This is a **static design system repository**. There is no build step, no npm scripts, no tests to run. Components are HTML/CSS files ready to view in a browser.

- To view components: Open `.html` files directly in a browser
- To integrate tokens: Copy CSS variables or extract values into your project's token system
- To submit updates: See `bc-design-system/README.md` and contact designsystem@gov.bc.ca for contribution guidelines

## Important Notes

- **BC Sans font:** Maintained by GCPE, not on Google Fonts. Included in `fonts/` directory with 6 weights (Regular, Bold, Light + Italic variants).
- **Font Awesome Pro:** Design system uses Font Awesome 6 Pro icons. You'll need an org license. Free tier available as fallback.
- **Figma source:** This system is derived from the official Figma file "B.C. Design System (Community).fig" maintained by GCPE. The `README.md` documents what's in Figma and what's exported here.
- **Version management:** Always check `README.md` for the current version. Tokens and components may be versioned separately.

## Quick Links

- **Design Tokens:** `bc-design-system/colors_and_type.css` (CSS custom properties)
- **Component Patterns:** `bc-design-system/ui_kits/bc-gov-website/index.html` (interactive reference)
- **Brand Guidelines:** `bc-design-system/README.md` (full visual foundations, tone, accessibility)
- **Skill for Claude:** `bc-design-system/SKILL.md` (invoke with `use bc-design skill`)

---

## Plugin & Skill Authoring — How This Repo Is Structured

This repo also contains an installable Claude Code plugin that exposes the design system as an invocable agent skill.

### File structure

```
.claude-plugin/
└── marketplace.json              ← marketplace catalog (strict: true)

plugins/
└── bc-gov-design-system/
    ├── .claude-plugin/
    │   └── plugin.json           ← plugin manifest (version, keywords, skills list)
    ├── README.md
    ├── assets/                   ← CANONICAL copies — one file, one location
    │   ├── colors_and_type.css
    │   ├── fonts/                ← symlinks → bc-design-system/fonts/*.woff*
    │   └── icons/                ← symlink  → bc-design-system/assets/bc-logo.png
    └── skills/
        └── bc-gov-design-system/
            ├── SKILL.md          ← agentskills.io format (frontmatter + markdown)
            ├── evals/
            │   └── evals.json    ← trigger/no-trigger eval cases
            ├── references/
            │   ├── REFERENCE.md  ← full 13-component HTML/CSS patterns
            │   └── acceptance-criteria.md
            └── assets/           ← MIRROR dirs with file-level symlinks only
                ├── colors_and_type.css  → plugin root assets/
                ├── fonts/               → plugin root assets/fonts/
                └── icons/               → plugin root assets/icons/

symlinks.json                     ← manifest of all symlinks (restore with symlink_manager.py)
```

### ADR rules enforced here

- **ADR-003:** Real files live at plugin root `assets/`. Skill `assets/` contains only file-level symlinks (never copies, never directory symlinks). Mirror directory structure must match.
- **ADR-004:** Plugin is self-contained — no cross-plugin script dependencies. Font source files are in `bc-design-system/fonts/` (this repo), symlinked into plugin root.
- **ADR-005:** Skill is framework-agnostic — no hard dependency on any orchestration plugin.

### Creating or modifying symlinks

The symlink manager script handles cross-platform symlink creation (Windows Developer Mode required):

```bash
# Create a single symlink (src and dst relative to repo root)
python .agents/skills/symlink-manager/scripts/symlink_manager.py create \
  --src bc-design-system/fonts/BCSans-Regular.woff2 \
  --dst plugins/bc-gov-design-system/assets/fonts/BCSans-Regular.woff2

# Audit all symlinks for broken/missing
python .agents/skills/symlink-manager/scripts/symlink_manager.py audit

# Restore all symlinks from manifest (after git clone on Windows)
python .agents/skills/symlink-manager/scripts/symlink_manager.py restore

# Diagnose environment (check Developer Mode, git core.symlinks, etc.)
python .agents/skills/symlink-manager/scripts/symlink_manager.py diagnose
```

Symlinks are tracked in `symlinks.json` at repo root. After any `git clone` or `git reset --hard` on Windows, run `restore` to recreate all links.

**Windows requirement:** Enable Developer Mode (Settings → System → For Developers) before creating symlinks, and set:
```bash
git config core.symlinks true
```

### Installing the plugin locally

```bash
# From this repo root — installs skill into .agents/skills/bc-gov-design-system/
uvx --from git+https://github.com/richfrem/agent-plugins-skills plugin-add plugins/ -y
```

The installer (plugin_add.py) resolves the full symlink chain and writes real file copies into `.agents/`. After install, the skill is available in any Claude Code session in this project.

### Installing via marketplace (from another project)

Once this repo is pushed to GitHub:
```
/plugin marketplace add <github-username>/claude-design-bc-gov-design-system
/plugin install bc-gov-design-system
```

### What the installer does to symlinks

The uvx/plugin_add.py installer **resolves symlink chains to real file content** at install time. A two-hop chain like:

```
skill/assets/fonts/BCSans-Regular.woff2
  → plugin root/assets/fonts/BCSans-Regular.woff2    (symlink)
    → bc-design-system/fonts/BCSans-Regular.woff2    (symlink)
      → [real file, 254KB]
```

…produces a single real 254KB file at `.agents/skills/bc-gov-design-system/assets/fonts/BCSans-Regular.woff2`. No symlinks remain in the installed copy.

### Adding a new skill to the plugin

1. Create skill directory: `plugins/bc-gov-design-system/skills/<skill-name>/`
2. Add `SKILL.md` (agentskills.io frontmatter: `name`, `description` ≤1024 chars, `allowed-tools`)
3. Add `evals/evals.json` with `should_trigger: true/false` cases
4. Add `references/acceptance-criteria.md`
5. If the skill needs shared assets: add real files to `plugins/bc-gov-design-system/assets/`, then create file-level symlinks in `skills/<skill-name>/assets/` using symlink_manager.py
6. Register the skill path in `.claude-plugin/plugin.json` `skills` array
7. Re-run `uvx ... plugin-add plugins/ -y` to reinstall

### DO NOT touch

- `bc-design-system/SKILL.md` — this is the Claude Design export (name: `bc-design`), not the agent plugin skill
- `bc-design-system/fonts/` — canonical font source; only ever symlinked to, never duplicated