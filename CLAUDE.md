# Projekt cca-f-prep

## Kontekst
Prowadzi go **Bartosz Gaca**, JDG **bartoszgaca.pl** (NIP 5993112591, Dzierżów, Polska) — solo technical builder, MCP Protocol Pioneer (6 publicznych MCP serverów, 145+ tools), zarządzający w produkcji 28+ aplikacjami / 55 kontenerami Docker / 4 serwerami (K8s + 3 VPS) — solo, z AI-native workflow.

Aplikacja do Claude Partner Network składana **z JDG bartoszgaca.pl** (NIE z BeeCommerce, gdzie Bartosz pełni rolę CTO równolegle — patrz `partner-network/why-bartoszgaca-not-beecommerce.md`).

## Cel projektu (kolejność priorytetu)
1. Zdać **Claude Certified Architect — Foundations (CCA-F)**, próg 720/1000
2. Wejść do **Claude Partner Network** jako Consulting Partner (track: Consulting/Services)
3. Zbudować pozycję #1 **Claude Code Evangelist w Polsce**

## Zasady pracy
- Język: polski w content, code i komentarze po angielsku
- Każde zadanie = artefakt w repo (nie tylko rozmowa)
- Każdy artefakt = potencjalny element aplikacji partnerskiej lub content marketing
- Egzamin scenariuszowy — uczę się przez budowanie, nie przez czytanie
- Wagi domen CCA-F: 27% / 20% / 20% / 18% / 15% — czas inwestuję proporcjonalnie

## Brand voice (do całego content marketingu i aplikacji partnerskiej)
Builder-practitioner, bezpośredni, z ironią, bez LinkedIn cringe. Pisze jak developer w Slacku.
Nie guru, nie influencer. Konkrety zamiast deklaracji. Liczba zamiast przymiotnika.

Zero fraz: rewolucja, game changer, must have, leverage, zmienia wszystko, AI to przyszłość.

## Co Claude Code MA robić w tym projekcie
- Generować scenariusze egzaminacyjne (subagent `exam-coach`)
- Pisać case studies z RZECZYWISTYCH faktów (subagent `case-writer`, nigdy nie zmyśla)
- Generować content marketing po polsku (subagent `content-marketer`)
- Pomagać z aplikacją partnerską (subagent `partner-strategist`)
- Budować skills, mcp servers, slash commands (proof of work)

## Co Claude Code NIE robi
- Nie podpowiada na proktorowanym egzaminie (oszustwo = ban z ekosystemu)
- Nie wymyśla case studies — tylko strukturyzuje rzeczywiste fakty
- Nie generuje liczb klientów / revenue / metryk bez potwierdzenia
- Nie używa Stadomat "10K userów" (to inflated z USEME-PORTFOLIO — realny stan: pre-PMF, 1 user testujący — patrz `feedback_stadomat_one_user.md`)

## Stan obecny
- Tydzień nauki: 01 (start: 2026-05-13)
- Ostatni mock exam wynik: — (baseline jeszcze nie zrobiony)
- Status aplikacji Partner Network: DRAFT przygotowany (`partner-network/application-draft.md`), wysyłka po CCA-F + 3 referencjach

## Realne assety do aplikacji (zweryfikowane)
- **6 publicznych MCP serverów**: `linkedin-mcp` (25 tools), `seo-gaca-mcp` (37 tools, na PyPI), `facebook-mcp` (28 tools), `ksef-mcp` (30 tools, pierwszy open-source MCP dla polskiego KSeF), `mcp-universal-adapter`, `popcorn` (5 tools)
- **3 publiczne produkcyjne SaaS na Claude/AI**: reklamacje24.pl (UoPK pisma, Stripe 4.99 PLN/use), odpisznapismo.pl (analiza pism urzędowych), biznesbezklikania.pl (automation suite v4.0)
- **2 dodatkowe produkcyjne**: stadomat.pl (SaaS multi-tenant), reklamacje24.pl (4.99 PLN/use, Stripe)
- **gaca-core** — AI Bus agregujący 50+ modeli od 11 providerów w jednym endpoincie
- **Discovery**: luka walidacyjna w KSeF API v2 (art. 106e ust. 11 UoVAT) — znaleziona podczas budowy ksef-mcp
- **Infrastructure**: 28+ aplikacji, 55 kontenerów Docker, 35 compose projects, 4 serwery (K8s OVH + 3 VPS, 12 CPU / 30GB RAM / 292GB disk), 21+ baz PostgreSQL
- **Claude Code Skills**: pdf-generator (3 brandy), seo-inspector, reel-maker, smart-router (FusionRoute), seo-audit-suite, brand-guidelines, canvas-design, humanizer, team-dev, team-mar, team-strat, wiki-update, frontend-design

Wszystko ↑ jest udokumentowane w `/Users/gaca/projects/personal/bartoszgaca.pl/output/bartosz_gaca_skills_profile.md` (live SSH 15.03.2026).
