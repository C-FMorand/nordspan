import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, Shield, Users } from "lucide-react";

export const PerformanceSection = () => {
  const performanceData = [
    { period: "1 Year", return: "15.2%", benchmark: "11.8%" },
    { period: "3 Years", return: "13.7%", benchmark: "9.4%" },
    { period: "5 Years", return: "12.8%", benchmark: "8.9%" },
    { period: "10 Years", return: "11.5%", benchmark: "7.2%" },
  ];

  const highlights = [
    {
      icon: TrendingUp,
      title: "Consistent Growth",
      description: "Outperforming market benchmarks for over a decade with disciplined investment strategies."
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Concentrated portfolio of high-conviction investments in emerging market leaders."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Institutional-grade risk controls and diversification across sectors and geographies."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Led by experienced portfolio managers with 20+ years in institutional investing."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Performance Track Record
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering superior risk-adjusted returns through disciplined investment management and rigorous research.
          </p>
        </div>

        {/* Performance Table */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Fund Performance vs. Benchmark</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Period</th>
                      <th className="text-right py-3 px-4">Meridian Capital</th>
                      <th className="text-right py-3 px-4">Benchmark</th>
                      <th className="text-right py-3 px-4">Outperformance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {performanceData.map((row, index) => {
                      const outperformance = (parseFloat(row.return) - parseFloat(row.benchmark)).toFixed(1);
                      return (
                        <tr key={index} className="border-b last:border-b-0">
                          <td className="py-3 px-4 font-medium">{row.period}</td>
                          <td className="py-3 px-4 text-right font-semibold text-financial-light">
                            {row.return}
                          </td>
                          <td className="py-3 px-4 text-right">{row.benchmark}</td>
                          <td className="py-3 px-4 text-right font-semibold text-accent">
                            +{outperformance}%
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-financial-light/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-6 h-6 text-financial-light" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};