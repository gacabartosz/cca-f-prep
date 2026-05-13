# Domena 05 — Context Management

**Waga w egzaminie CCA-F: 15%** — najmniejsza domena, ale często najtrudniejsza w praktyce.

> **Disclaimer**: Lista subtopików z publicznie udokumentowanych features (Claude API + Claude Code memory system + prompt caching docs).

## Subtopiki (publicznie udokumentowane)

### 1. Context window limits per model
- Opus 4.x — context window per model card (do potwierdzenia z aktualnej dokumentacji)
- Sonnet 4.x — context window per model card
- Haiku 4.x — context window per model card
- 1M context variants (extended context)
- Token counting (tiktoken-like estimators)

### 2. Prompt caching strategy
- Default 5-min TTL
- `cache_control: {type: ephemeral}` marker placement
- Cache key: prefix matching from beginning of messages
- What to cache: stable system prompt, RAG context, few-shot examples
- What NOT to cache: per-request user input

### 3. Context compaction
- Auto-compaction near context limit
- System-managed compression (Claude Code "The system will automatically compress prior messages")
- Manual compaction strategies (summarization, sliding window)
- Trade-offs: lossless (file references) vs lossy (summaries)

### 4. Memory tools
- Claude Code memory system (`~/.claude/projects/<scope>/memory/`)
- MEMORY.md index pattern
- Per-type memory files (feedback, project, user, reference)
- Loading strategy: index always loaded, specific files on-demand
- Cross-session continuity

### 5. Conversation state
- Messages array as canonical state
- Tool results inline in messages
- Stateful vs stateless agent designs
- Externalizing state (files, databases)

### 6. Long-running sessions
- Compaction triggers (token threshold)
- Hand-off patterns (summary to next session)
- Resume patterns (read previous memory)
- Risk: drift over many turns

### 7. Token budgets
- Per-request budgets (max_tokens parameter)
- Multi-model routing dla budget optimization (`smart-router`)
- Cost monitoring per session / per product
- Streaming for early stop

### 8. Compaction triggers & decisions
- When to compact: % full context
- What to compact: oldest messages, tool results, completed sub-tasks
- What to keep: system prompt, recent context, references to compacted content

### 9. RAG context patterns
- Embedding-based retrieval
- File reference patterns ("see file X line Y")
- Hybrid: cache + retrieve
- Re-ranking & filtering

### 10. Multi-turn coherence
- Persona drift over many turns
- Hallucination compounding
- Anchor messages (re-injection of system prompt characteristics)

## Plan nauki

| Tydzień | Co czytam | Co buduję | Drille |
|---|---|---|---|
| 1 | docs.claude.com/prompt-caching + Claude Code memory docs | Eksperyment: long-running session (200+ turns) z observability | 10 scenariuszy |
| 2 | Compaction patterns + RAG context | Refactor `gaca-core` cache layer z observability | 10 scenariuszy |
| 3 | Multi-turn coherence patterns | Implement anchor messages w aplikantai-style products | 10 scenariuszy + mock |

## Moje praktyczne doświadczenia

- **Claude Code memory system used in production** — `~/.claude/projects/-Users-gaca-projects-personal-bartoszgaca-pl/memory/` z 50+ entries po 6+ miesiącach pracy
- **`gaca-core` AI Bus** ma cache layer multi-provider (różne TTL per provider)
- **Auto-compaction tested** w long sessions z Claude Code Opus 4.6/4.7 (1M context) — observation: lossless dla file references, lossy dla narrative content
- **Multi-tenant prompt cache sharing** w `gaca-core` (50+ modeli, cross-product cache reuse)

## Linki

- **docs.claude.com/prompt-caching** — caching reference
- **claude.com/docs/context** — context management overview (jeśli istnieje pod tym URL)
- **anthropic.com/news** — periodic announcements o context window updates

## Status

- Drille: 0/30
- Mini-projekty: 0/3
- Mock exam score: —
