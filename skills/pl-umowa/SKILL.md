---
name: pl-umowa
description: >
  Generuje polskie umowy cywilnoprawne (zlecenie, dzieło, NDA, B2B, najmu, sprzedaży,
  współpracy partnerskiej). Stosuje wzorce z Kodeksu Cywilnego (KC), niezbędne klauzule
  RODO, kary umowne, sąd właściwy, IP ownership. Używać kiedy użytkownik prosi o
  przygotowanie umowy po polsku dla polskiego kontrahenta (B2B/B2C). NIE używać dla
  umów pod prawo innej jurysdykcji.
---

# pl-umowa — Polskie umowy cywilnoprawne

## Overview

Skill generuje umowy zgodne z polskim Kodeksem Cywilnym i specyficznymi ustawami (KP dla umów o pracę, choć typowo to scope HR/prawnika). Klucz: prawidłowe nazewnictwo (zlecenie ≠ dzieło ≠ B2B), poprawne klauzule RODO, IP, kary umowne, sąd właściwy.

## Inputs

- **Typ umowy** (obowiązkowy): zlecenie / dzieło / B2B (świadczenie usług) / NDA / najem (lokal/sprzęt) / sprzedaży / współpracy partnerskiej / inna
- **Strony** (obowiązkowy):
  - Zleceniodawca/Zamawiający/Wynajmujący (osoba fizyczna lub firma + NIP)
  - Wykonawca/Przyjmujący zlecenie/Najemca (osoba fizyczna lub firma + NIP)
- **Przedmiot**: opis usługi/dzieła/lokalu/produktu (3-10 zdań)
- **Wynagrodzenie**: kwota netto/brutto, waluta, sposób płatności (jednorazowy / miesięczny retainer / per milestone)
- **Termin**: od kiedy, do kiedy (lub nieokreślony)
- **Klauzule special** (opcjonalne): IP ownership (kto ma prawa), exclusivity, non-compete, non-solicit, kary umowne, prawo odstąpienia

## Outputs

- Markdown umowy do edycji
- PDF do podpisu (przez `pdf-generator` skill, brand neutral)
- Wersja edytowalna .docx (przez `docx` skill)
- **Załącznik RODO** (jeśli relevantny — przetwarzanie danych osobowych)
- Checklist post-signing: gdzie złożyć, ile kopii, czy potrzebny notarialny

## Process

1. **Rozpoznaj typ umowy**:
   - **Zlecenie** (art. 734 KC): wykonawca świadczy usługi, brak konkretnego rezultatu, ZUS składki obowiązkowe (dla osób fiz.)
   - **Dzieło** (art. 627 KC): rezultat (konkretne dzieło), brak ZUS dla osób fiz., PIT-8C dla zleceniodawcy
   - **B2B (świadczenie usług)** (art. 750 KC): umowa między firmami JDG/sp.z o.o., bez ZUS u Zleceniodawcy (Zleceniobiorca prowadzi własną działalność)
   - **NDA** (art. 11 ust. 4 ustawy o zwalczaniu nieuczciwej konkurencji): obowiązek zachowania poufności
   - **Najem** (art. 659 KC dla lokalu, 720 KC dla sprzętu): oddanie rzeczy do używania
   - **Sprzedaż** (art. 535 KC): przeniesienie własności za cenę
2. **Zbuduj strukturę** per typ z **wymaganymi elementami**:
   - Komparycja (kto z kim zawiera, gdzie, kiedy)
   - Preambuła (kontekst — opcjonalna ale często przydatna)
   - Definicje (jeśli umowa techniczna)
   - Przedmiot umowy
   - Obowiązki stron (osobne § dla każdej)
   - Wynagrodzenie i płatność
   - Terminy i wykonanie
   - Klauzule poufności (RODO + biznesowa)
   - IP / własność wyników pracy (krytyczne dla B2B IT)
   - Kary umowne (jeśli relevantne — max 25% wartości umowy domyślnie, do uzgodnienia)
   - Rozwiązanie umowy (notice period)
   - Sąd właściwy + prawo (zwykle: prawo polskie, sąd właściwy dla siedziby Zleceniodawcy/Wynajmującego)
   - Postanowienia końcowe (zmiany formy pisemnej, liczba egzemplarzy, doręczenia)
   - Podpisy (placeholder)
3. **Wstaw klauzule RODO** jeśli umowa przewiduje przetwarzanie danych osobowych:
   - Wskazanie administratora i procesora
   - Zakres przetwarzanych danych
   - Cel i podstawa prawna
   - Powierzenie przetwarzania (art. 28 RODO) jeśli relevant
   - DPA (Data Processing Agreement) jako załącznik dla B2B SaaS
4. **IP ownership clauses** (krytyczne dla IT/dev B2B):
   - Domyślnie: prawa autorskie majątkowe do utworów stworzonych w ramach umowy → Zleceniodawca (po zapłacie pełnej kwoty)
   - Prawo do open-source generic utilities → Wykonawca może publikować (Bartosz's standard, sekcja 16 application-draft)
   - Moral rights (osobiste prawa autorskie) → niezbywalne (zostają przy Wykonawcy)
5. **Wygeneruj draft** + checklist (np. "podpisać w 2 egzemplarzach, jeden dla każdej strony")

## Triggers / Example prompts

- "Umowa B2B na świadczenie usług programistycznych, retainer 10000 PLN/mc"
- "Umowa zlecenia dla freelancera grafika, 5000 PLN za 3 logo"
- "NDA jednostronne — kandydat na pracownika"
- "Umowa najmu biura w Krakowie, 3500 PLN/mc"
- "Umowa o dzieło na napisanie 10 artykułów SEO"

## Constraints (zero halucynacji)

- ❌ **Nie myl zlecenie z dzieło z B2B** — różne konsekwencje ZUS / PIT
- ❌ **Nie wymyślaj kar umownych** — pytaj user lub sugeruj typowy zakres (5-25% wartości)
- ❌ **Nie zostawiaj IP ownership puste** dla B2B IT — to most-disputed klauzula
- ❌ **Nie używaj wzorów z internetu** z niezgodnymi z aktualną wersją RODO klauzulami
- ❌ **Nie zastępuj porady prawnej** — disclaim w outpucie
- ✅ Cytuj **konkretne artykuły KC** w klauzulach niestandardowych
- ✅ **Sugeruj notarialne** dla umów sprzedaży nieruchomości lub przeniesienia udziałów

## Tech notes

- **Integracja z `pdf-generator`**: brand neutral / klient-branded PDF do podpisu
- **Integracja z `docx`** skill: edytowalna .docx dla iteracji ze stroną drugą
- **Wzorzec używany przez JDG bartoszgaca.pl**: B2B umowy z klientami konsultingowymi (memory: `user_linkedin_goals.md` — retainer model)
- **SOW template** w `partner-network/sample-engagement.md` jest wzorcem opartym o ten skill

## Roadmap

- [ ] Wsparcie dla umów o pracę (Kodeks Pracy) — wymaga większej domain expertise, planowane jako collaboration z adwokatem
- [ ] Auto-generation NDA na podstawie LinkedIn outreach context (B2B sales workflow integration)
- [ ] DPA generator stand-alone dla SaaS clients
- [ ] Wsparcie dla umów spółek (s.c., sp. z o.o.) — wymaga większej domain expertise

## Status

Skill SKILL.md kompletny, implementacja w trakcie. Bartosz osobiście korzysta z wzorców tego skilla dla swoich umów B2B z klientami konsultingowymi (memory: `user_linkedin_goals.md`).
