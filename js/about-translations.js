// Překlady pro stránku O nás
const aboutTranslations = {
  'cs': {
    'nav_about': 'O nás',
    // Hero
    'about_eyebrow': 'Tvář projektu',
    'about_title': 'Stavíme nemovitostní portfolia,<br>která jsou postavená napevno.',
    'about_subtitle': 'InvestCzech vznikl v roce 2017 z vlastní investorské zkušenosti. Než jsme postavili platformu pro klienty, řešili jsme stejné věci pro své portfolio. Dnes obsluhujeme klienty napříč celým Českem — od první nemovitosti po portfolia v desítkách milionů.',
    'about_author': 'David Choc',
    'about_author_alt': 'David Choc',
    'about_author_role': 'Zakladatel · PTF reality, s.r.o.',
    // Náš příběh
    'story_eyebrow': 'Náš příběh',
    'story_title': 'Vznikli jsme z vlastní zkušenosti',
    'story_p1': 'InvestCzech vznikl v roce 2017 ze zkušenosti, kterou jsme udělali sami. Než jsme vybudovali platformu pro klienty, řešili jsme stejné věci pro vlastní portfolio: jak najít nemovitost mimo Sreality, jak skládat hypotéky tak, aby portfolio mohlo růst, jak nepřijít o spánek kvůli nájemníkovi v 2 ráno.',
    'story_p2': 'Z té zkušenosti vznikly tři produkty, na kterých dnes klienti staví:',
    'story_p3': 'Dnes obsluhujeme klienty napříč celým Českem — od první investice po multi-property portfolia. Centrály máme v Plzni a v Praze, klienty po celé republice.',
    // Pohled na trh
    'philosophy_eyebrow': 'Náš pohled na trh',
    'philosophy_title': 'Nepatříme mezi školitele. Stavíme dlouhé vztahy.',
    'philosophy_p1': 'Nepatříme mezi školitele, kteří slibují „double za tři roky". Nemovitost je dlouhodobé rozhodnutí, ne sportovní disciplína. Ne každá nemovitost je dobrá investice a ne každý okamžik je dobrý k nákupu.',
    'philosophy_p2': 'Než vám něco doporučíme, podíváme se na vaši finanční situaci, vaše cíle a vaši toleranci rizika. Pak teprve hledáme nemovitost. Měsíčně procházíme stovky nabídek z veřejné i neveřejné nabídky — většina neprojde naším procesem due diligence. Co nedoporučíme my, klient nekoupí.',
    'philosophy_quote': '„Stavíme dlouhé vztahy. Většina klientů, kteří s námi začali u prvního bytu, dnes vlastní 3 a více nemovitostí. Měříme se úspěchem za 5 a 10 let, ne týdnem po podpisu kupní smlouvy."',
    // Časová osa
    'timeline_eyebrow': 'Časová osa',
    'timeline_title': 'Devět let stavění nástrojů, ne marketingu',
    'timeline_subtitle': 'Co jsme za tu dobu postavili. Bez marketingových přibarvení.',
    'timeline_2017': '2017 · Vznik PTF reality',
    'timeline_2017_desc': 'Založili jsme PTF reality, s.r.o. v Plzni. Začínali jsme s vlastním portfoliem a nezávazným poradenstvím prvním klientům, kteří chtěli stejnou cestu projít.',
    'timeline_2020': '2020 · Rozšíření do Prahy + Vzorný nájemce',
    'timeline_2020_desc': 'Otevřeli jsme pražskou pobočku v Hloubětíně a uvedli službu Vzorný nájemce — garanci nájmu na účet do 15. dne v měsíci. Cílem bylo eliminovat strach z neplatičů, který bránil většině klientů investovat.',
    'timeline_2022': '2022 · Spuštění EstatePrivate.com',
    'timeline_2022_desc': 'Uzavřená off-market platforma, na které agregujeme nabídky z naší sítě i od partnerů. Eliminace inzerčních bitev na veřejných portálech a přístup k nemovitostem, které se na Sreality nikdy nedostanou.',
    'timeline_2024': '2024 · ChciBytMilionarem + ČeskoSobě',
    'timeline_2024_desc': 'Vzdělávací 5-modulový kurz pro začínající investory (ChciBytMilionarem.cz) a komunitní platforma kolem konceptu soukromého důchodu (ČeskoSobě.cz). Smyslem je oddělit edukaci od poradenství a dát klientům prostor učit se vlastním tempem.',
    'timeline_2025': '2025 · Dashboard HouseMaster',
    'timeline_2025_desc': 'Spuštění vlastního proprietárního dashboardu — tržní cena, úvěry, výnos, predikce, plánované revize a celá dokumentace portfolia na jedné obrazovce. Strategický nástroj pro řízení bohatství, ne jen administrativa.',
    'timeline_2026': '2026 · Adaptace na nová pravidla ČNB',
    'timeline_2026_desc': 'Po zpřísnění LTV na 70 % a DTI na 7 od dubna 2026 jsme přepracovali akviziční a financovací procesy. Klientům s předschválenými hypotékami pomáháme stihnout nemovitost dřív, než platnost schválení vyprší.',
    // Čísla v reálu
    'numbers_eyebrow': 'Čísla v reálu',
    'numbers_title': 'Co stojí za našimi tvrzeními',
    'numbers_subtitle': 'Stav portfolia, klientů a regionů, ve kterých dnes operujeme.',
    'number_acquisitions': 'akvizic pro klienty',
    'number_volume': 'objem zprostředkovaných transakcí (Kč)',
    'number_occupancy': 'průměrná obsazenost spravovaných bytů',
    'number_regions': 'regionální strategie (Praha + Plzeň + Severní Čechy)',
    'numbers_disclaimer': 'Údaje k 5/2026. Jednotlivá portfolia se liší — konkrétní čísla u vaší investice spočítáme v rámci úvodní konzultace.',
    // Tým a partneři
    'team_eyebrow': 'Tým a partneři',
    'team_title': 'S kým spolupracujete',
    'team_subtitle': 'Klíčové role v týmu plus externí partneři, kteří k vaší investici přispívají.',
    'team_david_name': 'David Choc',
    'team_david_role': 'Zakladatel · Strategie',
    'team_david_bio': 'Vede strategii, akvizice a klíčové klientské vztahy. Třináct let zkušeností v realitním investování — vlastní portfolio plus 150+ akvizic pro klienty.',
    'team_acquisitions_name': 'Tým akvizic',
    'team_acquisitions_role': 'Off-market & due diligence',
    'team_acquisitions_bio': 'Vyhledávají nabídky mimo veřejné portály, provádějí technickou i právní due diligence, vyjednávají podmínky a zařizují převod. Pokrytí: Praha, Plzeň, Beroun, Severní Čechy.',
    'team_property_name': 'Tým správy',
    'team_property_role': 'Vzorný nájemce & HouseMaster',
    'team_property_bio': 'Prověřování nájemníků, smluvní ochrana, výběr nájmu, technická správa a provoz dashboardu HouseMaster. Zázemí pro klidný spánek majitele.',
    'partners_title': 'Externí partneři, se kterými stavíme',
    'partner_banks': 'Hypoteční banky',
    'partner_banks_desc': 'Skládání úvěrů podle nových pravidel ČNB',
    'partner_lawyers': 'Advokátní kanceláře',
    'partner_lawyers_desc': 'Kontrola titulů, smluv a převodů',
    'partner_tax': 'Daňoví poradci',
    'partner_tax_desc': 'Strukturování investic (s.r.o., fond, nadace)',
    'partner_technicians': 'Technici a inspektoři',
    'partner_technicians_desc': 'Stavebně-technické prohlídky a revize',
    // CTA
    'cta_title': 'Chcete vidět, jak by to vypadalo u vás?',
    'cta_subtitle': 'Domluvte si nezávaznou konzultaci. Spočítáme dostupnost, naskicujeme strategii a ukážeme reálné nabídky, které se do vašich parametrů vejdou.',
    'cta_button': 'Chci nezávazný investiční plán',
    'cta_button_secondary': 'Prohlédnout si blog'
  },
  'en': {
    'nav_about': 'About Us',
    'about_eyebrow': 'The face behind the project',
    'about_title': 'We build real estate portfolios<br>that stand on solid ground.',
    'about_subtitle': 'InvestCzech was founded in 2017 from our own investor experience. Before we built the platform for clients, we solved the same things for our own portfolio. Today we serve clients across the Czech Republic — from a first property to multi-million portfolios.',
    'about_author': 'David Choc',
    'about_author_alt': 'David Choc',
    'about_author_role': 'Founder · PTF reality, s.r.o.',
    'story_eyebrow': 'Our story',
    'story_title': 'We grew from our own experience',
    'story_p1': 'InvestCzech was founded in 2017 from an experience we lived first-hand. Before building the platform for clients, we solved the same things for our own portfolio: finding properties off-market, structuring mortgages so portfolios could grow, not losing sleep over a tenant calling at 2 AM.',
    'story_p2': 'Three products grew out of that experience and clients build on them today:',
    'story_p3': 'Today we serve clients across the Czech Republic — from a first investment to multi-property portfolios. Our offices are in Plzeň and Prague, but we work with clients nationwide.',
    'philosophy_eyebrow': 'Our view of the market',
    'philosophy_title': "We're not trainers. We build long relationships.",
    'philosophy_p1': "We don't belong with the trainers who promise „double in three years". Real estate is a long-term decision, not a sporting discipline. Not every property is a good investment and not every moment is right to buy.",
    'philosophy_p2': "Before we recommend anything, we look at your financial situation, your goals and your risk tolerance. Only then do we search for a property. Every month we go through hundreds of offers from the public and private market — most don't pass our due diligence. What we don't recommend, the client doesn't buy.",
    'philosophy_quote': '„We build long relationships. Most clients who started with their first flat now own 3 or more properties. We measure ourselves by success at 5 and 10 years, not the week after signing."',
    'timeline_eyebrow': 'Timeline',
    'timeline_title': 'Nine years of building tools, not marketing',
    'timeline_subtitle': "What we've built. Without the marketing gloss.",
    'timeline_2017': '2017 · Founding of PTF reality',
    'timeline_2017_desc': 'We founded PTF reality, s.r.o. in Plzeň. We started with our own portfolio and informal advice to the first clients who wanted to follow the same path.',
    'timeline_2020': '2020 · Prague expansion + Vzorný nájemce',
    'timeline_2020_desc': 'We opened a Prague branch in Hloubětín and launched Vzorný nájemce — a guarantee that rent lands on the account by the 15th of every month. The goal was to neutralise the fear of non-paying tenants that kept most clients from investing.',
    'timeline_2022': '2022 · Launch of EstatePrivate.com',
    'timeline_2022_desc': "A closed off-market platform aggregating offers from our network and partners. It removes the auction-style competition of public portals and gives access to properties that never reach Sreality.",
    'timeline_2024': '2024 · ChciBytMilionarem + ČeskoSobě',
    'timeline_2024_desc': 'A 5-module educational course for beginning investors (ChciBytMilionarem.cz) and a community platform around the concept of private retirement (ČeskoSobě.cz). The intent is to separate education from advisory and let clients learn at their own pace.',
    'timeline_2025': '2025 · HouseMaster dashboard',
    'timeline_2025_desc': "Launch of our proprietary dashboard — market price, loans, yield, projections, scheduled inspections and the portfolio's full documentation on a single screen. A strategic tool for managing wealth, not just administration.",
    'timeline_2026': '2026 · Adapting to new CNB rules',
    'timeline_2026_desc': "After the LTV cap dropped to 70 % and DTI to 7 from April 2026, we reworked our acquisition and financing processes. We help clients with pre-approved mortgages secure a property before their approval expires.",
    'numbers_eyebrow': 'Real numbers',
    'numbers_title': 'What stands behind our claims',
    'numbers_subtitle': 'State of the portfolio, clients and regions we operate in today.',
    'number_acquisitions': 'client acquisitions',
    'number_volume': 'volume of transactions mediated (CZK)',
    'number_occupancy': 'average occupancy of managed flats',
    'number_regions': 'regional strategies (Prague + Plzeň + North Bohemia)',
    'numbers_disclaimer': 'Data as of May 2026. Individual portfolios differ — we calculate specific figures for your investment during the initial consultation.',
    'team_eyebrow': 'Team & partners',
    'team_title': 'Who you work with',
    'team_subtitle': 'Key roles in the team plus the external partners who contribute to your investment.',
    'team_david_name': 'David Choc',
    'team_david_role': 'Founder · Strategy',
    'team_david_bio': 'Leads strategy, acquisitions and key client relationships. Thirteen years of experience in real estate investing — own portfolio plus 150+ acquisitions for clients.',
    'team_acquisitions_name': 'Acquisitions team',
    'team_acquisitions_role': 'Off-market & due diligence',
    'team_acquisitions_bio': 'Source offers outside public portals, run technical and legal due diligence, negotiate terms and handle the transfer. Coverage: Prague, Plzeň, Beroun, North Bohemia.',
    'team_property_name': 'Property management',
    'team_property_role': 'Vzorný nájemce & HouseMaster',
    'team_property_bio': 'Tenant screening, contractual protection, rent collection, technical management and the HouseMaster dashboard. The infrastructure for a calm owner.',
    'partners_title': 'External partners we work with',
    'partner_banks': 'Mortgage banks',
    'partner_banks_desc': 'Structuring loans under the new CNB rules',
    'partner_lawyers': 'Law firms',
    'partner_lawyers_desc': 'Title, contract and transfer review',
    'partner_tax': 'Tax advisors',
    'partner_tax_desc': 'Structuring investments (s.r.o., fund, foundation)',
    'partner_technicians': 'Technicians & inspectors',
    'partner_technicians_desc': 'Structural inspections and revisions',
    'cta_title': 'Want to see how this would look for you?',
    'cta_subtitle': 'Book a non-binding consultation. We calculate affordability, sketch a strategy and show real offers that fit your parameters.',
    'cta_button': 'I want a non-binding investment plan',
    'cta_button_secondary': 'Browse the blog'
  },
  'de': {
    'nav_about': 'Über uns',
    'about_eyebrow': 'Das Gesicht des Projekts',
    'about_title': 'Wir bauen Immobilienportfolios,<br>die auf festem Boden stehen.',
    'about_subtitle': 'InvestCzech entstand 2017 aus unserer eigenen Investorenerfahrung. Bevor wir die Plattform für Kunden bauten, lösten wir die gleichen Themen für unser eigenes Portfolio. Heute betreuen wir Kunden in der gesamten Tschechischen Republik — von der ersten Immobilie bis zu Portfolios in zweistelliger Millionenhöhe.',
    'about_author': 'David Choc',
    'about_author_alt': 'David Choc',
    'about_author_role': 'Gründer · PTF reality, s.r.o.',
    'story_eyebrow': 'Unsere Geschichte',
    'story_title': 'Wir sind aus eigener Erfahrung gewachsen',
    'story_p1': 'InvestCzech entstand 2017 aus einer Erfahrung, die wir selbst gemacht haben. Bevor wir die Plattform für Kunden bauten, lösten wir die gleichen Dinge für unser eigenes Portfolio: Immobilien außerhalb von Sreality finden, Hypotheken so strukturieren, dass Portfolios wachsen können, nicht wegen eines Mieters um 2 Uhr nachts wachzubleiben.',
    'story_p2': 'Aus dieser Erfahrung entstanden drei Produkte, auf denen Kunden heute aufbauen:',
    'story_p3': 'Heute betreuen wir Kunden in der gesamten Tschechischen Republik — von der ersten Investition bis zu Multi-Property-Portfolios. Unsere Büros sind in Plzeň und Prag, Kunden landesweit.',
    'philosophy_eyebrow': 'Unser Blick auf den Markt',
    'philosophy_title': 'Wir sind keine Trainer. Wir bauen lange Beziehungen.',
    'philosophy_p1': 'Wir gehören nicht zu den Trainern, die „Verdoppelung in drei Jahren" versprechen. Immobilien sind eine langfristige Entscheidung, keine Sportdisziplin. Nicht jede Immobilie ist eine gute Investition und nicht jeder Moment ist zum Kauf richtig.',
    'philosophy_p2': 'Bevor wir Ihnen etwas empfehlen, schauen wir uns Ihre finanzielle Situation, Ihre Ziele und Ihre Risikotoleranz an. Erst dann suchen wir nach einer Immobilie. Monatlich gehen wir durch hunderte Angebote aus dem öffentlichen und nichtöffentlichen Markt — die meisten bestehen unsere Due Diligence nicht. Was wir nicht empfehlen, kauft der Kunde nicht.',
    'philosophy_quote': '„Wir bauen lange Beziehungen. Die meisten Kunden, die mit der ersten Wohnung begannen, besitzen heute 3 oder mehr Immobilien. Wir messen uns am Erfolg in 5 und 10 Jahren, nicht in der Woche nach Vertragsunterzeichnung."',
    'timeline_eyebrow': 'Zeitachse',
    'timeline_title': 'Neun Jahre Aufbau von Werkzeugen, nicht von Marketing',
    'timeline_subtitle': 'Was wir gebaut haben. Ohne Marketingglanz.',
    'timeline_2017': '2017 · Gründung von PTF reality',
    'timeline_2017_desc': 'Wir gründeten PTF reality, s.r.o. in Plzeň. Wir begannen mit unserem eigenen Portfolio und unverbindlicher Beratung für die ersten Kunden, die den gleichen Weg gehen wollten.',
    'timeline_2020': '2020 · Erweiterung nach Prag + Vzorný nájemce',
    'timeline_2020_desc': 'Wir eröffneten eine Niederlassung in Prag-Hloubětín und führten den Service Vzorný nájemce ein — eine Garantie, dass die Miete bis zum 15. des Monats auf dem Konto landet. Ziel war es, die Angst vor zahlungsunwilligen Mietern zu neutralisieren.',
    'timeline_2022': '2022 · Start von EstatePrivate.com',
    'timeline_2022_desc': 'Geschlossene Off-Market-Plattform, die Angebote aus unserem Netzwerk und von Partnern aggregiert. Beseitigung des Wettbewerbs auf öffentlichen Portalen und Zugang zu Immobilien, die nie auf Sreality landen.',
    'timeline_2024': '2024 · ChciBytMilionarem + ČeskoSobě',
    'timeline_2024_desc': 'Ein 5-Modul-Bildungskurs für Anfängerinvestoren (ChciBytMilionarem.cz) und eine Community-Plattform rund um das Konzept der privaten Rente (ČeskoSobě.cz). Bildung und Beratung werden bewusst getrennt.',
    'timeline_2025': '2025 · HouseMaster Dashboard',
    'timeline_2025_desc': 'Start unseres eigenen Dashboards — Marktpreis, Darlehen, Rendite, Prognosen, geplante Inspektionen und die komplette Portfoliodokumentation auf einem Bildschirm. Ein strategisches Instrument für Vermögensverwaltung.',
    'timeline_2026': '2026 · Anpassung an neue ČNB-Regeln',
    'timeline_2026_desc': 'Nach der Verschärfung von LTV auf 70 % und DTI auf 7 ab April 2026 haben wir Akquisitions- und Finanzierungsprozesse überarbeitet. Kunden mit vorab genehmigten Hypotheken helfen wir, eine Immobilie zu sichern, bevor die Gültigkeit abläuft.',
    'numbers_eyebrow': 'Echte Zahlen',
    'numbers_title': 'Was hinter unseren Aussagen steht',
    'numbers_subtitle': 'Stand des Portfolios, der Kunden und der Regionen, in denen wir tätig sind.',
    'number_acquisitions': 'Akquisitionen für Kunden',
    'number_volume': 'Volumen der vermittelten Transaktionen (CZK)',
    'number_occupancy': 'durchschnittliche Belegung verwalteter Wohnungen',
    'number_regions': 'regionale Strategien (Prag + Plzeň + Nordböhmen)',
    'numbers_disclaimer': 'Daten zum Stand 5/2026. Einzelne Portfolios unterscheiden sich — konkrete Zahlen für Ihre Investition berechnen wir im Rahmen des Erstgesprächs.',
    'team_eyebrow': 'Team & Partner',
    'team_title': 'Mit wem Sie zusammenarbeiten',
    'team_subtitle': 'Schlüsselrollen im Team plus externe Partner, die zu Ihrer Investition beitragen.',
    'team_david_name': 'David Choc',
    'team_david_role': 'Gründer · Strategie',
    'team_david_bio': 'Leitet Strategie, Akquisitionen und wichtige Kundenbeziehungen. Dreizehn Jahre Erfahrung in Immobilieninvestitionen — eigenes Portfolio plus 150+ Akquisitionen für Kunden.',
    'team_acquisitions_name': 'Akquisitionsteam',
    'team_acquisitions_role': 'Off-Market & Due Diligence',
    'team_acquisitions_bio': 'Beschaffen Angebote außerhalb öffentlicher Portale, führen technische und rechtliche Due Diligence durch, verhandeln Bedingungen und wickeln die Übertragung ab. Abdeckung: Prag, Plzeň, Beroun, Nordböhmen.',
    'team_property_name': 'Verwaltungsteam',
    'team_property_role': 'Vzorný nájemce & HouseMaster',
    'team_property_bio': 'Mieterprüfung, vertraglicher Schutz, Mieteinzug, technische Verwaltung und Betrieb des HouseMaster-Dashboards. Infrastruktur für einen ruhigen Eigentümer.',
    'partners_title': 'Externe Partner, mit denen wir arbeiten',
    'partner_banks': 'Hypothekenbanken',
    'partner_banks_desc': 'Strukturierung von Krediten nach den neuen ČNB-Regeln',
    'partner_lawyers': 'Anwaltskanzleien',
    'partner_lawyers_desc': 'Prüfung von Titeln, Verträgen und Übertragungen',
    'partner_tax': 'Steuerberater',
    'partner_tax_desc': 'Strukturierung von Investitionen (s.r.o., Fonds, Stiftung)',
    'partner_technicians': 'Techniker & Inspektoren',
    'partner_technicians_desc': 'Statische und technische Inspektionen',
    'cta_title': 'Wollen Sie sehen, wie das bei Ihnen aussehen würde?',
    'cta_subtitle': 'Vereinbaren Sie eine unverbindliche Beratung. Wir berechnen die Erschwinglichkeit, skizzieren eine Strategie und zeigen reale Angebote, die zu Ihren Parametern passen.',
    'cta_button': 'Ich möchte einen unverbindlichen Investitionsplan',
    'cta_button_secondary': 'Den Blog durchsuchen'
  }
};

// Rozšíření základní funkce setLanguage pro podporu stránky O nás
document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'cs';
  applyAboutTranslations(savedLanguage);
});

function applyAboutTranslations(language) {
  if (!aboutTranslations[language]) return;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (aboutTranslations[language][key] !== undefined) {
      element.innerHTML = aboutTranslations[language][key];
    }
    if (element.hasAttribute('data-i18n-alt')) {
      const altKey = element.getAttribute('data-i18n-alt');
      if (aboutTranslations[language][altKey] !== undefined) {
        element.alt = aboutTranslations[language][altKey];
      }
    }
  });
}

// Přepsání funkce setLanguage, aby zahrnovala překlady pro stránku O nás
const originalSetLanguage = window.setLanguage;
window.setLanguage = function(language) {
  if (typeof originalSetLanguage === 'function') {
    originalSetLanguage(language);
  }
  applyAboutTranslations(language);
};
