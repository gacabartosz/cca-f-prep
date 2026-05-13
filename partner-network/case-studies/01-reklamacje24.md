# Case Study 01 — reklamacje24.pl (Consumer Complaint Letters AI, Live)

**Live**: https://reklamacje24.pl • **Repo**: github.com/gacabartosz/reklamacje24.pl2 • **Owner**: Bartosz Gaca (auto-consent)

## 1. Problem klienta
Polski konsument dostaje wadliwy produkt lub usługę i zna swoje prawa z UoPK (Ustawa o prawach konsumenta), ale **napisanie poprawnego formalnie pisma reklamacyjnego z prawidłowymi podstawami prawnymi to bariera**. Wybór:
1. Zapłacić prawnikowi 200–500 PLN za pismo (overkill dla reklamacji na 300 PLN)
2. Skopiować szablon z internetu (zwykle bez konkretów sprawy, łatwo odrzucany)
3. Odpuścić — i tracić co należne

Brakuje **micro-paid AI tooling**: pismo zgodne z UoPK, w 60 sekund, za cenę kupowanej kawy.

## 2. Rozwiązanie
**Automatyczny generator pism reklamacyjnych** z analizą zdjęć produktów + generacją dokumentu zgodnego z prawem konsumenckim + dostawą mailem.

Pipeline:
1. **Upload** — zdjęcie wadliwego produktu / opis tekstem
2. **Analiza AI** — identyfikacja wady, czasu posiadania, kwoty, podstawy prawnej (rękojmia / gwarancja / niezgodność z umową)
3. **Generowanie pisma** — gotowe pismo z formalnym nagłówkiem, danymi stron, opisem wady, żądaniem (naprawa / wymiana / zwrot ceny / obniżka), podstawą prawną z UoPK, terminem, sądem właściwym
4. **Płatność** — 4.99 PLN przez Stripe (acct_1SO3Io, P24 + BLIK + karta)
5. **Dostarczenie** — PDF na maila + opcjonalne wysyłka bezpośrednio do sprzedawcy

## 3. Stack i architektura

**Frontend**
- React + TypeScript

**Backend**
- Node.js 18+
- PostgreSQL 14+
- **Prisma ORM**

**AI / processing**
- **Claude / multi-model przez OpenRouter** — analiza obrazu wadliwego produktu + generacja pisma
- AI image analysis (computer vision)
- AI generation per UoPK (template prompty z polskim językiem prawnym + cytowanie konkretnych artykułów)

**Płatności i compliance (zgodne z polskimi MŚP)**
- **Stripe** acct_1SO3Io: 4.99 PLN/use
- Metody: **P24 + BLIK + karta** (standardowy mix PL B2C)
- Faktury VAT 23% z NIP (zgodne z `reference_jdg_company.md`: JDG Bartosz Gaca, NIP 5993112591)

**Deploy / infrastruktura**
- **GitHub Actions CI/CD → VPS**
- **Docker**, port 4003 (memory: `project_reklamacje24_deploy.md`)
- nginx reverse proxy
- pm2 process manager
- `pm2 start dist/backend/src/index.js --name reklamacje24-backend`

**SEO i analytics**
- **GSC verified** (priv-gsc list_sites confirmed)
- Sitemap auto-generated, robots.txt zoptymalizowany, schema.org rich snippets

## 4. Co konkretnie zrobił Claude Code (w buildzie)

| Element | Użycie |
|---|---|
| **Slash commands** | `/team-dev reklamacje24 "fix HTTP X..."` — pełen pipeline PM agent → decomposition → specialiści; `/seo` z team-mar do SEO content |
| **Subagents** | `partner-strategist` (w cca-f-prep) jako wzorzec do strukturyzowania ofert konsultingowych dla pokrewnych klientów B2C legal-tech |
| **Skills** | `pdf-generator` (faktury VAT zgodne z polskimi wymogami JPK_FA), `seo-inspector` (audit SEO reklamacje24), `seo-audit-suite` (multi-vertical SEO), `humanizer` (czyszczenie AI-generated landingu z LinkedIn cringe), `team-dev` (19-agent pipeline przy większych zmianach) |
| **Hooks** | PostToolUse hook logujący zużycie modelu per AI request (audit + cost monitoring) |
| **MCP servers** | `seo-gaca-mcp` (37 tools) — monitoring GSC, quick wins detection, indexing API ping; `linkedin-mcp` (25 tools) — content marketing |
| **Multi-model routing** | OpenRouter wewnątrz aplikacji + `smart-router` (FusionRoute) decyduje: prosta klasyfikacja typu wady → Haiku, generowanie pełnego pisma reklamacyjnego → Sonnet, complex multi-issue case → Opus |
| **CI/CD** | GitHub Actions workflow zaprojektowany w Claude Code z `team-dev` pipeline (deploy → smoke test → monitor) |

## 5. Mierzalne efekty

- **Cena za pismo**: 4.99 PLN (Stripe acct_1SO3Io, weryfikowane w panelu Stripe)
- **Czas generowania pisma**: ~60 sekund (target zweryfikowany w UI)
- **Format wyjścia**: PDF + email
- **Metody płatności**: P24 + BLIK + karta (3 najczęstsze w PL)
- **GSC**: verified (priv-gsc OK), sitemap submitted, GitHub Actions CI/CD working
- **Unit econ challenge**: CPA musi być <2 PLN przy 4.99 PLN AOV — krytyczne dla F3 Ads (`PORTFOLIO-MASTER-PLAN.md` D1 decision blocker)

Liczby do uzupełnienia z analytics przed submitem aplikacji:
- Pisma wygenerowane / month: do uzupełnienia z admin panel
- Konwersja (visit → purchase): do uzupełnienia z GA4 (TODO: GA4 setup per `PORTFOLIO-MASTER-PLAN.md` F2)
- Revenue / month: do uzupełnienia ze Stripe Dashboard (acct_1SO3Io)
- Customer count: do uzupełnienia

## 6. Referencja klienta
- **Status zgody**: ✅ Auto-consent (Bartosz = owner produktu, JDG bartoszgaca.pl)
- **Forma referencji**: Pełna nazwa + URL + screenshoty + opis stack i pipeline + ewentualnie metryki ze Stripe (po decyzji Bartosza o ujawnieniu)
- **Kontakt do reference call**: Bartosz Gaca (bartosz.gaca@gmail.com)
- **Data potwierdzenia zgody**: 2026-05-13

## 7. Bonus: differentiator dla Anthropic
**Real Stripe revenue, micro-paid AI dla polskiego B2C** — większość polskich SaaS na AI sprzedaje się w modelu B2B subscription 200–2000 PLN/mc lub freemium. Reklamacje24 to one-shot 4.99 PLN z BLIK — model trafiający w polskiego konsumenta, nie kopia US enterprise stacka. To pokazuje, że umiem dobierać **pricing pod rynek**, nie tylko **stack pod feature**.

Dodatkowo: **CI/CD na GitHub Actions z Docker deployem na własny VPS** = nie używam managed cloud (Vercel/Render), tylko własna infrastruktura. Skala kosztów scaledown'ujemy do PLN, nie USD enterprise.
