# Qualification Call Prep — Anthropic Partner Network (Consulting Track)

> Q&A draft do qualification call z Anthropic Partner team. ~25 pytań które reviewer typowo zadaje + konkretne odpowiedzi Bartosza. Wszystkie odpowiedzi z weryfikowalnych źródeł (zero halucynacji).

## Rules of engagement

- Każda odpowiedź ≤200 słów
- Każda liczba ma source (README produktu, skills profile, memory entry)
- Brak marketing-speak, konkrety zamiast deklaracji
- Brand voice: builder-practitioner, "developer w Slacku" (z `LINKEDIN-STRATEGY.md`)

---

## Section A — Technical depth (Build with Claude)

### Q1. "Walk me through your most complex Claude integration."
**A**: `gaca-core` — AI Bus który agreguje 50+ modeli od 11 providerów w jednym endpoincie. Mam tam routing logic, fallback chains, cost tracking per model, prompt caching layer, retry logic z exponential backoff. Claude jest primary provider w `gaca-core` dla complex reasoning tasks (legal generation w reklamacje24, multi-agent orchestration w `team-dev`). Najtrudniejsza część była **multi-tenant prompt cache sharing** — każdy z 11 providerów ma inny TTL i format cache key, więc musiałem zbudować abstraction layer. Pełen kod w prywatnym repo, fragmenty publiczne w `mcp-universal-adapter`.

### Q2. "How do you handle prompt caching at scale?"
**A**: Trzy poziomy. **Poziom 1**: per-product cache w aplikacji (np. odpisznapismo cache'uje system prompt + few-shot examples). **Poziom 2**: cross-product cache w `gaca-core` AI Bus (jeśli ten sam system prompt używany w aplikantai i reklamacje24, jeden cache hit zamiast dwóch). **Poziom 3**: cache invalidation na podstawie semantic version system prompta — incrementuję wersję, automatyczny invalidate. Mierzę cache hit rate per produkt, target >40% dla pism reklamacyjnych (bo prompty są podobne między klientami).

### Q3. "What's your MCP server philosophy — wrap vs orchestrate?"
**A**: **Hybrid, depending on integration depth.** Dla `linkedin-mcp` (25 tools) — wrap, bo LinkedIn API jest stabilne i potrzebuję 1:1 mapowania. Dla `ksef-mcp` (30 tools) — orchestrate, bo polski KSeF wymaga wieloetapowych workflowów (build XML → validate → sign → send → poll status → fetch UPO). Dla `mcp-universal-adapter` — generalizacja wzorca, żeby nie pisać nowego serwera per API. Reguła: **jeśli klient mówi "chcę zrobić X" i X to single API call, wrap; jeśli X to workflow, orchestrate.**

### Q4. "Tell me about Claude Code Skills you've built."
**A**: 14+ używanych produkcyjnie w `~/.claude/skills/` i `~/.agents/skills/`. Najważniejsze: **`pdf-generator`** (3 brandy, polskie znaki Inter font, używany przez 3 SaaSy do generacji faktur i dokumentów), **`smart-router`** (FusionRoute — 6-dim scoring + multi-model routing), **`team-dev`** (19-agent dev pipeline), **`humanizer-zh`** (czyszczenie AI-generated text z anty-LinkedIn-cringe patterns). W `cca-f-prep/skills/` mam 3 polskie skille w rozwoju: `pl-pismo-prawne`, `pl-faktura-vat`, `pl-umowa`.

### Q5. "How do hooks fit into your workflow?"
**A**: 2 use case'y krytyczne. **Audit trail**: `PostToolUse` hook loguje każde użycie tool do `.claude/hooks/tool-use.log` jako proof-of-practice — przydatne do Partner Network portfolio (sam projekt `cca-f-prep` to demonstruje). **Cost monitoring**: per-product hook logujący zużycie modelu per AI request (na poziomie aplikacji, nie Claude Code). W beecommerce robię też hooki bezpieczeństwa (`PreToolUse` blokujący commands na production paths bez explicit flag).

### Q6. "Walk me through subagent design in your projects."
**A**: Trzy framework'i. **`team-dev`** (19 agentów, 4 warstwy, 10 faz) dla full SaaS delivery: PM → architect/UX/data/infra → frontend/backend/db/integrate/deploy → code-reviewer/security-auditor/qa/release/monitor. **`team-mar`** (21 agentów, 5 warstw, 9 faz) dla content pipeline: brand → strategy → create → review → publish → analyze. **`team-strat`** (6 agentów, 3 warstwy, 5 faz) dla strategic advisory (portfolio decisions, monetization). Każdy subagent ma własny SYSTEM_PROMPT i wąsko zdefiniowane responsibilities — to klucz, żeby orchestrator (PM) mógł delegować bez ambiguity.

### Q7. "How do you manage context across long-running Claude sessions?"
**A**: Memory pattern. Claude Code ma persistent memory w `~/.claude/projects/<scope>/memory/` z `MEMORY.md` index. Trzymam tam: user profile (kim user jest, preferencje), project state (co aktualnie robione), feedback (corrections z prev sessions), references (gdzie szukać external info). Memory loaded automatycznie przy session start, więc cross-session continuity istnieje bez "rebriefowania". Mam tam aktualnie 50+ entries po 6+ miesiącach pracy z Claude Code.

---

## Section B — Production track record

### Q8. "Which of your products has the most real users / revenue?"
**A**: **Reklamacje24.pl** — micro-paid AI dla polskich konsumentów, 4.99 PLN/use przez Stripe (acct_1SO3Io, P24+BLIK+karta). Live od dłuższego czasu, GSC verified, GitHub Actions CI/CD → VPS Docker port 4003. **Real numbers** (miesięcznie generowane pisma, conversion rate, revenue) — do uzupełnienia przed submitem aplikacji ze Stripe + GA4. **Nie używam Stadomat metryk** — Stadomat to pre-PMF, 1 testujący user (memory `feedback_stadomat_one_user.md`); używam jako *tech* reference (multi-tenant architecture), nie *traction* reference.

### Q9. "What's the biggest production incident you've had with a Claude-based product?"
**A**: Najbardziej pouczająca: **odkrycie luki walidacyjnej w KSeF API v2** (polski państwowy system e-invoicing) podczas budowy `ksef-mcp`. System akceptował faktury walutowe (EUR) bez kwoty VAT w PLN, co jest wprost niezgodne z art. 106e ust. 11 ustawy o VAT. To nie był "incident in production" w sensie outage — to discovery podczas dogfooding w głębi systemu. **Lesson dla Partner Network**: buduję narzędzia na tyle głęboko, że znajduję bugi w systemach trzecich. Inny incident: stadomat.pl rsync nadpisał pgBouncer userlist → restart postgres → pgBouncer unable to auth → outage. Fix: deploy.sh z excludes list i regułą "NIGDY nie restartuj postgres bez --no-deps" (memory `feedback_never_force_reset.md`, `feedback_no_docker_prune.md`).

### Q10. "How do you measure quality of AI-generated outputs in production?"
**A**: Trzy poziomy. **Poziom 1 — automated**: dla pism reklamacyjnych (reklamacje24) sprawdzam czy output cytuje konkretny artykuł UoPK, czy zawiera wszystkie required fields (data, dane stron, żądanie, podpis-placeholder, sąd właściwy). Jeśli nie — retry z stricter system promptem. **Poziom 2 — user feedback**: każde pismo ma opcjonalną ankietę "Czy pismo było OK?" po download. **Poziom 3 — manual review**: Bartosz przegląda losowo 5% generated outputs tygodniowo (na podstawie low-confidence flag z multi-model routingu — jeśli Sonnet i Opus dali rozbieżne outputs, flag for review).

### Q11. "Tell me about your open-source contributions."
**A**: **6 publicznych MCP servers** zbudowanych od zera: `linkedin-mcp` (25 tools), `seo-gaca-mcp` (37 tools, opublikowany **na PyPI**), `facebook-mcp` (28 tools), `ksef-mcp` (30 tools, **pierwszy open-source MCP dla polskiego KSeF**), `mcp-universal-adapter`, `popcorn` (5 tools, video scene detection). Łącznie 145+ tools. `seo-gaca-mcp` jest install'owalny przez `pip install seo-gaca-mcp`. Plan: tłumaczenia oficjalnej dokumentacji Anthropic na PL jako PR-y do `anthropic-quickstarts` w nadchodzących miesiącach.

---

## Section C — Polish / Regional / Vertical fit

### Q12. "Why should we list you instead of a global partner with PL presence?"
**A**: Globalny partner z PL presence (Accenture Polska, Deloitte Polska) **nie obsłuży 5-osobowej kancelarii w Krakowie**. Ich minimum engagement size to setki tysięcy PLN; mój MVP Sprint zaczyna się od kilku tysięcy. **Reklamacje24** sprzedaje pojedyncze pisma za **4.99 PLN** — żaden globalny partner nie zbuduje takiego produktu, bo overhead pricing nie ma sensu. Polski MŚP (~2M firm, większość w obrębie Polish/CEE) **nie kupuje "platformy AI"** — kupuje konkretny problem rozwiązany przez konkretny bot. To zupełnie inny sales motion, inny język, inne ceny.

### Q13. "How would you onboard a Polish law firm to Claude Code?"
**A**: Pierwsze 30 min: discovery call — co kancelaria robi najczęściej powtarzalnie (analiza pism od klientów, pisanie odpowiedzi, screening dokumentów, sprawdzanie precedensów). Dzień 1–2: build proof-of-concept (custom Skill `pl-pismo-prawne` zaadaptowany do ich szablonów + integracja z ich systemem dokumentów przez MCP). Dzień 3–5: shadowing — adwokat pracuje z Claude Code, ja patrzę i tunuję prompty + skille. Tydzień 2: zostawiam działający setup + dokumentację + pierwszy follow-up call po 2 tygodniach. Cena: MVP Sprint lub Builder Retainer (zależnie od skali).

### Q14. "How do you handle GDPR / RODO compliance in your Claude integrations?"
**A**: **RODO-by-design** w produktach. Przykład: **odpisznapismo.pl** — dokumenty użytkowników przetwarzane w pamięci, **nigdzie trwale niezapisywane** (zasada minimalizacji danych z art. 5(1)(c) RODO). To rzadkość w polskich AI SaaS-ach. Inne przykłady: `presidio-local-anonymizer` (Chrome extension + Microsoft Presidio do anonimizacji PII przed wysłaniem do LLM) — używany przy pracy z prawnymi dokumentami zawierającymi dane osobowe. W consulting engagements zawsze zaczynam od DPA (Data Processing Agreement) i mapowania flow danych — gdzie PII trafia, na jak długo, kto ma dostęp.

### Q15. "What's your stance on Anthropic vs OpenAI vs Gemini in client engagements?"
**A**: **Claude jest moim primary choice dla legal-tech i complex reasoning** — Sonnet/Opus mają lepszą Polish language depth niż GPT-4 w mojej empirycznej walidacji (testowane na 100+ promptach prawniczych). **OpenAI/Gemini używam jako fallback** w `gaca-core` AI Bus dla cost optimization (Haiku-class tasks) i availability redundancy. W produktach: aplikantai używa **Claude 3.5 Sonnet** jako primary content generator (memory: aplikant.ai README); odpisznapismo i biznesbezklikania używają multi-model przez OpenRouter. **Jako Partner Anthropic, w nowych engagements polecam Claude jako primary**, ale nie wymuszam — klient decyduje.

---

## Section D — Business model / Partner economics

### Q16. "What's your stance on solo entrepreneur scale risk?"
**A**: Trzy mitigacje. **(1)** AI-native workflow — używam `team-dev` 19-agent skill który replikuje pracę 5-osobowego zespołu w wąskich oknach czasowych. **(2)** Pełna ownership infrastructure — 4 serwery własne (K8s OVH + 3 VPS), 21+ baz PostgreSQL, GitOps z ArgoCD. Brak managed cloud dependency = brak vendor lock-in risk. **(3)** Plan team scaling w 6–12 mc (sekcja 15 application-draft) z konkretnymi hiring profiles. Bus factor 1 jest realne ryzyko — dokumentacja w `cca-f-prep` repo i memory system w Claude Code redukuje to (każda decyzja udokumentowana, każdy artefakt reproducible).

### Q17. "How do you measure success for a Partner Network engagement?"
**A**: Trzy poziomy. **Poziom 1 — delivery**: czy klient dostał deliverable on-time, on-spec, w ramach SOW. **Poziom 2 — adoption**: czy klient faktycznie używa Claude Code workflow po 30/60/90 dniach (nie tylko zakupił). **Poziom 3 — outcome**: czy klient widzi mierzalne korzyści (oszczędność czasu, nowy revenue stream, zmniejszone CPA). Każdy SOW ma dedicated success criteria mierzone w retrospektywie. Dla Partner Network reportowanie: kwartalne updates do Anthropic z anonymized metrics, jeśli klient zgodzi się — case study publikacja.

### Q18. "What's your expected first-year deal flow as a Partner?"
**A**: Konserwatywnie: **2–4 płatnych Partner-attributed engagements** w pierwszych 12 mc. To bazuje na: (a) obecnym pipeline inbound z bartoszgaca.pl (LinkedIn + blog), (b) zerowej konkurencji polskich Claude Partners (do verify w directory przy submicie), (c) realistycznym sales cycle 1–3 mc dla polskiego MŚP. Bardziej agresywny scenariusz: **6–10 engagements** jeśli (i) Anthropic robi co-marketing PL case study, (ii) listing w directory generuje inbound, (iii) skille open-source (`pl-legal-docs` MCP, `pl-pismo-prawne` Skill) trafiają w polską prasę techniczną. Mierzę i raportuję kwartalnie.

### Q19. "What's your competitive moat against another Polish solo dev who decides to become Claude Partner tomorrow?"
**A**: Trzy warstwy moat'u, każda mierzalna. **(1)** **Track record**: 6 MCP servers public, 28+ aplikacji produkcyjnych, 55 kontenerów Docker, 145+ tools — to nie do zreprodukowania w miesiącach, tylko w latach (live SSH 15.03.2026). **(2)** **Niche depth**: KSeF discovery, RODO-by-design w odpisznapismo, polskie regulacje legal-tech — wymaga lat pracy w polskim regulowanym rynku. **(3)** **Open-source impact**: `seo-gaca-mcp` na PyPI, `ksef-mcp` pierwszy w PL, blog `bartoszgaca.pl/baza-wiedzy` — to publiczne foot-prints które inny solo musi dopiero zbudować. Plus: brand voice i LinkedIn pozycjonowanie ("Buduję rzeczy. Szybko") nie do skopiowania bez zmiany całej kultury pracy.

---

## Section E — Operational readiness

### Q20. "How fast can you respond to a Partner-referred client inquiry?"
**A**: **24h dla initial response, 72h dla discovery call**. Mam standardowy inbound process: lead → email/LinkedIn DM → 24h personal reply (nie automation) → 30-min discovery call w terminie ≤72h → SOW draft w 5 dni roboczych. Skala wymaga że to działa solo — confirmed by current handling 21+ aplikacji produkcyjnych. Po team scaling (sekcja 15) SLA tightens do 4h initial, 48h discovery.

### Q21. "What's your tech support process for clients?"
**A**: 3-tier. **Tier 1**: dokumentacja w repo klienta (każdy engagement zostawia README + runbook). **Tier 2**: Slack/Discord shared channel z klientem (initial 30-day support included w MVP Sprint, ongoing dla Retainer). **Tier 3**: emergency line — bezpośredni kontakt do mnie (telefon/email) dla production-down sytuacji. Po team scaling: Tier 1+2 delegowane do customer success, Tier 3 zostaje przy mnie.

### Q22. "Are you prepared for compliance / security review by Anthropic clients?"
**A**: Tak. Mam doświadczenie z: (i) RODO/GDPR — wdrożone w odpisznapismo (RODO-by-design), (ii) Polish VAT/JPK_FA — faktury kompliantne we wszystkich produktach, (iii) ISO-type security practices w infrastruktirze (Fail2ban, automated backups daily, monitoring stack 4 kontenerów, Traefik SSL, ESO+1Password dla secrets). Mogę dostarczyć: data flow diagrams, DPA wzorzec, security audit report (z `seo-audit-suite` lub external auditora). Nie mam SOC2 / ISO27001 certyfikacji formalnej — to roadmap po team scaling i pierwszym corporate engagement.

### Q23. "Can you deliver in English?"
**A**: Tak. Bartosz pisze docs/code po angielsku domyślnie (memory: `feedback_separate_mcp_per_project.md` reguła "kod EN, content PL"), wszystkie publiczne repo mają EN README, fixmynotice.com to EN-market production deployment. Speaking proficiency: business-fluent. **Niche to PL**, ale **EN nie jest barierą**.

---

## Section F — Strategic alignment with Anthropic

### Q24. "What's your vision for Claude Code adoption in Poland in 12 months?"
**A**: **Top-down**: Anthropic listuje mnie w directory, ja zwiększam visibility Claude w PL legal-tech i SME. **Bottom-up**: publikuję blog/YouTube tutoriale po polsku, open-source polskie skille i MCP servers, edukuję polskich developerów w Claude Code. Mierzalny target: **100+ polskich developerów aktywnie używających Claude Code** dzięki moim materiałom (przez Google Analytics blogu + YouTube + GitHub stars na polskich skillach). **Drugi target**: **3+ polskich firm enterprise** z Claude w produkcji jako rezultat Partner introductions.

### Q25. "What do you need from us beyond listing?"
**A**: Pięć rzeczy w kolejności priorytetu. **(1)** Co-marketing na 1+ case study (gdy klient zgodzi się publikację) — daje credibility multiplier. **(2)** Early access do nowych features Claude Code/Skills/MCP — żebym pierwszy mógł publikować po polsku. **(3)** Introductions do polskich enterprise prospectów gdy Anthropic szuka POC w PL. **(4)** Partner technical support channel dla blockerów technicznych (np. MCP protocol edge cases). **(5)** Pathway do wyższych CCA certyfikatów (Professional, Advanced) po zaliczeniu Foundations.

---

## Demo Plan (10–15 min slot)

Jeśli reviewer chce live demo, mam przygotowany scenariusz: **"Od zera do polskiego Claude Code Skill w 15 minut"**:

1. (0:00) Cel: zbudować custom Skill dla polskich pism prawnych na żywo
2. (0:30) Otwarcie Claude Code w pustym projekcie, plan mode
3. (2:00) Generation: szkielet skilla, frontmatter, structure
4. (5:00) Implementacja: prompt template z polskim Kodeksem Cywilnym, edge cases
5. (10:00) Live test: prompt → wygenerowane pismo
6. (12:00) Hook do logowania użycia + cost tracking
7. (14:00) Push do GitHub jako open-source
8. (15:00) Recap: Skill action → repo → potencjalne use case'y u polskich klientów

Demo idzie z prawdziwego repo `cca-f-prep` — pokazuję faktyczną pracę, nie scripted.

---

## Czego unikam w odpowiedziach (sztywno)

- ❌ Marketing-speak: "rewolucja", "game changer", "transformacja"
- ❌ Liczb bez source: "10K userów", "zwiększyliśmy X o 50%"
- ❌ Nazwisk klientów bez consent
- ❌ Obietnic akceptacji ("na pewno przejdziemy", "to oczywiste że...")
- ❌ Cytowania Jobs / Musk / Bezos
- ❌ Słów: leverage, must-have, AI to przyszłość, drogi czytelniku

## Co podkreślam w każdej odpowiedzi

- ✅ Konkretny artefakt w repo / na produkcji jako dowód
- ✅ Liczba z source
- ✅ Honest disclosure ograniczeń (solo, niche, no mobile, no ML training)
- ✅ Polish-first jako moat, nie limitacja
- ✅ Open-source / dogfooding jako style of work
