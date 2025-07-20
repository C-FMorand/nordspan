import { Card, CardContent } from "@/components/ui/card";
import wittraLogo from "@/assets/wittra-logo.png";

const portfolioCompanies = [
  {
    id: 1,
    name: "Wittra",
    description: "Innovativ Hybrid Real-Time Location System för tillgångsspårning och sensordata som möjliggör tidigare omöjliga användningsfall med marknadens snabbaste ROI. Wittra levererar IoT-lösningar för industriella applikationer med patenterad teknologi inom positionering och mesh-nätverk.",
    technologies: ["Hybrid RTLS", "UWB Technology", "IoT Sensors", "Asset Tracking"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    category: "IoT Technology",
    logo: wittraLogo
  },
  {
    id: 2,
    name: "GreenEnergy Nordic",
    description: "Hållbara energilösningar med fokus på solenergi och energilagring för företag.",
    technologies: ["Solar", "Energy Storage", "Sustainability"],
    image: "/placeholder.svg?height=300&width=500",
    category: "CleanTech"
  },
  {
    id: 3,
    name: "DataSecure Pro",
    description: "Avancerad cybersäkerhet och dataskydd för små och medelstora företag.",
    technologies: ["Cybersecurity", "Data Protection", "Cloud"],
    image: "/placeholder.svg?height=300&width=500",
    category: "Security Tech"
  },
  {
    id: 4,
    name: "MedTech Innovations",
    description: "Digital hälsoteknik som förbättrar patientövervakning och diagnostik.",
    technologies: ["HealthTech", "Diagnostics", "Digital Health"],
    image: "/placeholder.svg?height=300&width=500",
    category: "HealthTech"
  }
];

export const PortfolioSection = () => {
  return (
    <section className="py-section bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Våra Portföljföretag
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vi investerar i innovativa företag som formar framtiden inom teknologi, 
            hållbarhet och digital transformation.
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
                    {company.description}
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
                    Läs mer
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
            Är du ett innovativt företag som söker investering?
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Kontakta oss
          </button>
        </div>
      </div>
    </section>
  );
};