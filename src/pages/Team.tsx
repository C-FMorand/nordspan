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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light mb-8">
              Vårt <span className="font-bold">team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              NordSpan drivs av ett erfaret team med djup kunskap inom investeringar, 
              due diligence och portföljförvaltning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="w-20 h-20 mx-auto mb-6 bg-warm-accent/10 rounded-full flex items-center justify-center">
                    <div className="text-2xl font-bold text-warm-accent">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <div className="text-warm-accent font-medium mb-1">{member.role}</div>
                  {member.company && (
                    <div className="text-sm text-muted-foreground mb-4">{member.company}</div>
                  )}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <Card className="p-8">
              <CardContent>
                <h2 className="text-3xl font-semibold mb-6">Organisation</h2>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">AIF-förvaltare:</span>
                    <span className="text-muted-foreground">Nowo Fund Management AB</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Delegerad portföljförvaltare:</span>
                    <span className="text-muted-foreground">Cooach Capital Partners AB</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Ägare (51%):</span>
                    <span className="text-muted-foreground">Cooach AB (publ)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Ägare (49%):</span>
                    <span className="text-muted-foreground">Napsdron Equity AB</span>
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