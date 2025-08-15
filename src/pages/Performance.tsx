import { Navigation } from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Shield, Target, DollarSign } from "lucide-react";

export const Performance = () => {
  const { t } = useLanguage();

  const metrics = [
    {
      icon: TrendingUp,
      title: t('performance.metrics.returns.title'),
      value: "50%",
      description: t('performance.metrics.returns.description'),
      trend: "+2.1%"
    },
    {
      icon: Shield,
      title: t('performance.metrics.risk.title'),
      value: "16%",
      description: t('performance.metrics.risk.description'),
      trend: "-0.3%"
    },
    {
      icon: Target,
      title: t('performance.metrics.target.title'),
      value: "500 MSEK",
      description: t('performance.metrics.target.description'),
      trend: "+8%"
    },
    {
      icon: DollarSign,
      title: t('performance.metrics.aum.title'),
      value: "2029",
      description: t('performance.metrics.aum.description'),
      trend: "+15M"
    }
  ];

  const portfolioBreakdown = [
    { category: t('performance.portfolio.loans'), percentage: 52, value: "65M SEK", color: "bg-primary" },
    { category: t('performance.portfolio.equity'), percentage: 48, value: "60M SEK", color: "bg-accent" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('performance.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('performance.subtitle')}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <metric.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm text-green-600 font-medium">{metric.trend}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{metric.value}</h3>
                  <p className="text-sm font-medium mb-1">{metric.title}</p>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Portfolio Breakdown */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>{t('performance.portfolio.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {portfolioBreakdown.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{item.category}</span>
                      <span className="text-muted-foreground">{item.value}</span>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                    <div className="text-right text-sm text-muted-foreground">
                      {item.percentage}%
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('performance.historical.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  {t('performance.historical.placeholder')}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Investment Highlights */}
          <Card>
            <CardHeader>
              <CardTitle>{t('performance.highlights.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">{t('performance.highlights.consistency.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('performance.highlights.consistency.description')}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t('performance.highlights.diversification.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('performance.highlights.diversification.description')}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t('performance.highlights.growth.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('performance.highlights.growth.description')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};