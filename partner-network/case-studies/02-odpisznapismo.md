# Case Study 02 — odpisznapismo.pl (Document Response AI)

**Live**: https://odpisznapismo.pl • **Repo**: github.com/gacabartosz/odpisznapismo.pl • **Owner**: Bartosz Gaca (auto-consent)

## 1. Problem klienta
Polski konsument / mała firma dostaje pismo z urzędu (US, ZUS, Urząd Miasta, sąd) i nie wie:
1. Co konkretnie urząd chce
2. Jaki jest termin
3. Jakie są konsekwencje braku odpowiedzi
4. Jak sformułować odpowiedź zgodną z procedurą administracyjną

Tradycyjna odpowiedź to wizyta u prawnika (300–800 PLN) lub szablon z internetu (niespecyficzny). **Brakuje middle-ground**: szybkiej, taniej, automatycznej analizy + projektu odpowiedzi.

## 2. Rozwiązanie
**Aplikacja webowa: "Zrób zdjęcie / wgraj PDF / wklej tekst — AI napisze odpowiedź w 60 sekund."**

Pełen pipeline:
1. **Wielokanałowe przesyłanie** — PDF, zdjęcie (z OCR Tesseract.js), wklejony tekst
2. **Analiza AI** — identyfikacja żądań, kluczowych terminów, kwot i potencjalnych ryzyk
3. **Generowanie odpowiedzi** — profesjonalny projekt do wysłania w formacie tekstowym lub jako plik PDF
4. **Prywatność** — dokumenty przetwarzane w pamięci, **nigdzie trwale niezapisywane**
5. **Panel admin** — CMS, statystyki, historia analiz

## 3. Stack i architektura

**Frontend**
- React + TypeScript
- TailwindCSS

**Backend**
- Node.js + Express + TypeScript
- PostgreSQL + **Prisma ORM**

**AI / processing**
- **OpenRouter API** — dostęp do **Claude, Gemini, GPT** (multi-model routing)
- **Tesseract.js** — OCR dla zdjęć pism
- **jsPDF / html2canvas** — generowanie PDF odpowiedzi
- **Chart.js** — wykresy w panelu admin

**Płatności i compliance**
- **Autopay** (preferred PL gateway) z możliwością konfiguracji **Stripe** (acct_1RnC1M)
- Brak trwałego zapisu dokumentów = RODO-by-design

**SEO i auto-content**
- Automatyczna mapa strony (`generate_sitemap.js` script)
- Zoptymalizowany `robots.txt`
- Dynamiczne tagi kanoniczne per URL
- Dane strukturalne (JSON-LD) dla artykułów (rich snippets)

## 4. Co konkretnie zrobił Claude Code (w buildzie)

| Element | Użycie |
|---|---|
| **Slash commands** | `/seo` / `/content` z `team-mar` do generowania SEO artykułów dla `articles/` (seed content) |
| **Subagents** | `case-writer` (w cca-f-prep) jako wzorzec do strukturyzowania case studies z OdpiszNaPismo do PR-ów |
| **Skills** | `pdf-generator` (3 brandy), `seo-inspector`, `seo-audit-suite`, `humanizer` (czyszczenie AI-generated copywritingu) |
| **Hooks** | PostToolUse logujący zużycie modelu per request (audit + cost monitoring) |
| **MCP servers** | `seo-gaca-mcp` (37 tools) — monitoring GSC, quick wins detection, sitemap submit |
| **Multi-model routing** | OpenRouter wewnątrz aplikacji + `smart-router` (FusionRoute) decyduje: prosty OCR cleanup → Haiku, generowanie odpowiedzi prawnej → Sonnet, complex multi-page legal letter → Opus |
| **Claude Code w developmencie** | Pełen build/refactor w Claude Code (Opus 4.6/4.7), z `team-dev` 19-agent pipeline używanym przy większych zmianach |

## 5. Mierzalne efekty
(do uzupełnienia z GA4 + Stripe + admin panel przed submitem)
- Czas generowania odpowiedzi: **~60 sekund** (TARGET zweryfikowany w UI / docs)
- Format wyjścia: tekst + PDF
- Liczba pism przeanalizowanych / month: do uzupełnienia
- Płacący użytkownicy: do uzupełnienia (Stripe acct_1RnC1M)
- Konwersja (visit → analysis_start → purchase): do uzupełnienia
- Time-to-first-output dla nowego użytkownika: do uzupełnienia z Hotjar / Microsoft Clarity (planowane po F2 Analityka per `PORTFOLIO-MASTER-PLAN.md`)

## 6. Referencja klienta
- **Status zgody**: ✅ Auto-consent (Bartosz = owner)
- **Forma referencji**: Pełna nazwa + URL + screenshoty + opis stack i pipeline
- **Kontakt**: Bartosz Gaca (bartosz.gaca@gmail.com)
- **Data zgody**: 2026-05-13

## 7. Bonus: differentiator dla Anthropic
**RODO-by-design w produkcie używającym AI** — brak trwałego zapisu dokumentów to praktyczna implementacja zasady minimalizacji danych z art. 5(1)(c) RODO. To rzadkość w polskich AI-SaaS-ach (większość loguje wszystko do PostgreSQL "na zapas"). Pokazuje rozumienie regulacji w produkcie, nie w polityce prywatności.
