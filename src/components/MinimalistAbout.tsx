import { Card, CardContent } from "@/components/ui/card";

export const MinimalistAbout = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <div className="w-24 h-24 mx-auto mb-8 bg-warm-accent/10 rounded-full flex items-center justify-center">
              <div className="text-3xl font-bold text-warm-accent">NS</div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              NordSpan kombinerar säkerställda direktlån med 
              strategiska investeringar i tillväxtbolag
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Vår investeringsstrategi skapar kassaflödesbaserad avkastning samtidigt 
              som vi bibehåller uppsida från equity-investeringar med reducerad risk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-4">Direktlån (50%)</h3>
                <p className="text-muted-foreground">
                  Säkerställda direktlån med målavkastning om 12% årligen. 
                  Skapar stabila kassaflöden för kvartalsvis utdelning.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-4">Tillväxtbolag (50%)</h3>
                <p className="text-muted-foreground">
                  Investeringar i onoterade tillväxtbolag som vi monitorerat 
                  i minst 12 månader för reducerad risk.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};