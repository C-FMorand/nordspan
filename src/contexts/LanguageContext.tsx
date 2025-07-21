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
    'hero.subtitle': 'NordSpan är en alternativ investeringsfond som kombinerar säkrade direktlån med investeringar i tillväxtföretag för stabila avkastningar med professionell excellens.',
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
    'portfolio.title': 'Vår portfölj',
    'portfolio.subtitle': 'Vi investerar i starka företag med bevisade affärsmodeller och tillväxtpotential'
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
    'hero.subtitle': 'NordSpan is an alternative investment fund that combines secured direct loans with investments in growth companies for stable returns with professional excellence.',
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
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'We invest in strong companies with proven business models and growth potential'
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
    'hero.subtitle': 'NordSpan es un fondo de inversión alternativa que combina préstamos directos garantizados con inversiones en empresas de crecimiento para obtener retornos estables con excelencia profesional.',
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
    'portfolio.title': 'Nuestro Portafolio',
    'portfolio.subtitle': 'Invertimos en empresas sólidas con modelos de negocio probados y potencial de crecimiento'
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