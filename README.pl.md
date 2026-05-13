# cca-f-prep

> Polski solo technical builder i MCP Protocol pioneer — zbudował 6 publicznych MCP serwerów (145+ tools, w tym pierwszy open-source MCP dla polskiego KSeF), zarządza 28+ aplikacjami produkcyjnymi na infrastrukturze Claude (55 kontenerów Docker na K8s + 3 VPS), publikuje jedyne polskie materiały edukacyjne o Claude Code.

Publiczna nauka do **Claude Certified Architect — Foundations (CCA-F)** i aplikacja do **Claude Partner Network** jako Consulting Partner.

Autor: [bartoszgaca.pl](https://bartoszgaca.pl) — Bartosz Gaca (JDG, Dzierżów, PL).

## Dlaczego publicznie

Każdy plik to dowód praktyki. Repo *jest* aplikacją, nie dekiem. Slash commands, subagenty, hooki, skille i MCP servery w tym drzewie są zbudowane *w* Claude Code i pokazują biegłość w narzędziu.

## Dowody produkcyjne (do aplikacji partnerskiej)

- **6 publicznych MCP serwerów / 145+ tools**: `linkedin-mcp` (25), `seo-gaca-mcp` (37, na PyPI), `facebook-mcp` (28), `ksef-mcp` (30 — pierwszy open-source MCP dla polskiego KSeF), `mcp-universal-adapter`, `popcorn` (5).
- **28+ aplikacji w produkcji**: legal-tech ([aplikantai.pl](https://aplikantai.pl), [odpisznapismo.pl](https://odpisznapismo.pl), [reklamacje24.pl](https://reklamacje24.pl), [fixmynotice.com](https://fixmynotice.com)), automatyzacja MŚP ([biznesbezklikania.pl](https://biznesbezklikania.pl)), agritech ([stadomat.pl](https://stadomat.pl)) i więcej.
- **55 kontenerów Docker, 35 compose projects, 4 serwery** (Kubernetes OVH + 3 VPS, 12 CPU / 30 GB RAM / 292 GB disk).
- **`gaca-core`** — AI Bus agregujący 50+ modeli od 11 providerów w jednym endpoincie.
- **Discovery**: luka walidacyjna w KSeF API v2 znaleziona podczas budowy `ksef-mcp` (faktury walutowe bez VAT w PLN akceptowane wbrew art. 106e ust. 11 UoVAT).

## Filozofia

*Eat your own dog food.* Aplikacja do Partner Network to nie deck — to repozytorium git, które się pokazuje.

## Struktura

- `domeny/` — pięć domen CCA-F z wagami 27/20/20/18/15
- `.claude/` — 6 slash commands, 4 subagenty, 2 hooki
- `partner-network/` — pitch, deck ewangelizacji, deck polskiej lokalizacji, draft aplikacji, 3 case studies + 2 supporting, tabela referencji
- `playwright/` — Skilljar tracker, lokalny mock exam, pre-fill formularza partnerskiego, LinkedIn publisher, content scraper
- `skills/` — polskie skille Claude Code (pisma prawne, faktury VAT, umowy)
- `mcp-servers/` — roadmap `pl-legal-docs` MCP
- `content/` — polski blog, LinkedIn, scenariusze YouTube + kalendarz publikacji
- `postep/` — tygodniowe raporty postępu

## Licencja

Kod: MIT. Treści: CC-BY-4.0.
