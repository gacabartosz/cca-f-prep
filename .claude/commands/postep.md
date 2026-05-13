---
description: Generuje raport postępu tygodnia (czytane domeny, wyniki drilli, opublikowany content)
---

Wygeneruj raport tygodnia. Format:

```markdown
# Tydzień XX — postęp

## Co zrobione
- [ ] Domeny przerobione (z procentami opanowania)
- [ ] Mock examy / drille (wyniki)
- [ ] Artefakty zbudowane (skills, MCP, slash commands)
- [ ] Content opublikowany (blog, LinkedIn, YT)

## Wyniki mierzalne
- Mock exam score: X/1000
- Drille per domena: X/Y
- Content output: X postów

## Blockers
- [opisz konkrety, nie ogólniki]

## Plan na następny tydzień
1. Główny temat
2. Mock exam target
3. Content target
4. Build target (artefakt do partner-network)

## Status Partner Network
[uzupełnij — referencje, draft aplikacji, blockers]
```

Wczytaj:
1. `postep/tydzien-XX.md` (poprzedni i bieżący jeśli istnieje)
2. `git log --since="7 days ago" --oneline` w tym repo
3. `content/kalendarz-publikacji.md` (co opublikowane w tym tygodniu)

Output: zaktualizuj `postep/tydzien-XX.md`. Bez zmyślania metryk — jeśli czegoś nie ma w danych, wpisz "—".
