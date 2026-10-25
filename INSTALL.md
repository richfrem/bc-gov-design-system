# Installation & Lifecycle

How to install, update and remove the **BC Government Design System** skill (`bc-gov-design-system`).

The repository is an [APM](https://github.com/microsoft/apm) (Agent Package Manager) package. APM copies the skill into your agent harness folders, keeps a manifest and lockfile, and supports updates and rollbacks on Windows, macOS and Linux with zero symlinks.

## Install the APM CLI

macOS / Linux:

```bash
curl -sSL https://aka.ms/apm-unix | sh -s -- @v0.33.0
```

Windows (PowerShell):

```powershell
irm https://aka.ms/apm-windows | iex
```

Verify:

```bash
apm --version
```

## Install the skill

### Global (recommended for workstations)

Makes the skill available in every project.

```bash
# From GitHub, pinned to a tag or commit
apm install richfrem/bc-gov-design-system#<tag-or-sha> --global --target claude,copilot,codex,antigravity

# From a local clone
apm install /path/to/claude-design-bc-gov-design-system --global --target claude,copilot,codex,antigravity
```

Deployed locations:

```text
APM state & cache:           ~/.apm/
Claude Code skills:          ~/.claude/skills/bc-gov-design-system/
Copilot & Codex skills:      ~/.agents/skills/bc-gov-design-system/   (shared)
Antigravity (agy) skills:    ~/.gemini/antigravity-cli/skills/bc-gov-design-system/
```

### Project-local (consumer repositories)

```bash
cd <path-to-consumer-repo>
apm install richfrem/bc-gov-design-system#<tag-or-sha> --target claude,copilot,codex,antigravity
```

This writes `apm.yml` and `apm.lock.yaml` in the project and deploys the skill to the harness folders (`.claude/skills/`, `.agents/skills/`). Commit the manifest and lockfile; git-ignore the deployed folders.

## Update and remove

```bash
apm list                                              # installed packages
apm update richfrem/bc-gov-design-system  # update to the latest ref
apm uninstall richfrem/bc-gov-design-system --global
```

## Use

```text
Use the bc-gov-design-system skill to build a permit application form.
```

The skill routes to one of five modes (`core`, `react`, `blazor`, `pptx`, `sharepoint`); see [architecture.md](architecture.md).

Optional snippet for a consumer project's `CLAUDE.md` or `AGENTS.md`:

```markdown
## B.C. Government Design System
Use the `bc-gov-design-system` skill before designing any UI. Quick rules: BC Sans only; primary `#013366`, hover `#1E5189`, focus `#2E5DD7`; text `#2D2D2D`, surface `#FAF9F8`, border `#D8D8D8`; 4px radius; no gradients or emoji; sentence-case copy; full-page footers include the Indigenous acknowledgment.
```

## Local development (maintainers)

Edit sources under `.apm/skills/bc-gov-design-system/`, never the deployed copies. Then:

```bash
# Validate the package layout
python3 <path-to-packaging-with-apm>/scripts/validate_apm_package.py --path .

# Audit the skill against authoring standards
python3 <path-to-authoring-skills>/scripts/audit_skill.py .apm/skills/bc-gov-design-system --mode source
python3 <path-to-authoring-skills>/scripts/audit_skill.py .apm/skills/bc-gov-design-system --mode installed

# Reinstall globally from the local clone to test
apm install . --global --target claude,copilot,codex,antigravity
```

## Upgrading from the legacy layout (v1)

Version 2.0.0 replaced the four skills (`bc-gov-design-system`, `bc-gov-react`, `bc-gov-blazor`, `bc-gov-pptx`), the `plugins/` symlink tree, `marketplace.json` and `symlinks.json` with one self-contained skill using modes. Uninstall any v1 copies before installing v2.
