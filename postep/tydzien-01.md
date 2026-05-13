# Tydzień 01 — postęp

> Tydzień startowy (start: 2026-05-13). Baseline week.

## Cele tygodnia
- [x] Setup repo `cca-f-prep` + pełna struktura + slash commands + subagenty + hooki
- [x] Pełen draft aplikacji do Partner Network z prawdziwymi danymi (zero placeholderów)
- [x] 3 case studies (aplikantai, odpisznapismo, biznesbezklikania) — pełne stack i architektura z weryfikowalnych README
- [x] Tabela 8 reference customers z statusem zgód
- [x] Push do publicznego GitHub repo `gacabartosz/cca-f-prep`
- [ ] Pierwszy LinkedIn post anonsujący publiczną naukę do CCA-F + link do repo
- [ ] Practice exam #1 na Skilljar (Anthropic Academy) — baseline, bez przygotowania
- [ ] 20 scenariuszy z domeny 01 (Agentic Architecture) — przez `/scenariusz 01-agentic-architecture`
- [ ] Instalacja Playwright (`cd playwright && npm install`) i pierwszy mock exam lokalny

## Wyniki mierzalne na koniec tygodnia 01
- Mock exam score: — (baseline nie zrobiony)
- Drille per domena: 0/5
- Content opublikowany: 0 (draft #1 w `content/linkedin/` planowany)
- Skills publiczne (w `skills/`): 3 szkielety (`pl-pismo-prawne`, `pl-faktura-vat`, `pl-umowa`)
- MCP servers publiczne: 6 (zewnętrzne, nie z tego repo — patrz `partner-network/pitch.md`)

## Co zrobione (faktycznie, w setupie 2026-05-13)
- Repo `cca-f-prep` utworzone, struktura zgodna z briefem
- 6 slash commands: `/domena`, `/scenariusz`, `/case-study`, `/content`, `/mock-exam`, `/postep`
- 4 subagenty: `exam-coach`, `partner-strategist`, `content-marketer`, `case-writer`
- 2 hooki: `post-tool-use.sh` (logowanie tool-use jako proof of practice), `session-end.sh` (dziennik sesji)
- Partner network: pitch.md, claude-code-evangelism.md, polish-localization-deck.md, application-draft.md (13 sekcji od company info po post-submit monitoring), referencje-klientow.md (8 referencji z statusem zgód), 3 case studies (pełne stack i Claude Code usage)
- 5 domen × CLAUDE.md (z wagami) / notatki / scenariusze (szkielety)
- Playwright: package.json + tsconfig.json + 5 stub TS scripts z opisem co robią
- README EN + PL z prawdziwym pozycjonowaniem i dowodami produkcyjnymi

## Blockers
- **Partner portal za auth** — `https://partnerportal.anthropic.com/s/partner-registration` zwraca 403 dla `WebFetch`. Pełna lista pól formularza dopiero po pierwszym zalogowaniu się Bartosza. `playwright/partner-form-prefiller.ts` zaimplementujemy po obejrzeniu UI.
- **CCA-F blueprint subtopiki** — `domeny/0X-*/CLAUDE.md` mają TODO z domenowymi subtopikami; do potwierdzenia w oficjalnym blueprincie na Anthropic Academy.
- **Reference consents** — woodconsulting.pl i BeeCommerce wymagają explicit consent na ujawnienie w aplikacji. Status: pending. Plan: wysyłka próśb w tydzień 02.

## Plan na tydzień 02
1. **Główny temat**: Domena 01 Agentic Architecture — 20 scenariuszy + 1 mini-projekt agentowy (do `przyklady-kodu/`)
2. **Mock exam**: full 60-pytaniowy baseline na Skilljar
3. **Content**: 2 LinkedIn posty + 1 blog post o setup `cca-f-prep` (publiczna nauka)
4. **Build**: pełna implementacja `playwright/skilljar-tracker.ts` (~150 linii TS)
5. **Partner network**: wysyłka próśb o zgodę do 2 zewnętrznych klientów (woodconsulting, BeeCommerce)
6. **Memory update**: dodanie wpisu `project_cca_f_prep.md` do `~/.claude/projects/-Users-gaca-projects-personal-bartoszgaca-pl/memory/`

## Status Partner Network
- **Aplikacja**: DRAFT pełny w `partner-network/application-draft.md` (13 sekcji)
- **CCA-F**: nie zdane (target: zaliczenie w ciągu 8–12 tygodni)
- **Referencje**: 6/8 auto-consent (own products) + 2/8 pending (woodconsulting, BeeCommerce)
- **Submit ETA**: tydzień 10–12 (po CCA-F + 3 external consents jeśli się uda)

## Notatki / lessons learned z setupu
- Brief był bardzo gęsty — w 1 sesji udało się stworzyć cały szkielet + treść A-Z bez placeholderów dzięki research-first podejściu (czytanie README produktów + skills profile zamiast zmyślania)
- Auto-publish daemon LinkedIn (z `LINKEDIN-STRATEGY.md`) jest gotowy do użycia — content marketing wystartuje automatycznie
- `gaca-core` jako AI Bus 50+ modeli to nieoczywisty differentiator vs konkurencja (większość polskich agencji AI to OpenAI proxy)
