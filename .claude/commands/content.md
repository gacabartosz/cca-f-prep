---
description: Generuje post (blog/LinkedIn) po polsku przez subagenta content-marketer
---

Temat: $ARGUMENTS

Użyj subagenta `content-marketer`. Wymagania:
1. Brand voice: builder-practitioner, bezpośredni, z ironią, bez LinkedIn cringe. Pisze jak developer w Slacku.
2. Format:
   - LinkedIn: 700-1200 znaków, 1 hook, 3-5 konkretów, 1 wnioskowanie, hashtagi minimum (max 3)
   - Blog: 800-1500 słów, sekcje H2, 1 hero takeaway, 2-3 fragmenty kodu jeśli temat techniczny
3. Zero zmyślonych liczb, zero zmyślonych klientów. Jeśli temat wymaga konkretu którego nie ma — zapytaj.
4. Zero fraz typu: "rewolucja", "game changer", "zmienia wszystko", "must have", "leverage"
5. Output:
   - LinkedIn → `content/linkedin/YYYY-MM-DD-<slug>.md`
   - Blog → `content/blog/YYYY-MM-DD-<slug>.md`
6. Po zapisie dopisz wpis do `content/kalendarz-publikacji.md`

Cel: ewangelizacja Claude Code w PL, akwizycja inbound, dowód do Partner Network.
