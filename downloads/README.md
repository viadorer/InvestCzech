# Lead magnet PDF a newsletter

## Aktuální stav

| Soubor | Co to je |
|---|---|
| `10-chyb-pri-prvni-investici-investczech.pdf` | 14-stránkový bezplatný průvodce. Generován z `scripts/build-lead-magnet.py`. |

Linkováno z homepage (`index.html#newsletter`) přes tlačítko „Stáhnout PDF zdarma".

## Newsletter form

Form na homepage v sekci `#newsletter` aktuálně posílá na **Formspree** placeholder URL (`maybnvyq`). To **NEFUNGUJE** v produkci, dokud nesplníš jedno z:

### Možnost A: Formspree (nejjednodušší, zdarma do 50 odeslání/měs.)

1. Registruj účet na [formspree.io](https://formspree.io) — zdarma.
2. Vytvoř nový form, dostaneš endpoint ve formátu `https://formspree.io/f/XXXXXXXX`.
3. V `index.html` najdi `action="https://formspree.io/f/maybnvyq"` a nahraď za svůj endpoint.
4. Odpovědi ti chodí na e-mail uvedený při registraci.

### Možnost B: MailerLite (víc featur, integrace do email kampaní)

1. Registruj se na [mailerlite.com](https://www.mailerlite.com/) — free tier do 1 000 subscribers.
2. Vytvoř subscriber group a získej embed form code.
3. Buď nahraď celou form sekci v `index.html` jejich embed formem, nebo použij jejich [API endpoint](https://developers.mailerlite.com/) a uprav `action` URL + přidej API token přes serverless funkci.

### Možnost C: Brevo (dříve Sendinblue, evropský provider, GDPR-friendly)

1. Registruj se na [brevo.com](https://www.brevo.com/) — free tier do 300 emailů/den.
2. Vytvoř list + získej embed code nebo API endpoint.
3. Stejně jako u MailerLite — nahraď form action nebo embed.

## Re-build PDF

Pokud chceš upravit obsah lead magnetu (čísla, kapitoly, kontakt):

1. Otevři `scripts/build-lead-magnet.py`.
2. Změň text v sekci `mistakes = [...]` (10 chyb), `story.append(...)` (úvod, závěr, CTA), nebo brand barvy nahoře.
3. Re-build:

```bash
python3 scripts/build-lead-magnet.py
```

PDF se vygeneruje znovu, přepíše existující soubor. Změny commitnout.

## Kde je PDF dál linkovaný

Aktuálně jen z `index.html` (sekce #newsletter). Můžeš přidat:

- Patička všech stránek (Ekosystém: „Bezplatný průvodce")
- Blog detail page jako CTA pod článkem „Jak vybrat první investiční byt"
- Blog detail page „ROE vs. ROI" jako PDF download
- Hugo chatbot proaktivní nabídka (pokud má relevantní intent)

## Branding PDF

- Modré pozadí #0A2540, červené akcenty #D7141A — sjednoceno s webem
- Helvetica fallback (Montserrat by vyžadovala embed fontu — pro PDF stačí systémová)
- Cover, vnitřek (header/footer), CTA — všechny stránky brandované

Pokud chceš změnit branding, edit `scripts/build-lead-magnet.py` → `INVEST_BLUE`, `INVEST_RED` konstanty + `draw_cover` / `draw_chapter_page` funkce.
