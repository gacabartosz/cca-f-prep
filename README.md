# cca-f-prep

> Polish solo technical builder and MCP Protocol pioneer — built 6 public MCP servers (145+ tools, including the first open-source MCP for Poland's national e-invoicing system KSeF), operates 28+ production applications on Claude infrastructure (55 Docker containers across K8s + 3 VPS), and publishes the only Polish-language Claude Code educational content.

Public learning journey to **Claude Certified Architect — Foundations (CCA-F)** and application to the **Claude Partner Network** as a Consulting Partner.

By [bartoszgaca.pl](https://bartoszgaca.pl) — Bartosz Gaca (JDG, Dzierżów, PL).

## Why this repo is public

Every file is proof of practice. The repo is the application, not a deck. Slash commands, subagents, hooks, skills and MCP servers in this tree are built with — and demonstrate fluency in — Claude Code.

## Production evidence backing this application

- **6 public MCP servers / 145+ tools**: `linkedin-mcp` (25), `seo-gaca-mcp` (37, on PyPI), `facebook-mcp` (28), `ksef-mcp` (30 — first open-source MCP for Poland's KSeF), `mcp-universal-adapter`, `popcorn` (5).
- **28+ apps in production**: legal-tech ([aplikantai.pl](https://aplikantai.pl), [odpisznapismo.pl](https://odpisznapismo.pl), [reklamacje24.pl](https://reklamacje24.pl), [fixmynotice.com](https://fixmynotice.com)), SME automation ([biznesbezklikania.pl](https://biznesbezklikania.pl)), agritech ([stadomat.pl](https://stadomat.pl)), and more.
- **55 Docker containers, 35 compose projects, 4 servers** (Kubernetes OVH + 3 VPS, 12 CPU / 30 GB RAM / 292 GB disk).
- **`gaca-core`** — AI Bus aggregating 50+ models from 11 providers in a single endpoint.
- **Discovery**: validation gap in KSeF API v2 (Poland's national tax system) found while building `ksef-mcp` — currency invoices accepted without PLN-VAT amount against art. 106e ust. 11 of the Polish VAT Act.

## Structure

- `domeny/` — five CCA-F domains weighted 27/20/20/18/15 — exam prep workspace
- `.claude/` — 6 slash commands, 4 subagents, 2 hooks
- `partner-network/` — pitch, evangelism deck, Polish localization deck, application draft, 3 case studies + 2 supporting refs, customer reference table
- `playwright/` — Skilljar tracker, local mock exam runner, partner form pre-filler, LinkedIn publisher, content scraper
- `skills/` — Polish Claude Code skills (legal docs, VAT invoices, contracts)
- `mcp-servers/` — roadmap for `pl-legal-docs` MCP server
- `content/` — Polish blog, LinkedIn, YouTube scripts + publication calendar
- `postep/` — weekly progress reports

## License

Code: MIT. Content: CC-BY-4.0.
