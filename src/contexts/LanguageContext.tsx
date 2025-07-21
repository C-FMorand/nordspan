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
    'about.title': 'Om NordSpan',
    'about.description': 'NordSpan fokuserar på två huvudsakliga investeringsstrategier som skapar en balanserad portfölj med stabil avkastning.',
    'about.loans.title': 'Direktlån',
    'about.loans.description': 'Säkrade lån till etablerade företag med fast ränta och säkerheter. Ger förutsägbar avkastning med lägre risk.',
    'about.equity.title': 'Tillväxtinvesteringar',
    'about.equity.description': 'Strategiska investeringar i snabbväxande företag med hög tillväxtpotential. Högre risk men möjlighet till betydande avkastning.',
    
    // Investment Process
    'process.title': 'Vår investeringsprocess',
    'process.subtitle': 'Vi följer en strukturerad process för båda våra investeringsstrategier',
    'process.loans.title': 'Direktlån Process',
    'process.loans.step1.title': 'Kreditbedömning',
    'process.loans.step1.desc': 'Grundlig analys av låntagarens finansiella ställning och återbetalningsförmåga',
    'process.loans.step2.title': 'Säkerhetsanalys',
    'process.loans.step2.desc': 'Utvärdering och värdering av säkerheter för att minimera risk',
    'process.loans.step3.title': 'Strukturering',
    'process.loans.step3.desc': 'Utformning av lånevillkor med fast ränta och tydliga återbetalningsplaner',
    'process.loans.step4.title': 'Övervakning',
    'process.loans.step4.desc': 'Kontinuerlig uppföljning av låntagarens prestanda och säkerheter',
    'process.loans.cta': 'Läs mer om direktlån',
    'process.equity.title': 'Tillväxtinvestering Process',
    'process.equity.step1.title': 'Deal Sourcing',
    'process.equity.step1.desc': 'Identifiering av lovande tillväxtföretag genom vårt nätverk och marknadsanalys',
    'process.equity.step2.title': 'Due Diligence',
    'process.equity.step2.desc': 'Djupgående analys av affärsmodell, team, marknad och finansiella prognoser',
    'process.equity.step3.title': 'Värdering',
    'process.equity.step3.desc': 'Noggrann värdering baserad på multiplar, DCF-analys och jämförbara transaktioner',
    'process.equity.step4.title': 'Värdeskapande',
    'process.equity.step4.desc': 'Aktiv support med strategisk rådgivning och nätverkstillgång',
    'process.equity.cta': 'Läs mer om tillväxtinvesteringar',
    
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
    'about.title': 'About NordSpan',
    'about.description': 'NordSpan focuses on two main investment strategies that create a balanced portfolio with stable returns.',
    'about.loans.title': 'Direct Loans',
    'about.loans.description': 'Secured loans to established companies with fixed interest rates and collateral. Provides predictable returns with lower risk.',
    'about.equity.title': 'Growth Investments',
    'about.equity.description': 'Strategic investments in fast-growing companies with high growth potential. Higher risk but opportunity for significant returns.',
    
    // Investment Process
    'process.title': 'Our investment process',
    'process.subtitle': 'We follow a structured process for both our investment strategies',
    'process.loans.title': 'Direct Loans Process',
    'process.loans.step1.title': 'Credit Assessment',
    'process.loans.step1.desc': 'Thorough analysis of borrower\'s financial position and repayment capacity',
    'process.loans.step2.title': 'Security Analysis',
    'process.loans.step2.desc': 'Evaluation and valuation of collateral to minimize risk',
    'process.loans.step3.title': 'Structuring',
    'process.loans.step3.desc': 'Design of loan terms with fixed interest and clear repayment schedules',
    'process.loans.step4.title': 'Monitoring',
    'process.loans.step4.desc': 'Continuous monitoring of borrower performance and collateral',
    'process.loans.cta': 'Learn more about direct loans',
    'process.equity.title': 'Growth Investment Process',
    'process.equity.step1.title': 'Deal Sourcing',
    'process.equity.step1.desc': 'Identifying promising growth companies through our network and market analysis',
    'process.equity.step2.title': 'Due Diligence',
    'process.equity.step2.desc': 'In-depth analysis of business model, team, market and financial projections',
    'process.equity.step3.title': 'Valuation',
    'process.equity.step3.desc': 'Careful valuation based on multiples, DCF analysis and comparable transactions',
    'process.equity.step4.title': 'Value Creation',
    'process.equity.step4.desc': 'Active support with strategic advisory and network access',
    'process.equity.cta': 'Learn more about growth investments',
    
    // Portfolio
    'portfolio.title': 'Our portfolio',
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
    'about.title': 'Acerca de NordSpan',
    'about.description': 'NordSpan se enfoca en dos estrategias principales de inversión que crean una cartera equilibrada con retornos estables.',
    'about.loans.title': 'Préstamos Directos',
    'about.loans.description': 'Préstamos garantizados a empresas establecidas con tasas de interés fijas y garantías. Proporciona retornos predecibles con menor riesgo.',
    'about.equity.title': 'Inversiones de Crecimiento',
    'about.equity.description': 'Inversiones estratégicas en empresas de rápido crecimiento con alto potencial de crecimiento. Mayor riesgo pero oportunidad de retornos significativos.',
    
    // Investment Process
    'process.title': 'Nuestro proceso de inversión',
    'process.subtitle': 'Seguimos un proceso estructurado para ambas estrategias de inversión',
    'process.loans.title': 'Proceso de Préstamos Directos',
    'process.loans.step1.title': 'Evaluación Crediticia',
    'process.loans.step1.desc': 'Análisis exhaustivo de la posición financiera del prestatario y capacidad de pago',
    'process.loans.step2.title': 'Análisis de Garantías',
    'process.loans.step2.desc': 'Evaluación y valoración de garantías para minimizar el riesgo',
    'process.loans.step3.title': 'Estructuración',
    'process.loans.step3.desc': 'Diseño de términos de préstamo con interés fijo y cronogramas de pago claros',
    'process.loans.step4.title': 'Monitoreo',
    'process.loans.step4.desc': 'Seguimiento continuo del rendimiento del prestatario y garantías',
    'process.loans.cta': 'Conoce más sobre préstamos directos',
    'process.equity.title': 'Proceso de Inversión de Crecimiento',
    'process.equity.step1.title': 'Búsqueda de Oportunidades',
    'process.equity.step1.desc': 'Identificación de empresas de crecimiento prometedoras a través de nuestra red y análisis de mercado',
    'process.equity.step2.title': 'Due Diligence',
    'process.equity.step2.desc': 'Análisis profundo del modelo de negocio, equipo, mercado y proyecciones financieras',
    'process.equity.step3.title': 'Valoración',
    'process.equity.step3.desc': 'Valoración cuidadosa basada en múltiplos, análisis DCF y transacciones comparables',
    'process.equity.step4.title': 'Creación de Valor',
    'process.equity.step4.desc': 'Soporte activo con asesoría estratégica y acceso a red de contactos',
    'process.equity.cta': 'Conoce más sobre inversiones de crecimiento',
    
    // Portfolio
    'portfolio.title': 'Nuestro portafolio',
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