import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";

export const Team = () => {
  const teamMembers = [
    {
      name: "Carl-Fredrik Morander",
      role: "Chairman of the Board",
      company: "Cooach Capital Partners AB",
      description: "Responsible for overall strategy and investment decisions"
    },
    {
      name: "Dickson Trujillo",
      role: "Chairman Investment Committee",
      company: "",
      description: "Leads the investment committee and oversees portfolio decisions"
    },
    {
      name: "Eric Hansson",
      role: "Head of Sourcing and Initial Due Diligence",
      company: "",
      description: "Identifies and evaluates new investment opportunities"
    },
    {
      name: "Sara Rejnefelt",
      role: "CFO",
      company: "",
      description: "Responsible for the fund's financial reporting and financial governance"
    },
    {
      name: "Maria Cepero",
      role: "Due Diligence Manager",
      company: "Spain",
      description: "Leads due diligence processes for Spanish investments"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light mb-8">
              Our <span className="font-bold">team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              NordSpan is driven by an experienced team with deep knowledge in investments, 
              due diligence and portfolio management.
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
                <h2 className="text-3xl font-semibold mb-6">Organization</h2>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">AIF Manager:</span>
                    <span className="text-muted-foreground">Nowo Fund Management AB</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Delegated Portfolio Manager:</span>
                    <span className="text-muted-foreground">Cooach Capital Partners AB</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Owner (51%):</span>
                    <span className="text-muted-foreground">Cooach AB (publ)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Owner (49%):</span>
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