# BC Government Design System skill

An [APM](https://github.com/microsoft/apm) package exposing the official B.C. Government Design System (tokens v5, BC Sans, component patterns, WCAG 2.1 AA rules) as one agent skill, `bc-gov-design-system`, with five modes: `core` (HTML/CSS), `react`, `blazor`, `pptx` and `sharepoint`.

**Currency:** aligned with the current upstream B.C. Design System as of 2026-10-25: `@bcgov/design-system-react-components` 0.8.1, `@bcgov/design-tokens` 5.0.0 (upstream commit `020bd78`). See [upstream-sources.md](.apm/skills/bc-gov-design-system/references/upstream-sources.md) for sources and the refresh procedure.

## Layout

```
apm.yml                                  package manifest
.apm/skills/bc-gov-design-system/
  SKILL.md                               router (picks the mode)
  references/modes/{core,react,blazor,pptx,sharepoint}.md
  references/                            token and component references, brand foundations, acceptance criteria
  assets/                                colors_and_type.css, BC Sans fonts, logo, generate.js, examples/ (UI kit, previews)
  evals/evals.json                       trigger evals
```

All files are real files (no symlinks). Edit sources under `.apm/` and reinstall; never edit deployed copies in `.agents/`, `.claude/` or similar.

## Install

Full instructions (global, project-local, update, remove) are in [INSTALL.md](INSTALL.md); layout and design decisions are in [architecture.md](architecture.md); agent rules are in [AGENTS.md](AGENTS.md).

Requires APM (`apm --version`; pinned `apm-cli==0.33.0`).

Global, for every project on the workstation (use the local path while developing, or a pinned GitHub ref once pushed):

```bash
# From a local clone
apm install --global /path/to/claude-design-bc-gov-design-system
# From GitHub, pinned to a tag or commit
apm install --global richfrem/bc-gov-design-system#<tag-or-sha>
```

Project-local: run the same command without `--global` inside the project, and git-ignore the deployed folders (`.agents/`, `.claude/`, `.codex/`, `.github/agents/`, `apm_modules/`).

Verify the skill appears under `~/.agents/skills/bc-gov-design-system/` (global) or the project's harness folder.

## Use

```
Use the bc-gov-design-system skill to build a permit application form.
```

## Upstream

Tokens and components follow <https://github.com/bcgov/design-system> (maintained by GCPE). BC Sans is © Province of British Columbia; see `.apm/skills/bc-gov-design-system/assets/fonts/LICENSE`.
