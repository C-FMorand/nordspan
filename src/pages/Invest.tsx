import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Shield, Users } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export const Invest = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      titleKey: 'invest.feature1.title',
      descriptionKey: 'invest.feature1.description'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      titleKey: 'invest.feature2.title', 
      descriptionKey: 'invest.feature2.description'
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      titleKey: 'invest.feature3.title',
      descriptionKey: 'invest.feature3.description'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      titleKey: 'invest.feature4.title',
      descriptionKey: 'invest.feature4.description'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground">
            {t('invest.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('invest.subtitle')}
          </p>
        </div>

        {/* Geographic Focus Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
              {t('invest.geography.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('invest.geography.intro')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="text-primary">🇸🇪</span>
                  {t('invest.geography.nordic.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('invest.geography.nordic.description')}
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <span className="text-primary">🇪🇸</span>
                  {t('invest.geography.spain.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('invest.geography.spain.description')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <CardTitle className="text-xl font-semibold">
                    {t(feature.titleKey)}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {t(feature.descriptionKey)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t('invest.cta.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('invest.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="min-w-48 h-12 text-lg">
              {t('invest.cta.contact')}
            </Button>
            <Button variant="outline" size="lg" className="min-w-48 h-12 text-lg">
              {t('invest.cta.learn')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};