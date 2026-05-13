---
description: Strukturyzuje case study z faktów dostarczonych przez Bartosza. Nie zmyśla liczb.
---

Produkt do opisania: $ARGUMENTS (np. aplikantai, odpisznapismo, biznesbezklikania)

Użyj subagenta `case-writer`. Przed napisaniem czegokolwiek:
1. Sprawdź `partner-network/case-studies/$ARGUMENTS.md` — jakie sekcje są wypełnione, gdzie są TODO
2. Zapytaj Bartosza o brakujące fakty: problem klienta, stack, jakie elementy Claude Code zostały użyte, mierzalne efekty (jeśli są), status zgody na referencję
3. Nie wpisuj liczb, dat, nazw klientów bez potwierdzenia
4. Output: Markdown w `partner-network/case-studies/$ARGUMENTS.md` z sekcjami:
   - Problem
   - Rozwiązanie
   - Stack i architektura
   - Co konkretnie zrobił Claude Code
   - Mierzalne efekty
   - Referencja klienta (status zgody)

Cel czytelnika: capability reviewer z Anthropic. Konkrety, mierzalne, bez marketing-speak.
