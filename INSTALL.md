# Installation & Lifecycle

How to install, update and remove the **BC Government Design System** skill (`bc-gov-design-system`).

The repository is an [APM](https://github.com/microsoft/apm) (Agent Package Manager) package: `apm.yml` and `.apm/skills/` sit at the repository root. Everything APM installs is committed to git, so there is no build or copy step. Clone the repository and run `apm install` on the clone. This works the same on Windows, macOS and Linux.

## Dependencies and install order

This is a **level 1** package.

- **Needs installed first:** nothing. `apm.yml` has `dependencies: {}`.
- **Needed by:** `sharepoint-workbench` (level 2) and the `sp-migration` plugin in CSB-Intranet (level 3). Install this package before them.
- **Scope:** install it **globally** (section 3). A global install is recorded in `~/.apm/apm.yml`, not in this repo's `apm.yml`.
- **One scope only:** if it is installed globally, don't also list it in another project's `apm.yml`, or it is installed twice. Check what is already global first:

```bash
apm deps list --global
```

## 1. Install the APM CLI

Use APM 0.35.0 or newer; the `agy` (Antigravity) target needs it.

macOS / Linux:

```bash
curl -sSL https://aka.ms/apm-unix | sh -s -- @v0.35.0
```

Windows (PowerShell):

```powershell
irm https://aka.ms/apm-windows | iex
```

Verify:

```bash
apm --version
```

## 2. Get the repository

```bash
git clone https://github.com/richfrem/bc-gov-design-system.git
cd bc-gov-design-system
git checkout <tag-or-commit>      # optional: pin a release
```

## 3. Install the skill

### Global (recommended for workstations)

Makes the skill available in every project. Global installs need the **absolute path** to the package folder, which here is the repository root; a relative path such as `.` is rejected.

Windows (PowerShell), from the clone:

```powershell
apm install "$PWD" --global --target claude,copilot,codex,agy --parallel-downloads 0
```

macOS / Linux, from the clone:

```bash
apm install "$PWD" --global --target claude,copilot,codex,agy
```

`--parallel-downloads 0` avoids an "Access denied" error on Windows when APM renames its staging folder. If a skill folder already exists that APM did not create, APM skips it; add `--force` to overwrite.

Deployed locations:

```text
APM state & cache:           ~/.apm/                                (Windows: %USERPROFILE%\.apm\)
Claude Code skills:          ~/.claude/skills/bc-gov-design-system/
Copilot & Codex skills:      ~/.agents/skills/bc-gov-design-system/   (shared)
Antigravity (agy) skills:    ~/.gemini/antigravity-cli/skills/bc-gov-design-system/
```

Global (user-scope) support differs by harness: `claude` supports every primitive; `copilot`, `codex` and `agy` support skills but only some other primitives. This package is a single skill, so all four harnesses get it.

### Project-local (alternative, only if it is not installed globally)

To install into one project, run from that project's root and point at your clone. Skip this if the package is already global (see "Dependencies and install order"):

```bash
cd <path-to-consumer-repo>
apm install <path-to-clone> --target claude,copilot,codex,agy
```

This writes `apm.yml` and `apm.lock.yaml` in the project and deploys the skill to `.claude/skills/` and `.agents/skills/`. Commit `apm.yml` and `apm.lock.yaml` together. In CI, reproduce the exact install with `apm install --frozen`.

### Windows vs macOS / Linux

| | Windows | macOS / Linux |
| :--- | :--- | :--- |
| Install APM | `irm https://aka.ms/apm-windows \| iex` | `curl -sSL https://aka.ms/apm-unix \| sh -s -- @v0.35.0` |
| Package path | Absolute, `"$PWD"` from the clone | Absolute, `"$PWD"` from the clone |
| Extra flag | `--parallel-downloads 0` | not needed |
| State folder | `%USERPROFILE%\.apm\` | `~/.apm/` |

## 4. Update and remove

```bash
apm list                                                  # installed packages and active skills

# Update: pull the new release in your clone, then reinstall from it
git pull
apm install <absolute-path-to-clone> --global --target claude,copilot,codex,agy

# Remove (use the exact path recorded in apm.yml; `apm deps list --global` shows it)
apm uninstall <absolute-path-to-clone> --global
```

## Troubleshooting on Windows

**`Access denied` on `.apm-resolution-staging`:** add `--parallel-downloads 0`. If an earlier install was interrupted, delete `%USERPROFILE%\.apm\apm_modules\.apm-resolution-staging` and `%USERPROFILE%\.apm\.apm-lifecycle.lock`, then run it again.

**`N files skipped -- local files exist, not managed by APM`:** a skill folder already exists that APM did not create, for example from an older install. Add `--force` to overwrite it.

**Relative path rejected on `--global`:** use the absolute path (`"$PWD"` from the clone).

**`[WinError 3] The system cannot find the path specified` under `%LOCALAPPDATA%\apm\cache\git\checkouts_v1\...`:** this is Windows' 260-character path limit, seen when a plugin is installed from a GitHub reference. This repository's longest path is 80 characters, so install from a clone as above; if you must install from GitHub, enable long paths (`LongPathsEnabled=1` in `HKLM\SYSTEM\CurrentControlSet\Control\FileSystem`) and restart your terminal.

A failed install is safe to retry: APM restores `apm.yml` and commits nothing.

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
```

Reinstall globally from your clone to test (Windows, PowerShell; on macOS / Linux drop `--parallel-downloads 0`):

```powershell
apm install "$PWD" --global --target claude,copilot,codex,agy --parallel-downloads 0
```

## Upgrading from the legacy layout (v1)

Version 2.0.0 replaced the four skills (`bc-gov-design-system`, `bc-gov-react`, `bc-gov-blazor`, `bc-gov-pptx`), the `plugins/` symlink tree, `marketplace.json` and `symlinks.json` with one self-contained skill using modes. Uninstall any v1 copies before installing v2.
