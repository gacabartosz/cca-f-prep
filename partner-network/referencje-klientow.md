# Referencje klientów — Partner Network application

Każda referencja wymaga **udokumentowanej zgody** klienta na podanie nazwy/firmy/branży/metryk. Bez zgody → "Pending consent" → w aplikacji idzie jako anonimowy case study.

## Tabela referencji

| # | Customer / Product | Type | Branża | URL | Stack na Claude | Status zgody | Forma referencji | Kontakt | Notatki |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **reklamacje24.pl** | Own product (primary) | B2C legal / consumer rights | https://reklamacje24.pl | Node 18+ + PostgreSQL 14+ + Prisma, Stripe acct_1SO3Io (4.99 PLN/use, P24+BLIK+karta), nginx + pm2, Docker port 4003, GitHub Actions CI/CD, AI image analysis + AI generation per UoPK, GSC verified | ✅ Auto (Bartosz = owner) | Full name + URL + Stripe metrics (po decyzji) | n/a | Real Stripe revenue, micro-paid AI |
| 2 | **odpisznapismo.pl** | Own product (primary) | Legal-tech / consumer | https://odpisznapismo.pl | React + TS + Tailwind, Node/Express + TS, PostgreSQL + Prisma, OpenRouter (Gemini + Claude + GPT), Tesseract.js OCR, jsPDF, Autopay (Stripe-ready acct_1RnC1M) | ✅ Auto (Bartosz = owner) | Full name + URL | n/a | RODO-by-design (brak trwałego zapisu dokumentów) |
| 3 | **biznesbezklikania.pl** | Own product (primary) | SME automation | https://biznesbezklikania.pl | React + TS + React Router + Tailwind, esbuild + serve, Node/Express webhook, Gemini API + Claude-compatible, lead capture, Meta/TikTok CAPI/EAPI, WhatsApp/Messenger inbox, admin API, cron loops | ✅ Auto (Bartosz = owner) | Full name + URL | n/a | GA4: G-X1T8PR56BE |
| 4 | **stadomat.pl** | Own product (tech ref ONLY, nie traction) | Agritech SaaS multi-tenant | https://stadomat.pl | Next.js 14, per-tenant PostgreSQL isolation, pgBouncer, Stripe + Przelewy24 + Fakturownia, IRZ API integration | ✅ Auto (Bartosz = owner) | **Tech reference only** — nie liczb userów (pre-PMF, 1 testujący per `feedback_stadomat_one_user.md`) | n/a | Używam jako evidence dla multi-tenant + integracje regulowane |
| 5 | **fixmynotice.com** | Own product | Legal-tech EN | https://fixmynotice.com | Stack analog odpisznapismo, rynek EN | ✅ Auto (Bartosz = owner) | Full name + URL | n/a | Stripe konto osobne, international reach |
| 6 | **woodconsulting.pl** | Client (employer-context) | Wood industry / B2B SaaS | https://woodconsulting.pl | Frontend + backend + PostgreSQL 16 (deployowane na własnych VPS Bartosza) | ⏳ Pending consent | Forma do uzgodnienia z klientem | TODO: wysłać prośbę | Klient produkcyjny — wymagana wyraźna zgoda |
| 7 | **BeeCommerce** | Employer / 12 R&D AI projects | E-commerce agency | https://beecommerce.pl | 11 aplikacji Kubernetes OVH, GitOps ArgoCD, Harbor, ESO+1Password, Kyverno | ⏳ Pending consent | Bartosz jako CTO; ujawnienie zależy od decyzji BeeCommerce board | TODO: wewnętrzna rozmowa | Karlik, rentgen, lookbooki, tender-preselection, felu-generator i inne |

## Plan kontaktu (ramowo)

1. **Tydzień 02 (po setupie repo)**: zewnętrzni klienci (woodconsulting, BeeCommerce) — formalne prośby o zgodę
2. **Tydzień 04**: follow-up
3. **Tydzień 06–08**: finalizacja zgód, update tabeli, wysyłka aplikacji

## Standardowa wiadomość prośby o zgodę (template)

```
Cześć [imię],

aplikuję do Claude Partner Network (oficjalny program partnerski Anthropic — twórców Claude i Claude Code).
Część aplikacji to 3 reference customers w produkcji.

Chciałbym Cię/Waszą firmę wymienić jako referencję dla projektu [nazwa].
Konkretnie potrzebuję:
1. Zgody na podanie nazwy firmy + branży
2. Krótkiej rozmowy referencyjnej (15–30 min, JEŚLI Anthropic poprosi — nieobowiązkowo)
3. (Opcjonalnie) 1–2 weryfikowalne metryki — co Wam to dało

Bez zgody nie idziecie nigdzie. Z zgodą — będziecie jednymi z pierwszych polskich
case studies dla Claude i Anthropic Partner Network.

Daj znać czy jesteście za, ewentualnie pod jakimi warunkami.

Bartek
```

## Reference quality guard rails (sztywno)

- **Zero zmyślonych liczb**. Stadomat NIE używamy jako "10K userów" (to inflated z USEME-PORTFOLIO; realny stan: pre-PMF, 1 testujący — `feedback_stadomat_one_user.md`).
- **Tylko zweryfikowane stacki** — wszystkie powyżej są weryfikowalne w README odpowiednich repo (`/Users/gaca/projects/personal/<produkt>/README.md`).
- **Bez nazwisk klientów** dopóki nie ma zgody na piśmie.
- **Bez metryk biznesowych** (revenue, paying users) dopóki nie ma zgody na ich publikację.
