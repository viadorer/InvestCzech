// Překlady textů pro různé jazyky
const translations = {
  'cs': {
    'nav_home': 'Domů',
    'nav_about': 'O nás',
    'nav_consultation': 'Nezávazná konzultace',
    'hero_title': 'Vybudujte si stabilní příjem z nemovitostí — ještě letos',
    'hero_subtitle': 'Zajistěte si finanční jistotu, zatímco ostatní nechávají peníze ztrácet hodnotu. <span class="text-invest-red font-semibold">Získejte ověřený postup</span>, jak investovat v Česku i bez obrovského kapitálu.',
    'spots_left': 'Tento měsíc zbývá pouze 9 volných míst',
    'cta_button': 'Chci bezplatnou konzultaci',
    'contact_title': 'Kontaktujte nás',
    'contact_subtitle': 'Zanechte nám zprávu a my se vám ozveme do 24 hodin',
    'footer_operator': 'Provozovatel portálu: PTF reality, s.r.o.',
    'footer_address_plzen_title': 'Plzeň:',
    'footer_address_praha_title': 'Praha:',
    'footer_legal_title': 'Právní informace a disclaimer',
    'footer_gdpr': 'Ochrana osobních údajů (GDPR)',
    'footer_cookies': 'Cookies',
    'footer_terms': 'Obchodní podmínky',
    'footer_copyright': '&copy; 2024 InvestCzech. Všechna práva vyhrazena.'
  },
  'en': {
    'nav_home': 'Home',
    'nav_about': 'About Us',
    'nav_consultation': 'Free Consultation',
    'hero_title': 'Build a stable income from real estate — this year',
    'hero_subtitle': 'Secure your financial future while others let their money lose value. <span class="text-invest-red font-semibold">Get a proven method</span> for investing in the Czech Republic even without huge capital.',
    'spots_left': 'Only 9 spots left this month',
    'cta_button': 'I want a free consultation',
    'contact_title': 'Contact Us',
    'contact_subtitle': 'Leave us a message and we will get back to you within 24 hours',
    'footer_operator': 'Portal operator: PTF reality, s.r.o.',
    'footer_address_plzen_title': 'Pilsen:',
    'footer_address_praha_title': 'Prague:',
    'footer_legal_title': 'Legal information and disclaimer',
    'footer_gdpr': 'Personal data protection (GDPR)',
    'footer_cookies': 'Cookies',
    'footer_terms': 'Terms and conditions',
    'footer_copyright': '&copy; 2024 InvestCzech. All rights reserved.'
  },
  'de': {
    'nav_home': 'Startseite',
    'nav_about': 'Über uns',
    'nav_consultation': 'Kostenlose Beratung',
    'hero_title': 'Bauen Sie ein stabiles Einkommen aus Immobilien auf — noch in diesem Jahr',
    'hero_subtitle': 'Sichern Sie Ihre finanzielle Zukunft, während andere ihr Geld an Wert verlieren lassen. <span class="text-invest-red font-semibold">Erhalten Sie eine bewährte Methode</span> für Investitionen in der Tschechischen Republik auch ohne großes Kapital.',
    'spots_left': 'Nur noch 9 Plätze in diesem Monat',
    'cta_button': 'Ich möchte eine kostenlose Beratung',
    'contact_title': 'Kontaktieren Sie uns',
    'contact_subtitle': 'Hinterlassen Sie uns eine Nachricht und wir melden uns innerhalb von 24 Stunden bei Ihnen',
    'footer_operator': 'Portalbetreiber: PTF reality, s.r.o.',
    'footer_address_plzen_title': 'Pilsen:',
    'footer_address_praha_title': 'Prag:',
    'footer_legal_title': 'Rechtliche Informationen und Haftungsausschluss',
    'footer_gdpr': 'Datenschutz (DSGVO)',
    'footer_cookies': 'Cookies',
    'footer_terms': 'Geschäftsbedingungen',
    'footer_copyright': '&copy; 2024 InvestCzech. Alle Rechte vorbehalten.'
  },
  'fr': {
    'nav_home': 'Accueil',
    'nav_about': 'À propos',
    'nav_consultation': 'Consultation gratuite',
    'hero_title': 'Construisez un revenu immobilier stable — cette année',
    'hero_subtitle': 'Assurez votre avenir financier pendant que d\'autres laissent leur argent perdre de la valeur. <span class="text-invest-red font-semibold">Obtenez une méthode éprouvée</span> pour investir en République tchèque même sans capital important.',
    'spots_left': 'Seulement 9 places disponibles ce mois-ci',
    'cta_button': 'Je souhaite une consultation gratuite',
    'contact_title': 'Contactez-nous',
    'contact_subtitle': 'Laissez-nous un message et nous vous répondrons dans les 24 heures',
    'footer_operator': 'Opérateur du portail: PTF reality, s.r.o.',
    'footer_address_plzen_title': 'Pilsen:',
    'footer_address_praha_title': 'Prague:',
    'footer_legal_title': 'Informations juridiques et disclaimer',
    'footer_gdpr': 'Protection des données personnelles (RGPD)',
    'footer_cookies': 'Cookies',
    'footer_terms': 'Conditions générales',
    'footer_copyright': '&copy; 2024 InvestCzech. Tous droits réservés.'
  }
};

// Funkce pro nastavení jazyka
function setLanguage(language) {
  // Uložení vybraného jazyka do local storage
  localStorage.setItem('selectedLanguage', language);
  
  // Nastavení jazyka v HTML elementu
  document.documentElement.lang = language;
  
  // Zvýrazní aktivní jazyk
  document.querySelectorAll('.language-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === language) {
      btn.classList.add('text-invest-blue', 'font-medium');
      btn.classList.remove('text-gray-500');
    } else {
      btn.classList.remove('text-invest-blue', 'font-medium');
      btn.classList.add('text-gray-500');
    }
  });
  
  // Nahrazení všech textů
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[language] && translations[language][key]) {
      element.innerHTML = translations[language][key];
    }
  });
}

// Načtení uloženého jazyka při načtení stránky
document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'cs';
  setLanguage(savedLanguage);
});
