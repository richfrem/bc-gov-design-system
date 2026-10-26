# AGENTS.md

## Overview

APM package that ships one skill, `bc-gov-design-system`, for building B.C. Government UI and decks. Layout and modes: [architecture.md](architecture.md). Install: [INSTALL.md](INSTALL.md). `CLAUDE.md` only bridges to this file.

## Layout

- Package manifest: `apm.yml`. Skill: `.apm/skills/bc-gov-design-system/` (router `SKILL.md`, `references/modes/`, `assets/`, `evals/`).
- Skill: `.apm/skills/bc-gov-design-system/` (router `SKILL.md`, `references/modes/`, `assets/` including `examples/`, `evals/`).

## Core Commands

- Validate the package: `python3 <path-to-packaging-with-apm>/scripts/validate_apm_package.py --path .`
- Audit the skill: `python3 <path-to-authoring-skills>/scripts/audit_skill.py .apm/skills/bc-gov-design-system --mode source` (and `--mode installed`).
- Test an install (from the clone; global installs need an absolute path): `apm install "$PWD" --global --target claude,copilot,codex,agy` (add `--parallel-downloads 0` on Windows).

## Rules

- NEVER create symlinks; the skill must be self-contained.
- NEVER edit deployed copies under `.agents/`, `.claude/`, `.codex/` or `.gemini/`; edit `.apm/` and reinstall.
- Keep `SKILL.md` at 100 lines or fewer; put detail in `references/` and link it directly from `SKILL.md`.
- Keep `evals/evals.json` a root array with `should_trigger` booleans.
- Design rules in every mode: BC Sans only, tokens from `assets/colors_and_type.css`, navy `#013366`, visible focus ring, WCAG 2.1 AA, sentence case, PNG logo only.
- Report inlined-token output as "BC design tokens applied", never "design-system compliant".
- Keep consumer-project rules (division headers, link maps, publish commands) out of this package.
- NEVER commit to `main`, push, or force-push without an explicit user instruction.
- Pin installs to a tag or commit SHA.
