# Domena 03 — Prompt Engineering

**Waga w egzaminie CCA-F: 20%**

> **Disclaimer**: Lista subtopików oparta na publicznie udokumentowanych best practices Anthropic Prompt Engineering (docs.claude.com/prompt-engineering, Anthropic cookbook, prompting guides).

## Subtopiki (publicznie udokumentowane best practices)

### 1. System prompts
- Role w system prompt vs user message
- Persona definition
- Behavioral constraints
- Output format specification
- Multi-paragraph vs single instruction

### 2. XML tags structuring
- `<context>`, `<example>`, `<task>`, `<instructions>` — typowe tagi
- Nested tags dla hierarchii
- Why XML > markdown dla complex prompts (Anthropic-recommended)

### 3. Few-shot examples
- 1-shot, few-shot, zero-shot trade-offs
- Example selection (representative, diverse)
- Example formatting w XML
- Where to place examples (system vs user)

### 4. Chain-of-thought (CoT)
- "Let's think step by step" patterns
- Explicit CoT vs implicit (modern Claude)
- Cost vs quality trade-off
- When CoT hurts (simple tasks)

### 5. Prefill techniques
- Assistant turn prefill (assistant_prefill / response prefix)
- Constraint enforcement via prefill
- JSON output prefilling
- Anti-jailbreak prefill

### 6. Output formatting
- Structured output (JSON, XML)
- Markdown vs plain text
- Length control (explicit token limits, "in 2 sentences")
- Format enforcement strategies

### 7. Prompt caching
- ephemeral cache_control marker
- Cache TTL (5 min standard, configurable)
- Cache hit/miss observability
- What to cache: system prompt, few-shot examples, RAG context
- What NOT to cache: per-request user input

### 8. Role specification
- Expert persona ("You are a senior tax lawyer specializing in...")
- Audience adaptation ("Explain to a 5-year-old" vs "Explain to a PhD")
- Tone control (formal, casual, technical)

### 9. Instruction placement
- Beginning vs end (recency bias)
- System vs user message
- Multi-step instructions: numbered list vs prose
- Negative instructions ("don't do X") vs positive ("do Y")

### 10. Iteration & debugging
- A/B testing prompts (manual eval, then automated)
- Hallucination triggers
- Output drift over time (model updates)
- Eval harness patterns

## Plan nauki

| Tydzień | Co czytam | Co buduję | Drille |
|---|---|---|---|
| 1 | docs.claude.com/prompt-engineering + Anthropic cookbook | Refactor system promptów w 3 produktach (reklamacje24/odpisznapismo/biznesbezklikania) | 10 scenariuszy |
| 2 | Prompt caching docs | Implement cache_control w `gaca-core` AI Bus | 10 scenariuszy |
| 3 | Eval harness patterns | Build mini eval framework dla pism reklamacyjnych | 10 scenariuszy + mock |

## Moje praktyczne doświadczenia

- `humanizer-zh` skill — antywzorce AI-generated text (LinkedIn cringe patterns)
- 3 brandy w `pdf-generator` skill — różne tone per audience
- Multi-model routing w `smart-router` — implicit prompt engineering (model match to task)

## Linki

- **docs.claude.com/prompt-engineering** — full reference
- **github.com/anthropics/anthropic-cookbook** — prompt patterns w kodzie

## Status

- Drille: 0/30
- Mini-projekty: 0/3
- Mock exam score: —
