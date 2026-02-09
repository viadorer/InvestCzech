// Překlady textů pro různé jazyky
const translations = {
  'cs': {
    'nav_home': 'Domov',
    'nav_about': 'O nás',
    'nav_cesta': 'Vaše cesta',
    'nav_offmarket': 'Off-market trh',
    'nav_sprava': 'Správa a garance',
    'nav_akademie': 'Akademie',
    'nav_nastenka': 'Nástěnka',
    'nav_kontakt': 'Kontakt',
    'nav_cta': 'Chci investiční plán',
    'contact_title': 'Chci nezávazný investiční plán',
    'contact_subtitle': 'Zanechte nám kontakt a ozveme se vám do 24 hodin s konkrétním návrhem.',
    'footer_copyright': '&copy; 2026 InvestCzech. Všechna práva vyhrazena.'
  },
  'en': {
    'nav_home': 'Home',
    'nav_about': 'About Us',
    'nav_cesta': 'Your Journey',
    'nav_offmarket': 'Off-market',
    'nav_sprava': 'Management & Guarantees',
    'nav_akademie': 'Academy',
    'nav_nastenka': 'Dashboard',
    'nav_kontakt': 'Contact',
    'nav_cta': 'Get Investment Plan',
    'contact_title': 'Get a Non-binding Investment Plan',
    'contact_subtitle': 'Leave us your contact and we will get back to you within 24 hours with a specific proposal.',
    'footer_copyright': '&copy; 2026 InvestCzech. All rights reserved.'
  },
  'de': {
    'nav_home': 'Startseite',
    'nav_about': 'Über uns',
    'nav_cesta': 'Ihr Weg',
    'nav_offmarket': 'Off-Market',
    'nav_sprava': 'Verwaltung & Garantien',
    'nav_akademie': 'Akademie',
    'nav_nastenka': 'Dashboard',
    'nav_kontakt': 'Kontakt',
    'nav_cta': 'Investitionsplan anfordern',
    'contact_title': 'Unverbindlichen Investitionsplan anfordern',
    'contact_subtitle': 'Hinterlassen Sie uns Ihre Kontaktdaten und wir melden uns innerhalb von 24 Stunden mit einem konkreten Vorschlag.',
    'footer_copyright': '&copy; 2026 InvestCzech. Alle Rechte vorbehalten.'
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
      btn.classList.add('text-invest-blue', 'font-semibold');
      btn.classList.remove('text-gray-400');
    } else {
      btn.classList.remove('text-invest-blue', 'font-semibold');
      btn.classList.add('text-gray-400');
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
