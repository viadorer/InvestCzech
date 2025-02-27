# InvestCzech

## Deployment

Tento projekt je nastaven pro automatický deployment na GitHub Pages.

### Postup pro deployment:

1. Nastavení GitHub Pages:
   - Přejděte do nastavení repozitáře na GitHubu
   - V sekci "Pages" vyberte větev `main` jako zdroj
   - Klikněte na "Save"
   - GitHub automaticky nasadí stránky na adresu `https://[username].github.io/InvestCzech`

2. Nastavení domény (volitelné):
   - V nastavení GitHub Pages můžete nastavit vlastní doménu
   - Přidejte CNAME záznam u svého poskytovatele domény

### Zpracování formuláře

Kontaktní formulář využívá službu [Formspree](https://formspree.io/) pro zpracování odeslaných dat.

### Lokální vývoj

1. Naklonujte repozitář
2. Otevřete `index.html` v prohlížeči

### Struktura projektu

- `index.html` - Hlavní stránka
- `images/` - Složka s obrázky
- `.nojekyll` - Soubor, který zajišťuje, že GitHub Pages nebude používat Jekyll
