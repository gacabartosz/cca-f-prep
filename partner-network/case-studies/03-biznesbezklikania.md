# Case Study 03 — biznesbezklikania.pl (SME AI Automation Suite v4.0)

**Live**: https://biznesbezklikania.pl • **Repo**: github.com/gacabartosz/BiznesBezKlikania • **Owner**: Bartosz Gaca (auto-consent)

## 1. Problem klienta
Polski MŚP (sklep online, gabinet, salon, kancelaria, restauracja) ma rozproszone kanały komunikacji z klientami: telefon, WhatsApp, Messenger, formularz na stronie, email, czasem Slack. **Każdy kanał wymaga osobnej obsługi**, **każdy lead trafia w inne miejsce**, **nikt nie wie ile reklamy działa** (brak server-side tracking dla Meta/TikTok ads).

Brakuje "jednego dashboardu, w którym widzę wszystkie leady, mogę odpowiedzieć z jednego miejsca i zmierzyć ROI każdej kampanii".

## 2. Rozwiązanie
**AI Suite "Biznes Bez Klikania" — frontend prezentujący produkty/usługi automatyzacji AI + dedykowany backend webhook obsługujący:**

- **Lead capture** (formularze z różnych źródeł → jeden inbox)
- **Meta CAPI / TikTok EAPI** — server-side tracking konwersji dla reklam (omija adblockery, podnosi accuracy o 10–20%)
- **WhatsApp / Messenger inbox** — odpowiedzi na klienta z jednego miejsca
- **Admin API** — zarządzanie wszystkim
- **Server-side cron loops** — automatyczne follow-upy, drip campaigns, abandoned cart recovery

## 3. Stack i architektura

**Frontend (`/`)**
- React + TypeScript + React Router + Tailwind
- **esbuild** (build), **serve** (static)
- SPA prezentująca ofertę i case studies

**Backend (`/webhook`)**
- Node.js + Express
- Endpointy: `/api/health` (Phase 0) — rozbudowa w `webhook/routes/*.js` (Phase 1+)
- Lead capture, Meta CAPI, TikTok EAPI, WhatsApp/Messenger webhooks, admin API, cron loops

**AI**
- **Gemini API** (obecny) + plan migracji / dodania Claude jako primary (zgodny z partner narrative)
- Routing per task (lead scoring → Haiku-class, complex response drafting → Sonnet/Opus)

**Analytics**
- **GA4: G-X1T8PR56BE** (verified)
- Plan: GTM container, Microsoft Clarity, Meta Pixel + CAPI

**Hosting**
- VPS#3 (51.68.174.118), Traefik reverse proxy + SSL
- Docker compose

## 4. Co konkretnie zrobił Claude Code (w buildzie)

| Element | Użycie |
|---|---|
| **Skills** | `team-dev` (19 agentów, 4 layers, 10 faz) — używany przy projektowaniu architektury Phase 1 (rozbudowa webhook routes); `pdf-generator` do generowania ofert dla klientów; `humanizer` do polskich tekstów landing |
| **Slash commands** | `/team-dev biznesbezklikania.pl "fix HTTP X..."` — orchestracja PM agent → decomposition → specialiści |
| **Subagents** | `partner-strategist` (w cca-f-prep) wzorzec do strukturyzowania pitch decks dla klientów MŚP biznesbezklikania |
| **Hooks** | PostToolUse logujący zużycie LLM per webhook event (audit + cost) |
| **MCP servers** | `linkedin-mcp` (25 tools) — automatyzacja content marketingu dla biznesbezklikania (case studies, posty); `facebook-mcp` (28 tools) — zarządzanie Meta Business / Ads dla klientów; `seo-gaca-mcp` (37 tools) — SEO monitoring |
| **Multi-model routing** | `smart-router` (FusionRoute) wewnątrz webhook backend |
| **Claude Code w developmencie** | Cały refactor v3 → v4 (frontend SPA + backend webhook split) zrobiony w Claude Code z `team-dev` pipeline |

## 5. Mierzalne efekty
(do uzupełnienia z GA4 + admin panel + Meta Business przed submitem)
- GA4 property: G-X1T8PR56BE (verified)
- Phase 0 status: live (`/api/health` 200 OK)
- Phase 1+ status: w trakcie (rozbudowa webhook routes)
- Liczba podpiętych kanałów (Meta CAPI, TikTok EAPI, WhatsApp, Messenger): w trakcie integracji
- Liczba MŚP klientów na produkcie: do uzupełnienia

## 6. Referencja klienta
- **Status zgody**: ✅ Auto-consent (Bartosz = owner)
- **Forma**: Pełna nazwa + URL + screenshoty + opis architektury
- **Kontakt**: Bartosz Gaca (bartosz.gaca@gmail.com)
- **Data zgody**: 2026-05-13

## 7. Bonus: differentiator dla Anthropic
**Server-side tracking i automation w jednym produkcie zaprojektowanym dla MŚP** — to rzadkie. Większość MŚP używa zewnętrznych narzędzi (HubSpot 5000 PLN/mc, Zapier 200 PLN/mc, Make 100 PLN/mc) i klejna pipeline z 3–4 SaaS-ów. Biznesbezklikania kompresuje to do jednego produktu z polskim językiem i polskim wsparciem, w polskim budżecie.
