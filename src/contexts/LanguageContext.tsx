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
    'hero.title.part1': 'Alternativ investering med',
    'hero.title.part2': 'balanserad risk',
    'hero.subtitle': 'Stabilitet möter tillväxt. NordSpan kombinerar direktavkastning från säkerställda lån med potentialen i tillväxtbolag – i en fondliknande struktur optimerad för affärsdrivna investerare.',
    'hero.cta.invest': 'Jag vill investera',
    'hero.cta.learn': 'Läs mer om fonden',
    
    // About Section
    'about.title': 'NordSpan kombinerar säkrade direktlån med',
    'about.title.highlight': 'strategiska investeringar',
    'about.title.end': 'i tillväxtföretag',
    'about.description': 'Vår investeringsstrategi skapar kassaflödesbaserade avkastningar samtidigt som vi behåller uppsida från aktieinvesteringar med reducerad risk och professionell excellens.',
    'about.loans.title': 'Direktlån',
    'about.loans.portfolio': '50% av portföljen',
    'about.loans.description': 'Säkrade direktlån med målavkastning på 12% årligen. Skapar stabila kassaflöden för kvartalsvisa utdelningar med professionell övervakning.',
    'about.equity.title': 'Aktieinvesteringar',
    'about.equity.portfolio': '50% av portföljen',
    'about.equity.description': 'Investeringar i privata tillväxtföretag som vi har övervakat i minst 12 månader för reducerad risk och strategisk tillväxtpotential.',
    
    // Investment Process
    'process.title': 'Vår investeringsprocess',
    'process.subtitle': 'Upptäck hur vi skapar värde genom våra noggrant strukturerade investeringsmetoder',
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
    'about.philosophy.desc1': 'NordSpan bygger en långsiktig investeringsportfölj med balanserad riskprofil genom att kombinera kassaflödesgenererande direktlån med övervakade tillväxtinvesteringar.',
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
    'invest.title': 'Investera med NordSpan',
    'invest.subtitle': 'Vi erbjuder exklusiva investeringsmöjligheter genom att upprätthålla daglig kontakt med de företag vi arbetar med. Denna pågående interaktion gör det möjligt för oss att genomföra kontinuerlig due diligence.',
    'invest.feature1.title': 'Kontinuerlig due diligence',
    'invest.feature1.description': 'Vi upprätthåller daglig kontakt med våra portföljföretag, vilket gör det möjligt för oss att genomföra kontinuerlig due diligence och säkerställa grundlig förståelse av deras verksamhet, finansiella hälsa och tillväxtpotential.',
    'invest.feature2.title': 'Djup kunskap om portföljföretag',
    'invest.feature2.description': 'Vi fokuserar våra investeringsmöjligheter på företag vi redan arbetat omfattande med. Detta innebär att vi känner dem väl och kan erbjuda insikter som andra kanske inte har.',
    'invest.feature3.title': 'Hybridkapital',
    'invest.feature3.description': 'NordSpan kombinerar säkerställda brygglån med deltagande i nyemissioner. Brygglånet utgör ofta första steget och möjliggör för NordSpan att följa bolaget och avvakta med ett definitivt investeringsbeslut till dess att målbolaget bevisat sig.',
    'invest.feature4.title': 'Hög tillväxtpotential',
    'invest.feature4.description': 'Genom att investera i innovativa, tillväxtorienterade företag syftar NordSpan till att generera attraktiv avkastning. Vår strategiska insikt kombinerat med robust finansiellt stöd gör det möjligt för dessa företag att lyckas.',
    'invest.cta.title': 'Håll dig informerad och engagera dig',
    'invest.cta.description': 'Vi inbjuder alla investerare att registrera sig för uppdateringar och information när vi närmar oss lanseringen av vår nya fond.',
    'invest.cta.contact': 'Boka ett möte',
    'invest.cta.learn': 'Läs mer om fonden',
    
    // Geographic Focus
    'invest.geography.title': 'Varför Norden och Spanien?',
    'invest.geography.intro': 'NordSpans investeringsfokus följer den geografiska täckning där vår förvaltare och affärspartner, Cooach, är aktiv. Just nu omfattar detta två av Europas mest dynamiska och möjlighetsrika regioner: Norden och Spanien.',
    'invest.geography.nordic.title': 'Norden – stabilitet, transparens och digital spets',
    'invest.geography.nordic.description': 'De nordiska länderna erbjuder ett unikt investeringsklimat med hög rättssäkerhet, transparens och en mogen företagskultur. Regionen är känd för sitt digitala ledarskap, hållbarhetsfokus och starka innovationskraft. Nordiska bolag har ofta god tillgång till kapital, men det finns ett växande behov av smartare tillväxtkapital i tidiga expansionsfaser – något NordSpan är positionerat att tillgodose.',
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
    'hero.title.part1': 'Alternative investment with',
    'hero.title.part2': 'balanced risk',
    'hero.subtitle': 'NordSpan is an alternative investment fund that combines secured direct loans with investments in growth companies to combine stable returns with high potential value appreciation.',
    'hero.cta.invest': 'I want to invest',
    'hero.cta.learn': 'Learn more about the fund',
    
    // About Section
    'about.title': 'NordSpan combines secured direct loans with',
    'about.title.highlight': 'strategic investments',
    'about.title.end': 'in growth companies',
    'about.description': 'Our investment strategy creates cash flow-based returns while maintaining upside from equity investments with reduced risk and professional excellence.',
    'about.loans.title': 'Direct Loans',
    'about.loans.portfolio': '50% of portfolio',
    'about.loans.description': 'Secured direct loans with target returns of 12% annually. Creates stable cash flows for quarterly distributions with professional oversight.',
    'about.equity.title': 'Equity Investments',
    'about.equity.portfolio': '50% of portfolio',
    'about.equity.description': 'Investments in private growth companies that we have monitored for at least 12 months for reduced risk and strategic growth potential.',
    
    // Investment Process
    'process.title': 'Our Investment Process',
    'process.subtitle': 'Discover how we create value through our carefully structured investment approaches',
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
    'hero.title.part1': 'Inversión alternativa con',
    'hero.title.part2': 'riesgo equilibrado',
    'hero.subtitle': 'NordSpan es un fondo de inversión alternativa que combina préstamos directos garantizados con inversiones en empresas de crecimiento para combinar retornos estables con alto potencial de revalorización.',
    'hero.cta.invest': 'Quiero invertir',
    'hero.cta.learn': 'Conoce más sobre el fondo',
    
    // About Section
    'about.title': 'NordSpan combina préstamos directos garantizados con',
    'about.title.highlight': 'inversiones estratégicas',
    'about.title.end': 'en empresas de crecimiento',
    'about.description': 'Nuestra estrategia de inversión crea retornos basados en flujo de caja mientras mantenemos ventajas de las inversiones de capital con riesgo reducido y excelencia profesional.',
    'about.loans.title': 'Préstamos Directos',
    'about.loans.portfolio': '50% del portafolio',
    'about.loans.description': 'Préstamos directos garantizados con retornos objetivo del 12% anual. Crea flujos de caja estables para distribuciones trimestrales con supervisión profesional.',
    'about.equity.title': 'Inversiones de Capital',
    'about.equity.portfolio': '50% del portafolio',
    'about.equity.description': 'Inversiones en empresas privadas de crecimiento que hemos monitoreado durante al menos 12 meses para reducir el riesgo y obtener potencial de crecimiento estratégico.',
    
    // Investment Process
    'process.title': 'Nuestro Proceso de Inversión',
    'process.subtitle': 'Descubre cómo creamos valor a través de nuestros enfoques de inversión cuidadosamente estructurados',
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