import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'sv' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation files
const translations = {
  sv: {
    // Navigation
    'nav.home': 'Hem',
    'nav.investments': 'Investeringar',
    'nav.team': 'Team',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title.part1': 'Investeringar i',
    'hero.title.part2': 'tillväxtbolag',
    'hero.subtitle': 'Stabilitet möter tillväxt. Cooach Equity kombinerar direktavkastning från säkerställda lån med potentialen i tillväxtbolag – i en fondliknande struktur optimerad för affärsdrivna investerare.',
    'hero.cta.invest': 'Jag vill investera',
    'hero.cta.learn': 'Detta är Cooach Equity',
    
    // About Page
    'about.page.title': 'Investeringar i tillväxtbolag med balanserad risk',
    'about.page.paragraph1': 'Cooach Equity AB är ett nystartat investeringsbolag med en fondliknande struktur. Bolaget emitterar B-aktier till professionella investerare som söker en balanserad exponering mot tillväxtbolag. Genom att investera i en kombination av säkerställda direktlån och equity i väl genomlysta bolag kan risk och avkastning balanseras.',
    'about.page.paragraph2': 'Cooach Equity AB har en styrelse som utgör investeringskommitté. Förvaltningen av bolaget inklusive sourcing av investeringsmöjligheter, due diligence och framtagande av investeringsbeslut sker av Cooach Capital Partner AB som är en del av Cooach Group.',
    'about.page.paragraph3': 'Cooach Equity AB vänder sig idag till en begränsad krets av investerare som förvärvar nyemitterade B-aktier. A-aktierna ägs av Cooach Capital Partner AB.',
    'about.page.paragraph4': 'Avsikten är att notera B-aktierna när Cooach Equity uppnått ett NAV på 500 MSEK eller senast 2029 och i samband med det utveckla Cooach Equity till ett investeringsbolag för en bred allmänhet.',

    // Team Page
    'team.title': 'Vårt Team',
    'team.subtitle': 'Mött teamet bakom Cooach Equity och Cooach Group som leder våra investeringsbeslut med djup branschexpertis och bevisad track record.',
    'team.magnus.role': 'VD & Grundare',
    'team.magnus.description': 'Magnus har över 20 års erfarenhet av investeringar och företagsbyggande inom teknologi och tillväxtbolag. Tidigare partner på flera venture capital-fonder.',
    'team.johan.role': 'Investeringschef',
    'team.johan.description': 'Johan ansvarar för due diligence och portföljhantering. Tidigare analytiker på Swedbank och McKinsey med fokus på private equity och corporate finance.',
    'team.anna.role': 'Partner Relations',
    'team.anna.description': 'Anna leder investerarrelationer och kommunikation. Tidigare på Nordea Private Banking och Ernst & Young med specialisering på förmögenhetsförvaltning.',
    'team.advisory.title': 'Rådgivande Styrelse',
    'team.advisory.description': 'Vårt advisory board består av erfarna entreprenörer, investerare och branschexperter som stödjer våra investeringsbeslut.',
    'team.join.cta': 'Kontakta oss',

    // Contact Page
    'contact.title': 'Kontakta Oss',
    'contact.subtitle': 'Vi hjälper gärna till med frågor om investeringar, partnerskap eller allmän information om Cooach Equity.',
    'contact.info.title': 'Kontaktinformation',
    'contact.phone.title': 'Telefon',
    'contact.email.title': 'E-post',
    'contact.office.title': 'Kontor',
    'contact.meeting.title': 'Boka ett möte',
    'contact.meeting.description': 'Diskutera investeringsmöjligheter',
    'contact.meeting.cta': 'Boka konsultation',
    'contact.form.title': 'Skicka ett meddelande',
    'contact.form.firstName': 'Förnamn',
    'contact.form.firstName.placeholder': 'Ditt förnamn',
    'contact.form.lastName': 'Efternamn', 
    'contact.form.lastName.placeholder': 'Ditt efternamn',
    'contact.form.email': 'E-post',
    'contact.form.email.placeholder': 'din@email.se',
    'contact.form.company': 'Företag',
    'contact.form.company.placeholder': 'Ditt företag (valfritt)',
    'contact.form.investment': 'Investeringsbelopp',
    'contact.form.investment.placeholder': 'Planerat investeringsbelopp',
    'contact.form.message': 'Meddelande',
    'contact.form.message.placeholder': 'Berätta mer om dina investeringsmål...',
    'contact.form.submit': 'Skicka meddelande',

    // Performance Page
    'performance.title': 'Performance & Portfolio',
    'performance.subtitle': 'Cooach Equity är ett nytt investeringsbolag som i etableringsfasen gjort mikroinvesteringar i sex svenska start ups. Nedan ser du bolagets målsättningar kommande tre år',
    'performance.metrics.returns.title': 'Årlig Avkastning',
    'performance.metrics.returns.description': 'Genomsnittlig årlig avkastning',
    'performance.metrics.risk.title': 'Avkastning lån',
    'performance.metrics.risk.description': 'Standardavvikelse på avkastning',
    'performance.metrics.target.title': 'Mål kapitalresning 2025-2027',
    'performance.metrics.target.description': 'Uppnådda investeringsmål',
    'performance.metrics.aum.title': 'Förvaltat Kapital',
    'performance.metrics.aum.description': 'Assets under management',
    'performance.portfolio.title': 'Portföljfördelning',
    'performance.portfolio.loans': 'Företagslån',
    'performance.portfolio.equity': 'Aktieinvesteringar',
    'performance.historical.title': 'Historisk Utveckling',
    'performance.historical.placeholder': 'Prestandadiagram kommer att visas här',
    'performance.highlights.title': 'Investeringshöjdpunkter',
    'performance.highlights.consistency.title': 'Konsekvent Avkastning',
    'performance.highlights.consistency.description': 'Stabil utveckling över tid med kontrollerad risk.',
    'performance.highlights.diversification.title': 'Diversifierad Portfölj',
    'performance.highlights.diversification.description': 'Balanserad allokering mellan lån och equity.',
    'performance.highlights.growth.title': 'Tillväxtpotential',
    'performance.highlights.growth.description': 'Strategiska investeringar i högpotentiella bolag.',

    // About Section
    'about.title': 'Cooach Equity kombinerar säkrade företagslån med',
    'about.title.highlight': 'strategiska investeringar',
    'about.title.end': 'i tillväxtföretag',
    'about.description': 'Vår investeringsstrategi skapar kassaflödesbaserade avkastningar samtidigt som vi behåller uppsida från aktieinvesteringar med reducerad risk och professionell excellens.',
    'about.loans.title': 'Direktlån',
    'about.loans.portfolio': '45-55% av portföljen',
    'about.loans.description': 'Säkrade direktlån med målavkastning på 12% årligen. Skapar stabila kassaflöden för kvartalsvisa utdelningar med professionell övervakning.',
    'about.equity.title': 'Aktieinvesteringar',
    'about.equity.portfolio': '45-55% av portföljen',
    'about.equity.description': 'Investeringar i privata tillväxtföretag som vi har övervakat i minst 12 månader för reducerad risk och strategisk tillväxtpotential.',
    
    // Investment Process
    'process.title': 'Investeringsstrategi',
    'process.subtitle': 'Vår balanserade approach som kombinerar säkra direktlån med tillväxtorienterade aktieinvesteringar.',
    'process.combined.title': 'Diversifierad Investeringsstrategi',
    'process.combined.description1': 'Vi kombinerar säkrade direktlån med aktieinvesteringar för att skapa en balanserad portfölj som levererar både stabilitet och tillväxtpotential.',
    'process.combined.description2': 'Genom direktlån erbjuder vi säker avkastning med förutsägbara kassaflöden, medan våra aktieinvesteringar fokuserar på tillväxtbolag med stark potential för värdeökning.',
    'process.combined.description3': 'Denna dubbla strategi gör det möjligt för oss att optimera risk-avkastningsförhållandet och leverera konsistent prestation över tid.',
    'process.combined.security': 'Säkerhet',
    'process.combined.security.desc': 'Direktlån med säkerheter och noggrann riskbedömning',
    'process.combined.growth': 'Tillväxtpotential',
    'process.combined.growth.desc': 'Aktieinvesteringar i bolag med stark tillväxtmöjlighet',
    'process.combined.cta': 'Läs mer om vår strategi',
    'process.loans.title': 'Direktlån',
    'process.loans.step1.title': 'Rigorös Due Diligence',
    'process.loans.step1.desc': 'Omfattande analys av låntagarens kreditvärdighet och affärsgrunder',
    'process.loans.step2.title': 'Strukturerade Villkor', 
    'process.loans.step2.desc': 'Skräddarsydda lånestrukturer med konkurrenskraftiga räntor och flexibla återbetalningsvillkor',
    'process.loans.step3.title': 'Aktiv Övervakning',
    'process.loans.step3.desc': 'Pågående relationshantering och prestandauppföljning under hela låneperioden',
    'process.loans.timeline': 'Typisk Tidslinje',
    'process.loans.timeline.desc': '4-8 veckor från ansökan till finansiering',
    'process.loans.risk': 'Riskhantering',
    'process.loans.risk.desc': 'Säkrade positioner med omfattande säkerhetsanalys',
    'process.loans.cta': 'Läs om Direktlån',
    'process.equity.title': 'Aktieinvesteringar',
    'process.equity.step1.title': 'Strategisk Sourcing',
    'process.equity.step1.desc': 'Identifiering av företag med hög potential och starka tillväxtutsikter och marknadspositioner',
    'process.equity.step2.title': 'Värdeskapande',
    'process.equity.step2.desc': 'Aktivt partnerskap som ger strategisk vägledning, operativ expertis och nätverkstillgång',
    'process.equity.step3.title': 'Exit-strategi',
    'process.equity.step3.desc': 'Planerad värderealisering genom strategiska försäljningar, börsintroduktioner eller management buyouts',
    'process.equity.focus': 'Investeringsfokus',
    'process.equity.focus.desc': 'Medelstora företag med 10M-100M EUR i omsättning',
    'process.equity.horizon': 'Investeringshorisont',
    'process.equity.horizon.desc': '3-7 år med aktivt värdeskapande',
    'process.equity.cta': 'Utforska Aktiemöjligheter',
    'process.consultation': 'Redo att diskutera dina investeringsbehov?',
    'process.consultation.cta': 'Boka en Konsultation',
    
    // Portfolio
    'portfolio.title': 'Våra Portföljföretag',
    'portfolio.subtitle': 'Vi investerar i innovativa företag som formar framtiden inom teknologi, hållbarhet och digital transformation.',
    'portfolio.readMore': 'Läs mer',
    'portfolio.callToAction': 'Är du ett innovativt företag som söker investering?',
    'portfolio.contactUs': 'Kontakta oss',
    
    // Company descriptions
    'company.wittra.description': 'Innovativ Hybrid Real-Time Location System för tillgångsspårning och sensordata som möjliggör tidigare omöjliga användningsfall med marknadens snabbaste ROI. Wittra levererar IoT-lösningar för industriella applikationer med patenterad teknologi inom positionering och mesh-nätverk.',
    'company.radioinnovation.description': 'Svensk telekom-pionjär som utvecklar nästa generations 5G-anslutningar och 4G-lösningar. Hjälper mobiloperatörer att sänka sin totala ägandekostnad med unika antennsystem som kraftigt förbättrar mobilkommunikation.',
    'company.westudents.description': 'Sveriges ledande plattform för lokala studentrabatter. Ger studenter tillgång till hundratals lokala och nationella rabatter genom ett digitalt studiebevis med dedikerad mobilapp.',
    'company.navigare.description': 'Exklusiva semesterhem med hotellstandard service och omfattande förvaltningslösningar. Erbjuder livsstilsinvesteringar i unika destinationer med skräddarsydda, högkvalitativa semesterbostäder.',
    'company.3ngage.description': 'Digitala tvillingar för försäljning och utbildning. Låter köpare och användare uppleva fysiska produkter i digitala miljöer med interaktiva simuleringar för försäljning, träning och support.',
    'company.nova.description': 'Globalt nätverk som kopplar samman de mest talangfulla individerna i världen, alla utvalda baserat på merit. Professional network som förbinder topptalanger med de bästa möjligheterna.',
    'company.bucketpros.description': 'Range as a Service (RaaS) - framtiden för drivingrange-verksamheter. Erbjuder komplett bollhanteringssystem, rangeutrustning och innovative tjänster för att ta golfanläggningar till nästa nivå.',
    
    // About/Investment Philosophy (for AboutSection.tsx)
    'about.philosophy.title': 'Investeringsfilosofi',
    'about.philosophy.desc1': 'Cooach Equity bygger en långsiktig investeringsportfölj med balanserad riskprofil genom att kombinera kassaflödesgenererande direktlån med övervakade tillväxtinvesteringar.',
    'about.philosophy.desc2': 'Vår strategi ger en målsatt årlig kassaflödesbaserad utdelning om 6%, samtidigt som vi bibehåller uppsidepotential från equity-investeringar.',
    'about.philosophy.desc3': 'Fonden emitterar upp till 100 000 preferensaktier à 100 SEK med kvartalsvis utdelning om 8% per år, varav 6% bedöms kassaflödesbaserad.',
    'about.philosophy.point1': 'Säkerställda direktlån med 12% målavkastning',
    'about.philosophy.point2': 'Monitorerade tillväxtbolag (minimum 12 månader)',
    'about.philosophy.point3': 'Kvartalsvis rapportering och värdering',
    'about.philosophy.point4': 'Planerad notering på NGM Nordic AIF 2026',
    'about.contact.title': 'Kontakta oss',
    'about.contact.subtitle': 'Kontakta vårt team för mer information',
    'about.contact.phone': 'Telefon',
    'about.contact.email': 'E-post',
    'about.contact.office': 'Kontor',
    'about.contact.cta': 'Boka ett möte',

    // Investment Page
    'invest.title': 'Investera med Cooach Equity',
    'invest.subtitle': 'Vi erbjuder exklusiva investeringsmöjligheter genom att upprätthålla daglig kontakt med de företag vi arbetar med. Denna pågående interaktion gör det möjligt för oss att genomföra kontinuerlig due diligence.',
    'invest.feature1.title': 'Kontinuerlig due diligence',
    'invest.feature1.description': 'Vi upprätthåller daglig kontakt med våra portföljföretag, vilket gör det möjligt för oss att genomföra kontinuerlig due diligence och säkerställa grundlig förståelse av deras verksamhet, finansiella hälsa och tillväxtpotential.',
    'invest.feature2.title': 'Djup kunskap om portföljföretag',
    'invest.feature2.description': 'Vi fokuserar våra investeringsmöjligheter på företag vi redan arbetat omfattande med. Detta innebär att vi känner dem väl och kan erbjuda insikter som andra kanske inte har.',
    'invest.feature3.title': 'Hybridkapital',
    'invest.feature3.description': 'Cooach Equity kombinerar säkerställda brygglån med deltagande i nyemissioner. Brygglånet utgör ofta första steget och möjliggör för Cooach Equity att följa bolaget och avvakta med ett definitivt investeringsbeslut till dess att målbolaget bevisat sig.',
    'invest.feature4.title': 'Hög tillväxtpotential',
    'invest.feature4.description': 'Genom att investera i innovativa, tillväxtorienterade företag syftar Cooach Equity till att generera attraktiv avkastning. Vår strategiska insikt kombinerat med robust finansiellt stöd gör det möjligt för dessa företag att lyckas.',
    'invest.cta.title': 'Håll dig informerad och engagera dig',
    'invest.cta.description': 'Vi inbjuder alla investerare att registrera sig för uppdateringar och information när vi närmar oss lanseringen av vår nya fond.',
    'invest.cta.contact': 'Boka ett möte',
    'invest.cta.learn': 'Läs mer om fonden',
    
    // Geographic Focus
    'invest.geography.title': 'Varför Norden och Spanien?',
    'invest.geography.intro': 'Cooach Equitys investeringsfokus följer den geografiska täckning där vår förvaltare och affärspartner, Cooach, är aktiv. Just nu omfattar detta två av Europas mest dynamiska och möjlighetsrika regioner: Norden och Spanien.',
    'invest.geography.nordic.title': 'Norden – stabilitet, transparens och digital spets',
    'invest.geography.nordic.description': 'De nordiska länderna erbjuder ett unikt investeringsklimat med hög rättssäkerhet, transparens och en mogen företagskultur. Regionen är känd för sitt digitala ledarskap, hållbarhetsfokus och starka innovationskraft. Nordiska bolag har ofta god tillgång till kapital, men det finns ett växande behov av smartare tillväxtkapital i tidiga expansionsfaser – något Cooach Equity är positionerat att tillgodose.',
    'invest.geography.spain.title': 'Spanien – tillväxt, transformation och entreprenörsanda',
    'invest.geography.spain.description': 'Samtidigt sker en snabb transformation i södra Europa – särskilt i Spanien, där ett nytt entreprenörsekosystem växer fram med stöd av digitalisering, EU-finansierade satsningar och internationell talang. Regionen Andalusien, inklusive Málaga och Sevilla, har blivit nav för tech-startups, greentech och internationella bolagsetableringar. Med lägre värderingar än norra Europa och stark utvecklingspotential erbjuder spanska bolag en attraktiv riskjusterad investeringsmöjlighet.'
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.investments': 'Investments',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title.part1': 'Investments in',
    'hero.title.part2': 'growth companies',
    'hero.subtitle': 'Stability meets growth. Cooach Equity combines direct returns from secured loans with the potential of growth companies – in a fund-like structure optimized for business-driven investors.',
    'hero.cta.invest': 'I want to invest',
    'hero.cta.learn': 'This is Cooach Equity',
    
    // About Page
    'about.page.title': 'This is Cooach Equity',
    'about.page.paragraph1': 'Cooach Equity AB is a newly established investment company with a fund-like structure. The company issues B-shares to professional investors seeking balanced exposure to growth companies. By investing in a combination of secured direct loans and equity in well-analyzed companies, risk and return can be balanced.',
    'about.page.paragraph2': 'Cooach Equity AB has a board that constitutes the investment committee. The management of the company including sourcing of investment opportunities, due diligence and development of investment decisions is handled by Cooach Capital Partner AB, which is part of the Cooach Group.',
    'about.page.paragraph3': 'NordSpan AB currently targets a limited circle of investors who acquire newly issued B-shares. The A-shares are owned by Cooach Capital Partner AB.',
    'about.page.paragraph4': 'The intention is to list the B-shares when NordSpan has reached a NAV of SEK 500 million or by 2029 at the latest and in connection with that, develop NordSpan into an investment company for the general public.',

    // Team Page
    'team.title': 'Our Team',
    'team.subtitle': 'Meet the team behind NordSpan and Cooach Group who lead our investment decisions with deep industry expertise and proven track record.',
    'team.magnus.role': 'CEO & Founder',
    'team.magnus.description': 'Magnus has over 20 years of experience in investments and company building within technology and growth companies. Former partner at several venture capital funds.',
    'team.johan.role': 'Chief Investment Officer',
    'team.johan.description': 'Johan is responsible for due diligence and portfolio management. Former analyst at Swedbank and McKinsey with focus on private equity and corporate finance.',
    'team.anna.role': 'Partner Relations',
    'team.anna.description': 'Anna leads investor relations and communications. Previously at Nordea Private Banking and Ernst & Young specializing in wealth management.',
    'team.advisory.title': 'Advisory Board',
    'team.advisory.description': 'Our advisory board consists of experienced entrepreneurs, investors and industry experts who support our investment decisions.',
    'team.join.cta': 'Contact us',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are happy to help with questions about investments, partnerships or general information about NordSpan.',
    'contact.info.title': 'Contact Information',
    'contact.phone.title': 'Phone',
    'contact.email.title': 'Email',
    'contact.office.title': 'Office',
    'contact.meeting.title': 'Book a meeting',
    'contact.meeting.description': 'Discuss investment opportunities',
    'contact.meeting.cta': 'Schedule consultation',
    'contact.form.title': 'Send a message',
    'contact.form.firstName': 'First Name',
    'contact.form.firstName.placeholder': 'Your first name',
    'contact.form.lastName': 'Last Name',
    'contact.form.lastName.placeholder': 'Your last name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.company': 'Company',
    'contact.form.company.placeholder': 'Your company (optional)',
    'contact.form.investment': 'Investment Amount',
    'contact.form.investment.placeholder': 'Planned investment amount',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell us more about your investment goals...',
    'contact.form.submit': 'Send message',

    // Performance Page
    'performance.title': 'Performance & Portfolio',
    'performance.subtitle': 'Cooach Equity is a new investment company that in its establishment phase has made micro-investments in six Swedish startups. Below you can see the company\'s objectives for 2026-2029.',
    'performance.metrics.returns.title': 'Annual Returns',
    'performance.metrics.returns.description': 'Average annual return',
    'performance.metrics.risk.title': 'Loan Returns',
    'performance.metrics.risk.description': 'Standard deviation of returns',
    'performance.metrics.target.title': 'Capital Raising Target 2025-2027',
    'performance.metrics.target.description': 'Achieved investment objectives',
    'performance.metrics.aum.title': 'Managed Capital',
    'performance.metrics.aum.description': 'Assets under management',
    'performance.portfolio.title': 'Portfolio Allocation',
    'performance.portfolio.loans': 'Corporate Loans',
    'performance.portfolio.equity': 'Equity Investments',
    'performance.historical.title': 'Historical Development',
    'performance.historical.placeholder': 'Performance chart will be displayed here',
    'performance.highlights.title': 'Investment Highlights',
    'performance.highlights.consistency.title': 'Consistent Returns',
    'performance.highlights.consistency.description': 'Stable development over time with controlled risk.',
    'performance.highlights.diversification.title': 'Diversified Portfolio',
    'performance.highlights.diversification.description': 'Balanced allocation between loans and equity.',
    'performance.highlights.growth.title': 'Growth Potential',
    'performance.highlights.growth.description': 'Strategic investments in high-potential companies.',

    // About Section
    'about.title': 'NordSpan combines secured direct loans with',
    'about.title.highlight': 'strategic investments',
    'about.title.end': 'in growth companies',
    'about.description': 'Our investment strategy creates cash flow-based returns while maintaining upside from equity investments with reduced risk and professional excellence.',
    'about.loans.title': 'Direct Loans',
    'about.loans.portfolio': '45-55% of portfolio',
    'about.loans.description': 'Secured direct loans with target returns of 12% annually. Creates stable cash flows for quarterly distributions with professional oversight.',
    'about.equity.title': 'Equity Investments',
    'about.equity.portfolio': '45-55% of portfolio',
    'about.equity.description': 'Investments in private growth companies that we have monitored for at least 12 months for reduced risk and strategic growth potential.',
    
    // Investment Process
    'process.title': 'Investment Strategy',
    'process.subtitle': 'Our balanced approach combining secure direct loans with growth-oriented equity investments.',
    'process.combined.title': 'Diversified Investment Strategy',
    'process.combined.description1': 'We combine secured direct loans with equity investments to create a balanced portfolio that delivers both stability and growth potential.',
    'process.combined.description2': 'Through direct loans, we offer secure returns with predictable cash flows, while our equity investments focus on growth companies with strong potential for value appreciation.',
    'process.combined.description3': 'This dual strategy enables us to optimize the risk-return relationship and deliver consistent performance over time.',
    'process.combined.security': 'Security',
    'process.combined.security.desc': 'Direct loans with collateral and careful risk assessment',
    'process.combined.growth': 'Growth Potential',
    'process.combined.growth.desc': 'Equity investments in companies with strong growth opportunity',
    'process.combined.cta': 'Learn more about our strategy',
    'process.loans.title': 'Direct Loans',
    'process.loans.step1.title': 'Rigorous Due Diligence',
    'process.loans.step1.desc': 'Comprehensive analysis of borrower creditworthiness and business fundamentals',
    'process.loans.step2.title': 'Structured Terms',
    'process.loans.step2.desc': 'Tailored loan structures with competitive rates and flexible repayment terms',
    'process.loans.step3.title': 'Active Monitoring',
    'process.loans.step3.desc': 'Ongoing relationship management and performance tracking throughout the loan term',
    'process.loans.timeline': 'Typical Timeline',
    'process.loans.timeline.desc': '4-8 weeks from application to funding',
    'process.loans.risk': 'Risk Management',
    'process.loans.risk.desc': 'Secured positions with comprehensive collateral analysis',
    'process.loans.cta': 'Learn About Direct Loans',
    'process.equity.title': 'Equity Investments',
    'process.equity.step1.title': 'Strategic Sourcing',
    'process.equity.step1.desc': 'Identifying high-potential companies with strong growth prospects and market positions',
    'process.equity.step2.title': 'Value Creation',
    'process.equity.step2.desc': 'Active partnership providing strategic guidance, operational expertise, and network access',
    'process.equity.step3.title': 'Exit Strategy',
    'process.equity.step3.desc': 'Planned value realization through strategic sales, IPOs, or management buyouts',
    'process.equity.focus': 'Investment Focus',
    'process.equity.focus.desc': 'Mid-market companies with €10M-€100M revenue',
    'process.equity.horizon': 'Investment Horizon',
    'process.equity.horizon.desc': '3-7 years with active value creation',
    'process.equity.cta': 'Explore Equity Opportunities',
    'process.consultation': 'Ready to discuss your investment needs?',
    'process.consultation.cta': 'Schedule a Consultation',
    
    // Portfolio
    'portfolio.title': 'Our Portfolio Companies',
    'portfolio.subtitle': 'We invest in innovative companies shaping the future in technology, sustainability and digital transformation.',
    'portfolio.readMore': 'Read more',
    'portfolio.callToAction': 'Are you an innovative company seeking investment?',
    'portfolio.contactUs': 'Contact us',
    
    // Company descriptions
    'company.wittra.description': 'Innovative Hybrid Real-Time Location System for asset tracking and sensor data enabling previously impossible use cases with the market\'s fastest ROI. Wittra delivers IoT solutions for industrial applications with patented technology in positioning and mesh networks.',
    'company.radioinnovation.description': 'Swedish telecom pioneer developing next-generation 5G connections and 4G solutions. Helps mobile operators reduce their total cost of ownership with unique antenna systems that dramatically improve mobile communication.',
    'company.westudents.description': 'Sweden\'s leading platform for local student discounts. Gives students access to hundreds of local and national discounts through a digital student ID with dedicated mobile app.',
    'company.navigare.description': 'Exclusive vacation homes with hotel-standard service and comprehensive management solutions. Offers lifestyle investments in unique destinations with tailored, high-quality vacation properties.',
    'company.3ngage.description': 'Digital twins for sales and training. Lets buyers and users experience physical products in digital environments with interactive simulations for sales, training and support.',
    'company.nova.description': 'Global network connecting the most talented individuals in the world, all selected based on merit. Professional network that connects top talent with the best opportunities.',
    'company.bucketpros.description': 'Range as a Service (RaaS) - the future of driving range operations. Offers complete ball management systems, range equipment and innovative services to take golf facilities to the next level.',
    
    // About/Investment Philosophy (for AboutSection.tsx)
    'about.philosophy.title': 'Investment Philosophy',
    'about.philosophy.desc1': 'NordSpan builds a long-term investment portfolio with balanced risk profile by combining cash flow-generating direct loans with monitored growth investments.',
    'about.philosophy.desc2': 'Our strategy provides a targeted annual cash flow-based distribution of 6%, while maintaining upside potential from equity investments.',
    'about.philosophy.desc3': 'The fund issues up to 100,000 preference shares at 100 SEK with quarterly distributions of 8% per year, of which 6% is assessed as cash flow-based.',
    'about.philosophy.point1': 'Secured direct loans with 12% target return',
    'about.philosophy.point2': 'Monitored growth companies (minimum 12 months)',
    'about.philosophy.point3': 'Quarterly reporting and valuation',
    'about.philosophy.point4': 'Planned listing on NGM Nordic AIF 2026',
    'about.contact.title': 'Contact us',
    'about.contact.subtitle': 'Contact our team for more information',
    'about.contact.phone': 'Phone',
    'about.contact.email': 'Email',
    'about.contact.office': 'Office',
    'about.contact.cta': 'Book a meeting',

    // Investment Page
    'invest.title': 'Invest with NordSpan',
    'invest.subtitle': 'We offer exclusive investment opportunities by maintaining daily engagement with the companies we work with. This ongoing interaction allows us to conduct continuous due diligence.',
    'invest.feature1.title': 'Continuous due diligence',
    'invest.feature1.description': 'We maintain daily engagement with our portfolio companies, allowing us to conduct continuous due diligence and ensure thorough understanding of their operations, financial health, and growth potential.',
    'invest.feature2.title': 'Deep knowledge of portfolio companies',
    'invest.feature2.description': 'We focus our investment opportunities on companies we have already worked with extensively. This means we know them well and can offer insights that others may not have.',
    'invest.feature3.title': 'Hybrid capital',
    'invest.feature3.description': 'NordSpan combines secured bridge loans with participation in new share issues. The bridge loan often constitutes the first step and enables NordSpan to follow the company and wait with a definitive investment decision until the target company has proven itself.',
    'invest.feature4.title': 'High growth potential',
    'invest.feature4.description': 'By investing in innovative, growth-oriented companies, NordSpan aims to generate attractive returns. Our strategic insight combined with robust financial support enables these companies to succeed.',
    'invest.cta.title': 'Stay informed and get involved',
    'invest.cta.description': 'We invite all investors to sign up for updates and information as we move toward launching our new fund.',
    'invest.cta.contact': 'Book a meeting',
    'invest.cta.learn': 'Learn more about the fund',
    
    // Geographic Focus
    'invest.geography.title': 'Why Nordic and Spain?',
    'invest.geography.intro': 'NordSpan\'s investment focus follows the geographical coverage where our manager and business partner, Cooach, is active. Currently, this includes two of Europe\'s most dynamic and opportunity-rich regions: the Nordic countries and Spain.',
    'invest.geography.nordic.title': 'Nordic – stability, transparency and digital edge',
    'invest.geography.nordic.description': 'The Nordic countries offer a unique investment climate with high legal security, transparency and a mature business culture. The region is known for its digital leadership, sustainability focus and strong innovation capacity. Nordic companies often have good access to capital, but there is a growing need for smarter growth capital in early expansion phases – something NordSpan is positioned to provide.',
    'invest.geography.spain.title': 'Spain – growth, transformation and entrepreneurial spirit',
    'invest.geography.spain.description': 'Meanwhile, a rapid transformation is taking place in southern Europe – particularly in Spain, where a new entrepreneurial ecosystem is emerging supported by digitalization, EU-funded initiatives and international talent. The Andalusia region, including Málaga and Seville, has become a hub for tech startups, greentech and international company establishments. With lower valuations than northern Europe and strong development potential, Spanish companies offer an attractive risk-adjusted investment opportunity.'
  },
  
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.investments': 'Inversiones',
    'nav.team': 'Equipo',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title.part1': 'Inversiones en',
    'hero.title.part2': 'empresas de crecimiento',
    'hero.subtitle': 'La estabilidad se encuentra con el crecimiento. NordSpan combina retornos directos de préstamos garantizados con el potencial de empresas de crecimiento – en una estructura similar a un fondo optimizada para inversores empresariales.',
    'hero.cta.invest': 'Quiero invertir',
    'hero.cta.learn': 'Esto es NordSpan',
    
    // About Page
    'about.page.title': 'Esto es NordSpan',
    'about.page.paragraph1': 'NordSpan AB es una empresa de inversión recién establecida con una estructura similar a un fondo. La empresa emite acciones B a inversores profesionales que buscan una exposición equilibrada a empresas de crecimiento. Al invertir en una combinación de préstamos directos garantizados y capital en empresas bien analizadas, se puede equilibrar el riesgo y el rendimiento.',
    'about.page.paragraph2': 'NordSpan AB tiene una junta directiva que constituye el comité de inversión. La gestión de la empresa, incluida la búsqueda de oportunidades de inversión, la debida diligencia y el desarrollo de decisiones de inversión, es manejada por Cooach Capital Partner AB, que es parte del Grupo Cooach.',
    'about.page.paragraph3': 'NordSpan AB actualmente se dirige a un círculo limitado de inversores que adquieren acciones B recién emitidas. Las acciones A son propiedad de Cooach Capital Partner AB.',
    'about.page.paragraph4': 'La intención es cotizar las acciones B cuando NordSpan haya alcanzado un NAV de 500 millones de SEK o a más tardar en 2029 y en conexión con eso, desarrollar NordSpan en una empresa de inversión para el público en general.',

    // Team Page
    'team.title': 'Nuestro Equipo',
    'team.subtitle': 'Conoce al equipo detrás de NordSpan y Cooach Group que lidera nuestras decisiones de inversión con profunda experiencia en la industria y un historial comprobado.',

    // Contact Page
    'contact.title': 'Contáctanos',
    'contact.subtitle': 'Estamos felices de ayudar con preguntas sobre inversiones, asociaciones o información general sobre NordSpan.',
    'contact.info.title': 'Información de Contacto',
    'contact.phone.title': 'Teléfono',
    'contact.email.title': 'Email',
    'contact.office.title': 'Oficina',
    'contact.meeting.title': 'Reservar una reunión',
    'contact.meeting.description': 'Discutir oportunidades de inversión',
    'contact.meeting.cta': 'Programar consulta',
    'contact.form.title': 'Enviar un mensaje',
    'contact.form.firstName': 'Nombre',
    'contact.form.firstName.placeholder': 'Tu nombre',
    'contact.form.lastName': 'Apellido',
    'contact.form.lastName.placeholder': 'Tu apellido',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'tu@email.com',
    'contact.form.company': 'Empresa',
    'contact.form.company.placeholder': 'Tu empresa (opcional)',
    'contact.form.investment': 'Monto de Inversión',
    'contact.form.investment.placeholder': 'Monto de inversión planificado',
    'contact.form.message': 'Mensaje',
    'contact.form.message.placeholder': 'Cuéntanos más sobre tus objetivos de inversión...',
    'contact.form.submit': 'Enviar mensaje',

    // Performance Page
    'performance.title': 'Rendimiento y Cartera',
    'performance.subtitle': 'Informes transparentes de nuestros resultados de inversión y desarrollo de cartera para asegurar total transparencia para nuestros inversores.',
    'performance.metrics.returns.title': 'Retornos Anuales',
    'performance.metrics.returns.description': 'Retorno anual promedio',
    'performance.metrics.risk.title': 'Volatilidad',
    'performance.metrics.risk.description': 'Desviación estándar de retornos',
    'performance.metrics.target.title': 'Logro de Objetivos',
    'performance.metrics.target.description': 'Objetivos de inversión cumplidos',
    'performance.metrics.aum.title': 'Activos Bajo Gestión',
    'performance.metrics.aum.description': 'Capital total gestionado',
    'performance.portfolio.title': 'Asignación de Cartera',
    'performance.portfolio.loans': 'Préstamos Directos',
    'performance.portfolio.equity': 'Inversiones de Capital',
    'performance.historical.title': 'Rendimiento Histórico',
    'performance.historical.placeholder': 'El gráfico de rendimiento se mostrará aquí',
    'performance.highlights.title': 'Aspectos Destacados de Inversión',
    'performance.highlights.consistency.title': 'Retornos Consistentes',
    'performance.highlights.consistency.description': 'Desarrollo estable a lo largo del tiempo con riesgo controlado.',
    'performance.highlights.diversification.title': 'Cartera Diversificada',
    'performance.highlights.diversification.description': 'Asignación equilibrada entre préstamos y capital.',
    'performance.highlights.growth.title': 'Potencial de Crecimiento',
    'performance.highlights.growth.description': 'Inversiones estratégicas en empresas de alto potencial.',

    // About Section
    'about.title': 'NordSpan combina préstamos directos garantizados con',
    'about.title.highlight': 'inversiones estratégicas',
    'about.title.end': 'en empresas de crecimiento',
    'about.description': 'Nuestra estrategia de inversión crea retornos basados en flujo de caja mientras mantenemos ventajas de las inversiones de capital con riesgo reducido y excelencia profesional.',
    'about.loans.title': 'Préstamos Directos',
    'about.loans.portfolio': '45-55% del portafolio',
    'about.loans.description': 'Préstamos directos garantizados con retornos objetivo del 12% anual. Crea flujos de caja estables para distribuciones trimestrales con supervisión profesional.',
    'about.equity.title': 'Inversiones de Capital',
    'about.equity.portfolio': '45-55% del portafolio',
    'about.equity.description': 'Inversiones en empresas privadas de crecimiento que hemos monitoreado durante al menos 12 meses para reducir el riesgo y obtener potencial de crecimiento estratégico.',
    
    // Investment Process
    'process.title': 'Estrategia de Inversión',
    'process.subtitle': 'Nuestro enfoque equilibrado que combina préstamos directos seguros con inversiones de capital orientadas al crecimiento.',
    'process.combined.title': 'Estrategia de Inversión Diversificada',
    'process.combined.description1': 'Combinamos préstamos directos garantizados con inversiones de capital para crear un portafolio equilibrado que entrega tanto estabilidad como potencial de crecimiento.',
    'process.combined.description2': 'A través de préstamos directos, ofrecemos retornos seguros con flujos de caja predecibles, mientras que nuestras inversiones de capital se enfocan en empresas de crecimiento con fuerte potencial de apreciación de valor.',
    'process.combined.description3': 'Esta estrategia dual nos permite optimizar la relación riesgo-retorno y entregar rendimiento consistente a lo largo del tiempo.',
    'process.combined.security': 'Seguridad',
    'process.combined.security.desc': 'Préstamos directos con garantías y evaluación cuidadosa del riesgo',
    'process.combined.growth': 'Potencial de Crecimiento',
    'process.combined.growth.desc': 'Inversiones de capital en empresas con fuerte oportunidad de crecimiento',
    'process.combined.cta': 'Aprende más sobre nuestra estrategia',
    'process.loans.title': 'Préstamos Directos',
    'process.loans.step1.title': 'Due Diligence Riguroso',
    'process.loans.step1.desc': 'Análisis integral de la solvencia crediticia del prestatario y fundamentos del negocio',
    'process.loans.step2.title': 'Términos Estructurados',
    'process.loans.step2.desc': 'Estructuras de préstamo personalizadas con tasas competitivas y términos de pago flexibles',
    'process.loans.step3.title': 'Monitoreo Activo',
    'process.loans.step3.desc': 'Gestión continua de relaciones y seguimiento del rendimiento durante todo el período del préstamo',
    'process.loans.timeline': 'Cronograma Típico',
    'process.loans.timeline.desc': '4-8 semanas desde la solicitud hasta el financiamiento',
    'process.loans.risk': 'Gestión de Riesgos',
    'process.loans.risk.desc': 'Posiciones garantizadas con análisis integral de garantías',
    'process.loans.cta': 'Conoce Sobre Préstamos Directos',
    'process.equity.title': 'Inversiones de Capital',
    'process.equity.step1.title': 'Búsqueda Estratégica',
    'process.equity.step1.desc': 'Identificación de empresas de alto potencial con fuertes perspectivas de crecimiento y posiciones de mercado',
    'process.equity.step2.title': 'Creación de Valor',
    'process.equity.step2.desc': 'Asociación activa que proporciona orientación estratégica, experiencia operativa y acceso a la red',
    'process.equity.step3.title': 'Estrategia de Salida',
    'process.equity.step3.desc': 'Realización de valor planificada a través de ventas estratégicas, OPI o compras por parte de la gerencia',
    'process.equity.focus': 'Enfoque de Inversión',
    'process.equity.focus.desc': 'Empresas de mercado medio con ingresos de €10M-€100M',
    'process.equity.horizon': 'Horizonte de Inversión',
    'process.equity.horizon.desc': '3-7 años con creación activa de valor',
    'process.equity.cta': 'Explora Oportunidades de Capital',
    'process.consultation': '¿Listo para discutir tus necesidades de inversión?',
    'process.consultation.cta': 'Programa una Consulta',
    
    // Portfolio
    'portfolio.title': 'Nuestras Empresas del Portafolio',
    'portfolio.subtitle': 'Invertimos en empresas innovadoras que dan forma al futuro en tecnología, sostenibilidad y transformación digital.',
    'portfolio.readMore': 'Leer más',
    'portfolio.callToAction': '¿Eres una empresa innovadora que busca inversión?',
    'portfolio.contactUs': 'Contáctanos',
    
    // Company descriptions
    'company.wittra.description': 'Sistema innovador híbrido de ubicación en tiempo real para seguimiento de activos y datos de sensores que permite casos de uso previamente imposibles con el ROI más rápido del mercado. Wittra ofrece soluciones IoT para aplicaciones industriales con tecnología patentada en posicionamiento y redes mesh.',
    'company.radioinnovation.description': 'Pionero sueco de telecomunicaciones que desarrolla conexiones 5G de próxima generación y soluciones 4G. Ayuda a los operadores móviles a reducir su costo total de propiedad con sistemas de antena únicos que mejoran dramáticamente la comunicación móvil.',
    'company.westudents.description': 'La plataforma líder de Suecia para descuentos estudiantiles locales. Brinda a los estudiantes acceso a cientos de descuentos locales y nacionales a través de una identificación estudiantil digital con aplicación móvil dedicada.',
    'company.navigare.description': 'Casas de vacaciones exclusivas con servicio de estándar hotelero y soluciones de gestión integral. Ofrece inversiones de estilo de vida en destinos únicos con propiedades vacacionales personalizadas de alta calidad.',
    'company.3ngage.description': 'Gemelos digitales para ventas y capacitación. Permite a compradores y usuarios experimentar productos físicos en entornos digitales con simulaciones interactivas para ventas, capacitación y soporte.',
    'company.nova.description': 'Red global que conecta a los individuos más talentosos del mundo, todos seleccionados basándose en méritos. Red profesional que conecta el mejor talento con las mejores oportunidades.',
    'company.bucketpros.description': 'Range as a Service (RaaS) - el futuro de las operaciones de campos de golf. Ofrece sistemas completos de gestión de pelotas, equipamiento de campo y servicios innovadores para llevar las instalaciones de golf al siguiente nivel.',
    
    // About/Investment Philosophy (for AboutSection.tsx)
    'about.philosophy.title': 'Filosofía de Inversión',
    'about.philosophy.desc1': 'NordSpan construye un portafolio de inversiones a largo plazo con perfil de riesgo equilibrado combinando préstamos directos generadores de flujo de caja con inversiones de crecimiento monitoreadas.',
    'about.philosophy.desc2': 'Nuestra estrategia proporciona una distribución anual basada en flujo de caja objetivo del 6%, mientras mantenemos el potencial de crecimiento de las inversiones de capital.',
    'about.philosophy.desc3': 'El fondo emite hasta 100,000 acciones preferentes a 100 SEK con distribuciones trimestrales del 8% por año, de las cuales el 6% se evalúa como basado en flujo de caja.',
    'about.philosophy.point1': 'Préstamos directos garantizados con retorno objetivo del 12%',
    'about.philosophy.point2': 'Empresas de crecimiento monitoreadas (mínimo 12 meses)',
    'about.philosophy.point3': 'Informes y valoración trimestrales',
    'about.philosophy.point4': 'Cotización planificada en NGM Nordic AIF 2026',
    'about.contact.title': 'Contáctanos',
    'about.contact.subtitle': 'Contacta a nuestro equipo para más información',
    'about.contact.phone': 'Teléfono',
    'about.contact.email': 'Correo electrónico',
    'about.contact.office': 'Oficina',
    'about.contact.cta': 'Reservar una reunión',

    // Investment Page
    'invest.title': 'Invierte con NordSpan',
    'invest.subtitle': 'Ofrecemos oportunidades de inversión exclusivas manteniendo compromiso diario con las empresas con las que trabajamos. Esta interacción continua nos permite realizar due diligence continuo.',
    'invest.feature1.title': 'Due diligence continuo',
    'invest.feature1.description': 'Mantenemos compromiso diario con nuestras empresas de cartera, permitiéndonos realizar due diligence continuo y asegurar comprensión profunda de sus operaciones, salud financiera y potencial de crecimiento.',
    'invest.feature2.title': 'Conocimiento profundo de empresas de cartera',
    'invest.feature2.description': 'Enfocamos nuestras oportunidades de inversión en empresas con las que ya hemos trabajado extensivamente. Esto significa que las conocemos bien y podemos ofrecer insights que otros no tienen.',
    'invest.feature3.title': 'Capital híbrido',
    'invest.feature3.description': 'NordSpan combina préstamos puente garantizados con participación en nuevas emisiones de acciones. El préstamo puente constituye a menudo el primer paso y permite a NordSpan seguir a la empresa y esperar con una decisión de inversión definitiva hasta que la empresa objetivo se haya demostrado.',
    'invest.feature4.title': 'Alto potencial de crecimiento',
    'invest.feature4.description': 'Al invertir en empresas innovadoras orientadas al crecimiento, NordSpan busca generar retornos atractivos. Nuestro insight estratégico combinado con apoyo financiero robusto permite que estas empresas tengan éxito.',
    'invest.cta.title': 'Mantente informado y participa',
    'invest.cta.description': 'Invitamos a todos los inversores a registrarse para recibir actualizaciones e información mientras nos acercamos al lanzamiento de nuestro nuevo fondo.',
    'invest.cta.contact': 'Reservar una reunión',
    'invest.cta.learn': 'Conoce más sobre el fondo',
    
    // Geographic Focus
    'invest.geography.title': '¿Por qué los países nórdicos y España?',
    'invest.geography.intro': 'El enfoque de inversión de NordSpan sigue la cobertura geográfica donde nuestro administrador y socio comercial, Cooach, está activo. Actualmente, esto incluye dos de las regiones más dinámicas y ricas en oportunidades de Europa: los países nórdicos y España.',
    'invest.geography.nordic.title': 'Nórdicos – estabilidad, transparencia y ventaja digital',
    'invest.geography.nordic.description': 'Los países nórdicos ofrecen un clima de inversión único con alta seguridad jurídica, transparencia y una cultura empresarial madura. La región es conocida por su liderazgo digital, enfoque en sostenibilidad y fuerte capacidad de innovación. Las empresas nórdicas a menudo tienen buen acceso al capital, pero hay una necesidad creciente de capital de crecimiento más inteligente en las fases de expansión temprana – algo que NordSpan está posicionado para proporcionar.',
    'invest.geography.spain.title': 'España – crecimiento, transformación y espíritu emprendedor',
    'invest.geography.spain.description': 'Mientras tanto, está teniendo lugar una rápida transformación en el sur de Europa, particularmente en España, donde está surgiendo un nuevo ecosistema empresarial apoyado por la digitalización, iniciativas financiadas por la UE y talento internacional. La región de Andalucía, incluyendo Málaga y Sevilla, se ha convertido en un centro para startups tecnológicas, tecnología verde y establecimientos de empresas internacionales. Con valoraciones más bajas que el norte de Europa y fuerte potencial de desarrollo, las empresas españolas ofrecen una oportunidad de inversión atractiva ajustada al riesgo.'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sv');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};