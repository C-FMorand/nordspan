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
              <div className="text-2xl font-bold text-primary font-display">CE</div>
            </div>
            
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight tracking-tight">
              {t('about.title')} 
              <span className="block italic text-warm-accent">{t('about.title.highlight')}</span>
              {t('about.title.end')}
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
              {t('about.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-10 rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300 group">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {t('about.loans.title')}
                </h3>
                <div className="text-warm-accent font-semibold text-lg">{t('about.loans.portfolio')}</div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.loans.description')}
              </p>
            </div>

            <div className="bg-card p-10 rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300 group">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {t('about.equity.title')}
                </h3>
                <div className="text-warm-accent font-semibold text-lg">{t('about.equity.portfolio')}</div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.equity.description')}
              </p>
            </div>

            <div className="bg-card p-10 rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300 group">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {t('about.projects.title')}
                </h3>
                <div className="text-warm-accent font-semibold text-lg">{t('about.projects.portfolio')}</div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.projects.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};