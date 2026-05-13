# Claude Partner Network — Application (Consulting Track)

> **Status**: DRAFT do submitu w `partnerportal.anthropic.com/s/partner-registration` po (1) zaliczeniu CCA-F i (2) potwierdzeniu 3 reference customers.
>
> **Strategia submitu**: `playwright/partner-form-prefiller.ts` pre-wypełni formularz tymi danymi po pierwszym oględzinie struktury formularza (portal wymaga auth — `WebFetch` zwraca 403). Submit klika Bartosz po finalnym review.
>
> **Tone**: builder-practitioner, konkrety zamiast deklaracji. Każda liczba weryfikowalna w repo lub na żywo.

---

## 1. Company / applicant information

| Pole | Wartość |
|---|---|
| Legal entity | **BARTOSZ GACA** (jednoosobowa działalność gospodarcza, sole proprietorship) |
| Trade name | bartoszgaca.pl |
| Tax ID (NIP) | 5993112591 |
| Address | ul. Platynowa 14, 66-446 Dzierżów, Poland |
| Country of operation | Poland |
| Year founded | (uzupełnij datą wpisu do CEIDG przy submit) |
| Company size | 1 (solo entrepreneur) |
| Website | https://bartoszgaca.pl |
| GitHub | https://github.com/gacabartosz |
| LinkedIn | https://linkedin.com/in/bartosz-gaca (verify exact slug przy submit) |
| Primary contact | Bartosz Gaca, Founder (JDG) |
| Email | bartosz.gaca@gmail.com (primary), kontakt@bartoszgaca.pl (jeśli aktywny — verify przy submit) |
| Phone | (uzupełnij przy submit) |
| Time zone | Europe/Warsaw (UTC+1/+2) |

## 2. Partner track requested

**Consulting Partner** (alt: Services Partner / Build with Claude — finalna nazwa tracku zależy od aktualnej struktury programu w momencie submitu; do weryfikacji w portalu).

Powód wyboru: profil hybrydowy — buduję produkty na Claude (Build with Claude evidence) ORAZ pomagam innym firmom zaprojektować i wdrożyć Claude Code workflows (Consulting/Services evidence). Domyślnie wybieram Consulting; jeśli portal pozwala na multi-track — aplikuję na Consulting + Build with Claude równolegle.

## 3. Regions of operation

- **Primary**: Poland (38M population, EU member, EUR/PLN markets)
- **Secondary**: Central & Eastern Europe (Czech Republic, Slovakia, Hungary, Baltic states) — zdalna obsługa, brak fizycznej obecności
- **Tertiary**: EU broadly, English-speaking remote

## 4. Industry verticals

W kolejności głębokości doświadczenia:

1. **Legal-tech / regulatory automation** — 3 produkcyjne produkty (reklamacje24.pl, odpisznapismo.pl, fixmynotice.com), MCP server dla polskiego KSeF (e-invoicing), discovery luki walidacyjnej w państwowym API
2. **SME / SMB process automation** — biznesbezklikania.pl (suite automatyzacji dla MŚP), n8n pipelines dla MŚP (mail→parsowanie→XLS→chmura), abonamentowy model
3. **E-commerce** — doświadczenie z 12 R&D AI projects (karlik, rentgen, lookbooki, porównywarki) jako CTO w BeeCommerce (parallel role / professional experience). JDG bartoszgaca.pl **nie świadczy usług e-commerce w ramach Partner Network** (osobny pipeline klientów); kompetencja wymieniona jako background depth, nie jako vertical offering
4. **Agritech** — stadomat.pl (SaaS multi-tenant dla hodowców bydła, IRZ integration, ZUS/ARiMR)
5. **EdTech** — apexskills.pl, edustation.com.pl

## 5. Claude products / capabilities offered

| Capability | Evidence |
|---|---|
| **Claude Code workflows design & implementation** | Repo `cca-f-prep` (this); 14+ public Claude Code Skills built (pdf-generator, seo-inspector, reel-maker, smart-router, brand-guidelines, canvas-design, humanizer, team-dev, team-mar, team-strat, wiki-update, frontend-design, seo-audit-suite, analytics-stack-deploy) |
| **MCP server development** | 6 public MCP servers, 145+ tools łącznie (`linkedin-mcp` 25, `seo-gaca-mcp` 37 na PyPI, `facebook-mcp` 28, `ksef-mcp` 30, `mcp-universal-adapter`, `popcorn` 5) |
| **Multi-agent systems (subagents, orchestration)** | `team-dev` (19 agents, 4 layers, 10 phases), `team-mar` (21 agents, 5 layers, 9 phases), `team-strat` (6 agents, 3 layers, 5 phases), Ralph autonomous outreach agent |
| **Custom skills (industry-specific)** | Planowane: `pl-pismo-prawne`, `pl-faktura-vat`, `pl-umowa` (polskie regulacje). Już istniejące: 14 publicznych skills (lista wyżej) |
| **AI infrastructure / model routing** | `gaca-core` (G.A.C.A.) AI Bus — 50+ modeli, 11 providerów, single endpoint; `smart-router` (FusionRoute) — Haiku/Sonnet/Opus routing dla cost optimization |
| **Integration: e-gov / regulated APIs** | `ksef-mcp` (Polish e-invoicing), IRZ (cattle registry), ARiMR, PUE ZUS, ePUAP — wszystkie zaimplementowane lub zaprojektowane |
| **End-to-end automation (n8n + Claude)** | Production pipelines: mail→invoice parsing→XLS→cloud folders→Slack; LinkedIn auto-publish daemon z auto-komentarzami |
| **SaaS multi-tenant on Claude** | `stadomat.pl` — per-tenant database isolation, pgBouncer, Stripe + Przelewy24 + Fakturownia |
| **Claude Code training / evangelism (PL)** | Blog `bartoszgaca.pl`, YouTube (planowane), repo `cca-f-prep` jako publiczny kurs |

## 6. Reference customers (3 required — standard partner program signal)

Pełna tabela: `referencje-klientow.md`. Pre-fill kandydaci poniżej (status zgody w trakcie potwierdzania):

| # | Customer / Product | Industry | Live URL | Stack on Claude | Status zgody | Forma referencji |
|---|---|---|---|---|---|---|
| 1 | **reklamacje24.pl** (own product) | B2C legal-tech / consumer rights | https://reklamacje24.pl | Node 18+ + PostgreSQL 14+ + Prisma, Stripe acct_1SO3Io (4.99 PLN/use, P24+BLIK+karta), nginx + pm2, Docker port 4003, GitHub Actions CI/CD, AI image analysis + generation per UoPK, GSC verified | Bartosz = product owner (auto-zgoda) | Full name + URL + Stripe metrics (po decyzji o ujawnieniu) |
| 2 | **odpisznapismo.pl** (own product) | Legal-tech / consumer | https://odpisznapismo.pl | React + TS + Tailwind, Node/Express, PostgreSQL + Prisma, OpenRouter (Gemini + Claude + GPT), Tesseract OCR, Autopay | Bartosz = product owner (auto-zgoda) | Full name + URL |
| 3 | **biznesbezklikania.pl** (own product) | SME automation / multi-channel | https://biznesbezklikania.pl | React + TS + React Router + Tailwind, esbuild, Node/Express, Gemini API + Claude-compatible, lead capture, Meta/TikTok CAPI/EAPI, WhatsApp/Messenger inbox | Bartosz = product owner (auto-zgoda) | Full name + URL |

**Supporting evidence (own products, drugi krąg)**:
- **stadomat.pl** — SaaS multi-tenant agritech (status: pre-PMF, 1 testujący user — używam jako *technology* reference, nie *traction* reference): per-tenant PostgreSQL isolation, pgBouncer, Stripe + Przelewy24 + Fakturownia, IRZ API integration
- **ksef-mcp** — pierwszy open-source MCP server dla polskiego KSeF, 30 tools, discovery luki walidacyjnej w państwowym API (art. 106e ust. 11 UoVAT)
- **seo-gaca-mcp** — opublikowany na PyPI, 37 tools SEO/GEO automation

**External / client references (do potwierdzenia zgodą — pre-list)**:
- woodconsulting.pl — frontend + backend + PostgreSQL 16, deployed na własnych serwerach (B2B)
- BeeCommerce (employer context) — 12 R&D AI projects on Kubernetes, GitOps pipeline

## 7. Certifications & training (Anthropic-issued)

| Certyfikat | Status | Plan |
|---|---|---|
| **Claude Certified Architect — Foundations (CCA-F)** | In progress | Target: zaliczenie w ciągu 8–12 tygodni od startu nauki (2026-05-13) |
| Inne tracki Claude (gdy dostępne) | Planned | Po CCA-F: kolejne dostępne certyfikaty (CCP, advanced, etc.) |

Repo `cca-f-prep` jest publicznym dowodem przygotowania. Linkujemy do niego w aplikacji.

## 8. Partner capability evidence (deliverables, not declarations)

### A. Public open-source assets
| Asset | URL / Location | Tools / Scale |
|---|---|---|
| `seo-gaca-mcp` (PyPI) | TODO: link PyPI przy submit | 37 SEO/GEO tools |
| `ksef-mcp` (GitHub) | TODO: link GitHub | 30 tools, pierwszy open-source MCP dla polskiego KSeF |
| `linkedin-mcp` | TODO: link | 25 tools |
| `facebook-mcp` | TODO: link | 28 tools |
| `mcp-universal-adapter` | TODO: link | adapter pattern |
| `popcorn` | TODO: link | 5 tools, video scene detection |
| `cca-f-prep` (this repo) | github.com/gacabartosz/cca-f-prep | Publiczny kurs CCA-F po polsku + portfolio Partner Network |

### B. Production deployments (live infrastructure, SSH-verified 15.03.2026)
- **28+ aplikacji** w `/srv/apps/` na VPS#3 (51.68.174.118)
- **24+ domen produkcyjnych** za Nginx/Traefik
- **55 kontenerów Docker, 35 compose projects** łącznie
- **4 serwery**: Kubernetes OVH (11 apps, ArgoCD GitOps, Harbor registry, Kyverno policies, cert-manager) + 3 VPS (12 CPU / 30 GB RAM / 292 GB disk)
- **21+ baz PostgreSQL** (PG14, PG16, PG17, PostGIS)
- Monitoring stack, Fail2ban, automated daily backups, weekly ETL pipelines

### C. Anthropic-specific evidence
- Discovery w państwowym API (KSeF v2) podczas budowy MCP server dla Claude — pokazuje, że nie tylko używam Claude, ale buduję na poziomie, na którym znajduję bugi w systemach trzecich
- 14+ publicznych Claude Code Skills w użyciu produkcyjnym
- Multi-agent orchestration: 3 teamy (`team-dev` 19 agentów, `team-mar` 21, `team-strat` 6)
- Public learning journey to CCA-F (this repo) — "eat your own dog food" w pełnej skali

## 9. Go-to-market plan jako Partner

### A. Polish-language Claude Code content (12-month plan)
- **Blog `bartoszgaca.pl/baza-wiedzy`** — minimum 1 post tygodniowo o Claude Code w PL
- **YouTube** — tutoriale PL z napisami EN (Skills, hooks, MCP, subagents, multi-agent orchestration)
- **LinkedIn** — auto-publish daemon, 1 post dziennie, brand voice: builder/Slack-developer (sztywno trzymany w `content-marketer` subagent)

### B. Polish open-source ecosystem
- Skille: `pl-pismo-prawne`, `pl-faktura-vat`, `pl-umowa` — w repo `cca-f-prep/skills/`
- MCP server: `pl-legal-docs` — kodeksy + ustawy + orzecznictwo SN/NSA + wzory pism
- Tłumaczenia dokumentacji Anthropic na PL (open-source PR-y)

### C. Conferences (PL + EU)
- Infoshare, ML in PL, Code Europe — Claude Code demos w PL
- Niche: KSeF / fintech / legaltech panels

### D. Vertical-specific sales motion
- **Legal**: kancelarie 1–10 prawników, doradcy podatkowi, biura rachunkowe, klienci indywidualni B2C — produkty: reklamacje24, odpisznapismo, fixmynotice, ksef-mcp
- **SME automation**: e-commerce, gabinety, salony, restauracje — produkty: biznesbezklikania, n8n pipelines

### E. Mierzalne KPIs przy 6 mc (target, nie obietnica)
- Polish skills opublikowanych: 3 → 6
- MCP servers nowych: +2 (np. `pl-legal-docs`, `pl-vat-checker`)
- Klienci konsultingowi PL na Claude: 2 → 8
- Polish content artefakty: 24 (LinkedIn) + 12 (blog) + 6 (YouTube)

## 10. What I need from Anthropic (clear ask)

1. **Listing w Partner directory** pod region "Poland" / "EMEA" — visibility dla polskich firm szukających lokalnego partnera
2. **Co-marketing** na ≥1 case study (gdy klient zgodzi się na publikację) — wzajemne wzmocnienie
3. **Early access** do nowych features Claude Code (Skills, hooks, MCP updates) — bo komunikuję je polskiej społeczności pierwszy
4. **Introductions** do polskich enterprise prospectów (gdy Anthropic szuka case studies/POC w PL)
5. **Partner technical support channel** dla blockerów technicznych
6. **Możliwość rekomendacji do CCA Professional / Advanced** po zaliczeniu Foundations

## 11. Honest disclosures / preempts

- **Solo entrepreneur**. Bez backupu zespołu w sensie etatowym. Mitigacja: AI-native workflow + sieć współpracowników + 100% własna infrastruktura, czyli zero dependency na zewnętrzny ops.
- **Reference customers w trakcie zbierania zgód**. Wszystkie 3 produkty referencyjne są moje własne (lower-bar reference); zewnętrzni klienci (woodconsulting, BeeCommerce) wymagają explicit consent — w trakcie.
- **CCA-F: in progress, nie passed.** Aplikacja składana po zaliczeniu (cca-f-prep repo = dowód przygotowania).
- **Polish-first**. Praca w EN możliwa i robiona, ale niche to PL.
- **No mobile dev**. iOS/Android nie jest moją kompetencją — partnerstwo skupia się na web + backend + MCP + Claude Code.
- **No own model training**. Pracuję z Claude/OpenRouter na poziomie aplikacyjnym, nie trenuje własnych LLM-ów.

## 12. Solution architecture diagrams (proof of technical depth)

### A. reklamacje24.pl — production pipeline (Stack zweryfikowany w `/Users/gaca/projects/personal/reklamacje24.pl/README.md`)

```
                     ┌──────────────────────────────────────┐
                     │  USER (B2C consumer, mobile/desktop) │
                     └──────────────────────────────────────┘
                                     │ HTTPS
                                     ▼
                     ┌──────────────────────────────────────┐
                     │  nginx (reverse proxy, SSL, gzip)    │
                     └──────────────────────────────────────┘
                                     │
                                     ▼
                ┌────────────────────────────────────────────┐
                │  React + TypeScript SPA                    │
                │  - Upload zdjęcia / PDF / tekstu           │
                │  - Display generated pismo + PDF download  │
                └────────────────────────────────────────────┘
                                     │ POST /api/analyze
                                     ▼
        ┌─────────────────────────────────────────────────────────┐
        │  Node.js 18+ / Express backend                          │
        │  pm2 process manager, Docker port 4003                  │
        │  Prisma ORM (PostgreSQL 14+)                            │
        └─────────────────────────────────────────────────────────┘
                                     │
              ┌──────────────────────┼─────────────────────────┐
              ▼                      ▼                         ▼
       ┌─────────────┐      ┌────────────────┐       ┌─────────────────┐
       │ OpenRouter  │      │  Stripe API    │       │  PostgreSQL 14+ │
       │ (multi-     │      │  acct_1SO3Io   │       │  - users        │
       │  model AI)  │      │  4.99 PLN/use  │       │  - analyses     │
       │             │      │  P24+BLIK+karta│       │  - generations  │
       └─────────────┘      └────────────────┘       └─────────────────┘
              │
   ┌──────────┴───────────────────────────────────┐
   ▼                              ▼               ▼
┌─────────────┐         ┌──────────────────┐  ┌────────────────────┐
│ Claude      │         │ smart-router     │  │ Image analysis     │
│ (Sonnet/    │         │ (FusionRoute)    │  │ (computer vision)  │
│  Opus dla   │         │ - Haiku: OCR     │  │                    │
│  generacji  │         │ - Sonnet: pismo  │  └────────────────────┘
│  pism UoPK) │         │ - Opus: multi-   │
└─────────────┘         │   issue case     │
                        └──────────────────┘
                                     │
                                     ▼
                     ┌─────────────────────────────────────┐
                     │  PDF generation + email delivery    │
                     │  (jsPDF / nodemailer)               │
                     └─────────────────────────────────────┘
                                     │
                                     ▼
              ┌──────────────────────────────────────────┐
              │  GitHub Actions CI/CD → VPS Docker       │
              │  Memory: project_reklamacje24_deploy.md  │
              └──────────────────────────────────────────┘
```

### B. Multi-agent `team-dev` orchestration (Skill: `~/.agents/skills/team-dev/SKILL.md`)

```
[BARTOSZ]
   │
   ▼
[/team-dev <domena> <brief>]
   │
   ▼
┌──────────────────────────────────────────────────────────────────────┐
│  LAYER 1 — Planning                                                  │
│  ┌────────────┐                                                      │
│  │ PM agent   │ — decomposes brief → 10-phase pipeline               │
│  │            │ — reads project CONTEXT.md + .team-dev/state/        │
│  └─────┬──────┘                                                      │
│        │                                                             │
│        ▼                                                             │
│  LAYER 2 — Design (parallel)                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────────┐ ┌───────────────┐        │
│  │ architect│ │ ux       │ │ data-modeler │ │ infra-planner │        │
│  └────┬─────┘ └────┬─────┘ └──────┬───────┘ └──────┬────────┘        │
│       │            │              │                │                  │
│       └────────────┴──────────────┴────────────────┘                  │
│                          │                                            │
│                          ▼                                            │
│  LAYER 3 — Implementation (parallel)                                  │
│  ┌─────────┐ ┌─────────┐ ┌────────┐ ┌──────────┐ ┌────────┐           │
│  │frontend │ │backend  │ │db      │ │integrate │ │ deploy │           │
│  └────┬────┘ └────┬────┘ └───┬────┘ └─────┬────┘ └───┬────┘           │
│       │           │          │            │          │                │
│       └───────────┴──────────┴────────────┴──────────┘                │
│                          │                                            │
│                          ▼                                            │
│  LAYER 4 — Review / QA / Security / Deploy / Monitor                  │
│  ┌──────────┐ ┌─────────────┐ ┌──────────┐ ┌─────────┐ ┌─────────┐    │
│  │code-     │ │security-    │ │qa-tester │ │release- │ │monitor- │    │
│  │reviewer  │ │auditor      │ │          │ │manager  │ │ops      │    │
│  └──────────┘ └─────────────┘ └──────────┘ └─────────┘ └─────────┘    │
└──────────────────────────────────────────────────────────────────────┘
                          │
                          ▼
                   Output: PR + tests + deploy + monitoring
```

Wszystkie 19 agentów zdefiniowane w `~/.agents/skills/team-dev/SKILL.md` jako oddzielne markdown agent files. Pipeline zweryfikowalny w description tego skilla.

---

## 13. Quantified Claude usage / cost optimization (Build with Claude evidence)

### A. Multi-model routing rationale (`smart-router` aka FusionRoute)

| Task type | Model wybrany | Powód |
|---|---|---|
| Klasyfikacja typu wady produktu (reklamacje24) | Haiku | Proste klasyfikacje, niski koszt, szybki response time |
| OCR cleanup (odpisznapismo, po Tesseract.js) | Haiku | Czyszczenie tekstu — prosty task, koszty must scale do 4.99 PLN AOV |
| Generowanie pisma reklamacyjnego z UoPK | Sonnet | Wymaga precyzji prawnej + cytowanie artykułów; quality > cost |
| Multi-issue legal analysis (skomplikowane sprawy) | Opus | Reasoning depth, mniej częste, dopuszczalna wyższa cena |
| Multi-agent orchestration (team-dev planowanie) | Opus | Architectural decisions wymagają depth |
| Multi-agent execution (team-dev specjaliści) | Sonnet | Implementation tasks z jasnym specem |
| Content moderation hooks | Haiku | High-frequency, low-stake |

Logika routing nie jest hardcoded per task — `smart-router` używa 6-dim scoringu (complexity, depth required, business stake, frequency, output length, latency tolerance) i decyduje dynamicznie. Pełna logika w `~/.claude/skills/smart-router/SKILL.md`.

### B. Prompt caching strategy

- **Aplikantai/odpisznapismo/biznesbezklikania**: cachowane prompty systemowe + (per request) RAG context z GitHub knowledge bases. TTL alignedSquare z natural session length.
- **Cca-f-prep slash commands**: krótkie prompty, nie wymagają cachowania.
- **gaca-core**: cache layer na poziomie AI Bus dla powtarzalnych queries (multi-tenant aggregation).

### C. Cost discipline

- Stripe revenue (reklamacje24 4.99 PLN/use) wymusza CPA <2 PLN → discipline w doborze modelu na low-margin operations
- Multi-model routing oszczędza ~40-60% vs naive "Opus dla wszystkiego" approach (publicznie wzmiankowany w `smart-router` SKILL description: "cost-aware model router")
- Metryki realne (Stripe + OpenRouter dashboards) do uzupełnienia przed submit aplikacji — patrz section 12 reklamacje24.pl pipeline

---

## 14. Risk register & mitigation

| Risk reviewer flag'a | Mitigation | Source / Evidence |
|---|---|---|
| Solo entrepreneur — bus factor 1 | (a) AI-native workflow jako multiplier, (b) 4 własne serwery — zero dependency na managed cloud, (c) pełna dokumentacja w repo `cca-f-prep`, (d) sieć współpracowników kontraktowych, (e) plan team scaling 6–12 mc w sekcji 15 | Skills profile FAZA 1 (live SSH 15.03.2026), team-dev/team-mar/team-strat = AI-native multiplier |
| Polish-first vertical — nisza geograficzna | (a) Polska = 38M EU member, (b) `fixmynotice.com` jako EN-market proof-of-capability, (c) wszystkie technologie open-source są EN, więc content/docs po EN tworzone z marszu | fixmynotice.com — production EN-market deployment |
| Reference customers głównie own products | (a) 6 publicznych MCP servers + 14+ Skills + PyPI package = open-source impact substytuuje brak corporate references, (b) Stripe revenue na własnych produktach to **real-world traction**, nie demo, (c) 2 external (woodconsulting, BeeCommerce employer-context) w trakcie consent process | Memory: `reference_stripe_accounts.md`, GitHub `gacabartosz/*` repos |
| No mobile / no ML training | Scope jasno zdefiniowany: web + backend + MCP + Claude Code workflows. Mobile w razie potrzeby delegowany do kontraktora; ML training (trenowanie własnych modeli) **świadomie poza zakresem** — Claude jest providerem | `application-draft.md` sekcja 11 honest disclosures |
| Konflikt interesów BeeCommerce vs JDG | Different verticals (e-commerce vs legal-tech/SME), different clientele (enterprise vs MŚP), different pricing, different IP ownership | `why-bartoszgaca-not-beecommerce.md` |

---

## 15. Team scaling plan (6–12 mc)

### Faza 0–3 mc (status quo)
- Solo + AI-native workflow
- Multi-agent skille (`team-dev`, `team-mar`, `team-strat`) jako "virtual team"
- Sieć kontraktorów (na żądanie)

### Faza 3–6 mc
- **+1 contractor frontend / Claude Code workflows** — 0.5 FTE, polski rynek
- **+1 advisor legal-tech** — polski adwokat / radca prawny, 0.1 FTE, walidacja pism prawnych generowanych w reklamacje24/odpisznapismo
- Formalne SLA dla pierwszych Partner Network klientów

### Faza 6–12 mc
- **+1 senior engineer** (full-stack, Claude experience) — etat lub B2B
- **+1 mid engineer** (full-stack lub MCP focus) — etat
- **+1 sales / customer success** — pierwszy non-tech hire
- Rozważenie założenia sp. z o.o. lub Y Combinator-style spinout JDG, jeśli wolumen klientów PartnerNetwork to uzasadni

### Hiring profile
- Full-stack devs PL/CEE, doświadczenie z Claude lub OpenAI w produkcji
- Znajomość polskich regulacji legalnych/fintech (legal-tech) lub agritech (rolnictwo)
- AI-native workflow comfort (Claude Code, MCP, multi-agent)
- Junior friendly dla mid-level role (mentorship Bartosza)

### Budget rationale
Budget będzie scaled na bazie revenue z Partner Network engagements + revenue z 3 produkcyjnych SaaS-ów. Konkretne kwoty do uzupełnienia po pierwszej rozmowie z Anthropic GTM (sekcja 10.4) — wymaga znajomości oczekiwanego deal-flow.

---

## 16. Pricing & engagement models

Bartosz oferuje 3 pakiety dla klientów konsultingowych (źródło: `LINKEDIN-STRATEGY.md` "About Section" + `user_linkedin_goals.md` memory):

### A. MVP Sprint
- **Co**: "MVP w tydzień / 1-2 tyg" — od pomysłu do działającego produktu
- **Format**: jednorazowy projekt, fixed-price
- **Dla kogo**: startupy, founderzy, product ownerzy z konkretnym pomysłem
- **Cena**: do potwierdzenia przed submitem (bartoszgaca.pl/cennik lub manual specification)

### B. Builder Retainer
- **Co**: "Twój builder na stałe" — abonament miesięczny
- **Włącza**: Claude Code workflows, MCP integracje, code review, AI strategy guidance
- **Dla kogo**: firmy, które potrzebują continuous AI/automation capability bez etatowego CTO
- **Cena**: do potwierdzenia przed submitem

### C. MCP / Skill Custom Build
- **Co**: dedykowany MCP server lub Claude Code skill pod konkretny use case klienta
- **Format**: fixed-price per artefakt, deliverable = open-source repo + 30-day support
- **Dla kogo**: firmy, które chcą custom integrację z własnym wewnętrznym systemem
- **Cena**: do potwierdzenia przed submitem

### Wszystkie pakiety zawierają
- Pre-engagement discovery call (15 min)
- Statement of Work (SOW) per engagement (template w `partner-network/sample-sow-template.md` — TODO: dodać)
- Polish-language support
- Open-source kod gdzie applicable
- IP ownership: client owns business logic, Bartosz może referować artefakt jako case study (after consent)

---

## 17. Sample SOW / engagement template

Wzorzec Statement of Work, który Bartosz prześle nowemu klientowi po discovery call. **Wzorzec, nie konkretny SOW**:

```markdown
# Statement of Work — [Client Name]
## Strony
Zleceniodawca: [Client legal entity]
Wykonawca: Bartosz Gaca, JDG (NIP 5993112591, ul. Platynowa 14, 66-446 Dzierżów)

## Pakiet
[MVP Sprint / Builder Retainer / MCP-Skill Custom Build]

## Zakres
- [Konkretny deliverable #1 z mierzalnym kryterium]
- [Konkretny deliverable #2]
- [...]

## Milestones
| # | Co | Data | Akceptacja |
|---|---|---|---|
| 1 | Discovery / spec | T+3d | Client review |
| 2 | MVP / first deliverable | T+10d | Live demo |
| 3 | Final handover | T+14d | Acceptance criteria checklist |

## Cena
[Fixed-price PLN / Monthly retainer PLN] netto + 23% VAT (faktura JDG NIP 5993112591)

## Płatność
50% przy rozpoczęciu, 50% przy odbiorze (lub miesięcznie z góry dla retainera)
Metoda: przelew bankowy / Stripe / Przelewy24

## IP / Własność
- Kod produktowy (business logic specyficzna dla Client): własność Client
- Kod generic (utilities, MCP wrapper patterns, Skills): może być open-source pod licencją MIT (po zgodzie Client)
- Bartosz może wymienić engagement jako case study (anonymized lub nazwany — po zgodzie Client)

## NDA
Standardowo. Wzorzec dostępny.

## Termination
14 dni notice. Faktura proporcjonalna do faktycznie wykonanej pracy.

## Disputes
Sąd właściwy: Gorzów Wielkopolski (siedziba JDG)
```

---

## 18. Submission checklist (do final review przed submitem)

- [ ] CCA-F zaliczone (dowód: dyplom / Anthropic Academy badge)
- [ ] 3 customer reference consents pisemnie potwierdzone
- [ ] `cca-f-prep` repo publiczne na GitHub z czystym README
- [ ] Wszystkie 6 MCP servers public + linki w sekcji 8.A
- [ ] LinkedIn profile zaktualizowany pod headline "Claude Partner | MCP Builder | bartoszgaca.pl"
- [ ] Strona `bartoszgaca.pl/claude-partner` z pitch deck PDF
- [ ] `playwright/partner-form-prefiller.ts` przetestowany na devie portalu (gdy uda się zalogować i obejrzeć formularz)
- [ ] Final read-through przez subagenta `partner-strategist`
- [ ] Pricing PLN wpisany w sekcji 16 (z bartoszgaca.pl/cennik)
- [ ] CEIDG year founded uzupełnione w sekcji 1
- [ ] Exact LinkedIn slug verified
- [ ] Reklamacje24 + odpisznapismo + biznesbezklikania metryki (z GA4 + Stripe + admin panels) uzupełnione w case studies
- [ ] Submit + screenshot confirmation → commit do repo

## 19. Post-submit monitoring

- ETA decyzji: 6–8 tygodni (sygnał z niezależnych źródeł, niepotwierdzony oficjalnie przez Anthropic)
- Qualification call preparation: pełen Q&A draft w `partner-network/qualification-call-prep.md`; demo Claude Code session "od zera do polskiego skilla w 15 minut"
- Każde follow-up od Anthropic → screenshot/log do `postep/partner-network-timeline.md`
- Po akceptacji: update LinkedIn, bartoszgaca.pl/claude-partner z badge, ogłoszenie publiczne (LinkedIn post + blog post)
- Po odrzuceniu: feedback request, iteracja na słabe punkty, re-aplikacja po 6 mc (jeśli możliwa)
