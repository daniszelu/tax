export type Lang = 'pl' | 'en'

const translations = {
  pl: {
    nav: {
      services: 'Usługi',
      about: 'O nas',
      process: 'Jak działamy',
      contact: 'Kontakt',
      cta: 'Umów konsultację',
    },
    hero: {
      badge: 'Zaufane biuro rachunkowe od 1998 roku',
      title: 'Profesjonalna księgowość',
      titleAccent: 'Dla Twojego biznesu',
      subtitle:
        'Kompleksowa obsługa księgowa dla firm i osób fizycznych. Zajmujemy się Twoimi finansami, abyś mógł skupić się na tym, co robisz najlepiej.',
      ctaPrimary: 'Umów bezpłatną konsultację',
      ctaSecondary: 'Poznaj nasze usługi',
      stat1Number: '28+',
      stat1Label: 'Lat doświadczenia',
      stat2Number: '4 800+',
      stat2Label: 'Obsługiwanych klientów',
      stat3Number: '120 mln+',
      stat3Label: 'Zaoszczędzonych podatków',
    },
    services: {
      label: 'Nasze usługi',
      title: 'Kompleksowa obsługa rachunkowa',
      subtitle:
        'Od pełnej księgowości po doradztwo podatkowe — zapewniamy profesjonalne wsparcie na każdym etapie.',
      learnMore: 'Dowiedz się więcej →',
      items: [
        {
          icon: '📒',
          title: 'Prowadzenie ksiąg rachunkowych',
          desc: 'Rzetelne i terminowe prowadzenie pełnej księgowości dla firm każdej wielkości, zgodnie z obowiązującymi przepisami.',
        },
        {
          icon: '📋',
          title: 'Rozliczenia podatkowe',
          desc: 'Kompleksowe rozliczenia PIT, CIT i VAT. Optymalizacja podatkowa w pełni zgodna z prawem polskim i unijnym.',
        },
        {
          icon: '👥',
          title: 'Kadry i płace',
          desc: 'Pełna obsługa kadrowo-płacowa: umowy o pracę, listy płac, deklaracje ZUS oraz PIT-11 dla Twoich pracowników.',
        },
        {
          icon: '📊',
          title: 'Doradztwo podatkowe',
          desc: 'Strategiczne doradztwo dopasowane do specyfiki Twojej działalności — minimalizujemy zobowiązania podatkowe zgodnie z prawem.',
        },
        {
          icon: '🏢',
          title: 'Obsługa spółek',
          desc: 'Pełna obsługa rachunkowa spółek z o.o., akcyjnych i osobowych. Sprawozdania finansowe, KRS i wiele więcej.',
        },
        {
          icon: '🚀',
          title: 'Zakładanie działalności',
          desc: 'Pomoc przy rejestracji firmy w CEIDG lub KRS, wybór formy prawnej i opodatkowania oraz pierwsze kroki w biznesie.',
        },
      ],
    },
    about: {
      label: 'Dlaczego my',
      titleLine1: 'Dekady zaufania,',
      titleLine2: 'dostarczone z precyzją',
      text: 'W Tax&Ledger łączymy głęboką wiedzę techniczną z podejściem skoncentrowanym na kliencie. Nasz zespół certyfikowanych specjalistów śledzi zmieniające się przepisy podatkowe i rachunkowe, aby dostarczać strategie realnie wpływające na Twoją przyszłość finansową.',
      features: [
        'Certyfikowani księgowi z ponad 10-letnim średnim doświadczeniem',
        'Aktywne planowanie podatkowe przez cały rok, nie tylko w sezonie rozliczeń',
        'Przejrzyste, ryczałtowe ceny bez ukrytych opłat',
        'Reprezentacja przed urzędami skarbowymi i ZUS',
      ],
      cta: 'Umów konsultację',
      cardBadge: 'Zeznanie podatkowe złożone',
      cardAmount: '14 280 zł',
      cardLabel: 'Całkowity zwrot podatku',
      cardMeta: 'Oszczędności vs. samodzielne rozliczenie: +4 200 zł',
      cardSecondaryTitle: 'Najwyżej oceniane',
      cardSecondarySubtitle: 'Biuro rachunkowe 2025',
    },
    process: {
      label: 'Jak działamy',
      title: 'Prosto. Przejrzyście. Skutecznie.',
      steps: [
        {
          title: 'Bezpłatna konsultacja',
          desc: 'Bezpłatna 30-minutowa rozmowa, podczas której poznajemy Twoją firmę, jej potrzeby i wyzwania finansowe.',
        },
        {
          title: 'Analiza dokumentów',
          desc: 'Bezpiecznie przekaż nam dokumenty przez zaszyfrowany portal. Nasz zespół przeprowadza szczegółową analizę.',
        },
        {
          title: 'Prowadzenie ksiąg',
          desc: 'Przejmujemy pełną obsługę księgową, przygotowujemy deklaracje i informujemy Cię o każdej ważnej kwestii.',
        },
        {
          title: 'Wsparcie całoroczne',
          desc: 'Stały dostęp do dedykowanego księgowego przez cały rok — gotowego odpowiedzieć na Twoje pytania.',
        },
      ],
    },
    testimonials: {
      label: 'Opinie klientów',
      title: 'Co mówią nasi klienci',
      items: [
        {
          text: 'Tax&Ledger zaoszczędziło naszej firmie ponad 80 000 zł dzięki restrukturyzacji podatkowej. Ich wiedza jest naprawdę bezcenna.',
          name: 'Robert Kowalski',
          role: 'Prezes, Apex Ventures',
          initials: 'RK',
        },
        {
          text: 'Bałam się kontroli skarbowej, ale zespół zajął się wszystkim profesjonalnie. Sprawa została zamknięta bez żadnych konsekwencji.',
          name: 'Anna Wiśniewska',
          role: 'Freelancer',
          initials: 'AW',
        },
        {
          text: 'Nareszcie księgowi, którzy tłumaczą wszystko zrozumiale. Proaktywni, dostępni i naprawdę dbają o nasz biznes.',
          name: 'Marek i Karolina Nowak',
          role: 'Klienci prywatni',
          initials: 'MN',
        },
      ],
    },
    cta: {
      titleLine1: 'Gotowy na lepszą',
      titleLine2: 'księgowość?',
      subtitle:
        'Umów bezpłatną 30-minutową konsultację z jednym z naszych starszych doradców. Żadnych zobowiązań — tylko fachowa porada.',
      namePlaceholder: 'Imię i nazwisko',
      emailPlaceholder: 'Adres e-mail',
      phonePlaceholder: 'Numer telefonu (opcjonalnie)',
      submitBtn: 'Umów bezpłatną konsultację',
      alertMsg: (name: string) =>
        `Dziękujemy, ${name}! Skontaktujemy się z Tobą wkrótce.`,
    },
    footer: {
      tagline:
        'Profesjonalne usługi rachunkowe oparte na zaufaniu, wiedzy i wynikach.',
      servicesTitle: 'Usługi',
      serviceItems: [
        'Księgowość pełna',
        'Rozliczenia podatkowe',
        'Kadry i płace',
        'Doradztwo podatkowe',
      ],
      companyTitle: 'Firma',
      companyItems: ['O nas', 'Jak działamy', 'Kontakt'],
      officeTitle: 'Biuro',
      copyright: '© 2026 Tax&Ledger. Wszelkie prawa zastrzeżone.',
      legal: 'Polityka prywatności · Regulamin',
    },
  },

  en: {
    nav: {
      services: 'Services',
      about: 'About',
      process: 'Process',
      contact: 'Contact',
      cta: 'Book Consultation',
    },
    hero: {
      badge: 'Trusted Accounting Firm Since 1998',
      title: 'Professional Accounting',
      titleAccent: 'Built for Your Business',
      subtitle:
        'Comprehensive accounting services for businesses and individuals. We handle your finances so you can focus on what you do best.',
      ctaPrimary: 'Get Free Consultation',
      ctaSecondary: 'Explore Services',
      stat1Number: '28+',
      stat1Label: 'Years of Experience',
      stat2Number: '4,800+',
      stat2Label: 'Clients Served',
      stat3Number: '€120M+',
      stat3Label: 'Tax Savings Delivered',
    },
    services: {
      label: 'Our Services',
      title: 'Comprehensive Accounting Solutions',
      subtitle:
        'From full bookkeeping to tax advisory — professional support at every step of your journey.',
      learnMore: 'Learn more →',
      items: [
        {
          icon: '📒',
          title: 'Bookkeeping',
          desc: 'Accurate and timely full-scope bookkeeping for businesses of all sizes, fully compliant with current regulations.',
        },
        {
          icon: '📋',
          title: 'Tax Returns',
          desc: 'Comprehensive VAT, corporate and personal tax filings. Legal tax optimisation tailored to your situation.',
        },
        {
          icon: '👥',
          title: 'Payroll & HR',
          desc: 'Full payroll and HR administration: employment contracts, payslips, social security and tax declarations.',
        },
        {
          icon: '📊',
          title: 'Tax Advisory',
          desc: 'Strategic tax advisory tailored to your business — we minimise your liabilities within the bounds of the law.',
        },
        {
          icon: '🏢',
          title: 'Company Accounting',
          desc: 'Full accounting services for limited companies, joint-stock and partnerships. Financial statements and more.',
        },
        {
          icon: '🚀',
          title: 'Business Setup',
          desc: 'Assistance with company registration, choosing the right legal and tax structure, and your first steps in business.',
        },
      ],
    },
    about: {
      label: 'Why Choose Us',
      titleLine1: 'Decades of Trust,',
      titleLine2: 'Delivered with Precision',
      text: 'At Tax&Ledger, we combine deep technical expertise with a client-first approach. Our team of certified professionals stays ahead of evolving tax and accounting legislation to provide strategies that genuinely move the needle for your financial future.',
      features: [
        'Certified accountants with 10+ years average experience',
        'Proactive year-round tax planning, not just filing season',
        'Transparent, flat-fee pricing with no hidden charges',
        'Full representation before tax and social security authorities',
      ],
      cta: 'Schedule a Consultation',
      cardBadge: 'Tax Return Filed',
      cardAmount: '14,280 zł',
      cardLabel: 'Total Refund Secured',
      cardMeta: 'Savings vs. self-filing: +4,200 zł',
      cardSecondaryTitle: 'Top Rated',
      cardSecondarySubtitle: 'Accounting Firm 2025',
    },
    process: {
      label: 'How It Works',
      title: 'Simple. Transparent. Effective.',
      steps: [
        {
          title: 'Free Consultation',
          desc: 'A complimentary 30-minute call to understand your business, goals, and accounting challenges.',
        },
        {
          title: 'Document Review',
          desc: 'Share your documents securely through our encrypted portal. Our team conducts a thorough review.',
        },
        {
          title: 'Accounting & Filing',
          desc: 'We take over full accounting, prepare all declarations, and walk you through every decision.',
        },
        {
          title: 'Ongoing Support',
          desc: 'Year-round access to your dedicated accountant — ready to answer your questions any time.',
        },
      ],
    },
    testimonials: {
      label: 'Client Stories',
      title: 'What Our Clients Say',
      items: [
        {
          text: 'Tax&Ledger saved our company over 80,000 zł last year through strategic tax restructuring. Their expertise is genuinely unmatched.',
          name: 'Robert Chen',
          role: 'CEO, Apex Ventures',
          initials: 'RC',
        },
        {
          text: 'I was terrified of a tax audit. The team handled everything professionally and the case was closed without any penalties.',
          name: 'Sarah Mitchell',
          role: 'Freelance Consultant',
          initials: 'SM',
        },
        {
          text: 'Finally, accountants who explain things clearly. They are proactive, responsive, and genuinely care about our business.',
          name: 'James & Laura Park',
          role: 'Private Clients',
          initials: 'JP',
        },
      ],
    },
    cta: {
      titleLine1: 'Ready for Better',
      titleLine2: 'Accounting?',
      subtitle:
        'Schedule a free 30-minute consultation with one of our senior advisors. No obligations — just expert advice.',
      namePlaceholder: 'Your Full Name',
      emailPlaceholder: 'Email Address',
      phonePlaceholder: 'Phone Number (optional)',
      submitBtn: 'Request Free Consultation',
      alertMsg: (name: string) =>
        `Thank you, ${name}! We will be in touch shortly.`,
    },
    footer: {
      tagline:
        'Professional accounting services built on trust, expertise, and results.',
      servicesTitle: 'Services',
      serviceItems: [
        'Bookkeeping',
        'Tax Returns',
        'Payroll & HR',
        'Tax Advisory',
      ],
      companyTitle: 'Company',
      companyItems: ['About Us', 'Our Process', 'Contact'],
      officeTitle: 'Office',
      copyright: '© 2026 Tax&Ledger. All rights reserved.',
      legal: 'Privacy Policy · Terms of Service',
    },
  },
}

export default translations
