# Pitch bartoszgaca.pl → Claude Partner Network (Consulting Track)

## Pozycjonowanie (1 zdanie, używaj wszędzie)
**Polish solo technical builder and MCP Protocol pioneer — built 6 public MCP servers (145+ tools, including the first open-source MCP for Poland's national e-invoicing system KSeF), operates 28+ production applications on Claude infrastructure (55 Docker containers across K8s + 3 VPS), and publishes the only Polish-language Claude Code educational content.**

## Trzy filary różnicowania (każdy ma weryfikowalny dowód)

### 1. MCP Protocol Pioneer (technology depth)
- **6 publicznych MCP serverów, 145+ tools łącznie**:
  - `linkedin-mcp` — 25 tools (TypeScript)
  - `seo-gaca-mcp` — 37 tools, opublikowany na **PyPI**
  - `facebook-mcp` — 28 tools
  - `ksef-mcp` — 30 tools, **pierwszy open-source MCP dla polskiego KSeF**
  - `mcp-universal-adapter`
  - `popcorn` — 5 tools (video scene detection)
- **gaca-core** — AI Bus agregujący 50+ modeli od 11 providerów w jednym endpoincie
- Discovery: luka walidacyjna w KSeF API v2 znaleziona podczas budowy ksef-mcp (faktury walutowe bez VAT w PLN akceptowane wbrew art. 106e ust. 11 UoVAT)

### 2. Production track record on Claude (operations depth)
- **28+ aplikacji w produkcji**, **55 kontenerów Docker**, **35 compose projects** (live SSH 15.03.2026)
- **4 serwery**: Kubernetes OVH (11 apps, GitOps, ArgoCD, Harbor) + 3 VPS (12 CPU / 30 GB RAM / 292 GB disk)
- **21+ baz PostgreSQL** (PG14/16/17 + PostGIS)
- Klienci produkcyjne na własnych SaaS i klienckich aplikacjach — referencje w `referencje-klientow.md`

### 3. Polish localization layer (vertical + region moat)
- **Jedyne polskie publiczne materiały o Claude Code** (blog `bartoszgaca.pl`, LinkedIn auto-publish daemon)
- **Pierwszy MCP dla polskiego rynku prawnego/podatkowego** (ksef-mcp już istnieje; `pl-legal-docs` w roadmap)
- Polish-vertical SaaS w produkcji: `reklamacje24.pl` (UoPK pisma reklamacyjne, Stripe 4.99 PLN/use), `odpisznapismo.pl` (analiza pism urzędowych), `fixmynotice.com` (EN-market document AI)
- Headline LinkedIn: "Buduję MVP, MCP i integracje API | Claude Code | CTO @ BeeCommerce" (67 zn., mobile-safe)

## Dlaczego Anthropic mnie potrzebuje
1. **Globalni partnerzy nie schodzą do polskiego MŚP** — Accenture/Deloitte nie obsłużą 5-osobowej kancelarii w Krakowie. Ja obsługuję.
2. **Anthropic ma lukę w PL** — Polska to 38M ludzi, brak partnera lokalnego w directory (do weryfikacji na `claude.com/partners` przy aplikacji).
3. **Zero polskich materiałów edukacyjnych o Claude Code** — bartoszgaca.pl + repo `cca-f-prep` zamyka tę lukę.
4. **Niche legaltech + KSeF/podatki + e-commerce + agritech** — kombinacje, które wymagają lokalnej znajomości regulacji.

## Honest constraints (nie ukrywam — to wzmacnia wiarygodność)
- **Skala: 1 osoba (JDG)**. Plan budowy zespołu w 6–12 mc; obecnie sieć współpracowników i AI-native workflow zamiast etatowych developerów.
- **Klienci do potwierdzenia** — 3 reference customers w trakcie zbierania zgód (template w `referencje-klientow.md`).
- **CCA-F status: w trakcie nauki** (start 2026-05-13). Aplikacja idzie po zaliczeniu.
- **Region**: Polska + zdalnie EU. Nie globalny enterprise.
- **Vertical focus**: legal-tech, SME automation, e-commerce. Nie retail, nie gaming, nie adtech.

## Konkurencja w PL (otwarte pytania do zweryfikowania przy aplikacji)
- [ ] Czy ktoś polski jest już w `claude.com/partners` directory? Sprawdzić listing przy submit.
- [ ] Polskie agencje AI (deepsense.ai, edrone, voicelab) — jakie pozycjonowanie deklarują wokół Claude konkretnie (vs ogólnego AI)?
- [ ] Cross-reference z `../../../bartoszgaca.pl/LINKEDIN-STRATEGY.md` (sekcja Target Personas) — kto jest w "AI/Automation builderzy PL" peer network.

## Brand voice (sztywno trzymany — z `LINKEDIN-STRATEGY.md`)
> "Buduję rzeczy. Szybko. MVP w tydzień? Zrobione. Dwa systemy nie gadają ze sobą? Połączę po API. Nie sprzedaję slajdów. Nie robię 'strategii transformacji cyfrowej'. Buduję działające produkty i pokazuję je publicznie."
