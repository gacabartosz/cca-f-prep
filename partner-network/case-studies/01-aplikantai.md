# Case Study 01 — aplikantai.pl (Legal AI Platform)

**Live**: https://aplikantai.pl • **Repo**: github.com/gacabartosz/aplikant.ai • **Owner**: Bartosz Gaca (auto-consent)

## 1. Problem klienta
Polski rynek prawniczy MŚP (kancelarie 1–10 osób, aplikanci, doradcy podatkowi) ma dostęp do generycznych asystentów AI (ChatGPT), ale **brak narzędzi wyspecjalizowanych w polskim prawie po polsku, z polskim orzecznictwem i polskim językiem zawodowym**. Aplikant prawny przygotowujący się do egzaminu lub prawnik szukający precedensu w sprawie konsumenckiej nie chce odpowiedzi w stylu generycznego LLM-a — chce odpowiedzi cytującej polską ustawę.

## 2. Rozwiązanie
**Platforma SaaS z 24+ wyspecjalizowanymi asystentami AI** ("Aplikantami") — każdy specjalizuje się w jednej dziedzinie polskiego prawa: KC, KPC, KK, KP, Ordynacja podatkowa, RODO, prawo konsumenckie, prawo pracy, prawo gospodarcze itd. Każdy Aplikant ma własną bazę wiedzy (RAG z GitHub) i własny system prompt utrzymujący ton zawodowy.

Funkcje:
- Streaming responses (SSE) — odpowiedzi w czasie rzeczywistym
- Stripe subscriptions (abonament miesięczny)
- Panel administracyjny — zarządzanie widocznością Aplikantów, modelami, artykułami
- Generator treści AI — automatyczne generowanie artykułów SEO (Claude 3.5 Sonnet via OpenRouter)
- Blog z systemem Markdown
- Email integration — automatyczna wysyłka danych dostępu

## 3. Stack i architektura

**Frontend**
- React 19 + TypeScript
- Vite (build tool)
- TailwindCSS (CDN)
- react-markdown (renderowanie odpowiedzi)

**Backend**
- Node.js + Express
- OpenRouter API (proxy do modeli AI)
- GitHub API (pobieranie baz wiedzy RAG)
- SSE — streaming odpowiedzi

**Baza i auth**
- PostgreSQL
- Stripe (subskrypcje)
- SMTP (Gmail lub inny)

**Modele AI używane**
- **Claude 3.5 Sonnet** (przez OpenRouter) — primary dla generowania treści SEO i odpowiedzi prawniczych wymagających wysokiej jakości
- Fallback multi-model: Gemini, LLaMA, DeepSeek, Qwen — dla kosztownej optymalizacji per Aplikant

**Wymagania środowiskowe** (z README repo)
- Node.js 18+
- PostgreSQL 14+
- Klucze API: OpenRouter (Claude), Gemini (optional), SMTP

## 4. Co konkretnie zrobił Claude Code (w buildzie)
| Element | Użycie |
|---|---|
| **Slash commands** | Custom `/content` i `/case-study` w `~/.claude/skills/team-mar/` używane do generowania artykułów SEO dla blogu aplikantai |
| **Subagents** | `content-marketer` (w cca-f-prep) jako wzorzec; w trakcie buildu używałem ad-hoc subagentów do generowania promptów per Aplikant |
| **Skills** | `pdf-generator` (eksport dokumentów dla użytkowników), `seo-inspector` (audyt SEO blog aplikantai), `humanizer` (czyszczenie AI-generated tekstów z LinkedIn cringe) |
| **Hooks** | PostToolUse hook w developmentcie (loguje użycie LLM) |
| **MCP servers** | `seo-gaca-mcp` (37 tools) — analiza pozycji w GSC, generowanie meta i schema dla blog postów |
| **Multi-model routing** | `smart-router` (FusionRoute) — routing per Aplikant: prosty Q&A → Haiku, complex legal analysis → Sonnet/Opus |

## 5. Mierzalne efekty
(do uzupełnienia konkretnymi liczbami przed submitem aplikacji — z GA4 + Stripe + admin panel)
- Liczba zarejestrowanych Aplikantów (asystentów): 24+
- Zakres polskich dziedzin prawa pokrytych: KC, KPC, KK, KP, Ordynacja podatkowa, RODO, UoPK, prawo gospodarcze, prawo pracy, prawo upadłościowe, restrukturyzacja i więcej (do uzupełnienia z `constants.tsx`)
- Live URL: https://aplikantai.pl
- Stripe subscriptions: aktywne (acct_id do potwierdzenia przed submitem)
- Liczba miesięcznych użytkowników: do uzupełnienia z GA4 (G-… do potwierdzenia)
- Revenue: nie publikowane do momentu decyzji Bartosza o ujawnieniu

## 6. Referencja klienta
- **Status zgody**: ✅ Auto-consent (Bartosz = owner produktu, JDG bartoszgaca.pl)
- **Forma referencji**: Pełna nazwa + URL + screenshoty + opis stack i architektury
- **Kontakt do reference call**: Bartosz Gaca (bartosz.gaca@gmail.com)
- **Data potwierdzenia zgody**: 2026-05-13 (data utworzenia tego pliku)
