---
description: Uruchamia symulację 60 pytań / 120 min przez subagenta exam-coach
---

Tryb: $ARGUMENTS (opcjonalnie — `full`, `drill <domena>`, `analiza <plik-wyniku>`)

Wywołaj subagenta `exam-coach` w odpowiednim trybie:
- bez argumentu lub `full` → 60 pytań w 120 minut, MCQ scenario-based, bez podpowiedzi w trakcie
- `drill <01-05>` → 10 pytań z jednej domeny, feedback po każdym
- `analiza <plik>` → bierze wynik mock examu i wskazuje 3 słabe obszary z planem nadrobienia

Po sesji:
1. Wynik zapisz do `postep/tydzien-XX.md` w sekcji "Mock exam wyniki"
2. Update `CLAUDE.md` w polu "Ostatni mock exam wynik"
3. Jeśli wynik < 720/1000 → wygeneruj plan nadrobienia w 3 obszarach najgorzej wypadłych domen

Pamiętaj: ten tryb jest TYLKO do nauki. Na proktorowanym egzaminie Claude Code NIE jest dostępny.
