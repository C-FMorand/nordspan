import { Card, CardContent } from "@/components/ui/card";

export const MinimalistAbout = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <div className="w-24 h-24 mx-auto mb-8 bg-warm-accent/10 rounded-full flex items-center justify-center">
              <div className="text-3xl font-bold text-warm-accent">VC</div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Meridian Capital was formed as a tool for a group of entrepreneurs 
              to pool their competencies, resources and investments
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              We invest together in interesting and exciting unlisted companies, 
              focusing on sustainable growth and long-term value creation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-4">Investment Focus</h3>
                <p className="text-muted-foreground">
                  Technology companies with proven business models, 
                  strong market positions, and exceptional management teams.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-4">Partnership Approach</h3>
                <p className="text-muted-foreground">
                  We work closely with entrepreneurs to provide not just capital, 
                  but strategic guidance and operational support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};