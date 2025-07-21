import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const MinimalistAbout = () => {
  const { t } = useLanguage();
  return (
    <section className="py-section bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center">
              <div className="text-2xl font-bold text-primary font-display">NS</div>
            </div>
            
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight tracking-tight">
              NordSpan combines secured direct loans with 
              <span className="block italic text-warm-accent">strategic investments</span>
              in growth companies
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
              Our investment strategy creates cash flow-based returns while 
              maintaining upside from equity investments with reduced risk and professional excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-card p-12 rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300 group">
              <div className="mb-8">
                <h3 className="font-display text-3xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {t('about.loans.title')}
                </h3>
                <div className="text-warm-accent font-semibold text-lg">50% of portfolio</div>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Secured direct loans with target returns of 12% annually. 
                Creates stable cash flows for quarterly distributions with professional oversight.
              </p>
            </div>

            <div className="bg-card p-12 rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300 group">
              <div className="mb-8">
                <h3 className="font-display text-3xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {t('about.equity.title')}
                </h3>
                <div className="text-warm-accent font-semibold text-lg">50% of portfolio</div>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Investments in private growth companies that we have monitored 
                for at least 12 months for reduced risk and strategic growth potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};