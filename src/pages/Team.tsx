import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";

export const Team = () => {
  const teamMembers = [
    {
      name: "Carl-Fredrik Morander",
      role: "Styrelseordförande",
      company: "Cooach Capital Partners AB",
      description: "Ansvarig för övergripande strategi och investeringsbeslut"
    },
    {
      name: "Dickson Trujillo",
      role: "Ordförande investeringskommittén",
      company: "",
      description: "Leder investeringskommittén och övervakar portföljbeslut"
    },
    {
      name: "Eric Hansson",
      role: "Ansvarig sourcing och initial due diligence",
      company: "",
      description: "Identifierar och utvärderar nya investeringsmöjligheter"
    },
    {
      name: "Sara Rejnefelt",
      role: "CFO",
      company: "",
      description: "Ansvarig för fondens ekonomiska rapportering och finansiell styrning"
    },
    {
      name: "Maria Cepero",
      role: "Due diligence-ansvarig",
      company: "Spanien",
      description: "Leder due diligence-processer för spanska investeringar"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Organic background shapes inspired by Flat Capital */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--flat-green))] rounded-full opacity-10 -translate-y-20 translate-x-20"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[hsl(var(--flat-purple))] rounded-full opacity-10 -translate-x-20"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[hsl(var(--flat-blue))] rounded-full opacity-5"></div>
      
      <Navigation />
      
      <div className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-light mb-8 tracking-tight">
              Vårt <span className="font-bold text-[hsl(var(--flat-green))]">team</span>
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              NordSpan drivs av ett erfaret team med djup kunskap inom investeringar, 
              due diligence och portföljförvaltning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const colors = ['hsl(var(--flat-green))', 'hsl(var(--flat-purple))', 'hsl(var(--flat-blue))'];
              const bgColor = colors[index % colors.length];
              
              return (
                <Card key={index} className="p-8 text-left hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/50 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div 
                      className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: bgColor }}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <h3 className="text-2xl font-light mb-2 tracking-tight">{member.name}</h3>
                    <div 
                      className="font-semibold mb-1 text-lg"
                      style={{ color: bgColor }}
                    >
                      {member.role}
                    </div>
                    {member.company && (
                      <div className="text-sm text-muted-foreground mb-4 font-medium">{member.company}</div>
                    )}
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-20 max-w-4xl mx-auto">
            <Card className="p-10 bg-white/30 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0">
                <h2 className="text-4xl font-light mb-8 text-center tracking-tight">
                  <span className="text-[hsl(var(--flat-purple))]">Organisation</span>
                </h2>
                <div className="space-y-6 text-left">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 border-b border-gray-200/50">
                    <span className="font-semibold text-lg mb-1 md:mb-0">AIF-förvaltare:</span>
                    <span className="text-muted-foreground font-light">Nowo Fund Management AB</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 border-b border-gray-200/50">
                    <span className="font-semibold text-lg mb-1 md:mb-0">Delegerad portföljförvaltare:</span>
                    <span className="text-muted-foreground font-light">Cooach Capital Partners AB</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 border-b border-gray-200/50">
                    <span className="font-semibold text-lg mb-1 md:mb-0">Ägare (51%):</span>
                    <span className="text-muted-foreground font-light">Cooach AB (publ)</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4">
                    <span className="font-semibold text-lg mb-1 md:mb-0">Ägare (49%):</span>
                    <span className="text-muted-foreground font-light">Napsdron Equity AB</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};