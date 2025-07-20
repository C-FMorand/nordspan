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
              NordSpan combines secured direct loans with 
              strategic investments in growth companies
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our investment strategy creates cash flow-based returns while 
              maintaining upside from equity investments with reduced risk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-4">Direct Loans (50%)</h3>
                <p className="text-muted-foreground">
                  Secured direct loans with target returns of 12% annually. 
                  Creates stable cash flows for quarterly distributions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-4">Growth Companies (50%)</h3>
                <p className="text-muted-foreground">
                  Investments in private growth companies that we have monitored 
                  for at least 12 months for reduced risk.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};