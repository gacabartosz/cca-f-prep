# Polish Localization Layer — Capability Deck

## Teza
Globalni partnerzy Anthropic (Accenture, Deloitte, McKinsey) sprzedają po angielsku, do C-level, w korporacjach. Polska to **38M ludzi**, **~2M MŚP**, **PKB ~€750 mld**, EU członek, ale **inny język regulacji** (RODO + polskie interpretacje UODO, VAT/KSeF, KPC/KC, Kodeks Pracy, IRZ/ARiMR, ePUAP/PUE ZUS), **inna kultura sprzedaży** (relacja > deck), **inne ceny** (PLN, nie USD enterprise).

Globalny partner nie zbuduje tej warstwy. **Ja zamykam tę lukę.**

## Trzy warstwy polskiej lokalizacji (od najtańszej do najgłębszej)

### Layer 1 — Język (najłatwiejsza warstwa, ale konieczna)
**Co dostarczam:**
- Polskie Claude Code Skills — `pl-pismo-prawne`, `pl-faktura-vat`, `pl-umowa` (w `skills/`), `pl-rodo-compliance` (roadmap)
- Polskie prompty system / templates dla popularnych use case'ów (MŚP, kancelaria, e-commerce)
- Tłumaczenia oficjalnej dokumentacji Anthropic na PL (open-source PR-y do `anthropic-quickstarts`)
- Polski content edukacyjny: blog `bartoszgaca.pl/baza-wiedzy`, YouTube PL (planowane), LinkedIn auto-publish

**Status**: w trakcie. Skills szkielety istnieją (`skills/pl-*/SKILL.md`), implementacja po zaliczeniu domeny 02 Claude Code.

### Layer 2 — Regulacje (gdzie globalni partnerzy są bezradni)

| Domena regulacyjna | Status w portfolio |
|---|---|
| **RODO / UODO** | Interpretacje polskie, presidio-local-anonymizer (Chrome ext + Microsoft Presidio), planowane: `pl-rodo-compliance` skill |
| **VAT / KSeF (e-invoicing)** | `ksef-mcp` (30 tools), pierwszy open-source MCP dla polskiego KSeF, discovery luki walidacyjnej w API v2 (art. 106e ust. 11 UoVAT) |
| **Kodeks Cywilny / KPC** | aplikantai.pl (24+ asystentów AI prawniczych), planowany skill `pl-umowa` |
| **Kodeks Pracy** | aplikantai.pl (asystent prawa pracy), templates umów B2B/zlecenie/dzieło |
| **Ordynacja podatkowa** | aplikantai.pl, planowany skill `pl-faktura-vat` |
| **UoPK (prawa konsumenta)** | reklamacje24.pl (production, Stripe 4.99 PLN/use), generator pism reklamacyjnych |
| **IRZ / ARiMR (rolnictwo)** | stadomat.pl — integracja z państwowym IRZ API (rejestr zwierząt) |
| **PUE ZUS / ePUAP** | mcp-zus (TODO: link), kedu validation, ZUA/ZWUA/ZCNA/ZIUA/DRA building, ePUAP send/receive |
| **Faktury Stripe pod polskie wymogi (JPK_FA)** | reklamacje24, odpisznapismo, fixmynotice — wszystkie wystawiają zgodne faktury |

**Status**: silna baza, w produkcji. Niektóre elementy (mcp-zus, ksef-mcp) są pierwsze tego typu open-source w PL.

### Layer 3 — Sprzedaż i kultura (kontekst kulturowy MŚP)

**Co odróżnia polski rynek MŚP od enterprise USA**:
- **MŚP nie kupują "platformy AI"** — kupują konkretny bot do konkretnego problemu. Pizzeria nie chce systemu zarządzania restauracją — chce bota do zamówień telefonicznych po 18:00.
- **Cena PLN** — nie USD enterprise. Reklamacje24 sprzedaje za 4.99 PLN/use. Abonament dla MŚP 200–500 PLN/mc, nie $5000/mc.
- **Język sprzedaży** — bezpośredni, bez korporacyjnego żargonu. Brand voice Bartosza: "Buduję rzeczy. Szybko. Nie sprzedaję slajdów."
- **Networking** — LinkedIn PL, konferencje PL (Infoshare, ML in PL, Code Europe), lokalna prasa branżowa
- **Płatności** — Przelewy24, BLIK, Autopay (NIE tylko Stripe / nie tylko karta) — wszystkie zaimplementowane w stadomat, reklamacje24, odpisznapismo

**Status**: w działaniu. Sprzedaż abonamentowa + jednorazowe sprinty są oferowane na `bartoszgaca.pl`.

## KPI (target, nie obietnica)

| Metryka | Stan obecny | Cel +12 mc |
|---|---|---|
| Polskie skills Claude Code public | szkielety w `cca-f-prep/skills/` (3) | 6 zaimplementowanych |
| MCP servery dla polskiego regulowanego rynku | 1 (`ksef-mcp`) | 3 (`ksef`, `pl-legal-docs`, `pl-zus`) |
| Klienci MŚP wdrożonych w PL | (do uzupełnienia przy submit) | +8 |
| Polish content o Claude Code (LinkedIn + blog) | 17+ LinkedIn (z `auto-publish daemon`) | 200+ |
| Tłumaczenia / open-source PR-y do Anthropic repo | 0 | 5+ |

## Dlaczego to jest moat (defensible advantage)

Globalny partner nie zbuduje tej warstwy bez:
- Polskiego paszportu / rezydencji (RODO/PUE ZUS wymaga osobistego konta lub pełnomocnictwa)
- Znajomości polskiego prawa i jego praktyki (nie tylko tłumaczenia ustaw)
- Lokalnej obecności na konferencjach / w mediach branżowych
- 5+ lat pracy z polskimi MŚP, żeby rozumieć jak rozmawiać z mechanikiem, fryzjerem, kancelarią solo

Mam wszystkie cztery. JDG od kilku lat, 28+ aplikacji w produkcji, rozmowy z polskimi klientami codziennie, brand `bartoszgaca.pl` rozpoznawalny w niszy AI/automation/legaltech w PL.

## Dlaczego Anthropic powinno mnie listować pod region "Poland"

1. **Zero polskich partnerów obecnie** (do weryfikacji w directory przy submit)
2. **Rynek 38M / €750B GDP / EU** — istotny TAM nieobsłużony przez globalnych partnerów
3. **Regulowane branże PL są niche** — globalny partner nie pójdzie w KSeF / IRZ / RODO interpretacje
4. **Polski content edukacyjny o Claude Code = pipeline kandydatów** dla Anthropic i Anthropic-friendly firm w EU
