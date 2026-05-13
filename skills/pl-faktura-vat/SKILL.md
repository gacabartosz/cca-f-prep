---
name: pl-faktura-vat
description: Generuje polskie faktury VAT zgodne z ustawą o VAT. Obsługuje stawki 23/8/5/0%, ZW, NP, mechanizm podzielonej płatności, NIP odwrotny. Używać kiedy użytkownik chce wystawić fakturę dla polskiej firmy / na polski NIP.
---

# TODO: implementation

Skill ma:
1. Walidować dane sprzedawcy/nabywcy (NIP-check przez biała lista VAT)
2. Wyliczać kwoty netto/brutto/VAT
3. Stosować poprawną stawkę VAT dla danego towaru/usługi (TODO: tabela PKWiU)
4. Generować zgodne XML JPK_FA + PDF
5. Zapisać do `output/faktura-<numer>.{pdf,xml}`

Status: wartościowy skill — używany przez Bartosza w `BiznesBezKlikania` jako wewnętrzny moduł.
