import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import wittraLogo from "@/assets/wittra-logo.png";
import engageLogo from "@/assets/3ngage-logo.png";
import novaLogo from "@/assets/nova-logo.svg";
import bucketProsLogo from "@/assets/bucketpros-logo.png";

const portfolioCompanies = [
  {
    id: 1,
    name: "Wittra",
    descriptionKey: "company.wittra.description",
    technologies: ["Hybrid RTLS", "UWB Technology", "IoT Sensors", "Asset Tracking"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    category: "IoT Technology",
    logo: wittraLogo
  },
  {
    id: 2,
    name: "Radio Innovation",
    descriptionKey: "company.radioinnovation.description",
    technologies: ["5G", "4G", "Antenna Systems", "Cellular Networks"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    category: "Telecom Tech"
  },
  {
    id: 3,
    name: "WeStudents",
    descriptionKey: "company.westudents.description",
    technologies: ["Student Platform", "Mobile App", "Digital Identity"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    category: "EdTech"
  },
  {
    id: 4,
    name: "Navigare Properties",
    descriptionKey: "company.navigare.description",
    technologies: ["PropTech", "Hospitality", "Investment Platform"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    category: "PropTech"
  },
  {
    id: 5,
    name: "3ngage",
    descriptionKey: "company.3ngage.description",
    technologies: ["Digital Twins", "3D Simulation", "Sales Tech", "Interactive Demos"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    category: "Digital Experience",
    logo: engageLogo
  },
  {
    id: 6,
    name: "Nova Talent",
    descriptionKey: "company.nova.description",
    technologies: ["Talent Network", "Professional Platform", "Career Development"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    category: "HRTech",
    logo: novaLogo
  },
  {
    id: 7,
    name: "The Bucket Pros",
    descriptionKey: "company.bucketpros.description",
    technologies: ["Golf Tech", "Range Management", "Ball Systems", "Sports Equipment"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    category: "Sports Tech",
    logo: bucketProsLogo
  }
];

export const PortfolioSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-section bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {portfolioCompanies.map((company, index) => (
            <Card 
              key={company.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in bg-card"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-warm-accent/20 to-primary/30 group-hover:from-warm-accent/30 group-hover:to-primary/40 transition-all duration-500"
                  style={{
                    backgroundImage: `url(${company.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-warm-accent/90 text-background text-xs font-semibold px-3 py-1 rounded-full">
                    {company.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6 relative -mt-12 z-10">
                <div className="bg-card rounded-lg p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    {company.logo && (
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`} 
                        className="h-8 w-auto"
                      />
                    )}
                    <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {company.name}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t(company.descriptionKey)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {company.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-muted text-muted-foreground text-xs font-medium px-2 py-1 rounded-md group-hover:bg-warm-accent/20 group-hover:text-warm-accent transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="text-primary font-semibold text-sm group-hover:text-warm-accent transition-colors duration-300 flex items-center gap-2">
                    {t('portfolio.readMore')}
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <p className="text-muted-foreground text-lg mb-6">
            {t('portfolio.callToAction')}
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
            {t('portfolio.contactUs')}
          </button>
        </div>
      </div>
    </section>
  );
};