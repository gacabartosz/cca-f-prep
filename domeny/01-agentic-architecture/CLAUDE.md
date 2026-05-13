# Domena 01 — Agentic Architecture

**Waga w egzaminie CCA-F: 27%** — największa domena, najwięcej czasu nauki.

> **Disclaimer**: Lista subtopików oparta na publicznie znanej strukturze platformy Claude (docs.claude.com, docs.anthropic.com, Claude Code documentation). Pełen oficjalny blueprint CCA-F dostępny w Anthropic Academy po enrollment. Wszystkie scenariusze egzaminacyjne w tym repo to **sample exam-style**, nie pytania z prawdziwego egzaminu.

## Subtopiki (publicznie udokumentowane features Claude/Claude Code, do mapowania na egzamin)

### 1. Agent loops & control flow
- Tool use loop: assistant → tool_use → tool_result → assistant
- Loop termination: zatrzymanie po `stop_reason: end_turn` vs `tool_use`
- Max iterations / max tokens guard rails
- Streaming vs non-streaming agent loops
- Server-side vs client-side loop orchestration

### 2. Tool use orchestration
- Tool definition: name, description, input_schema (JSON Schema)
- Parallel tool calls vs sequential
- Tool result handling (success / error / partial)
- Tool choice modes: auto / any / tool / none
- Retry strategies dla failed tool calls
- Idempotency w tool execution

### 3. Multi-agent patterns
- Subagent delegation (Claude Code Agent tool, .claude/agents/)
- Hierarchical: orchestrator → specialists → review
- Peer-to-peer agent communication patterns
- Context isolation between agents (per-subagent context window)
- Cost considerations: orchestrator (Opus/Sonnet) vs specialists (Sonnet/Haiku)

### 4. State management across turns
- Conversation state in messages array
- Persistent memory (Claude Code memory system, `~/.claude/projects/<scope>/memory/`)
- Compaction (system-managed message compression)
- State externalization (writing to files, databases)
- Session continuity strategies

### 5. Error recovery & resilience
- Tool error → retry vs abort vs ask user
- Hallucination detection patterns
- Confidence signals (multi-model agreement, low-temperature retry)
- Graceful degradation (Opus → Sonnet → Haiku fallback)
- Stop conditions & circuit breakers

### 6. Agent boundaries & permissions
- Tool permissions model (Claude Code settings.json `permissions.allow`/`deny`)
- Read-only vs write operations
- Sandboxing (worktrees, isolated execution)
- User confirmation for destructive operations
- Audit trail (hooks dla compliance)

### 7. Planning vs reactive agents
- Plan mode w Claude Code (ExitPlanMode workflow)
- ReAct pattern (reasoning + acting)
- Reflexion (self-critique loops)
- Tree-of-thought vs linear chain
- Cost trade-off: planning depth vs response time

## Plan nauki na tę domenę

| Tydzień | Co czytam | Co buduję | Co druję |
|---|---|---|---|
| 1 | docs.claude.com/tool-use full | Mini agent: file-organizer (tool use loop) | 10 scenariuszy z domeny |
| 2 | Claude Code Agent tool docs + .claude/agents/ examples | Subagent: researcher + summarizer pair | 10 scenariuszy |
| 3 | Memory system + compaction docs | Long-running session experiment (1000+ turns) | 10 scenariuszy + mock exam |
| 4 | ReAct paper + Reflexion paper (jeśli relevant) | Reflexion loop wokół agent decisions | 10 scenariuszy + final mock |

## Linki do publicznych źródeł nauki

- **docs.claude.com/tool-use** — tool use API reference
- **docs.claude.com/agents** — agents overview (jeśli istnieje publicznie)
- **claude.com/api/messages** — Messages API z tool_use
- **github.com/anthropics/claude-code** — Claude Code repo (jeśli public)
- **Skills profile Bartosza** — `bartoszgaca.pl/output/bartosz_gaca_skills_profile.md` — sekcje "AI Engineering & MCP Protocol", "End-to-End Automation Architect"

## Konkretne moje doświadczenia (do użycia w scenariuszach drilli)

- `team-dev` (19 agentów, 4 warstwy) — multi-agent orchestration w pełnej skali
- `Ralph` (autonomous AI dev loop) — 23 maile do robotyków w 9 krajach bez interwencji
- `gaca-core` — multi-provider agent z routing decisions
- `team-mar` / `team-strat` — różne style orchestracji (linear vs hierarchical)

## Status

- Drille przerobione: 0/40 (cel: 10 scenariuszy x 4 tygodnie)
- Mini-projekty: 0/4
- Mock exam score (ta domena): — (baseline jeszcze nie zrobiony)
