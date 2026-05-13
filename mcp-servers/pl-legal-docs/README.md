# MCP Server: pl-legal-docs

> Status: **planowany** — pierwszy publiczny MCP server dla polskiego rynku prawnego.

## Cel
Dostarczyć Claude'owi (i każdemu MCP klientowi) zestrukturyzowany dostęp do polskich dokumentów prawnych: kodeksów (KC, KPC, KK, KP), ustaw, rozporządzeń, orzecznictwa Sądu Najwyższego i NSA, oraz typowych wzorów pism.

## Dlaczego to ma sens
- Polski rynek legal-tech jest niedoinwestowany — zero MCP serverów PL
- Pisma prawne to use case dla AI z natychmiastową wartością (OdpiszNaPismo to walidacja)
- Public MCP server = killer feature aplikacji Partner Network (proof, że nie tylko mówię o ewangelizacji — buduję)

## Roadmap (high-level)
- [ ] v0.1 — kodeksy + ustawy podstawowe (KC, KPC, KK, KP, ordynacja podatkowa)
- [ ] v0.2 — rozporządzenia + orzecznictwo SN
- [ ] v0.3 — wzory pism (pozew, reklamacja, odwołanie, wniosek)
- [ ] v0.4 — RODO / UODO interpretacje
- [ ] v1.0 — publiczny launch + PR po stronie polskiej (LinkedIn, Wykop, niebezpiecznik?)

## Stack (TODO)
- Język: TODO (TS / Python)
- Transport: stdio + HTTP/SSE
- Źródła: ISAP, sn.pl, gov.pl
- Licencja: MIT

## Status implementacji
Pusty katalog. Budowa po setupie projektu i podstawowym opanowaniu domeny 04 (Tools & MCP).
