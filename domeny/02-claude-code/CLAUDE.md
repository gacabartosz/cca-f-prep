# Domena 02 — Claude Code

**Waga w egzaminie CCA-F: 20%**

> **Disclaimer**: Lista subtopików oparta na publicznie udokumentowanych features Claude Code (docs.claude.com/code, github.com/anthropics/claude-code jeśli public). Pełen oficjalny blueprint CCA-F dostępny w Anthropic Academy po enrollment.

## Subtopiki (publiczne features Claude Code)

### 1. Slash commands
- Struktura `.claude/commands/<name>.md` (project) vs `~/.claude/commands/<name>.md` (user-global)
- Frontmatter: `description`, opcjonalne `model`, `subagent_type`
- Argument handling: `$ARGUMENTS` w body
- Plugin-namespaced commands (`/plugin:command`)
- Built-in commands: `/help`, `/clear`, `/config`, `/init`, `/review`, `/security-review`

### 2. Subagents
- Definition: `.claude/agents/<name>.md` lub `~/.claude/agents/<name>.md`
- Frontmatter: `name`, `description`, opcjonalne `tools`
- System prompt w body markdown
- Invocation via Agent tool z `subagent_type=<name>`
- Context isolation per subagent
- When to use: parallelization, context protection, specialized expertise

### 3. Hooks
- Event types: `PostToolUse`, `Stop`, `UserPromptSubmit`, `PreToolUse`, `Notification`, `SubagentStop`, `SessionStart`
- Matcher pattern: regex na tool name lub event
- Shell command execution
- Settings: `.claude/settings.json` `hooks.<EventType>` array
- Failure handling: hook exit code, error to user

### 4. MCP servers integration
- `.mcp.json` w project root (project-scoped servers)
- `~/.claude.json` `mcpServers` (user-global)
- Server types: stdio, SSE, HTTP
- `enabledMcpjsonServers` w settings dla selective enable
- `disabledMcpServers` dla selective disable per scope
- Tool naming: `mcp__<server>__<tool>`

### 5. Skills
- Location: `~/.claude/skills/<name>/SKILL.md` (user) lub project `.claude/skills/`
- Symlinks to `~/.agents/skills/` pattern (Bartosz uses)
- Frontmatter: `name`, `description` (trigger words)
- Body: markdown z `## Overview`, `## Process`, `## Triggers`, `## Constraints`
- Invocation: detection by Claude based on user prompt match to description
- Marketplace built-ins: `init`, `review`, `security-review`, `loop`, `schedule` itp.

### 6. settings.json
- `permissions.allow` / `permissions.deny` arrays — tool permission rules
- `hooks` configuration
- `enabledMcpjsonServers` array
- `model` override per project
- `env` variables dla project
- `.claude/settings.local.json` dla machine-specific (gitignored)

### 7. Permissions model
- Tool name matching: `Read`, `Edit`, `Bash(git:*)`, `mcp__server__tool`
- Wildcard patterns
- Permission modes: `default`, `acceptEdits`, `plan`, `bypassPermissions`
- User confirmation flow dla disallowed tools
- `.claude/settings.local.json` overrides

### 8. Plan mode
- Activation: user types `/plan` lub keyboard shortcut
- Read-only enforcement (no edits, no destructive Bash)
- Plan file location (mentioned in system message)
- `ExitPlanMode` tool — wymagany żeby wyjść
- Use case: pre-implementation design

### 9. IDE integrations
- VS Code extension
- JetBrains plugin
- Terminal-native CLI
- Web app (claude.ai/code)
- Desktop app (Mac/Windows)

### 10. Session management
- Auto-compaction near context limit
- Memory across sessions (memory system)
- Sub-session vs parent-session context

## Plan nauki na tę domenę

| Tydzień | Co czytam | Co buduję | Drille |
|---|---|---|---|
| 1 | Claude Code docs full + this repo's `.claude/` | 3 nowe slash commands w `cca-f-prep` | 10 scenariuszy |
| 2 | Subagents docs + Skills marketplace | 1 nowy custom subagent + 1 skill | 10 scenariuszy |
| 3 | Hooks docs + settings.json reference | 3 hooków (PreToolUse + SessionStart + Notification) | 10 scenariuszy + mock |

## Linki do publicznych źródeł

- **docs.claude.com/code** — Claude Code reference
- **Bartosz's `.claude/` configs** — `~/.claude/`, `/Users/gaca/projects/personal/cca-f-prep/.claude/`, `~/.agents/skills/`
- **github.com/anthropics/claude-code** — jeśli public

## "Eat your own dog food" — to repo jest live demo tej domeny

Każdy slash command, subagent, hook w `cca-f-prep` to artefakt egzaminacyjny. Reviewer Partner Network widzi konkretne, działające przykłady.

## Status

- Drille: 0/30
- Mini-projekty: 0/3
- Mock exam score: —
