# Why bartoszgaca.pl (JDG), not BeeCommerce — preempt for reviewer

> Jeden ekran wyjaśnienia dla reviewera Anthropic Partner Network. Pytanie, które na pewno pojawi się na qualification call.

## Krótka odpowiedź

Aplikuje **Bartosz Gaca / JDG bartoszgaca.pl** (sole proprietorship, NIP 5993112591). BeeCommerce — agencja e-commerce, gdzie Bartosz pełni rolę CTO równolegle — **nie aplikuje** i nie jest stroną tej współpracy.

## Dwie linie pracy, dwa różne scope'y, zero konfliktu interesów

| Wymiar | **JDG bartoszgaca.pl** (aplikuje) | BeeCommerce (NIE aplikuje) |
|---|---|---|
| Forma prawna | JDG (sole proprietorship), Polska | Spółka, agencja e-commerce |
| Rola Bartosza | Founder, jedyny operator | CTO (etatowa rola) |
| Scope | Legal-tech, SME automation, Claude Code consulting, MCP servers, MVP w PL | E-commerce platforms (Magento, Vue Storefront), K8s GitOps, AI R&D dla retail |
| Klienci docelowi | MŚP w PL (kancelarie 1–10 osób, gabinety, doradcy podatkowi, B2C consumers przez SaaS) | Enterprise / agencje e-commerce |
| Modele cenowe | MVP Sprint 1–2 tyg, Builder Retainer (abonament), MCP/Skill Custom Build (fixed-price) | Standardowy agency retainer |
| Stack ownership | Własność JDG: wszystkie 6 MCP serverów, 14+ Skills, 3 produkcyjne SaaS (reklamacje24, odpisznapismo, biznesbezklikania) i więcej | BeeCommerce IP: e-commerce projects (karlik, rentgen, lookbooki, porównywarki, tender-preselection, felu-generator i inne) |
| Kontakt | bartosz.gaca@gmail.com, bartoszgaca.pl | it@beecommerce.pl, beecommerce.pl |

## Wszystkie evidence w aplikacji = własność JDG

Punkt krytyczny dla reviewera: wszystkie deliverables i open-source assets wymienione w `application-draft.md` i `pitch.md` są **własnością JDG / własnością prywatną Bartosza**, nie BeeCommerce:

- **6 publicznych MCP serverów** (linkedin-mcp, seo-gaca-mcp na PyPI, facebook-mcp, ksef-mcp, mcp-universal-adapter, popcorn) — repo pod `gacabartosz/*` na GitHubie
- **14+ Claude Code Skills** w `~/.claude/skills/` i `~/.agents/skills/` — osobiste środowisko Bartosza
- **3 produkcyjne SaaS** (reklamacje24.pl, odpisznapismo.pl, biznesbezklikania.pl) — Stripe accounts na JDG NIP 5993112591 (memory: `reference_stripe_accounts.md`)
- **gaca-core** AI Bus — własność prywatna
- **cca-f-prep** repo — własność prywatna (github.com/gacabartosz/cca-f-prep)

BeeCommerce-owned IP (e-commerce projects) jest **wymieniona tylko jako professional background** w sekcji 4 vertical "E-commerce" `application-draft.md` — żeby reviewer rozumiał głębokość doświadczenia, **nie jako vertical offering w ramach Partner Network**.

## Jak będzie wyglądała ewentualna współpraca BeeCommerce z Anthropic

To **oddzielna decyzja**, oddzielna potencjalna aplikacja BeeCommerce do Partner Network (gdyby się tak zdecydowali, w zakresie e-commerce), oddzielny pipeline klientów. Bartosz jako CTO BeeCommerce **nie jest tej decyzji właścicielem** — to decyzja zarządu BeeCommerce.

**Brak konfliktu interesów**: różne wertikale (legal-tech / SME automation vs e-commerce), różne klienty docelowe (MŚP/consumer B2C vs enterprise retail), różne metody sprzedaży (Bartosz direct vs BeeCommerce agency).

## Mitigacja ryzyka "podwójnej tożsamości" dla reviewera

| Risk perception | Mitigation |
|---|---|
| "Czy Bartosz nie skanibalizuje BeeCommerce gdy zostanie Partnerem?" | Nie — JDG ma jasno wytyczone wertikale poza scope'em BeeCommerce |
| "Czy wszystkie referencje (Stripe revenue, 6 MCP servers) na pewno są JDG?" | Tak — Stripe accounts są na NIP JDG 5993112591 (`reference_stripe_accounts.md`), GitHub repos pod `gacabartosz/*` (prywatne), Skills w `~/.claude/skills/` (prywatne) |
| "Czy reviewer powinien rozmawiać z BeeCommerce w trakcie capability review?" | Tylko jeśli Anthropic chce zgody na BeeCommerce jako jeden z pending external references (sekcja 6.B i 11 `application-draft.md`). Status: pending consent. Bartosz powiadomi BeeCommerce board jeśli reviewer poprosi o reference call |
| "Czy Bartosz ma czas na Partner Network obok roli CTO @ BeeCommerce?" | Bartosz pracuje w AI-native workflow — to fundamentalna część jego produktywności (memory: `user_linkedin_goals.md`, skills profile FAZA 1 sekcja "AI-native workflow"). 40+ aplikacji solo na produkcji to dowód że jest zdolny do równoległej pracy. Plan team scaling w 6–12 mc redukuje single-point-of-failure |

## Bottom line dla reviewera

JDG bartoszgaca.pl aplikuje, BeeCommerce nie. Wszystkie evidence w aplikacji to własność JDG. Współpraca z Anthropic jako Partner = współpraca z Bartoszem jako JDG, nie z BeeCommerce.
