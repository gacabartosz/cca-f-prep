# Claude Code Evangelism Capability — bartoszgaca.pl

## Teza
Anthropic ma globalny problem akwizycji poza enklawą tech-Twittera: Claude Code rośnie szybko, ale w Polsce **zero oficjalnych materiałów po polsku** i **zero partnerów w directory**. Bartosz zamyka tę lukę jednocześnie z dwóch stron — jako twórca (6 MCP servers, 14+ skills, 28+ produkcyjnych apps) i jako publicysta (blog PL, LinkedIn auto-publish, YouTube planowane).

## Co już działa (deliverables, nie deklaracje)

### A. Public open-source na Claude / MCP
| Asset | Tools | Note |
|---|---|---|
| `seo-gaca-mcp` (PyPI) | 37 | SEO/GEO automation, PL-friendly meta/schema |
| `ksef-mcp` (GitHub) | 30 | Pierwszy open-source MCP server dla polskiego KSeF |
| `linkedin-mcp` | 25 | LinkedIn automation via MCP |
| `facebook-mcp` | 28 | FB/Meta automation |
| `mcp-universal-adapter` | n/a | Adapter pattern dla integracji multi-API |
| `popcorn` | 5 | Video scene detection MCP (Polish content) |

### B. Claude Code Skills (14+ używanych produkcyjnie)
`pdf-generator` (3 brandy: bartoszgaca, beecommerce, neutral), `seo-inspector`, `reel-maker`, `smart-router` (FusionRoute multi-tier routing), `seo-audit-suite`, `brand-guidelines`, `canvas-design`, `humanizer` (PL + ZH), `team-dev` (19-agent dev pipeline), `team-mar` (21-agent marketing pipeline), `team-strat` (6-agent advisory board), `wiki-update`, `frontend-design`, `analytics-stack-deploy`.

### C. Production SaaS na Claude / multi-model AI
1. **aplikantai.pl** — Legal AI SaaS, 24+ asystentów per dziedzina prawa polskiego, OpenRouter (Claude 3.5 Sonnet + Gemini + DeepSeek + Qwen), RAG via GitHub
2. **odpisznapismo.pl** — Document AI, OCR + LLM generuje odpowiedź na pismo urzędowe w 60s, OpenRouter (multi-model)
3. **biznesbezklikania.pl** — Automation suite, Gemini API + planned Claude, lead capture, Meta/TikTok CAPI/EAPI, WhatsApp/Messenger inbox
4. **reklamacje24.pl** — UoPK pisma reklamacyjne, Stripe 4.99 PLN/use
5. **stadomat.pl** — SaaS multi-tenant agritech (pre-PMF)
6. **fixmynotice.com** — EN-market analogon odpisznapismo

### D. Multi-agent orchestration on Claude
Trzy publiczne pipeline'y zbudowane jako Claude Code skills w `~/.claude/skills/`:
- `team-dev` — 19 agentów, 4 warstwy, 10 faz: design → implement → review → audit → test → deploy → monitor
- `team-mar` — 21 agentów, 5 warstw, 9 faz: brand → strategy → create → review → publish → analyze
- `team-strat` — 6 agentów, 3 warstwy, 5 faz: portfolio decisions, monetization, market, chief strategist

## Plan 12-miesięczny (mierzalny)

### Content output (rolling)
- **LinkedIn**: 1 post/dzień (już działa — auto-publish daemon, 17 postów zaplanowanych, brand voice "developer w Slacku")
- **Blog `bartoszgaca.pl/baza-wiedzy`**: 1 post/tydzień o Claude Code w PL
- **YouTube**: 1 tutorial/miesiąc PL + EN subtitles (skills, hooks, MCP, subagents)
- **Wystąpienia**: cel — Infoshare 2027, ML in PL 2027, Code Europe 2027 z talkiem "Claude Code w produkcji: 28 aplikacji, 6 MCP servers, solo"

### Open-source output
- Nowe MCP servers (q+1, q+2, q+3): `pl-legal-docs`, `pl-vat-checker`, `pl-zus-helper`
- Nowe skills: `pl-pismo-prawne`, `pl-faktura-vat`, `pl-umowa`, `pl-rodo-compliance`
- Tłumaczenia oficjalnej dokumentacji Anthropic na PL (open-source PR-y do anthropic-quickstarts / docs)

### Community
- Polski Discord / Slack channel dla Claude Code w PL — host
- AMA / live coding sessions co miesiąc
- Open-source contributions do `anthropics/claude-code` (issues + PRs)

## KPI (zostawiam puste, uzupełnione przed submitem aplikacji)

| Metryka | Stan na submit | Target +12 mc |
|---|---|---|
| LinkedIn followers | (do uzupełnienia z LI Dashboard `localhost:6767/api/analytics`) | +200% |
| LinkedIn impressions/mc | (do uzupełnienia) | +500% |
| Blog posts published (PL, Claude Code topic) | (do uzupełnienia z `bartoszgaca.pl/baza-wiedzy`) | +52 |
| YouTube views | 0 (kanał nie wystartowany) | 50,000 |
| Open-source MCP servers public | 6 | 10 |
| Public Claude Code Skills | 14+ | 25 |
| Polish-language tutorials online | (do zliczenia) | 100 |
| Conference talks delivered | (do uzupełnienia) | 3 |

## Dlaczego to wzmacnia Anthropic

Każdy mój content / asset to:
1. **Akwizycja użytkowników Claude Code w PL** (rynek 38M, EU member, GDP €750B+)
2. **Walidacja Claude Code w regulowanych branżach** (legal-tech, fintech/KSeF, RODO) — daje Anthropic sales ammunition
3. **Wsparcie sprzedaży enterprise** — gdy Anthropic szuka case studies / POC w PL, mam infrastrukturę i klientów
4. **Edukacja polskich developerów** = pipeline kandydatów do Anthropic / Anthropic-friendly firm
5. **Open-source contributions** wracają do ekosystemu Claude (Skills marketplace, MCP registry)

## Co odróżnia mnie od konkurencji w PL

| Wymiar | Konkurencja PL (typowo) | bartoszgaca.pl |
|---|---|---|
| Pozycjonowanie | "Agencja AI", "AI Consulting" | "Builder, który buduje. Solo. Pokazuje publicznie." |
| Stack | OpenAI proxy / API wrappers | Claude jako primary, multi-model fallback przez `gaca-core` (50+ modeli, 11 providerów) |
| Open-source | Niewielki output / brak | 6 MCP servers, 14+ Skills, PyPI package |
| Polski rynek regulowany | Słabe pokrycie | KSeF MCP (pierwszy), aplikantai (24 asystentów prawnych), odpisznapismo |
| Content w PL | LinkedIn cringe + AI-generated | Builder voice, "developer w Slacku", konkrety zamiast deklaracji |
| Infrastructure | Kupują u dostawców | 4 serwery własne, 55 kontenerów Docker, GitOps K8s — pełna ownership |
| Discovery / bugfinding | n/a | Luka w KSeF API v2 (art. 106e ust. 11 UoVAT) znaleziona podczas budowy MCP |

## Brand voice (sztywno, źródło: `LINKEDIN-STRATEGY.md`)
"Buduję rzeczy. Szybko. MVP w tydzień? Zrobione. Nie sprzedaję slajdów. Nie robię 'strategii transformacji cyfrowej'. Buduję działające produkty i pokazuję je publicznie — z porażkami włącznie."
