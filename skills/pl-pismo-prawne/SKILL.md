---
name: pl-pismo-prawne
description: >
  Generuje polskie pisma prawne (reklamacja konsumencka, odwołanie od decyzji administracyjnej,
  pozew cywilny, wniosek, odpowiedź na pismo urzędowe). Stosuje wymaganą strukturę formalną
  pisma urzędowego/sądowego oraz cytuje konkretne artykuły z polskich kodeksów (KC, KPC, KP,
  Ordynacja podatkowa, UoPK). Używać kiedy użytkownik prosi o napisanie pisma do urzędu, sądu,
  firmy lub kontrahenta po polsku. NIE używać do tłumaczeń pism z innych jurysdykcji.
---

# pl-pismo-prawne — Polskie pisma prawne

## Overview

Skill generuje pisma prawne zgodne z polskim prawem proceduralnym i materialnym. Klucz: rozpoznać typ pisma, zastosować wymaganą strukturę formalną, dobrać prawidłową podstawę prawną. **Nie zastępuje porady prawnej** — output jest projektem do weryfikacji przez prawnika lub samodzielnej akceptacji przez świadomego użytkownika.

## Inputs

- **Typ pisma** (obowiązkowy): reklamacja konsumencka / odwołanie administracyjne / pozew cywilny / wniosek / odpowiedź na pismo urzędowe / inne
- **Strony** (obowiązkowy): nadawca (imię/nazwisko/firma/adres/NIP) i adresat (sąd/urząd/firma/osoba)
- **Stan faktyczny**: opis sprawy (3-30 zdań) — co się stało, kiedy, jakie żądania
- **Załączniki**: lista dokumentów które idą z pismem (opcjonalnie)
- **Termin** (opcjonalnie): jeśli odpowiedź na pismo z terminem
- **Numer sprawy** (opcjonalnie): jeśli istnieje już sprawa

## Outputs

- Markdown z pełną strukturą pisma (do edycji)
- Opcjonalnie: PDF przez `pdf-generator` skill (brand: neutral lub bartoszgaca)
- Lista cytowanych artykułów z podstawami prawnymi
- Sugerowane dalsze kroki (np. "wyślij listem poleconym za potwierdzeniem odbioru")

## Process

1. **Rozpoznaj typ pisma** z input + wskazówek (jeśli niejednoznaczny — zapytaj user, NIE zgaduj)
2. **Wybierz strukturę** per typ:
   - **Pismo procesowe sądowe** (pozew, apelacja, odpowiedź na pozew): nagłówek z sądem, dane stron, numer sprawy, oznaczenie pisma, treść (stan faktyczny + żądania), uzasadnienie z podstawą prawną, podpis, lista załączników
   - **Pismo administracyjne** (odwołanie od decyzji, wniosek): nagłówek z organem, dane wnoszącego, oznaczenie pisma, treść, uzasadnienie, podpis, załączniki
   - **Reklamacja konsumencka** (UoPK): nagłówek ze sprzedawcą, dane konsumenta, opis wady, żądanie (naprawa/wymiana/zwrot ceny/obniżka), podstawa z UoPK (art. 561/566), termin odpowiedzi, podpis
   - **Pismo cywilne (przedsądowe)** (wezwanie do zapłaty): nagłówek, dane stron, opis roszczenia, podstawa, kwota + termin, konsekwencje braku odpowiedzi (sąd), podpis
3. **Dobierz podstawy prawne** — używaj tylko cytatów z polskiego systemu prawnego, które potrafisz potwierdzić. **Jeśli niepewny → zapytaj user o uzupełnienie source** (nie zmyślaj artykułu)
4. **Wygeneruj draft** z polskim formalnym językiem prawniczym
5. **Wstaw placeholder dla podpisu** ("(podpis)" + miejsce na własnoręczny lub e-podpis)
6. **Zwróć**: tekst markdown + (opcjonalnie) PDF + checklist do user (co dołączyć, gdzie wysłać, w jakim terminie)

## Triggers / Example prompts

- "Napisz reklamację do Media Markt, telefon padł po 6 miesiącach"
- "Odwołanie od decyzji ZUS o odmowie zasiłku, mam termin 14 dni"
- "Pozew o zapłatę 5000 PLN, kontrahent nie zapłacił mimo wezwania"
- "Wniosek o rozłożenie zaległości podatkowej na raty do US"
- "Pismo do sądu z zażaleniem na postanowienie"

## Constraints (zero halucynacji)

- ❌ **Nie wymyślaj numerów artykułów** — jeśli niepewny, zapytaj user lub powiedz "podstawa prawna do weryfikacji przez prawnika"
- ❌ **Nie używaj artykułów spoza polskiego systemu** (BGB, Code Civil, US-law)
- ❌ **Nie podawaj kwot kar / odszkodowań** bez source — zostaw placeholder
- ❌ **Nie zastępuj porady prawnej** — disclaim w outpucie: "to projekt pisma; w sprawach skomplikowanych skonsultuj się z adwokatem/radcą prawnym"
- ❌ **Nie podpisuj** za użytkownika — zawsze placeholder
- ✅ Cytuj **konkretne artykuły** z aktów prawnych (np. "art. 561 § 1 ustawy o prawach konsumenta" zamiast "zgodnie z prawem konsumenckim")
- ✅ Stosuj **polską nomenklaturę formalną** (nie tłumacz z EN: "complaint" → "reklamacja", nie "skarga"; "lawsuit" → "pozew"; "court" → "Sąd Rejonowy/Okręgowy/Apelacyjny" w zależności od właściwości)

## Tech notes

- **Integracja z `pdf-generator`**: po wygenerowaniu markdown, można od razu wywołać `pdf-generator` skill z brand="neutral" żeby dostarczyć ready-to-sign PDF
- **Integracja z `ksef-mcp`**: jeśli pismo wymaga załącznika faktury VAT, można pobrać przez `mcp__ksef-mcp__fetch_invoice`
- **Memory pattern**: jeśli to follow-up w istniejącej sprawie (numer sprawy podany), sprawdź `memory/cases/<numer-sprawy>.md` dla kontekstu
- **Skill complementarny**: `pl-umowa` dla wzorców umów, `pl-faktura-vat` dla faktur

## Roadmap

- [ ] Wsparcie dla ELS / e-Sąd (elektroniczne postępowanie upominawcze, system EPU)
- [ ] Wsparcie dla ePUAP/PUE ZUS (eksport pisma + integracja z `mcp-zus`)
- [ ] RAG bazy orzecznictwa SN/NSA (precedensy w uzasadnieniach)
- [ ] Wzorce per województwo dla sądów (różnice w lokalnej praktyce)

## Status

Skill jest w fazie **intent specification** — SKILL.md kompletny, implementacja w trakcie (po opanowaniu domeny 02 Claude Code). Frontmatter `description` jest trigger-rich, więc skill jest **invokable** przez Claude Code już teraz (Claude potraktuje go jako instruction-only skill bez additional scripts).
