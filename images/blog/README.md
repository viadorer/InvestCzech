# Cover obrázky pro blog

Aktuálně jsou v této složce **placeholdery** (kopie `images/placeholder.jpg`), aby blog karty na `/blog/` neukazovaly 404. Nahraď je skutečnými obrázky, jakmile budou k dispozici.

## Soubory k nahrazení

| Soubor | Článek | Doporučený motiv |
|---|---|---|
| `predschvalena-hypoteka.jpg` | Předschválená hypotéka před 4/2026 | Smlouva o hypotéce, klíče od bytu, kalkulačka — neutrální flatlay |
| `prvni-investicni-byt.jpg` | 12-bodový checklist | Mladý pár s makléřem v prázdném bytě, otevřené dveře, světlo z okna |
| `roe-vs-roi.jpg` | ROE vs. ROI | Kalkulačka, papír s grafy, propisky — finanční detail |
| `vzorny-najemce.jpg` | Vzorný nájemce | Podepisování nájemní smlouvy, předání klíčů, ruka s perem |
| `off-market.jpg` | Off-market trh | Bytový dům v Praze ze střechy, lidský zorný úhel, ne dronové foto |

## Parametry

| Parametr | Hodnota | Proč |
|---|---|---|
| **Rozměry** | 1200 × 630 px | Standard pro OG image (Facebook/LinkedIn share preview) + blog card |
| **Formát** | JPG kvalita 80–85 % | Velikost ≤ 200 KB |
| **Orientace** | Landscape (na šířku) | Sedne do `<img>` 16:9 v gridu |
| **Stylizace** | Lehká úprava do brand palety | Sjednocení vizuálního dojmu |

## Brand stylizace (důležité pro jednotnou vizuální identitu)

Aby všechny blog covery vypadaly jako jedna série a ne jako stock koláž, je vhodné je projet stejnou stylizací. Doporučené postupy:

### Možnost 1 — Modrý duotone (nejjednodušší)

V Photoshopu / Affinity Photo / Pixelmator:
1. Image → Adjustments → Black & White (převést na šedou)
2. Image → Adjustments → Gradient Map
3. Gradient nastavit: tmavé tóny → `#0A2540` (invest-blue), světlé → `#F5F7FA` (invest-bg)

Online alternativa: [duotone.shapefactory.co](https://duotone.shapefactory.co/)

### Možnost 2 — Modrý overlay (rychlejší)

V Canva / Figma / online editoru:
1. Vrstva fotky 100 %
2. Přidat vrstvu `#0A2540` (invest-blue) s průhledností 25–35 %
3. Optionálně přidat malý červený `#D7141A` accent (např. kruh / linka v rohu)

### Možnost 3 — Bez stylizace, jen jednotný styling fotek

Pokud si vyberete stock fotky ve stejném vizuálním stylu (např. všechny v teplém světle u okna, všechny s podobnou kompozicí), nemusíte je vůbec retušovat. Konzistence je v tom, jak vypadají originály.

## Kde brát fotky

| Zdroj | Cena | Plus | Minus |
|---|---|---|---|
| [Unsplash](https://unsplash.com) | Zdarma (CC) | Vysoká kvalita | Často se vidí dál |
| [Pexels](https://pexels.com) | Zdarma (CC) | Vysoká kvalita | Stejný problém |
| [Adobe Stock](https://stock.adobe.com) | ~500 Kč / fotka | Profesionální, unikátnější | Placené |
| Vlastní focení | 5–10 tis. Kč za session | 100% unikátní, sedí na brand | Časově náročné |

Doporučení: pro start Unsplash + brand stylizace (duotone nebo overlay). Při refresh fáze 2 můžeš nahradit vlastním foceným contentem.

## Vyhledávací slova na Unsplash (pro inspiraci)

- `prague apartment` / `prague real estate`
- `mortgage signing` / `loan agreement`
- `keys handover` / `apartment keys`
- `architectural photography prague` / `czech apartment building`
- `coffee paperwork` / `calculator finance`
- `young couple apartment viewing`

## Až nahradíš obrázky

Nemusíš nic v kódu měnit. Soubory mají správné názvy a `blog/posts.json` na ně odkazuje. Stačí jen `.jpg` přepsat.
