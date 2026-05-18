"""
Build lead magnet PDF: "10 chyb při první investici do nemovitosti"

Generates: downloads/10-chyb-pri-prvni-investici-investczech.pdf

Brand: InvestCzech (modrá #0A2540, červená #D7141A, Helvetica fallback for Montserrat)

Run: python3 scripts/build-lead-magnet.py
"""

import os
from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, white, Color
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.pdfgen import canvas
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, PageBreak,
    Image, KeepTogether
)

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "downloads" / "10-chyb-pri-prvni-investici-investczech.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

# Brand colors
INVEST_BLUE = HexColor("#0A2540")
INVEST_BLUE_LIGHT = HexColor("#1A3A5C")
INVEST_RED = HexColor("#D7141A")
INVEST_GRAY = HexColor("#1A1A1A")
INVEST_GRAY_LIGHT = HexColor("#6B7280")
INVEST_BG = HexColor("#FAFBFC")

PAGE_W, PAGE_H = A4
MARGIN = 20 * mm


# ---------- Page decorations ----------

def draw_cover(canv, doc):
    """Cover page background — solid blue with red accent + branding."""
    canv.saveState()
    # Full blue background
    canv.setFillColor(INVEST_BLUE)
    canv.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    # Red accent stripe on left
    canv.setFillColor(INVEST_RED)
    canv.rect(0, 0, 8 * mm, PAGE_H, fill=1, stroke=0)
    # Logo INVESTCZECH top-left
    canv.setFont("Helvetica-Bold", 18)
    canv.setFillColor(white)
    canv.drawString(MARGIN, PAGE_H - 30 * mm, "INVEST")
    canv.setFillColor(INVEST_RED)
    canv.drawString(MARGIN + 38 * mm, PAGE_H - 30 * mm, "CZECH")
    # Bottom branding strip
    canv.setFillColor(white)
    canv.setFont("Helvetica", 9)
    canv.drawString(MARGIN, 20 * mm, "investczech.cz · PTF reality, s.r.o.")
    canv.setFillColor(Color(1, 1, 1, alpha=0.5))
    canv.drawRightString(PAGE_W - MARGIN, 20 * mm, "Bezplatný průvodce · 2026")
    canv.restoreState()


def draw_chapter_page(canv, doc):
    """Inner page decoration: header strip + page number + footer."""
    canv.saveState()
    # Header thin red strip
    canv.setFillColor(INVEST_RED)
    canv.rect(0, PAGE_H - 8 * mm, PAGE_W, 2 * mm, fill=1, stroke=0)
    # Top logo (small)
    canv.setFont("Helvetica-Bold", 10)
    canv.setFillColor(INVEST_BLUE)
    canv.drawString(MARGIN, PAGE_H - 14 * mm, "INVEST")
    canv.setFillColor(INVEST_RED)
    canv.drawString(MARGIN + 21 * mm, PAGE_H - 14 * mm, "CZECH")
    canv.setFillColor(INVEST_GRAY_LIGHT)
    canv.setFont("Helvetica", 8)
    canv.drawRightString(PAGE_W - MARGIN, PAGE_H - 14 * mm,
                        "10 chyb při první investici do nemovitosti")
    # Footer
    canv.setFillColor(INVEST_GRAY_LIGHT)
    canv.setFont("Helvetica", 8)
    canv.drawString(MARGIN, 12 * mm, "investczech.cz")
    canv.drawCentredString(PAGE_W / 2, 12 * mm, f"strana {doc.page}")
    canv.drawRightString(PAGE_W - MARGIN, 12 * mm, "© 2026 InvestCzech")
    canv.restoreState()


# ---------- Document ----------

def build():
    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=MARGIN,
        rightMargin=MARGIN,
        topMargin=22 * mm,
        bottomMargin=20 * mm,
        title="10 chyb při první investici do nemovitosti — InvestCzech",
        author="InvestCzech",
        subject="Bezplatný průvodce pro investory do nájemních nemovitostí",
        creator="InvestCzech",
    )

    # Cover (no inner frame, just background)
    cover_frame = Frame(0, 0, PAGE_W, PAGE_H,
                       leftPadding=MARGIN, rightPadding=MARGIN,
                       topPadding=70 * mm, bottomPadding=40 * mm,
                       showBoundary=0, id='cover')
    inner_frame = Frame(MARGIN, 18 * mm, PAGE_W - 2 * MARGIN, PAGE_H - 40 * mm,
                       leftPadding=0, rightPadding=0,
                       topPadding=0, bottomPadding=0, id='inner')

    doc.addPageTemplates([
        PageTemplate(id='cover', frames=cover_frame, onPage=draw_cover),
        PageTemplate(id='chapter', frames=inner_frame, onPage=draw_chapter_page),
    ])

    # ---- Styles ----
    title_xl = ParagraphStyle('TitleXL', fontName='Helvetica-Bold',
                              fontSize=34, leading=40, textColor=white,
                              alignment=TA_LEFT, spaceAfter=10 * mm)
    subtitle_white = ParagraphStyle('SubtitleW', fontName='Helvetica',
                                    fontSize=14, leading=20,
                                    textColor=Color(1, 1, 1, alpha=0.85),
                                    spaceAfter=6 * mm)
    eyebrow_red = ParagraphStyle('Eyebrow', fontName='Helvetica-Bold',
                                  fontSize=10, leading=12,
                                  textColor=INVEST_RED,
                                  spaceAfter=4 * mm)
    h1 = ParagraphStyle('H1', fontName='Helvetica-Bold',
                        fontSize=22, leading=28, textColor=INVEST_BLUE,
                        spaceAfter=6 * mm, spaceBefore=2 * mm)
    h2 = ParagraphStyle('H2', fontName='Helvetica-Bold',
                        fontSize=15, leading=20, textColor=INVEST_BLUE,
                        spaceAfter=4 * mm, spaceBefore=6 * mm)
    body = ParagraphStyle('Body', fontName='Helvetica',
                          fontSize=10.5, leading=16, textColor=INVEST_GRAY,
                          alignment=TA_JUSTIFY, spaceAfter=4 * mm)
    lead = ParagraphStyle('Lead', fontName='Helvetica',
                          fontSize=12, leading=18, textColor=INVEST_GRAY_LIGHT,
                          alignment=TA_LEFT, spaceAfter=6 * mm)
    bullet = ParagraphStyle('Bullet', parent=body,
                            leftIndent=14, bulletIndent=0,
                            spaceAfter=2 * mm)
    quote = ParagraphStyle('Quote', fontName='Helvetica-Oblique',
                           fontSize=11, leading=16, textColor=INVEST_BLUE,
                           leftIndent=10, rightIndent=10,
                           borderColor=INVEST_RED, borderWidth=0,
                           borderPadding=8, spaceAfter=6 * mm,
                           spaceBefore=4 * mm)
    cta_box = ParagraphStyle('CTA', fontName='Helvetica-Bold',
                             fontSize=11, leading=16, textColor=white,
                             alignment=TA_CENTER, spaceAfter=4 * mm)
    small_grey = ParagraphStyle('Small', fontName='Helvetica',
                                fontSize=9, leading=13,
                                textColor=INVEST_GRAY_LIGHT,
                                alignment=TA_LEFT, spaceAfter=2 * mm)

    story = []

    # ---- Cover ----
    story.append(Paragraph("Bezplatný průvodce pro investory", subtitle_white))
    story.append(Spacer(1, 4 * mm))
    story.append(Paragraph("10 chyb<br/>při první investici<br/>do nemovitosti", title_xl))
    story.append(Spacer(1, 6 * mm))
    story.append(Paragraph(
        "Praktické rady, které ušetří desítky tisíc korun a několik let "
        "frustrace. Sepsali jsme je z 13 let zkušeností s 150+ akvizicemi "
        "pro klienty.", subtitle_white))
    story.append(Spacer(1, 14 * mm))
    story.append(Paragraph(
        "<font color='#D7141A'>Květen 2026</font> · "
        "<font color='#FFFFFF99'>investczech.cz</font>",
        subtitle_white))

    # Switch to chapter template
    story.append(PageBreak())
    story.append(Paragraph("KAPITOLA 0", eyebrow_red))
    story.append(Paragraph("Pro koho je tento dokument", h1))
    story.append(Paragraph(
        "Tento průvodce je pro vás, pokud uvažujete o&nbsp;první investiční "
        "nemovitosti — typicky jeden nájemní byt v&nbsp;hodnotě 2–5 milionů Kč "
        "financovaný z&nbsp;větší části hypotékou. Nejde o&nbsp;detailní účetní "
        "manuál ani o&nbsp;marketingovou brožuru. Jde o&nbsp;deset konkrétních "
        "chyb, které vidíme u&nbsp;klientů, kteří k&nbsp;nám přicházejí "
        "<i>po</i>&nbsp;první transakci a&nbsp;chtějí ji optimalizovat.",
        lead))
    story.append(Paragraph(
        "U&nbsp;každé chyby najdete:", body))
    story.append(Paragraph(
        "<b>Co se obvykle stane</b> — typický scénář, jak chyba probíhá.",
        bullet, bulletText='•'))
    story.append(Paragraph(
        "<b>Proč je to drahé</b> — finanční dopad konkrétně.",
        bullet, bulletText='•'))
    story.append(Paragraph(
        "<b>Co dělat místo toho</b> — praktická rada k&nbsp;okamžitému použití.",
        bullet, bulletText='•'))
    story.append(Spacer(1, 8 * mm))
    story.append(Paragraph(
        "<b>Důležité:</b> Toto není individuální investiční doporučení. Vaše "
        "konkrétní situace, kapitál, příjem a&nbsp;cíle vyžadují vlastní "
        "kalkulaci. Pokud chcete projít vaše parametry s&nbsp;námi, "
        "<font color='#D7141A'><b>investczech.cz/#kontakt</b></font>.", small_grey))

    # ---- Generate 10 mistakes ----
    # Single-quote Python strings so we can freely use ASCII " and Unicode „…" inside
    mistakes = [
        {
            'n': '01',
            'h': 'Sliby sami sobě „koupím cokoliv, jen ať neztratím čas"',
            'what': 'První investice je emocionálně tlaková. Po několika měsících rešerše chcete prostě nakoupit, abyste mohli říct „mám to za sebou". Necháte si vnutit byt, který nesplňuje vaše parametry.',
            'why': 'Špatná akvizice vás stojí 5–10&nbsp;% z&nbsp;ceny při exitu, plus ušlou rentu po dobu, kterou tam strávíte. U&nbsp;tříbytového omylu to může být 200&nbsp;000–400&nbsp;000 Kč rozdílu mezi vámi a&nbsp;klientem, který počkal o&nbsp;6 měsíců déle.',
            'how': 'Definujte si <b>3 kritéria, která musí byt splnit</b>, a&nbsp;komituje se, že odmítnete vše ostatní. Ne 5, ne 10 — tři. Nejčastěji: lokalita s&nbsp;dobrou MHD, technický stav bez nutnosti okamžité rekonstrukce, ROE v&nbsp;modelaci minimálně 12&nbsp;%.',
        },
        {
            'n': '02',
            'h': 'Prohlídka bez technika',
            'what': 'Jdete na prohlídku sami. Vlhkost vidíte, prasklou vanu vidíte, ale strop má novou výmalbu — neuvidíte, že o&nbsp;týden dřív tam byla plíseň. Vidíte plastová okna — neuvidíte, že byla namontovaná bez parapetů a&nbsp;mokrá zima rozkládá špalety.',
            'why': 'Skryté technické problémy se odhalí během prvních 6–12 měsíců provozu. Typická cena: rekonstrukce kuchyně 80–150&nbsp;tisíc, výměna oken 60–150&nbsp;tisíc, sanace vlhkosti 100–250&nbsp;tisíc. Vy přebíráte rozdíl mezi inzerovanou a&nbsp;reálnou cenou.',
            'how': 'Vždy si vezměte na druhou prohlídku <b>technika nebo zkušeného známého</b>. Náklad 2–4&nbsp;tisíce Kč ušetří v&nbsp;průměru 30–100&nbsp;tisíc na nákupu nebo přiměje vás odejít. Klíčové oblasti: rozvody elektriky (hliník vs.&nbsp;měď), stav vodoinstalace, vlhkost zdiva, stav oken.',
        },
        {
            'n': '03',
            'h': 'Spoléháte na ROI, ne na ROE',
            'what': 'Inzerát nebo realitní zprostředkovatel vám ukazuje ROI 5&nbsp;%. „To je slušné," myslíte si. Jenže ROI ignoruje finanční páku — měří výnos vůči celkové ceně, ne vůči vašemu vloženému kapitálu.',
            'why': 'Bez znalosti ROE neumíte porovnat investici se spořicím účtem nebo akciemi. Investice s&nbsp;ROI 5&nbsp;% může mít ROE 22&nbsp;% (skvělé) i&nbsp;ROE 8&nbsp;% (špatné) — záleží na podmínkách hypotéky a&nbsp;velikosti vašeho vlastního kapitálu.',
            'how': 'Spočítejte si ROE před každou akvizicí. <b>ROE = (roční čistý výnos − roční splátky hypotéky) ÷ vlastní vložený kapitál × 100</b>. U&nbsp;první investice počítejte 12–18&nbsp;%, pokud je pod 10&nbsp;%, hledejte dál. Pro výpočet můžete použít naši kalkulačku na investczech.cz/calculator.html.',
        },
        {
            'n': '04',
            'h': 'Ignorujete energetický štítek',
            'what': 'Jste ve fázi rozhodování. Štítek F, G, někdy nedoložený. Prodávající vás ujistí, že „to je u&nbsp;starých paneláků normální". Vy jste kupcem, ne energetickým specialistou — souhlasíte.',
            'why': 'EU regulace tlačí na zákaz pronájmu nemovitostí s&nbsp;nejhorší energetickou náročností (třída G, později F). U&nbsp;štítku F musíte v&nbsp;horizontu 5–7 let zateplit, vyměnit okna nebo radikálně modernizovat. Náklad 300&nbsp;000 – 1&nbsp;500&nbsp;000 Kč podle rozsahu.',
            'how': 'Vyžádejte si <b>aktuální energetický štítek před podpisem rezervační smlouvy</b>. Štítky A–D jsou bezpečné. E je hraniční — počítejte s&nbsp;modernizací v&nbsp;horizontu 10 let. F a&nbsp;G berte jen tehdy, pokud je kupní cena natolik nižší, že kompenzuje budoucí investici (typicky 15–25&nbsp;% pod trhem).',
        },
        {
            'n': '05',
            'h': 'Neověřujete SVJ a fond oprav',
            'what': 'Soustředíte se na byt samotný. SVJ se vás obvykle netýká — platíte měsíční zálohy, fond oprav existuje. Jenže každý byt v&nbsp;domě nese spoluvlastnictví společných částí. Pokud SVJ schválí mimořádný příspěvek na novou střechu nebo výtah, platíte vy.',
            'why': 'Mimořádný příspěvek SVJ může být 50&nbsp;000 – 300&nbsp;000 Kč na byt. U&nbsp;starších domů (stavěno 1960–1985) je pravděpodobnost mimořádného příspěvku do 5 let kolem 30&nbsp;%. Při fondu oprav 80 Kč/m²/měsíc je rezerva nedostatečná na opravdovou rekonstrukci.',
            'how': 'Před podpisem rezervační smlouvy si vyžádejte: <b>(1)</b>&nbsp;poslední účetní závěrku SVJ, <b>(2)</b>&nbsp;plán oprav na 5–10 let, <b>(3)</b>&nbsp;výši fondu oprav a&nbsp;jeho zůstatek, <b>(4)</b>&nbsp;informaci o&nbsp;aktivních soudních sporech v&nbsp;SVJ. Bez těchto čtyř dokumentů nepodepisujte.',
        },
        {
            'n': '06',
            'h': 'Nájemní smlouvu si stáhnete z internetu',
            'what': 'Najdete si „vzor nájemní smlouvy zdarma" a&nbsp;upravíte si ho. Funguje to — dokud nenarazíte na neplatiče. Pak zjistíte, že chybí rozhodčí doložka, sankce za pozdní platbu jsou obecné, výpovědní důvody nejsou specifické.',
            'why': 'Vystěhování špatně chráněného nájemníka trvá v&nbsp;Česku 9–18 měsíců soudní cestou. Mezitím platíte vy hypotéku, daň z&nbsp;nemovitosti, energie. Náklad pro byt s&nbsp;nájmem 15&nbsp;000 Kč: 135–270&nbsp;000 Kč ušlého nájmu + 30–80&nbsp;000 Kč právních nákladů.',
            'how': 'Investujte 5–15&nbsp;000 Kč do <b>nájemní smlouvy připravené advokátem</b> nebo využijte naši ověřenou šablonu v&nbsp;rámci služby Vzorný nájemce. Klíčové prvky: rozhodčí doložka (zkracuje spor o&nbsp;6–12 měsíců), kauce 1–2 měsíční nájmy na vázaném účtu, sankce za pozdní platbu, jasně definované výpovědní důvody.',
        },
        {
            'n': '07',
            'h': 'Nemáte rezervu na rekonstrukci a vakanci',
            'what': 'Spočítáte si byt na 3 miliony, hypotéku, akontaci. Cash-flow vychází. Co nepočítáte: že kuchyň po pěti letech nájmu bude potřebovat výměnu, že někdy bude byt měsíc prázdný, že nájemník odejde a&nbsp;nechá vám rozbitou podlahu.',
            'why': 'Bez rezervy se v&nbsp;okamžiku nečekané investice (50–150&nbsp;000 Kč rekonstrukce po nájemníkovi, 2–3 měsíce vakance při výměně) musíte zadlužit dráž nebo prodávat akcie ve špatný čas. Cash-flow z&nbsp;jedné nemovitosti není dost robustní k&nbsp;absorbování šoků.',
            'how': 'Držte <b>provozní rezervu rovnou 6 měsícům nájmu</b> na samostatném účtu. U&nbsp;bytu s&nbsp;nájmem 15&nbsp;000 Kč to znamená 90&nbsp;000 Kč. Plus rezerva na nečekanou rekonstrukci 60–100&nbsp;000 Kč. Celková likvidní rezerva u&nbsp;první nemovitosti tedy 150–200&nbsp;000 Kč, nezávisle na hypotéce.',
        },
        {
            'n': '08',
            'h': 'Cílíte na lokalitu „pro lifestyle", ne pro nájemníka',
            'what': 'Hledáte byt, který by se vám líbil. Vinohrady. Letná. Karlín. Tam nikdo nepronajímá pod 25&nbsp;000 Kč, ale cena je 6–8 milionů. Cash-flow je záporný, zhodnocení pomalejší než říká inzerát.',
            'why': 'Lifestyle lokality mají nejnižší výnos (ROE 8–12&nbsp;%) a&nbsp;nejvyšší vstupní bariéru. Pro první investici jsou nevhodné — vaše páka se nezhodnotí dostatečně, abyste mohli akcelerovat portfolio. Lepší jsou střední lokality (Praha 4, 9, 10, Beroun, Plzeň-Slovany) s&nbsp;ROE 15–18&nbsp;%.',
            'how': 'Vybírejte lokalitu podle <b>profilu cílového nájemníka</b>, ne svého vkusu. Cílový nájemník investičního bytu: mladší zaměstnanec ve&nbsp;mzdovém pásmu 35–60&nbsp;000 Kč hrubého, pendler nebo lokální. Bydlí 7–15 minut MHD od centra. Vyhledává byty 1+kk až 2+kk za 13–18&nbsp;000 Kč nájmu.',
        },
        {
            'n': '09',
            'h': 'Plánujete jen nákup, ne exit',
            'what': 'Při akvizici se soustředíte na „jak ji koupím". Ne na „jak ji prodám". Po 5 letech, kdy chcete kapitál uvolnit (rodinná situace, příležitost, refinancování), zjistíte, že byt je atypický a&nbsp;trvá 6–9 měsíců, než najdete kupce.',
            'why': 'Nestandardní byty (atyp 1+kk 18&nbsp;m², půdní vestavba bez kolaudace, suterén, družstevní vlastnictví v&nbsp;nestandardním družstvu) mají likvidní diskont 10–20&nbsp;% při prodeji. To může být 200–500&nbsp;000 Kč rozdílu, který si neuvědomíte při nákupu.',
            'how': 'Před nákupem si položte otázku: <b>komu konkrétně tento byt prodám za 5–10 let?</b> Standardní byt (2+kk, 1+kk, 50–60&nbsp;m², osobní vlastnictví, druhé až páté patro s&nbsp;výtahem, blízko MHD) prodáte vždy. Atypické konfigurace si nechte na pozdější investice, kdy budete mít více zkušeností a&nbsp;kapitálovou rezervu na delší exit.',
        },
        {
            'n': '10',
            'h': 'Nepočítáte s daňovým režimem',
            'what': 'Berete nemovitost na fyzickou osobu. Po prvním roce zjistíte, že daň z&nbsp;příjmu z&nbsp;nájmu je 15&nbsp;%, sociální a&nbsp;zdravotní pojištění může spadnout do&nbsp;hry, paušální výdaje vs.&nbsp;skutečné se počítají jinak.',
            'why': 'Špatně zvolený daňový režim u&nbsp;jednoho bytu stojí 10–30&nbsp;000 Kč ročně. Pokud plánujete portfolio 3+ nemovitostí, dává smysl s.r.o. nebo nemovitostní fond — daň z&nbsp;příjmu právnické osoby může být efektivně nižší a&nbsp;máte lepší možnosti odpisů. Špatné rozhodnutí na začátku se po několika letech opravuje s&nbsp;převodními poplatky a&nbsp;daňovými dopady.',
            'how': 'Před první akvizicí konzultujte <b>daňový režim s&nbsp;daňovým poradcem</b> (1–2 hodinová konzultace cca 3–5&nbsp;000 Kč). Klíčové otázky: paušální vs.&nbsp;skutečné výdaje, daňové odpisy, sociální/zdravotní pojištění, plánovaná velikost portfolia. Bez tohoto rozhodnutí ztrácíte ročně 10–30&nbsp;000 Kč na chybné daňové optimalizaci.',
        },
    ]

    for m in mistakes:
        story.append(PageBreak())
        story.append(Paragraph(f"CHYBA {m['n']}", eyebrow_red))
        story.append(Paragraph(m['h'], h1))
        story.append(Spacer(1, 4 * mm))
        story.append(Paragraph("Co se obvykle stane", h2))
        story.append(Paragraph(m['what'], body))
        story.append(Paragraph("Proč je to drahé", h2))
        story.append(Paragraph(m['why'], body))
        story.append(Paragraph("Co dělat místo toho", h2))
        story.append(Paragraph(m['how'], body))

    # ---- Závěr ----
    story.append(PageBreak())
    story.append(Paragraph("ZÁVĚR", eyebrow_red))
    story.append(Paragraph("Deset chyb shrnuto do tří vět", h1))
    story.append(Spacer(1, 4 * mm))
    story.append(Paragraph(
        "<b>1. Připravte se víc, než nakupujete.</b> Technik na prohlídce, "
        "advokát na smlouvě, daňový poradce na strukturu. Investice 5–15 tisíc "
        "Kč do přípravy vám ušetří desítky až stovky tisíc na nákupu.", body))
    story.append(Paragraph(
        "<b>2. Měřte ROE, ne ROI.</b> Páka mění ekonomiku nemovitosti zásadně. "
        "Bez ROE neumíte porovnat s&nbsp;jinými investicemi a&nbsp;neumíte poznat, "
        "kdy nakoupit a&nbsp;kdy ne.", body))
    story.append(Paragraph(
        "<b>3. Plánujte 10 let, ne 1 rok.</b> Lokalita, energetický štítek, "
        "standardní dispozice, daňový režim — vše rozhoduje o&nbsp;tom, jak se "
        "vám portfolio bude škálovat. První byt rozhoduje o&nbsp;tom, jestli "
        "portfolio vůbec vznikne.", body))
    story.append(Spacer(1, 10 * mm))

    # Quote-style highlighted box
    story.append(Paragraph(
        "&bdquo;Většina chyb se nestane proto, že byste neměli informace. "
        "Stane se proto, že chcete být s&nbsp;první investicí rychle hotovi. "
        "Trvalá investiční strategie začíná tím, že přijmete: první byt "
        "rozhoduje o&nbsp;dalších deseti.&ldquo;",
        quote))
    story.append(Spacer(1, 6 * mm))

    # CTA page
    story.append(PageBreak())
    story.append(Paragraph("CO DÁL", eyebrow_red))
    story.append(Paragraph("Jak postupovat odsud", h1))
    story.append(Spacer(1, 4 * mm))
    story.append(Paragraph(
        "Pokud chcete projít s&nbsp;námi vaše konkrétní parametry "
        "(kapitál, příjem, cíle, lokalita), pomůžeme:", body))
    story.append(Spacer(1, 4 * mm))
    story.append(Paragraph(
        "<b>Nezávazná konzultace.</b> 30 minut zdarma. Spočítáme dostupnost "
        "podle aktuálních pravidel ČNB (LTV&nbsp;70&nbsp;%, DTI&nbsp;7), "
        "doporučíme typ nemovitosti a&nbsp;časový plán.",
        bullet, bulletText='›'))
    story.append(Paragraph(
        "<b>Případové studie.</b> Tři reálná portfolia s&nbsp;konkrétními čísly: "
        "ROE 22&nbsp;% na 12-nemovitostním portfoliu, konzervativní strategie "
        "(15&nbsp;%), cash-flow strategie (23&nbsp;%) v&nbsp;Severních Čechách. "
        "investczech.cz/case-studies.html",
        bullet, bulletText='›'))
    story.append(Paragraph(
        "<b>Kalkulačka ROE.</b> Interaktivní výpočet pro vaše parametry. "
        "investczech.cz/calculator.html",
        bullet, bulletText='›'))
    story.append(Paragraph(
        "<b>Blog.</b> Hloubkové články o&nbsp;trhu, hypotékách, daních. "
        "Pro investory, kteří se chtějí učit po cestě. "
        "investczech.cz/blog/",
        bullet, bulletText='›'))
    story.append(Spacer(1, 12 * mm))

    # Kontakt blok (s pozadím — uděláme přes Table or Paragraph s borderem)
    contact_style = ParagraphStyle('Contact', fontName='Helvetica-Bold',
                                   fontSize=12, leading=18,
                                   textColor=INVEST_BLUE,
                                   alignment=TA_CENTER,
                                   spaceAfter=2 * mm)
    contact_sub = ParagraphStyle('ContactSub', fontName='Helvetica',
                                  fontSize=10, leading=14,
                                  textColor=INVEST_GRAY_LIGHT,
                                  alignment=TA_CENTER,
                                  spaceAfter=2 * mm)

    story.append(Paragraph("Kontakt", contact_style))
    story.append(Paragraph("investczech.cz/#kontakt", contact_sub))
    story.append(Paragraph("PTF reality, s.r.o. · IČO: 06684394", contact_sub))
    story.append(Paragraph("Plzeň · Praha · klienti po celé ČR", contact_sub))

    story.append(Spacer(1, 14 * mm))
    story.append(Paragraph(
        "Tento dokument je obecný průvodce. Není individuální investiční "
        "doporučení. Konkrétní rozhodnutí o&nbsp;investici by mělo být "
        "podloženo individuální analýzou vaší situace.",
        small_grey))

    doc.build(story)
    print(f"OK → {OUTPUT.relative_to(ROOT)} ({OUTPUT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    build()
