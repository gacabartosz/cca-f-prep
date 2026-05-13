# Scenariusze egzaminacyjne — Agentic Architecture

> **Disclaimer**: Sample exam-style scenarios for practice. **Not actual CCA-F exam questions** (real exam is proctored and questions are not publicly available). Authored based on publicly documented Claude / Claude Code capabilities (docs.claude.com, MCP specification, Anthropic blog posts). Level target: 301 (advanced — architectural decisions, not definitions).

Format każdego: scenariusz + MCQ A/B/C/D + uzasadnienie poprawnej + dlaczego błędne.

---

### Scenariusz 1 — Multi-agent orchestration dla kancelarii prawnej

Polska kancelaria 8 prawników chce zautomatyzować generowanie odpowiedzi na typowe pisma od klientów (wezwania do zapłaty, reklamacje konsumenckie, pisma urzędowe). Każda kategoria pisma wymaga innej wiedzy domenowej. Średni czas obecnej pracy ręcznej: 25 min/pismo. Budżet na inferencję: ~50 PLN/pismo brutto (musi zostać marża dla kancelarii).

**Pytanie**: Która architektura najlepiej pasuje?

A) Jeden Claude Sonnet z bardzo długim system promptem zawierającym wszystkie domeny prawne
B) Multi-agent: orchestrator (Sonnet) klasyfikuje typ pisma, deleguje do specjalisty (Sonnet/Haiku) z wąskim system promptem per domena
C) Multi-agent: orchestrator (Opus) deleguje do specjalisty (Opus) per domena
D) Single Claude Haiku dla wszystkich pism, z fallback do Sonnet przy low confidence

**Odpowiedź**: **B**

**Dlaczego B**:
- Orchestrator klasyfikuje (low-complexity task — Sonnet wystarczy, Haiku mógłby brakować precyzji), specjalista generuje pismo z wąskim, zoptymalizowanym promptem (cache hit rate wzrasta, koszt spada)
- Wąski prompt per domena = mniej tokenów per request = mieszanka cost/quality optymalna
- Skalowalne: nowy typ pisma = dodanie nowego specjalisty subagenta, nie przepisanie monolitu

**Dlaczego nie A**: Bardzo długi system prompt dla wszystkich domen powoduje (i) wyższe koszty per request bez cache (jeśli używasz mieszanego setu rzadziej-wykorzystywanych domen), (ii) potencjalny conflicting instructions między domenami, (iii) brak modularności (zmiana w jednej domenie wpływa na inne)

**Dlaczego nie C**: Opus dla obu warstw to overkill dla classification — orchestrator nie potrzebuje Opus-level reasoning, marnotrawstwo budżetu

**Dlaczego nie D**: Haiku może hallucynować podstawy prawne lub przegapić niuanse polskich regulacji; w prawie konsekwencje hallucynacji są wysokie (klient kancelarii niezadowolony), więc unsafe single-tier

**Tag**: agentic-architecture / multi-agent-patterns

---

### Scenariusz 2 — Tool use loop z błędami

Fintech 50 osób buduje agenta do walidacji faktur VAT pod polski JPK_FA. Agent używa MCP servera `ksef-validator` z tool'em `validate_invoice(xml: string)`. W produkcji ~5% wywołań tool'a zwraca `is_error: true` z message "VAT amount mismatch (PLN required for foreign currency invoice)". Klient nie zna polskiego prawa VAT.

**Pytanie**: Jaka jest **najlepsza strategia error handling** w agencie?

A) Retry tool z exponential backoff (3 razy) i jeśli nadal error, abort z generycznym "validation failed"
B) Pass tool error message bezpośrednio użytkownikowi, agent stop
C) Agent czyta error message, w response wyjaśnia użytkownikowi (w jego języku) co znaczy, sugeruje konkretne fixes ("dla faktury walutowej dodaj kwotę VAT w PLN — art. 106e ust. 11 UoVAT")
D) Agent ignoruje error, generuje fabric'kowaną "success" response żeby nie blokować workflow

**Odpowiedź**: **C**

**Dlaczego C**:
- Tool result jako context — agent powinien przetworzyć, nie tylko przepuścić
- User-facing language i actionable suggestion redukuje support load
- Cite konkretnego artykułu UoVAT pokazuje educational value, buduje trust

**Dlaczego nie A**: Retry z tym samym inputem da ten sam error (deterministyczna walidacja); 3x retry to waste

**Dlaczego nie B**: User dostaje surowy techniczny komunikat, nie wie co z nim zrobić — zła UX

**Dlaczego nie D**: **Krytyczny błąd** — silent failure w domenie regulacyjnej (VAT) tworzy real legal liability dla klienta. Agent NIGDY nie powinien fabrykować tool success

**Tag**: agentic-architecture / error-recovery + tools-mcp / tool-result-handling

---

### Scenariusz 3 — Plan vs reactive dla SaaS legaltech B2B

SaaS legaltech B2B (klienci to kancelarie 5–20 osób) dodaje feature "AI assistant do przygotowania pozwu cywilnego". User wpisuje opis sprawy (~500 słów), oczekuje pełnego pozwu (5–15 stron). Quality bar wysoki, klienci płacą enterprise pricing.

**Pytanie**: Jaką strategię agent design wybrać?

A) Reactive: agent dostaje opis i od razu generuje pozew jednym large LLM call
B) Plan-and-execute: agent najpierw generuje plan (sekcje pozwu, kluczowe artykuły, żądania), user akceptuje/edytuje plan, dopiero potem generacja per sekcja
C) ReAct: agent iteracyjnie myśli i działa (każdy step generuje fragment, sprawdza, kontynuuje)
D) Reflexion: agent generuje pozew, własną krytykę, regeneruje z poprawkami, w pętli aż confidence wysoka

**Odpowiedź**: **B**

**Dlaczego B**:
- Plan-and-execute pasuje do high-stakes structured output gdzie user (adwokat) wnosi wartość (akceptuje/edytuje plan)
- Człowiek-w-pętli na poziomie planu, automation na poziomie execution
- Łatwiej audytować: plan widoczny, execution po sekcjach
- Cost-efficient: plan = krótki Opus call, execution = Sonnet per sekcja

**Dlaczego nie A**: Single large LLM call dla 5–15 stron prawnych = high hallucynation risk, brak interaktywności, brak chance correction przed generacją

**Dlaczego nie C**: ReAct świetne dla problemów eksploracyjnych, ale dla strukturowanego output (pozew ma znaną strukturę) overhead reasoning nie daje wartości

**Dlaczego nie D**: Reflexion w pętli generation→critique→regenerate dla 15 stron = bardzo kosztowne (3-5x cost), a adwokat i tak musi review końcowy — lepsze user-in-loop wcześniej

**Tag**: agentic-architecture / planning-vs-reactive

---

### Scenariusz 4 — Subagent context isolation

Polska firma 200 osób (regulowana finance) wdraża Claude Code dla zespołu 20 developerów. Compliance officer wymaga: każdy review code może widzieć **tylko ten plik** który review'uje, **nie inne pliki w repo** (data minimization principle). Claude Code główny ma access do całego repo (developer workflow).

**Pytanie**: Jak zaimplementować?

A) Custom hook PreToolUse który blokuje Read na innych plikach niż review target
B) Subagent dla code review z `tools: [Read]` ograniczonym przez subagent settings i wąsko zdefiniowanym scope
C) Osobna instancja Claude Code z różnym settings.json per developer
D) Trust-based: instrukcja w system promptcie "nie czytaj innych plików"

**Odpowiedź**: **B**

**Dlaczego B**:
- Subagent w Claude Code ma własny context window i własne tool permissions
- Można zdefiniować `tools` w subagent frontmatter, ograniczyć do `Read` z scope w system promptcie
- Architecturalne separation, nie polegamy na hooks lub trust
- Audytowalne (subagent definition w repo, version controlled)

**Dlaczego nie A**: Hook PreToolUse to dobry safety net, ale **nie jest primary mechanism** — można go zignorować z innych code paths, plus burden po stronie shell scripts

**Dlaczego nie C**: Multi-instance overhead + nie skaluje do 20 developerów z różnymi reviews równolegle

**Dlaczego nie D**: **Nigdy nie polegaj na trust w prompt** dla security boundaries — Claude może być prompt-injected, hallucynować, lub LLM update może zmienić behavior

**Tag**: agentic-architecture / agent-boundaries-permissions

---

### Scenariusz 5 — Long-running agent session

SaaS legaltech B2B buduje "AI legal research assistant" dla adwokatów. Session typowa: 2–4h, 200+ turns. User przesyła dokumenty, pyta o precedensy, dyskutuje strategie. Context window Sonnet to limit — co 1.5h session przekracza go.

**Pytanie**: Jak zarządzać contextem w long-running sessions?

A) Hard reset co 2h — user musi rozpocząć od nowa, bez kontynuacji
B) Auto-compaction system-managed (Claude default behavior near context limit)
C) Custom compaction: agent okresowo summary'uje, externalizuje do pliku, kontynuuje z summary + key references
D) Sliding window: zachowuj zawsze ostatnie N turns, drop oldest

**Odpowiedź**: **C**

**Dlaczego C**:
- Externalizacja stanu do plików (dokumenty, notatki, intermediate findings) jest lossless — references są reaktywowalne
- Custom summary preserves critical state (user goals, findings, follow-up needed)
- Adwokat (user) zachowuje continuity bez świadomości compaction

**Dlaczego nie A**: Hard reset to terrible UX dla high-touch professional use case

**Dlaczego nie B**: Auto-compaction jest dobry, ale lossy dla narrative content (np. wnioskowania o precedensach mogą zostać utracone w summary) — w high-stakes legal research to risk

**Dlaczego nie D**: Sliding window traci early-session context (gdy adwokat zdefiniował goals i konstraints) — pozew zbudowany na nieaktualnym kontekście może mieć braki

**Tag**: agentic-architecture / state-management + context-management / compaction

---

### Scenariusz 6 — Parallel vs sequential tool calls

E-commerce SaaS chce zbudować agenta który dla każdego nowego zamówienia: (a) waliduje adres przez tool `address_validate`, (b) sprawdza stock przez `stock_check`, (c) kalkuluje shipping cost przez `shipping_calc`. Wszystkie 3 tool'e są independent.

**Pytanie**: Jak skonfigurować tool use?

A) Sequential — agent woła jeden, czeka, woła drugi, czeka, woła trzeci
B) Pozwolić Claude wybrać — Claude domyślnie zrobi parallel jeśli detect'uje independence
C) Force parallel — forceful prompt "wykonaj wszystkie 3 tool'e równolegle"
D) Async: enqueue wszystkie 3 do job queue, agent dostaje notification gdy gotowe

**Odpowiedź**: **B**

**Dlaczego B**:
- Claude (recent versions) potrafi wykryć tool independence i emit'ować multiple `tool_use` blocks w single response
- Parallel handling dzieje się po stronie API/client (3 calls równolegle)
- Brak overhead promptu wymuszającego parallel; brak ryzyka że Claude robi sekwencyjnie gdy nie trzeba

**Dlaczego nie A**: Sequential dla independent tools = ~3x latency, gorszy UX

**Dlaczego nie C**: Forceful prompt może działać, ale to anti-pattern — depends on prompt wording, fragile

**Dlaczego nie D**: Async/queue dla 3 fast calls to over-engineering, dodaje complexity nie redukując latency

**Tag**: agentic-architecture / tool-use-orchestration

---

### Scenariusz 7 — Hallucynacja w agencie z access do critical systems

Polski biuro rachunkowe (50+ klientów MŚP) wdraża agenta do automatyzacji księgowania faktur. Agent ma tool `book_invoice(invoice_id, account_code)`. Co miesiąc ~3000 faktur. Konsekwencja błędu: missing VAT deduction (kara skarbowa) lub double-booking.

**Pytanie**: Jaka strategia mitigacji hallucynacji?

A) Hope-for-the-best: Claude jest dobry, retry przy explicit errors
B) Pre-validation: agent generuje proposed booking, drugi (różny) agent waliduje przed `book_invoice` call
C) Human-in-loop: agent generuje proposal, user (księgowa) akceptuje przed `book_invoice` (z UI batch approval np. 50 propos w 5 min)
D) Tool-level idempotency keys + post-validation reports

**Odpowiedź**: **C**

**Dlaczego C**:
- High-stakes financial actions z legal consequences = ZAWSZE human-in-loop dla critical decisions
- Batch UI redukuje user friction (50 propos w 5 min = 6 sek per decision, akceptowalne)
- Audit trail (kto zaakceptował) dla compliance
- Erroneous proposal można cofnąć przed `book_invoice`, gdy już booked — costly reversal

**Dlaczego nie A**: Hope-for-the-best w domenie regulacyjnej to recipe for disaster

**Dlaczego nie B**: Multi-agent validation pomoże, ale w high-stakes financial nie zastąpi human accountability (kto odpowiada za błąd?)

**Dlaczego nie D**: Idempotency + post-validation chronią przed double-booking, ale **nie wykrywają wrong-account-code** hallucynacji — błąd zostaje w systemie

**Tag**: agentic-architecture / error-recovery + agentic-architecture / agent-boundaries-permissions

---

### Scenariusz 8 — Multi-provider routing dla cost optimization

SaaS legaltech B2C (analog odpisznapismo.pl) sprzedaje pisma za 9.99 PLN. Stack ma 1000 generations/dzień. Klient (founder) chce zmniejszyć inference cost o 40% bez spadku quality (mierzona przez user feedback rate >4/5).

**Pytanie**: Co zrobić?

A) Przerzucić wszystko na Haiku
B) Multi-model routing: classifier (small model lokalny lub Haiku) decyduje complexity, prosty case → Haiku, complex → Sonnet, edge cases → Opus
C) Switch provider na OpenAI gpt-4o-mini (tańszy niż Claude Haiku) dla wszystkiego
D) Prompt optimization: skrócić system prompt, oszczędność tokenów

**Odpowiedź**: **B**

**Dlaczego B**:
- Multi-model routing (jak `smart-router` w Bartosza setup) — odpowiedni model do task complexity
- Większość pism reklamacyjnych (~70%) to "prosty case" → Haiku wystarczy
- 20% complex (multi-issue) → Sonnet
- 10% edge cases (skomplikowane spory) → Opus
- Weighted cost = ~50–60% spadek vs Sonnet-everywhere

**Dlaczego nie A**: Haiku-everywhere złamie quality na complex cases, user feedback rate spadnie

**Dlaczego nie C**: Cross-provider switch wymaga rebuilding prompty (różne best practices); plus Bartosz preferuje Claude jako primary (sekcja application 5)

**Dlaczego nie D**: Prompt optimization pomoże nieznacznie (mniej niż 10%), ale targets 40% poprawy = routing jest must

**Tag**: agentic-architecture / multi-agent-patterns + prompt-engineering / cost-optimization

---

### Scenariusz 9 — Agent autonomy boundary dla deletion operations

SRE team buduje agenta deployment management. Agent ma tools: `restart_service`, `scale_service`, `deploy_version`, `delete_database` (na test environment), `drop_table`. Inżynierowie chcą żeby agent działał maksymalnie autonomicznie żeby przyspieszyć ops.

**Pytanie**: Które operacje powinny mieć human confirmation by default?

A) Wszystkie — agent zawsze pyta przed każdą operacją
B) Tylko destructive: `delete_database`, `drop_table` — restart/scale/deploy automatyczne
C) Tylko production-affecting: `deploy_version` na production wymaga confirm; reszta automatyczna
D) Żadne — agent ma pełną autonomię, post-action audit log dla compliance

**Odpowiedź**: **B**

**Dlaczego B**:
- **Reversibility principle**: restart/scale/deploy są **revert'owalne** (deploy poprzedniej wersji, scale back), więc autonomicznie OK
- `delete_database` i `drop_table` są **destructive i hard-to-reverse** — backup może nie być najnowszy, recovery time wysoki
- Pattern: "easy to reverse → autonomous, hard to reverse → confirm"
- Też zgodne z Anthropic Claude Code guidance dla risky actions

**Dlaczego nie A**: Asking confirmation dla revertable ops to friction bez wartości, spowalnia SRE

**Dlaczego nie C**: Brakuje confirmation dla destructive na test env (test może zawierać wartościowe debug data, recovery time też ma koszt)

**Dlaczego nie D**: Post-action audit nie zapobiega błędom destruktywnym, tylko zapisuje je dla compliance — zła strategia dla destructive ops

**Tag**: agentic-architecture / agent-boundaries-permissions

---

### Scenariusz 10 — Subagent vs single-agent dla content pipeline

Polski startup (10 osób) buduje content marketing pipeline dla swojego SaaS. Pipeline: research topic → outline → write blog post → SEO optimize → social media adaptation → schedule publish. Każdy krok wymaga innej expertise.

**Pytanie**: Jak architecturalnie rozwiązać?

A) Single Claude Code session z długim prompt obejmującym wszystkie 6 kroków
B) 6 niezależnych slash commands wywoływanych ręcznie po kolei
C) Multi-agent skill (jak `team-mar`) — orchestrator + 6 specjalistów subagentów, każdy z wąskim scope
D) External orchestrator (n8n / Airflow) wywołujący Claude API dla każdego kroku osobno

**Odpowiedź**: **C**

**Dlaczego C**:
- Multi-agent w Claude Code (`team-mar` style) zachowuje context coherence (każdy subagent widzi output poprzedniego)
- Wąskie specjalizacje = lepsze quality per krok niż one-prompt-fits-all
- Audit trail naturalny (każdy subagent zostawia ślad)
- Tańsze niż n8n+API (zero infra overhead, run w Claude Code)

**Dlaczego nie A**: Single very long prompt = high token cost, harder to debug, conflicting instructions

**Dlaczego nie B**: 6 manual commands = friction, user burden, brak orchestracji

**Dlaczego nie D**: External orchestrator dodaje complexity (deployment, monitoring) — overkill dla 10-osobowego startupu; w Claude Code można to mieć "free" z multi-agent skill

**Tag**: agentic-architecture / multi-agent-patterns + claude-code / skills

---

## Po przeprowadzeniu drilla — następne kroki

1. **Zaznacz w `postep/tydzien-XX.md`**: score (X/10), które pytania błędne, dlaczego
2. **Dla każdego błędu**: zrób notatkę w `domeny/01-agentic-architecture/notatki.md` — dlaczego błędne myślenie, jakie reguła to było
3. **Po 4 sesjach drilli (40 scenariuszy)**: zrób full mock exam (60 pytań / 120 min) przez `/mock-exam full`
4. **Wygeneruj kolejne 10** przez `/scenariusz 01-agentic-architecture` — Claude wygeneruje variation
