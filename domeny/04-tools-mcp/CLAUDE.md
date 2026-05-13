# Domena 04 — Tools & MCP

**Waga w egzaminie CCA-F: 18%**

> **Disclaimer**: Lista subtopików z publicznie udokumentowanych specyfikacji (Anthropic Tool Use API + Model Context Protocol spec na modelcontextprotocol.io).

## Subtopiki (publiczne docs)

### 1. Tool use API (Messages API)
- `tools` parameter — array of tool definitions
- Tool definition: `name`, `description`, `input_schema` (JSON Schema)
- `tool_choice`: auto / any / tool / none
- Response: `content` array z `tool_use` blocks
- Tool result: `role: user`, `content: [{type: tool_result, tool_use_id, content}]`

### 2. JSON Schema dla input_schema
- Required vs optional fields
- Enum constraints
- Description fields (krytyczne dla Claude understanding)
- Nested objects
- Array constraints

### 3. MCP protocol fundamentals
- Client-server architecture
- Transport: stdio (subprocess) vs HTTP/SSE (network)
- Lifecycle: initialize → list_tools / list_resources → tool calls → shutdown
- JSON-RPC 2.0 message format

### 4. MCP server building
- Anthropic SDK (TypeScript, Python)
- Tool registration: `server.tool(name, description, schema, handler)`
- Resource registration: `server.resource(uri, name, description, handler)`
- Prompt templates: `server.prompt(name, description, schema, handler)`
- Error handling, lifecycle hooks

### 5. MCP client integration
- Claude Code as MCP client
- Configuration: `.mcp.json` (project) / `~/.claude.json` (user-global)
- Server startup, tool name prefixing (`mcp__<server>__<tool>`)
- Multiple servers per project

### 6. Tool result handling
- Success: content as string lub structured
- Error: `is_error: true` w tool_result
- Partial results (streaming jeśli supported)
- Empty results — kiedy informują Claude vs kiedy ukrywać

### 7. Parallel tool calls
- Multiple `tool_use` blocks w jednej response
- Independent vs dependent tool calls
- When Claude chooses parallel vs sequential
- Token cost comparison

### 8. Tool errors & retries
- Network errors vs validation errors vs business logic errors
- Retry strategies: immediate / backoff / abort
- User confirmation dla destructive operations
- Idempotency considerations

### 9. Security boundaries
- Tool permissions model (Claude Code settings)
- Sandboxing: worktrees, isolated runtimes
- Network egress controls
- Secret management (env vars, never in prompts)
- Tool input validation (Claude może hallucinować inputs)

### 10. MCP ecosystem
- Public MCP servers (filesystem, git, brave-search, sqlite, postgres itp.)
- Custom servers w organizacjach
- Sharing patterns: npm packages, PyPI packages, OSS repos

## Plan nauki

| Tydzień | Co czytam | Co buduję | Drille |
|---|---|---|---|
| 1 | docs.claude.com/tool-use + modelcontextprotocol.io | Mini MCP server (5 tools) w TS | 10 scenariuszy |
| 2 | Tool error handling + parallel docs | Zaadaptować `ksef-mcp` test cases jako study material | 10 scenariuszy |
| 3 | MCP ecosystem review + security best practices | Pierwszy commit do `pl-legal-docs` MCP server (rozdz. 6.B z Partner application) | 10 scenariuszy + mock |

## Moje praktyczne doświadczenia (substantial moat)

- **6 publicznych MCP serverów / 145+ tools łącznie**:
  - `linkedin-mcp` (25 tools, TS)
  - `seo-gaca-mcp` (37 tools, Python, **PyPI**)
  - `facebook-mcp` (28 tools)
  - `ksef-mcp` (30 tools, **pierwszy open-source MCP dla polskiego KSeF**, discovery luki walidacyjnej w API v2)
  - `mcp-universal-adapter` — pattern do wrapowania REST API jako MCP server
  - `popcorn` (5 tools, video scene detection)
- `gaca-core` — AI Bus agregujący 50+ modeli od 11 providerów, też operuje jako tool orchestrator

## Linki

- **docs.claude.com/tool-use** — Tool Use API reference
- **modelcontextprotocol.io** — MCP specification
- **anthropic.com/news/model-context-protocol** — original announcement
- **github.com/anthropics/anthropic-cookbook** — tool use examples

## Status

- Drille: 0/30
- Mini-projekty: 0/3 (target: 3 nowe MCP serverki, pierwszy = `pl-legal-docs`)
- Mock exam score: —
