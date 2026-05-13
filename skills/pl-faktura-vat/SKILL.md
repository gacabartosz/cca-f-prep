---
name: pl-faktura-vat
description: >
  Generuje polskie faktury VAT zgodne z ustawą o VAT i wymogami JPK_FA. Obsługuje stawki
  23/8/5/0%, ZW (zwolnione), NP (nie podlega), MPP (mechanizm podzielonej płatności),
  reverse charge (B2B EU), faktury walutowe z kwotą VAT w PLN (art. 106e ust. 11 UoVAT).
  Walidacja NIP przez Biała Lista VAT API. Używać kiedy użytkownik chce wystawić fakturę
  dla polskiego kontrahenta / na polski NIP. NIE używać dla faktur w innych jurysdykcjach.
---

# pl-faktura-vat — Polskie faktury VAT (JPK_FA)

## Overview

Skill generuje faktury VAT zgodne z polską ustawą o VAT (UoVAT) i strukturą JPK_FA. Klucz: prawidłowe stawki VAT, mechanizm podzielonej płatności gdy wymagany, kwota VAT w PLN dla faktur walutowych (art. 106e ust. 11 UoVAT — typowo pomijane przez SaaS-y).

## Inputs

- **Sprzedawca** (obowiązkowy): nazwa, NIP, adres
- **Nabywca** (obowiązkowy): nazwa, NIP, adres
- **Pozycje** (obowiązkowy): nazwa towaru/usługi, ilość, cena jednostkowa netto, stawka VAT (23/8/5/0/ZW/NP)
- **Waluta** (default: PLN; opcjonalnie EUR/USD/GBP)
- **Data sprzedaży / data wystawienia / termin płatności**
- **Numer faktury** (opcjonalny — domyślnie kolejny z numeracji)
- **Metoda płatności** (przelew / gotówka / Stripe / Przelewy24 / BLIK)
- **MPP flag** (opcjonalny — auto-detected dla pozycji z załącznika nr 15 do UoVAT > 15K PLN)

## Outputs

- **PDF faktury** (przez `pdf-generator` skill, brand neutral / bartoszgaca / beecommerce / klient)
- **XML JPK_FA** zgodny z aktualną wersją schematu MF
- **Wpis do JPK_VAT** (jeśli odpalany w batch context)
- **Walidacja**: lista warnings (np. brakujący NIP, podejrzana stawka VAT, mismatch sum)

## Process

1. **Walidacja NIP** sprzedawcy i nabywcy:
   - Format (10 cyfr + checksum)
   - **Biała Lista VAT API** (mf.gov.pl) — czy NIP aktywny, zarejestrowany, rachunek bankowy zgadza się dla MPP
   - Jeśli nabywca to firma z EU spoza PL — VIES VAT check
2. **Walidacja stawek VAT** per pozycja:
   - Dobierz stawkę z PKWiU (jeśli podany) lub zapytaj user (zwłaszcza dla ZW/NP — szczególne przypadki)
   - 23% domyślnie dla większości towarów/usług
   - 8% dla budownictwa, gastronomii, taxi etc.
   - 5% dla książek, czasopism, niektórych produktów spożywczych
   - 0% dla eksportu poza UE
3. **MPP detection**:
   - Pozycje z załącznika nr 15 do UoVAT (np. paliwa, stal, elektronika) z kwotą >15K PLN brutto → mandatory MPP
   - Wstaw adnotację "mechanizm podzielonej płatności" na fakturze
4. **Waluty obce**:
   - Przelicz na PLN po średnim kursie NBP z dnia poprzedzającego datę wystawienia (art. 31a UoVAT)
   - **Kwota VAT zawsze w PLN, niezależnie od waluty faktury** (art. 106e ust. 11 UoVAT — **luka walidacyjna w KSeF v2 znaleziona przez `ksef-mcp`**)
5. **Wygeneruj PDF + XML JPK_FA**
6. **Zwróć**: PDF + XML + warnings list + sugerowany numer kolejny

## Triggers / Example prompts

- "Wystaw fakturę za usługę programistyczną 10 000 PLN netto dla [klient]"
- "Faktura w EUR dla niemieckiego kontrahenta, reverse charge"
- "Faktura za stal 25 000 PLN — pamiętaj o MPP"
- "Faktura ZW za szkolenie zdrowotne dla osoby fizycznej"

## Constraints (zero halucynacji)

- ❌ **Nie wymyślaj numerów PKWiU** — pytaj user lub zostaw placeholder
- ❌ **Nie zaokrąglaj VAT bezpodstawnie** — zachowaj precyzję 2 miejsc po przecinku zgodnie z UoVAT
- ❌ **Nie pomijaj kwoty VAT w PLN dla faktur walutowych** (mandatory per art. 106e ust. 11)
- ❌ **Nie generuj faktury bez NIP nabywcy** dla transakcji B2B (chyba że user explicitly potwierdzi że to B2C bez NIP)
- ✅ **Zawsze waliduj Biała Lista** dla nabywcy > 15K PLN brutto (MPP risk)
- ✅ **Numeracja unikalna i kolejna** — pobieraj poprzedni numer (z user state lub plik `last-invoice-number.txt`)

## Tech notes

- **Integracja z `ksef-mcp`**: po wygenerowaniu faktury, można od razu wysłać do KSeF przez `mcp__ksef-mcp__send_invoice` (gdy KSeF jest mandatory — obecnie B2B opcjonalny, harmonogram MF do potwierdzenia)
- **Integracja z `pdf-generator`**: brand-aware PDF generation
- **Stripe integration** dla automatycznych faktur po payment: webhook → `pl-faktura-vat` → email z PDF
- **Wzorzec używany w produkcji**: reklamacje24.pl (Stripe acct_1SO3Io 4.99 PLN/use), odpisznapismo.pl (acct_1RnC1M), fixmynotice.com
- **JDG faktur Bartosza**: NIP 5993112591, JDG BARTOSZ GACA, ul. Platynowa 14, 66-446 Dzierżów (memory: `reference_jdg_company.md`)

## Roadmap

- [ ] KSeF integration via `ksef-mcp` (gdy KSeF mandatory dla wszystkich)
- [ ] Auto-numerowanie faktur z PostgreSQL backend (multi-product reuse)
- [ ] OCR faktur kosztowych → import do JPK_VAT zakup
- [ ] Wsparcie dla faktur korygujących (in-minus, in-plus)

## Status

Skill SKILL.md kompletny, implementacja generatora w trakcie. Wzorzec proven w produkcji (3 SaaSy generują polskie faktury VAT — reklamacje24, odpisznapismo, fixmynotice).
