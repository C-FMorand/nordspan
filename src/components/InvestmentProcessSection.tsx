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

        <div className="max-w-4xl mx-auto">
          <Card className="p-12 border-2 hover:border-primary/20 transition-all duration-300">
            <CardContent className="text-center space-y-8">
              <div className="flex justify-center space-x-8 mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-foreground">
                  {t('process.combined.title')}
                </h3>
                
                <div className="text-lg text-muted-foreground space-y-4 max-w-3xl mx-auto">
                  <p>{t('process.combined.description1')}</p>
                  <p>{t('process.combined.description2')}</p>
                  <p>{t('process.combined.description3')}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{t('process.combined.security')}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t('process.combined.security.desc')}</p>
                  </div>
                  
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Target className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{t('process.combined.growth')}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t('process.combined.growth.desc')}</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="mt-8 px-8">
                {t('process.combined.cta')}
                <ArrowRight className="ml-2 w-4 h-4" />
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