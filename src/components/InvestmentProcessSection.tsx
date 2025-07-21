import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, DollarSign, Clock, Shield, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const InvestmentProcessSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {t('process.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Direct Loans Section */}
          <Card className="p-8 border-2 hover:border-primary/20 transition-all duration-300 group">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl font-semibold mb-2">{t('about.loans.title')}</CardTitle>
              <p className="text-warm-accent font-semibold text-lg">{t('about.loans.portfolio')}</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('process.loans.step1.title')}</h4>
                    <p className="text-muted-foreground">{t('process.loans.step1.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('process.loans.step2.title')}</h4>
                    <p className="text-muted-foreground">{t('process.loans.step2.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('process.loans.step3.title')}</h4>
                    <p className="text-muted-foreground">{t('process.loans.step3.desc')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-semibold">{t('process.loans.timeline')}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t('process.loans.timeline.desc')}</p>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="font-semibold">{t('process.loans.risk')}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t('process.loans.risk.desc')}</p>
              </div>

              <Button className="w-full mt-6 group" size="lg">
                {t('process.loans.cta')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Equity Investments Section */}
          <Card className="p-8 border-2 hover:border-primary/20 transition-all duration-300 group">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl font-semibold mb-2">{t('about.equity.title')}</CardTitle>
              <p className="text-warm-accent font-semibold text-lg">{t('about.equity.portfolio')}</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('process.equity.step1.title')}</h4>
                    <p className="text-muted-foreground">{t('process.equity.step1.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('process.equity.step2.title')}</h4>
                    <p className="text-muted-foreground">{t('process.equity.step2.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('process.equity.step3.title')}</h4>
                    <p className="text-muted-foreground">{t('process.equity.step3.desc')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="font-semibold">{t('process.equity.focus')}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t('process.equity.focus.desc')}</p>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-semibold">{t('process.equity.horizon')}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t('process.equity.horizon.desc')}</p>
              </div>

              <Button className="w-full mt-6 group" size="lg">
                {t('process.equity.cta')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            {t('process.consultation')}
          </p>
          <Button variant="outline" size="lg" className="px-8">
            {t('process.consultation.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};